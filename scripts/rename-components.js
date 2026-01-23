#!/usr/bin/env node

/**
 * Component Renaming Script: Er → Px
 *
 * This script renames all components from Er prefix to Px prefix across the entire codebase.
 * It handles:
 * - Vue component files (ErButton.vue → PxButton.vue)
 * - TypeScript files
 * - Test files (ErButton.test.tsx → PxButton.test.tsx)
 * - CSS classes (.er- → .px-)
 * - CSS variables (--er- → --px-)
 * - TypeScript types (ErButtonProps → PxButtonProps)
 * - Imports and exports
 *
 * Usage: node scripts/rename-components.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

const DRY_RUN = process.argv.includes('--dry-run');

// Directories to process
const COMPONENT_DIR = path.join(__dirname, '../packages/components');
const DOCS_DIR = path.join(__dirname, '../packages/docs');
const PLAY_DIR = path.join(__dirname, '../packages/play');

// Statistics
const stats = {
  filesRenamed: 0,
  filesModified: 0,
  replacements: 0,
};

/**
 * Recursively get all files in a directory
 */
async function getAllFiles(dir, fileList = []) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      // Skip node_modules, dist, coverage
      if (['node_modules', 'dist', 'coverage', '.git'].includes(file)) {
        continue;
      }
      await getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }

  return fileList;
}

/**
 * Replace content in file
 */
