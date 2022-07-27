<template>
    <div class="lg:pl-40 lg:pr-40 md:pl-8 md:pr-8 pl-4 pr-8 fixed top-0 w-screen h-8 z-[25] flex items-center pt-8">
        <router-link to="/" class=" bg-gray-300 bg-opacity-50  text-gray-900  rounded-md p-2 opacity-100 duration-100 relative hover:cursor-pointer">🡨 <span class="ml-4">Go Back</span></router-link>
    </div>
    <div id="logincomponent" class="lg:pl-40 lg:pr-40 md:pl-8 md:pr-8 pl-4 pr-8 fixed top-0 w-screen h-screen z-[20] bg-gray-100 flex items-center justify-center">
        <div class="bg-gray-300 p-8 rounded-lg">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-700">Login / Register</h1>
            <div class="mt-8">
                <input v-model="username" class="rounded-md w-full p-2 pl-2 pr-4" placeholder="Username">
                <input v-model="password" type="password" class="rounded-md w-full p-2 pl-2 pr-4 mt-3" placeholder="Password">
                <div class="w-full flex mt-8 gap-3 flex-col sm:flex-row">
                    <h1 class="w-full text-center bg-gray-800 bg-opacity-100 hover:bg-green-800 text-white  rounded-md p-2 opacity-100 duration-100 relative hover:cursor-pointer" @click="signIn">Sign In</h1>
                    <h1 class="w-full text-center bg-gray-800 bg-opacity-100 hover:bg-green-800 text-white  rounded-md p-2 opacity-100 duration-100 relative hover:cursor-pointer" @click="register">Register</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
    export default {
        props:['isLoggedIn'],
        data(){
            return{
                username: "",
                password: "",
                errorMSG: "",
                registerMode:false
            }
        },
        methods:{
            logIn(){
                this.$root.isUserLoggedIn = true
                this.$emit('userHasLoggedIn')
            },
            register(){
                createUserWithEmailAndPassword(getAuth(), this.username, this.password)
                .then((data) => {
                    console.log("Registered")
                })
                .catch((data) => {
                    console.log("Error - " + data.code)
                })
            },
            signIn(){
                signInWithEmailAndPassword(getAuth(), this.username, this.password)
                .then((data) => {
                    console.log("signed in")
                    console.log(auth.currentUsser)
                    router.push('board')
                })
                .catch((data) => {
                    console.log("Error - " + data.code)
                })
            }
        }
    }
</script>

<style scoped>
.translateZ:before{ 
    z-index: -1
}
</style>