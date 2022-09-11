# Documentation manager landing page
__Competence__ is a product that serves as a platform for collaborative editing, document storage, communication, and mailing systems on virtually any desktop or mobile device.

## Demo
Deployed on Vercel— [competence](https://competence.vercel.app/)


##  Features
-  [Vue](https://vuejs.org/) – a JS framework for building user interfaces
 -  [Vue Router](https://router.vuejs.org/) – the official router for Vue.js
 - Responsive Design – highly responsive and reusable UI components that fits for every screen size
 - Form Validation using Vue
 - UI components support dark mode
 - One click deployment with __Vercel__ (or manual deployment to any hosting services)
# Documentation manager landing page
__Competence__ is a product that serves as a platform for collaborative editing, document storage, communication, and mailing systems on virtually any desktop or mobile device.


##  Overview

Custom Sass classes allow you to fast create flexible UI components 

```sass
.indigo {
	background-color: $indigo;
	&--text {
		color: $indigo;
	}
	
	&__lighten-2 {
		background-color: $indigo-lighten-2;
		&--text {
			color: $indigo-lighten-2;
		}
	}
}
```

```html
<button  class='button grey__lighten-4--text'>{{  text  }}</button>
```

![Button](/src/assets/img/readme/button.PNG)

---

Example of responsive design:

Header component

![Header Large](/src/assets/img/readme/header-large.PNG)

---

![Header Small](/src/assets/img/readme/header-small.PNG)

---

![Header Dropdown](/src/assets/img/readme/header-dropdown.PNG)

---

![Header Mobile](/src/assets/img/readme/header-mobile.PNG)

---

Simple UI component:

```html
<div class="features flex cols gap-3 jcsb">
  <FeatureItem v-for="feature in features" :key="feature"
      :title="feature.title"
      :desc="feature.desc"
      :icon="feature.icon"
  />
 </div>
```
![Features](/src/assets/img/readme/features.PNG)
