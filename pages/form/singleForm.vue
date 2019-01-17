<template>
<view>
    <view class="uni-padding-wrap uni-common-mt">
        <x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" errorClass="custom-error-class" successClass="custom-success-class">
            <view class="uni-form-item uni-column">
                <view class="title">普通文字(改变的时候检测){{form.input}}</view>
                <x-input type="text" v-model="form.input" prop="input"></x-input>
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
                <x-input type="text" v-model="form.input2" prop="input2"></x-input>
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">我自己有错误和正确的样式:{{form.password}}</view>
                <x-input type="text" v-model="form.password" prop="password" errorClass="custom-one-error-class" successClass="custom-one-success-class"></x-input>
            </view>
			<view class="uni-form-item uni-column">
				<view class="title">checkbox</view>
				<x-checkbox-group :value.sync="form.checkbox" prop="checkbox">
					<template v-for="item in items">
						<x-checkbox :key="item.value" :value="item.name" :label="item.value" :checked="form.checkbox.includes(item.name)"
						 :disabled="item.disabled" />
					</template>
				</x-checkbox-group>
				<button @tap="validInput('checkbox')">验证单个表单</button>
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
			if (value !== '' && value != 100) {
				callback(new Error('请输入100'));
			} else {
				callback();
			}
		};

		return {
			title: 'form',
			pickerHidden: true,
			chosen: '',
			form: {
				input: 'zz00',
				input2: 'zzyy',
				passwordx: '123456',
				number: '',
				digit: '',
				idcard: '',
				textarea: '',
				checkbox: [],
			},
			items: [
				{
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
			rules: {
				input: [
					{
						required: true,
						message: '请输入txt',
						trigger: 'change'
					}
				],
				input2: [
					{
						required: true,
						message: '请输入input2',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: '请选择密码',
						trigger: 'change'
					}
				],
					checkbox: [{
						type: 'array',
						required: true,
						message: '请选择checkbox',
						trigger: 'change'
					},
					{
						type: 'array',
						min: 2,
						message: '请选择至少2个checkbox',
						trigger: 'change'
					},
				],
			}
		};
	},
	methods: {
		pickerConfirm: function(e) {
			this.pickerHidden = true;
			this.chosen = e.target.value;
		},
		pickerCancel: function(e) {
			this.pickerHidden = true;
		},
		pickerShow: function(e) {
			this.pickerHidden = false;
		},
		formSubmit: function(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
		},
		formReset: function(e) {
			console.log('清空数据');
			this.chosen = '';
		},
		xchange() {
			console.log('改变');
		},
		customerSubmit() {
			this.$refs['ruleForm'].validate(valid => {
				if (valid) {
					uni.showToast({
						title: 'success',
						duration: 1000
					});
				} else {
// 					uni.showToast({
// 						title: 'success',
// 						duration: 1000,
// 						icon:"none"
// 					});
					return false;
				}
			});
		},
		validInput(k) {
			this.$refs['ruleForm'].validateField(k);
		},
		changeInput(k, val) {
			console.log('kkkkkkkkkkkkkkk', k, val);
			this.form[k] = val;
		}
	}
};
</script>

<style lang="less">
.title {
	padding: 10px 0 !important;
}

.booleen-x-input.custom-error-class {
	color: orange;
	border: orange 1px solid;

	.custom-error-class {
		color: orange !important;
	}
	&.booleen-x-error-input-no-border{
		border:none;
	}
}
.booleen-x-input.custom-error-class {
	color: orange;
	border: orange 1px solid;

	.custom-error-class {
		color: orange !important;
	}
	&.booleen-x-error-input-no-border{
		border:none;
	}
}
.booleen-x-input.custom-success-class {
	color: green;
	border: 1px solid green;
}

.booleen-x-input.custom-one-error-class {
	color: #fb4607;
	border: #fb4607 1px solid;

	.custom-error-class {
		color: #fb4607 !important;
	}
	&.booleen-x-error-input-no-border{
		border:none;
	}
}
.booleen-x-input.custom-one-success-class {
	color: blue;
	border: 1px solid blue;
	&.booleen-x-error-input-no-border{
		border:none;
	}
}
</style>
