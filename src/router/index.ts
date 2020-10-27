import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
  },
  {
		path: "/users",
		name: "Users",
		component: () => import("../views/Users.vue"),
	},
	{
		path: "/user-register",
		name: "UserRegister",
		component: () => import("../views/UserRegister.vue"),
	},
	{
		path: "/user-edit/:name",
		name: "UserEdit",
		component: () => import("../views/UserEdit.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
