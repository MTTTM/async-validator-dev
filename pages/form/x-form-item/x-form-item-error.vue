<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" >
				<x-from-item xclass="custom-class" prop="input" :watch="form.input">
					<input type="text" v-model="form.input" placeholder="表单1"/>
				</x-from-item>
				<x-from-item  xclass="custom-class" prop="input2" :watch="form.input2">
					<input type="text" v-model="form.input2" placeholder="表单2"/>
				</x-from-item>
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
			return {
				form: {
					input: "",
					input2: "",
				},
				rules: {
					input: [{
						required: true,
						message: '请输入txt',
                        // trigger: 'change'   //使用原生input，blur方式校验将会无效
					}],
					input2: [{
						required: true,
						message: '请输入input2',
                        // trigger: 'change' //使用原生input，blur方式校验将会无效
					}]
				}
			}
		},
		methods: {
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						uni.showToast({
						    title: "提交成功",
						    duration: 1000,
						});
						return;
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.title {
		padding: 10px 0 !important;
	}
	input{
		background: #fff;
		height: 80upx;
		line-height: 80upx;
	}
	.custom-class{
		//我会覆盖掉默认的样式
		margin-bottom: 20px;
	}
</style>
