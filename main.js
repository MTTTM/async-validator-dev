import Vue from 'vue'
import App from './App'
import xPlux from "./components/async-validator-uniapp/src/index.js"
// console.log("xPlux",xPlux)
// xPlux.install(Vue);
import xxform from './components/async-validator-uniapp/src/xForm.vue'
import xxinput from './components/async-validator-uniapp/src/xInput.vue'
import checkboxGroup from './components/async-validator-uniapp/src/xCheckboxGroup.vue'
import checkbox from './components/async-validator-uniapp/src/xCheckbox.vue'
import radioGroup from './components/async-validator-uniapp/src/xRadioGroup.vue'
import radio from './components/async-validator-uniapp/src/xRadio.vue'
import picker from './components/async-validator-uniapp/src/xPicker.vue'
import textarea from './components/async-validator-uniapp/src/xTextarea.vue'

Vue.component("x-form", xxform)
Vue.component("x-input", xxinput)
Vue.component("x-checkbox-group", checkboxGroup)
Vue.component("x-checkbox", checkbox)
Vue.component("x-radio-group", radioGroup)
Vue.component("x-radio", radio)
Vue.component("x-picker", picker)
Vue.component("x-textarea", textarea)

Vue.config.productionTip = false
// xPlux.install(Vue)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
