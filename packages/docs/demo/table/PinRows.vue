<template>
  <px-table pin-rows style="max-height: 200px">
    <table>
      <thead>
        <tr>
          <th>Quest</th>
          <th>Reward</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>Quest #{{ i }}</td>
          <td>{{ i * 100 }}g</td>
          <td>{{ i % 3 === 0 ? 'Complete' : 'Active' }}</td>
        </tr>
      </tbody>
    </table>
  </px-table>
</template>
