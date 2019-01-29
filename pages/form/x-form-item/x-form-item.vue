<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" :toast="true">
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
					<input type="text" v-model="form.input" placeholder="我第二个校验"/>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
					<input type="text" v-model="form.input2" placeholder="我先校验"/>
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
			return {
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
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid,result) => {
					if (valid) {
						uni.showToast({
						    title: "提交成功",
						    duration: 1000,
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
			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>
