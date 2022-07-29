<template>
  <login v-if="!isLoggedIn" @userHasLoggedIn="logIn()"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import login from '@/components/login.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
// const auth = getAuth()

export default {
  name: 'board',
  data(){
    return{
      isLoggedIn: this.$root.isUserLoggedIn
    }
  },
  created(){
    const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          this.$router.push("board")
          // ...
        } else {
          // User is signed out
          // ...
        }
      })
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