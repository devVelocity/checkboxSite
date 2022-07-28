<template>
    <div v-if="closeMenu" class="z-50 bg-black bg-opacity-80 w-screen h-screen fixed top-0 left-0 closeReminder flex items-center justify-center" :class="{closeReminderActive : closeMenu}">
        <div class="bg-red-800 rounded-md pl-4 pr-4 pb-8 pt-4">
            <h1 class="font-bold text-2xl text-white text-center w-full">Are you sure you would like to log out?</h1>
            <div class="mt-8 w-full flex justify-center gap-3 sm:flex-row flex-col">
              <h3 class="bg-gray-900 text-white rounded-md text-center inline-block text-md p-2 pl-16 pr-16 duration-100 hover:bg-gray-800 hover:cursor-pointer" @click="this.closeMenu = false">Back</h3>
                <h3 class="bg-gray-900 text-white rounded-md text-center inline-block text-md p-2 pl-16 pr-16 duration-100 hover:bg-gray-800 hover:cursor-pointer" @click="logOut">Log Out</h3>
            </div>
        </div>
    </div>
    <div class="w-full h-20 bg-green-900 flex pt-4 pb-4 lg:pl-40 lg:pr-40 items-center pl-4 pr-4 justify-between">
      <div>
        <h1 class="text-2xl text-white"><b>Task</b><span class="text-light">Track</span></h1>
      </div>
      <div>
        <router-link class="md:pr-8 md:pl-8 pl-2 pr-2 inline-block text-sm sm:text-md text-white text-opacity-70 hover:text-opacity-100 duration-100 bg-neutral-800 ml-1 mr-1 pt-2 pb-2 rounded-md bg-opacity-30  hover:bg-opacity-100 bg-gray-800" to="/">Home</router-link>
         <router-link v-if="!loggedIn" class="md:pr-8 md:pl-8 pl-2 pr-2 inline-block text-sm sm:text-md text-white text-opacity-70 hover:text-opacity-100 duration-100 ml-1 mr-1 pt-2 pb-2 rounded-md bg-opacity-30 hover:bg-opacity-100 bg-gray-800" to="/login">Sign In / Register</router-link>
          <router-link  v-if="loggedIn" class="md:pr-8 md:pl-8 pl-2 pr-2 inline-block text-sm sm:text-md text-white text-opacity-70 hover:text-opacity-100 duration-100 ml-1 mr-1 pt-2 pb-2 rounded-md bg-opacity-30 hover:bg-opacity-100 bg-gray-800" to="/board">Your Tasks</router-link>
          <a  v-if="loggedIn && stageOne" class="md:pr-8 md:pl-8 pl-2 pr-2 inline-block text-sm sm:text-md text-white text-opacity-70 hover:text-opacity-100 duration-100 ml-1 mr-1 pt-2 pb-2 rounded-md bg-opacity-30 hover:bg-opacity-100 bg-gray-800 hover:cursor-pointer" @click="logOut()">Log Out</a>
          <!-- <a  v-if="loggedIn && stageTwoLogOut" class="pr-8 pl-8 text-white text-opacity-100 hover:text-opacity-100 duration-100 ml-1 mr-1 pt-2 pb-2 rounded-md bg-opacity-100 bg-red-800 hover:bg-red-900 hover:cursor-pointer" @click="logOut">Are you sure?</a> -->
      </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<script>

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

export default {
  name: 'nav',
  data(){
    return{
      closeMenu: false,
      loggedIn: false,
      stageOne: true,
      stageTwoLogOut: false,
    }
  },
  methods:{
    logOutS1(){
      console.log("hi")
      this.stageOne = false
      this.stageTwoLogOut = true
    },
    logOut(){
      this.closeMenu = false
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("worked")
        this.loggedIn = false
      }).catch((error) => {
        // An error happened.
      });
    },
    closeMenuBTN(){
      console.log("hello")
      this.closeMenu = true
    }
  },
  created(){
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("through")
        const uid = user.uid;
        this.loggedIn = true
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.closeReminder{
  pointer-events: none;
  opacity: 0;
  transition-duration: 0.3
}
.closeReminderActive{
  pointer-events: all;
  opacity: 1;
}
</style>
