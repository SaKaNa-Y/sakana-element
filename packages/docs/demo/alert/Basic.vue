<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <px-alert type="success">Success alert</px-alert>
    <px-alert type="info">Info alert</px-alert>
    <px-alert type="warning">Warning alert</px-alert>
    <px-alert type="danger">Error alert</px-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <px-alert type="success" title="Success alert" />
    <px-alert type="info" title="Info alert" />
    <px-alert type="warning" title="Warning alert" />
    <px-alert type="danger" title="Error alert" />
  </div>
</template>
