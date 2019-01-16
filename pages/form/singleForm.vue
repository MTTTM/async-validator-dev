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
            if (value !== "" && value != 100) {
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
                input: "zz00",
                input2: "zzyy",
                passwordx: "123456",
                number: "",
                digit: "",
                idcard: "",
                textarea: "",
            },
            rules: {
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
                }]
            }
        }
    },
    methods: {
        pickerConfirm: function (e) {
            this.pickerHidden = true
            this.chosen = e.target.value
        },
        pickerCancel: function (e) {
            this.pickerHidden = true
        },
        pickerShow: function (e) {
            this.pickerHidden = false
        },
        formSubmit: function (e) {
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
        },
        formReset: function (e) {
            console.log("清空数据")
            this.chosen = ''
        },
        xchange() {
            console.log("改变")
        },
        customerSubmit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    uni.showToast({
                        title: 'success',
                        duration: 1000
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        validInput(k) {
            this.$refs['ruleForm'].validateField(k)

        },
        changeInput(k, val) {
            console.log("kkkkkkkkkkkkkkk", k, val);
            this.form[k] = val;
        }
    }
}
</script>

<style lang="less">
.title {
    padding: 10px 0 !important;
}

.booleen-x-input.custom-error-class {
    color: orange;
    border: orange 1px solid;

    .custom-error-class{
        color: orange!important;
    }
}
.booleen-x-input.custom-error-class {
    color: orange;
    border: orange 1px solid;

    .custom-error-class{
        color: orange!important;
    }
}
.booleen-x-input.custom-success-class{
   color:green;
   border:1px solid green;
}


.booleen-x-input.custom-one-error-class {
    color: #fb4607;
    border: #fb4607 1px solid;

    .custom-error-class{
        color: #fb4607!important;
    }
}
.booleen-x-input.custom-one-success-class{
   color:blue;
   border:1px solid blue;
}
</style>
