<template>
  <div class="flex flex-col">
    <TheHeader></TheHeader>
    <UserList :users="users"></UserList>
    <TheFooter></TheFooter>
    <Message 
      v-if="show" 
      :content="content"
      ref="myMessage"
    ></Message>
    <button @click="hideMessage">click me</button>
    <br>
    <br>
    <AddUser @new-user="addUser"></AddUser>
    <keep-alive>
      <component 
        :is="component"
        :content="content"
        :users="users"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import UserList from '../components/UserList.vue';
import TheFooter from '../components/TheFooter.vue';
import Message from '../components/Message.vue';
import AddUser from '../components/AddUserButton.vue';

export default {
  data() {
    return {
      component: Message,
      show: true,
      users: [
        {
          name: 'name 1',
          age: 31,
          showAge: false,
        },
        {
          name: 'name 2',
          age: 51,
          showAge: true,
        },
      ],
      content: 'eine Message',
    };
  },
  components: {
    TheHeader,
    UserList,
    TheFooter,
    Message,
    AddUser,
  },
  methods: {
    addUser(newUser) {
      this.users.push(newUser)
    },
    hideMessage() {
      this.show = false
      console.log('title from Message', this.$refs.myMessage.title)
    },
  }
};
</script>
