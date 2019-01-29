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
 import xFromItem from './components/async-validator-uniapp/src/xFormItem.vue'

 Vue.component("x-form", xxform)
 Vue.component("x-input", xxinput)
 Vue.component("x-checkbox-group", checkboxGroup)
 Vue.component("x-checkbox", checkbox)
 Vue.component("x-radio-group", radioGroup)
 Vue.component("x-radio", radio)
 Vue.component("x-picker", picker)
 Vue.component("x-textarea", textarea)
  Vue.component("x-from-item", xFromItem)

// import {xForm} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xInput} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xCheckboxGroup} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xCheckbox} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xRadioGroup} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xRadio} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xPicker} from "./node_modules/async-validator-uniapp/src/index.js";
// import {xTextarea} from "./node_modules/async-validator-uniapp/src/index.js";
// 
// //表单校验组件
// Vue.component("x-form", xForm)
// Vue.component("x-input", xInput)
// Vue.component("x-checkbox-group", xCheckboxGroup)
// Vue.component("x-checkbox", xCheckbox)
// Vue.component("x-radio-group", xRadioGroup)
// Vue.component("x-radio", xRadio)
// Vue.component("x-picker",xPicker)
// Vue.component("x-textarea", xTextarea)

Vue.config.productionTip = false
// xPlux.install(Vue)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
