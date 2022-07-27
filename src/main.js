import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { initializeApp } from "firebase/app";



const firebaseConfig = {

  apiKey: process.env.VUE_APP_API_KEY,

  authDomain: "tasktrack-4ed5f.firebaseapp.com",

  projectId: "tasktrack-4ed5f",

  storageBucket: "tasktrack-4ed5f.appspot.com",

  messagingSenderId: "1028431956009",

  appId: "1:1028431956009:web:d70b38cca6e949851fb438",

  measurementId: "G-WN919EZ5GY"

};


initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')
