<template>
	<view>
		<view>================不嵌套的自定义组件za-za-hui的props可以接受============</view>
        <za-za-hui type="text"></za-za-hui>
		<view class="uni-padding-wrap uni-common-mt">
		    <bl-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" >
		       <bl-input placeholder="我应该显示在你的slot里面的" value="1000000" :type="text"/>
			   <view>
				   妹妹呵呵
			   </view>
			     <bl-input placeholder="我应该显示在你的slot里面的" value="2000000" :type="text"/>
			    
		         <view>===========x-form里面的za-za-hui接受不了props=============</view>
		       <za-za-hui type="text"></za-za-hui>
		       <view>我是外面的</view>
		    </bl-form>
		</view>
	</view>
</template>
<script>
    // import xFormDemo from "./x-form.vue";
    // import blInput from "./xnput.vue"
	import zaZaHui from "./zazahui.vue"
	export default {
		components:{zaZaHui},
		data() {
			const customX = (rule, value, callback) => {
				if (value!==""&&value!=100) {
					callback(new Error('请输入100'));
				}
				else{
					callback();
				}
			};
			
			return {
				title: 'form',
				pickerHidden: true,
				chosen: '',
				text:"text",
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
					input: "",
				},
				rules: {
					input: [{
						required: true,
						message: '请输入txt',
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
			xchange() {
				console.log("改变")
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
