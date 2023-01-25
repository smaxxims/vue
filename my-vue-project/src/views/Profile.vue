<template>
  <div>
    <h1>{{ $store.state.user }}</h1>
    <h1>{{ $store.getters.getInitials }}</h1>
    <router-link :to="`/profile/${$route.params.id}/todo`">Zu den Todos</router-link>
    <router-link :to="`/profile/${$route.params.id}/post`">Zu den Posts</router-link>
    <h1>Profile {{ id }}</h1>
    <h6>{{ userData }}</h6>
    <router-view :user="userData"></router-view>
    <h1>{{ $store.getters.logState }}</h1>
    <input type="text" v-model="name">
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      userData: {},
      name: '',
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
    .then(response => response.json())
    .then(response => this.userData = response)
  },
  methods: {
    changeName() {
      this.$store.dispatch('changeName', this.name)
    }
  }
};
</script>

<style>
.router-link-active {
  color: #e74c3c;
}
</style>