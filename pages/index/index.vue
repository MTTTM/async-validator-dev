<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="../../../static/componentIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			以下将展示async-validator-uniapp组件
		</view>
		<view class="uni-card" v-for="(list,index) in lists" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''"
					 @click="triggerCollapse(index)">
						{{list.name}}
					</view>
					<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key" @click="goDetailPage(item)">
							<view class="uni-list-cell-navigate uni-navigate-right"> {{item.label}} </view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				lists: [{
						id: 'form',
						name: '表单组件',
						open: false,
						pages: [
						{
							url:"form/form",
							label:"旧的/@input同步"
						},
						{
							url:"form/decreateInput",
							label:"改进/动态增加"
						},
						{
							url:"form/singleForm",
							label:'改进/自定义错误&&成功样式'
						},
						{
							url:"form/singleToat",
							label:'改进/toast提示，顺序校验'
						},
						{
							url:"form/toastdecreateInput",
							label:'toast&&增减'
						},
						//
							{
							url:"form/singleRadioCheckbox",
							label:'checkbox&&radio'
						},
						]
					}
				]
			}
		},


		methods: {
			triggerCollapse(e) {
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			goDetailPage(e) {
					uni.navigateTo({
						url: "/pages/"+e.url
					})
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
</style>
