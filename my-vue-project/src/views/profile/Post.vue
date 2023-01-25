<template>
  <div>
    <h1>Posts</h1>
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
