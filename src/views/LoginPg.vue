<template>
  <login v-if="!isLoggedIn" @userHasLoggedIn="logIn()"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'board',
  data(){
    return{
      isLoggedIn: this.$root.isUserLoggedIn
    }
  },
  methods:{
    userHasLoggedIn(){
      this.$root.isUserLoggedIn = true
    }
  },
  components: {
    login
  }
}

</script>