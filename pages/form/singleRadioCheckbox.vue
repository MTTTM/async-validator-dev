<template>
	<view>
		
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm">
				<view class="uni-form-item uni-column">
					<view class="title">radio:{{form.radio}}----{{form.radio==1}}</view>
					<x-radio-group  :value.sync="form.radio" prop="radio">
						<x-radio value="1" label="选项1" :checked="form.radio==1?true:false" />
						<x-radio value="2" label="选项2" :checked="form.radio==2?true:false"  />
					</x-radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox:{{form.checkbox}}</view>
					<!-- prop="checkbox" -->
		 	      <x-checkbox-group  :value.sync="form.checkbox">
						<template v-for="item in items">
							<x-checkbox :key="item.value" :value="item.name" :label="item.value" :checked="form.checkbox.includes(item.name)"
							 :disabled="item.disabled" />
						</template> 
					</x-checkbox-group>
                    <button @tap="validInput('checkbox')">验证单个表单</button> 
				</view>
				<view class="uni-btn-v">
					<button @tap="customerSubmit">不使用Submit提交</button>
					<button type="default" formType="reset">Reset</button>
				</view>
			</x-form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'form',
				pickerHidden: true,
				chosen: '',
				items: [{
						name: 'USA',
						value: '美国',
						disabled: true
					},
					{
						name: 'CHN',
						value: '中国'
					},
					{
						name: 'BRA',
						value: '巴西'
					},
					{
						name: 'JPN',
						value: '日本'
					},
					{
						name: 'ENG',
						value: '英国'
					},
					{
						name: 'TUR',
						value: '法国'
					}
				],
				form: {
					checkbox: ['TUR'],
					radio: "",
			
				},
				rules: {
// 					checkbox: [{
// 							type: 'array',
// 							required: true,
// 							message: '请选择checkbox',
// 							trigger: 'change'
// 						},
// 						{
// 							type: 'array',
// 							min: 2,
// 							message: '请选择至少2个checkbox',
// 							trigger: 'change'
// 						},
// 					],
					radio: [{
						required: true,
						message: '请选择radio',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			pickerConfirm: function(e) {
				this.pickerHidden = true
				this.chosen = e.target.value
			},
			pickerCancel: function(e) {
				this.pickerHidden = true
			},
			pickerShow: function(e) {
				this.pickerHidden = false
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function(e) {
				console.log("清空数据")
				this.chosen = ''
			},
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			radioChange: function (e) {
            console.log('radio发生change事件，携带value值为：' + e.detail.value)
           },
		   validInput(k) {
		   	this.$refs['ruleForm'].validateField(k)
		   
		   }
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>