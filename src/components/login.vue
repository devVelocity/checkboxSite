<template>
    <div class="bg-black z-50 w-screen h-screen fixed top-0 bg-opacity-90 flex items-center justify-center errorWindow" :class="{errorActive: errorMSG != ''}">
        <div class="bg-red-800 rounded-md pl-4 pr-4 pb-8 pt-4">
            <h1 class="font-bold text-2xl text-white text-center w-full">Error!</h1>
            <h2 class="text-white mt-6 text-center">{{this.errorMSG}}</h2>
            <div class="mt-8 w-full flex justify-center">
                <h3 class="bg-gray-900 text-white rounded-md text-center inline-block text-md p-2 pl-16 pr-16 duration-100 hover:bg-gray-800 hover:cursor-pointer" @click="errorMSG = ''">Close</h3>
            </div>
        </div>
    </div>
    <div class="lg:pl-40 lg:pr-40 md:pl-8 md:pr-8 pl-4 pr-8 fixed top-0 w-screen h-8 z-[25] flex items-center pt-8">
        <router-link to="/" class=" bg-gray-300 bg-opacity-50  text-gray-900  rounded-md p-2 opacity-100 duration-100 relative hover:cursor-pointer">🡨 <span class="ml-4">Go Back</span></router-link>
    </div>
    <div id="logincomponent" class="lg:pl-40 lg:pr-40 md:pl-8 md:pr-8 pl-4 pr-8 fixed top-0 w-screen h-screen z-[20] bg-gray-100 flex items-center justify-center">
        <div class="bg-gray-300 p-8 rounded-lg">
            <h1 class="text-2xl md:text-3xl font-semibold text-gray-700">Login / Register</h1>
            <div class="mt-8">
                <input v-model="username" class="rounded-md w-full p-2 pl-2 pr-4" placeholder="Email">
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
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
const auth = getAuth()
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
            errorChecking(data){
                console.log(data.message)
                console.log(data)
                if(data.code == "auth/invalid-email"){
                    this.errorMSG = "Invalid Email"
                }else if (data.code == "auth/user-not-found"){
                    this.errorMSG = "User not found"
                }else if (data.code == "auth/wrong-password"){
                    this.errorMSG = "Wrong Password"
                }else{
                    var spliced = data.message.split("Firebase:")[1].split("(")[0]
                    this.errorMSG = spliced
                }
            },
            register(){
                createUserWithEmailAndPassword(getAuth(), this.username, this.password)
                .then((data) => {
                    console.log("Registered")
                    this.$root.isUserLoggedIn = true
                    this.$router.go("board")
                })
                .catch((data) => {
                    console.log("Error - " + data.code)
                    this.errorChecking(data)
                })
                
            },
            signIn(){
                signInWithEmailAndPassword(getAuth(), this.username, this.password)
                .then((data) => {
                    console.log("signed in")
                    this.$root.isUserLoggedIn = true
                    this.$router.go("board")
                })
                .catch((data) => {
                    console.log("Error - " + data.code)
                    this.errorChecking(data)
                })

            }
        }
    }
</script>

<style scoped>
.translateZ:before{ 
    z-index: -1
}

.errorWindow{
    opacity: 0;
    pointer-events: none;
    transition: 0.5
}

.errorActive{
    opacity: 100;
    pointer-events: all
}
</style>