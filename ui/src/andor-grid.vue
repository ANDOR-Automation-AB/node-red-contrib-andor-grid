<template>
  <div class="andor-grid-widget">
    <h3>Andor Grid</h3>
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  name: "AndorGrid",
  props: {
    value: { type: [String, Number, Array, Object], default: "" }
  }
}
</script>

<style scoped>
.andor-grid-widget {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
