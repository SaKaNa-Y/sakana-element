<template>
  <px-table zebra hover border pin-rows size="sm" style="max-height: 240px">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Monster</th>
          <th>HP</th>
          <th>EXP</th>
          <th>Drop</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in monsters" :key="m.id">
          <td>{{ m.id }}</td>
          <td>{{ m.name }}</td>
          <td>{{ m.hp }}</td>
          <td>{{ m.exp }}</td>
          <td>{{ m.drop }}</td>
        </tr>
      </tbody>
    </table>
  </px-table>
</template>

<script setup lang="ts">
const monsters = [
  { id: 1, name: 'Slime', hp: 10, exp: 5, drop: 'Gel' },
  { id: 2, name: 'Bat', hp: 15, exp: 8, drop: 'Wing' },
  { id: 3, name: 'Goblin', hp: 30, exp: 15, drop: 'Dagger' },
  { id: 4, name: 'Skeleton', hp: 45, exp: 25, drop: 'Bone' },
  { id: 5, name: 'Orc', hp: 80, exp: 40, drop: 'Axe' },
  { id: 6, name: 'Dragon', hp: 200, exp: 100, drop: 'Scale' },
  { id: 7, name: 'Demon', hp: 150, exp: 80, drop: 'Horn' },
  { id: 8, name: 'Ghost', hp: 60, exp: 30, drop: 'Ectoplasm' },
];
</script>
