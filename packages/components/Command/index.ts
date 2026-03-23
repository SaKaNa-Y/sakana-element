import { withInstall } from '@sakana-element/utils';
import Command from './Command.vue';
import CommandDialog from './CommandDialog.vue';
import CommandEmpty from './CommandEmpty.vue';
import CommandGroup from './CommandGroup.vue';
import CommandInput from './CommandInput.vue';
import CommandItem from './CommandItem.vue';
import CommandList from './CommandList.vue';
import CommandSeparator from './CommandSeparator.vue';

export const PxCommand = withInstall(Command);
export const PxCommandDialog = withInstall(CommandDialog);
export const PxCommandEmpty = withInstall(CommandEmpty);
export const PxCommandGroup = withInstall(CommandGroup);
export const PxCommandInput = withInstall(CommandInput);
export const PxCommandItem = withInstall(CommandItem);
export const PxCommandList = withInstall(CommandList);
export const PxCommandSeparator = withInstall(CommandSeparator);

export * from './types';
