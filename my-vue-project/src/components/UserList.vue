<template>
  <div>
    <ul>
      <li
        v-for="user in users"
        :key="user.name"
        :class="colorize(user.age)"
        @click="user.showAge = true"
      >
        {{ user.name }}
        <span v-if="user.showAge">{{ user.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    colorize(age) {
      return {
        red: age < 50,
        blue: age > 50,
      };
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
