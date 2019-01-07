<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
					<x-input type="text" :value="form.input" @input="changeInput('input',$event)" prop="input"></x-input>
				</view>
                <view class="uni-form-item uni-column" v-for="item in inputArray" :key="item.key" style="position:relative;">
					<x-input type="text" :value="form[item.key]" @input="changeInput(item.key,$event)" :prop="item.key" placeholder="我系追加的，辣" ></x-input>
                      <button @tap="dele(item.key)" size="mini" type="warn" style="position:absolute;right:5px;top:15px;z-index:20;">删</button>
				</view>
                <view>
                    <button @tap="add">新增一个必填表单</button>
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
        name:"decreateInput",
		data() {
			return {
                modelShow:false,
                keyx:0,
                inputArray:[

                ],
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
					}]
				}
			}
		},
		methods: {
			add() {
                    this.keyx+=1;
                    let k="x"+ this.keyx;
                    this.inputArray.push({
                        key:k,
                        value:""
                    });
                    this.form[k]="";
                    this.rules[k]=[{
						required: true,
						message: `请输入${"x"+ this.keyx}`,
						trigger: 'change'
					}];
            },
            dele(key){
                this.inputArray=this.inputArray.filter((item)=>item.key!=key);
                delete this.form[key];
                delete this.rules[key];
            },
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						uni.showToast({
                            title: '提交成功',
                            duration: 2000
                        });
					} else {
						console.log('error submit!!');
					}
				});
			},
			validInput(k) {
				this.$refs['ruleForm'].validateField(k)

			},
			changeInput(k,val){
				this.form[k]=val;
			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
    .model{
        position: fixed;
        width:50%;
        height:200px;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
        border:1px solid #000;
        z-index:9999;
        background:blue;
        text-align: center;
        color:red;
    }
</style>
