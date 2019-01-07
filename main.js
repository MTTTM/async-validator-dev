import Vue from 'vue'
import App from './App'
import xPlux from "./components/async-validator-uniapp/src/index.js"

import xxform from './components/async-validator-uniapp/src/xForm.vue'
import xxinput from './components/async-validator-uniapp/src/xInput.vue'
import checkboxGroup from './components/async-validator-uniapp/src/xCheckboxGroup.vue'
import checkbox from './components/async-validator-uniapp/src/xCheckbox.vue'
import radioGroup from './components/async-validator-uniapp/src/xRadioGroup.vue'
import radio from './components/async-validator-uniapp/src/xRadio.vue'
import picker from './components/async-validator-uniapp/src/xPicker.vue'
import textarea from './components/async-validator-uniapp/src/xTextarea.vue'


	Vue.component("bl-form", xxform)
	Vue.component("bl-input", xxinput)
	Vue.component("bl-checkbox-group", checkboxGroup)
	Vue.component("bl-checkbox", checkbox)
	Vue.component("bl-radio-group", radioGroup)
	Vue.component("bl-radio", radio)
	Vue.component("bl-picker", picker)
	Vue.component("bl-textarea", textarea)

Vue.config.productionTip = false
 // xPlux.install(Vue)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
