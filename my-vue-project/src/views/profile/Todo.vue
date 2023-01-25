<template>
  <div>
    <h1>To Dos</h1>
    <div>{{ user }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>