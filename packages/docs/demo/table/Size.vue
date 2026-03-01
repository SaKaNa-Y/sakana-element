<template>
  <div class="demo-table-size">
    <div v-for="s in sizes" :key="s">
      <p>size: {{ s }}</p>
      <px-table :size="s">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HP</td>
              <td>120</td>
            </tr>
            <tr>
              <td>MP</td>
              <td>45</td>
            </tr>
          </tbody>
        </table>
      </px-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<style scoped>
.demo-table-size {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-table-size p {
  margin: 0 0 8px;
  font-weight: 600;
}
</style>
