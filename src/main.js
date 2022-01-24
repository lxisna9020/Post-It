import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import icons from "v-svg-icons";

// const defaultNotes = [
//     {
//         id: 1,
//         title: "Post-It #1",
//         content: "Mon initiation avec Vue",
//         color: "#3498db",
//     },
//     {
//         id: 2,
//         title: "Post-It #2",
//         content: "Blogger avec Vue",
//         color: "#34495e",
//     },
//     {
//         id: 3,
//         title: "Post-It #3",
//         content: "Pourquoi Vue est tellement cool",
//         color: "#9b59b6",
//     },
// ];

// if (localStorage.getItem("notes") == undefined) {
//     localStorage.setItem("notes", JSON.stringify(defaultNotes));
// }



createApp(App)
    .use(router)
    .component("icon", icons)
    .mount('#app')

