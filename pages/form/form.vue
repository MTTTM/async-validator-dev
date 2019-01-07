<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
					<x-input type="text" :value="form.input" @input="changeInput('input',$event)" prop="input"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
					<x-input type="text" :value="form.input2" @input="form.input2=$event" prop="input2"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">密码:{{form.password}}</view>
					<x-input type="password" :value="form.password" @input="form.password=$event" prop="password"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">数字{{form.number}}</view>
					<x-input type="number" :value="form.number" @input="form.number=$event" prop="number"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">小数点数字{{form.digit}}</view>
					<x-input type="digit" :value="form.digit" @input="form.digit=$event" prop="digit"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">身份证{{form.idcard}}</view>
					<x-input type="idcard" :value="form.idcard" @input="form.idcard=$event" prop="idcard"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.textarea}}</view>
					<x-textarea type="text" placeholder="羊羊得亿" :value="form.textarea" @input="form.textarea=$event" prop="textarea"></x-textarea>
				</view>
				

				<view class="uni-btn-v">
					<button formType="submit">使用Submit</button>
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
				form: {
					input: "zz00",
					input2: "zzyy",
					passwordx: "123456",
					number: "",
					digit: "",
					idcard: "",
					textarea: "",
				},
				rules: {
					textarea: [{
						required: true,
						message: '请输入textarea',
						trigger: 'change'
					}],
					input: [{
						required: true,
						message: '请输入txt',
						trigger: 'change'
					}],
					input2: [{
						required: true,
						message: '请输入input2',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请选择密码',
						trigger: 'change'
					}],
					number: [{
						required: true,
						message: '请输入数字',
						trigger: 'change'
					}],
					digit: [{
						required: true,
						message: '请输入小数点数字',
						trigger: 'change'
					}],
					idcard: [{
						required: true,
						message: '请输入身份证',
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

			},
			changeInput(k,val){
				console.log("kkkkkkkkkkkkkkk",k,val);
				this.form[k]=val;
			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>