async function replaceInFile(filePath) {
  const content = await readFile(filePath, 'utf8');
  let newContent = content;
  let replacementCount = 0;

  // Define replacement patterns
  const replacements = [
    // Component names in templates and scripts
    { from: /\bEr([A-Z][a-zA-Z]*)/g, to: 'Px$1', desc: 'Component names' },

    // CSS class names
    { from: /\.er-/g, to: '.px-', desc: 'CSS classes' },
    { from: /'er-/g, to: "'px-", desc: 'CSS class strings (single quotes)' },
    { from: /"er-/g, to: '"px-', desc: 'CSS class strings (double quotes)' },
    { from: /`er-/g, to: '`px-', desc: 'CSS class strings (backticks)' },

    // CSS variables
    { from: /--er-/g, to: '--px-', desc: 'CSS variables' },
    { from: /var\(--er-/g, to: 'var(--px-', desc: 'CSS var() functions' },

    // TypeScript types and interfaces
    { from: /\bErButton/g, to: 'PxButton', desc: 'Button type' },
    { from: /\bErInput/g, to: 'PxInput', desc: 'Input type' },
    { from: /\bErAlert/g, to: 'PxAlert', desc: 'Alert type' },
    { from: /\bErForm/g, to: 'PxForm', desc: 'Form type' },
    { from: /\bErFormItem/g, to: 'PxFormItem', desc: 'FormItem type' },
    { from: /\bErSelect/g, to: 'PxSelect', desc: 'Select type' },
    { from: /\bErOption/g, to: 'PxOption', desc: 'Option type' },
    { from: /\bErSwitch/g, to: 'PxSwitch', desc: 'Switch type' },
    { from: /\bErTooltip/g, to: 'PxTooltip', desc: 'Tooltip type' },
    { from: /\bErPopconfirm/g, to: 'PxPopconfirm', desc: 'Popconfirm type' },
    { from: /\bErDropdown/g, to: 'PxDropdown', desc: 'Dropdown type' },
    { from: /\bErMessage/g, to: 'PxMessage', desc: 'Message type' },
    { from: /\bErNotification/g, to: 'PxNotification', desc: 'Notification type' },
    { from: /\bErMessageBox/g, to: 'PxMessageBox', desc: 'MessageBox type' },
    { from: /\bErLoading/g, to: 'PxLoading', desc: 'Loading type' },
    { from: /\bErOverlay/g, to: 'PxOverlay', desc: 'Overlay type' },
    { from: /\bErCollapse/g, to: 'PxCollapse', desc: 'Collapse type' },
    { from: /\bErCollapseItem/g, to: 'PxCollapseItem', desc: 'CollapseItem type' },
    { from: /\bErIcon/g, to: 'PxIcon', desc: 'Icon type' },
    { from: /\bErConfigProvider/g, to: 'PxConfigProvider', desc: 'ConfigProvider type' },
  ];

  // Apply replacements
  for (const { from, to, desc } of replacements) {
    const matches = newContent.match(from);
    if (matches) {
      newContent = newContent.replace(from, to);
      replacementCount += matches.length;
      if (!DRY_RUN) {
        console.log(`  ✓ Replaced ${matches.length} instances of ${desc}`);
      }
    }
  }

  // Only write if content changed
  if (newContent !== content) {
    if (!DRY_RUN) {
      await writeFile(filePath, newContent, 'utf8');
      console.log(`✓ Modified: ${filePath}`);
    } else {
      console.log(`[DRY RUN] Would modify: ${filePath}`);
    }
    stats.filesModified++;
    stats.replacements += replacementCount;
    return true;
  }

  return false;
}

/**
 * Rename file if it contains Er prefix
 */
async function renameFile(filePath) {
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);

  // Check if filename contains Er prefix
  const newFileName = fileName.replace(/^Er([A-Z][a-zA-Z]*)/, 'Px$1');

  if (newFileName !== fileName) {
    const newFilePath = path.join(dir, newFileName);

    if (!DRY_RUN) {
      await rename(filePath, newFilePath);
      console.log(`✓ Renamed: ${fileName} → ${newFileName}`);
    } else {
      console.log(`[DRY RUN] Would rename: ${fileName} → ${newFileName}`);
    }

    stats.filesRenamed++;
    return newFilePath;
  }

  return filePath;
}

/**
 * Process a single file
 */
async function processFile(filePath) {
  const ext = path.extname(filePath);

  // Only process relevant file types
  if (!['.vue', '.ts', '.tsx', '.js', '.jsx', '.css', '.md'].includes(ext)) {
    return filePath;
  }

  // First, replace content
  await replaceInFile(filePath);

  // Then, rename file if needed
  return await renameFile(filePath);
}

/**
 * Rename directories
 */
async function renameDirectories(baseDir) {
  const items = await readdir(baseDir);

  for (const item of items) {
    const itemPath = path.join(baseDir, item);
    const itemStat = await stat(itemPath);

    if (itemStat.isDirectory() && item.startsWith('Er')) {
      const newDirName = item.replace(/^Er/, 'Px');
      const newDirPath = path.join(baseDir, newDirName);

      if (!DRY_RUN) {
        await rename(itemPath, newDirPath);
        console.log(`✓ Renamed directory: ${item} → ${newDirName}`);
      } else {
        console.log(`[DRY RUN] Would rename directory: ${item} → ${newDirName}`);
      }

      stats.filesRenamed++;
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🔄 Starting component renaming: Er → Px\n');

  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
  }

  try {
    // Step 1: Process component files
    console.log('📁 Processing components directory...\n');
    const componentFiles = await getAllFiles(COMPONENT_DIR);

    for (const file of componentFiles) {
      await processFile(file);
    }

    // Step 2: Rename component directories
    console.log('\n📁 Renaming component directories...\n');
    await renameDirectories(COMPONENT_DIR);

    // Step 3: Process docs (if exists)
    if (fs.existsSync(DOCS_DIR)) {
      console.log('\n📁 Processing docs directory...\n');
      const docsFiles = await getAllFiles(DOCS_DIR);

      for (const file of docsFiles) {
        await processFile(file);
      }
    }

    // Step 4: Process play/playground (if exists)
    if (fs.existsSync(PLAY_DIR)) {
      console.log('\n📁 Processing play directory...\n');
      const playFiles = await getAllFiles(PLAY_DIR);

      for (const file of playFiles) {
        await processFile(file);
      }
    }

    // Print statistics
    console.log('\n' + '='.repeat(50));
    console.log('📊 Renaming Statistics');
    console.log('='.repeat(50));
    console.log(`Files renamed: ${stats.filesRenamed}`);
    console.log(`Files modified: ${stats.filesModified}`);
    console.log(`Total replacements: ${stats.replacements}`);
    console.log('='.repeat(50) + '\n');

    if (DRY_RUN) {
      console.log('✓ Dry run completed. Run without --dry-run to apply changes.\n');
    } else {
      console.log('✅ Component renaming completed successfully!\n');
      console.log('⚠️  Next steps:');
      console.log('   1. Review the changes');
      console.log('   2. Run tests: pnpm test');
      console.log('   3. Build: pnpm build');
      console.log('   4. Commit the changes\n');
    }

  } catch (error) {
    console.error('\n❌ Error during renaming:', error);
    process.exit(1);
  }
}

// Run the script
main();
