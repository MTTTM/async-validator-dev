<template>
	<view>
		<uni-collapse  @change="change">
			<uni-collapse-item title="标题文字" open="t">
				<view>
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
					<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="默认开启" open="true">
				<view style="padding: 30upx;"> 折叠内容主体，可自定义内容及样式 </view>
			</uni-collapse-item>
			<uni-collapse-item title="禁用状态" disabled="true">
				<view style="padding: 30upx;"> 禁用状态 </view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data(){
			return {
				t:false,
			}
		},
		methods:{
			change(){
			  this.t=!this.t;
			}
		}
	}
</script>

<style>

</style>
