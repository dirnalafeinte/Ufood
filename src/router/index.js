import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import LogIn from "@/pages/LogIn.vue";
import SignUp from "@/pages/SignUp.vue";
import Navigation from "@/pages/Navigation.vue";
import Profile from "@/pages/Profile.vue";
import RestaurantDetails from "@/pages/RestaurantDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/login",
    name: "Log In",
    component: LogIn,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: "/navigation",
    name: "Navigation",
    component: Navigation,
  },
  {
    path: "/restaurant/:id",
    name: "Restaurant details",
    component: RestaurantDetails,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
