import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import HowItWorksView from '../views/HowItWorksView.vue';
import FeaturesView from '../views/FeaturesView.vue';
import AboutView from '../views/AboutView.vue';
import PartnershipView from '../views/PartnershipView.vue';
import RetailView from '../views/RetailView.vue';
import BankingView from '../views/BankingView.vue';
import CorporateView from '../views/CorporateView.vue';
import HospitalityView from '../views/HospitalityView.vue';

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
		component: SignInView,
	},
	{
		path: '/signup',
		name: 'sign-up',
		component: SignUpView,
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
		component: RetailView,
	},
	{
		path: '/banking',
		name: 'banking',
		component: BankingView,
	},
	{
		path: '/corporate',
		name: 'corporate',
		component: CorporateView,
	},
	{
		path: '/hospitality',
		name: 'hospitality',
		component: HospitalityView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/partnership',
		name: 'partnership',
		component: PartnershipView,
	},
	{
		path: '/pricing',
		name: 'pricing',
	},
	{
		path: '/*',
		redirect: '/',
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
