<template>
  <button @click.prevent="$emit('new-user', { name: 'name new', age: 17, showAge: false })">add User</button>
</template>