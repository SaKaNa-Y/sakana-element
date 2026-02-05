<template>
  <div class="demo-button">
    <div class="row">
      <px-button color="#626aef">Indigo</px-button>
      <px-button color="#ff6b9d">Pink</px-button>
      <px-button color="#36cfc9">Teal</px-button>
      <px-button color="#fac858">Gold</px-button>
      <px-button color="#ee6666">Coral</px-button>
      <px-button color="#3ba272">Emerald</px-button>
    </div>
    <div class="row">
      <px-button color="#626aef" plain>Indigo</px-button>
      <px-button color="#ff6b9d" plain>Pink</px-button>
      <px-button color="#36cfc9" plain>Teal</px-button>
      <px-button color="#fac858" plain>Gold</px-button>
      <px-button color="#ee6666" plain>Coral</px-button>
      <px-button color="#3ba272" plain>Emerald</px-button>
    </div>
    <div class="row">
      <px-button color="#626aef" disabled>Indigo</px-button>
      <px-button color="#ff6b9d" disabled>Pink</px-button>
      <px-button color="#36cfc9" disabled>Teal</px-button>
      <px-button color="#fac858" disabled>Gold</px-button>
      <px-button color="#ee6666" disabled>Coral</px-button>
      <px-button color="#3ba272" disabled>Emerald</px-button>
    </div>
    <div class="row">
      <px-button color="#626aef" icon="edit" circle />
      <px-button color="#ff6b9d" icon="heart" circle />
      <px-button color="#36cfc9" icon="check" circle />
      <px-button color="#fac858" icon="bookmark" circle />
      <px-button color="#ee6666" icon="trash" circle />
      <px-button color="#3ba272" icon="link" circle />
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.row {
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: start;
  align-items: center;
  gap: 12px;
}
</style>
