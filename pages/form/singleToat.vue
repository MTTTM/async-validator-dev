<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" :toast="true">
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
					<x-input type="text" v-model="form.input"  prop="input" placeholder="我第二个校验"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
					<x-input type="text" v-model="form.input2"  prop="input2" placeholder="我先校验"></x-input>
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
					input: "",
					input2: "",

				},
				rules: {
					input: [{
						required: true,
						message: '请输入txt',
                        trigger: 'change',
                        sort:3,
					}],
					input2: [{
						required: true,
						message: '请输入input2',
                        trigger: 'blur',
                        sort:2
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
				this.$refs['ruleForm'].validate((valid,result) => {
                    console.log("=============",valid,result)
					if (valid) {
						uni.showToast({
                            title: '成功',
                            duration: 1000,
                            icon:"none"
                        });
					} else {
						uni.showToast({
                            title: result.error[0].message,
                            duration: 1000,
                            icon:"none"
                        });
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
