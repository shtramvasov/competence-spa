import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowItWorksView from '../views/HowItWorksView.vue';
import FeaturesView from '../views/FeaturesView.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/signin',
		name: 'sign-in',
	},
	{
		path: '/signup',
		name: 'sign-up',
	},
	{
		path: '/how-it-works',
		name: 'how-it-works',
		component: HowItWorksView,
	},
	{
		path: '/features',
		name: 'features',
    component: FeaturesView,
	},
	{
		path: '/retail',
		name: 'retail',
	},
	{
		path: '/banking',
		name: 'banking',
	},
	{
		path: '/corporate',
		name: 'corporate',
	},
	{
		path: '/hospitality',
		name: 'hospitality',
	},
	{
		path: '/about',
		name: 'about',
	},
	{
		path: '/partnership',
		name: 'partnership',
	},
	{
		path: '/contacts',
		name: 'contacts',
	},
	{
		path: '/pricing',
		name: 'pricing',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// scrollBehavior(to, from, savedPosition) {
	// 	return { x: 0, y: 0 };
	// },
});

export default router
