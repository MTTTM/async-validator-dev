<template>
	<view class="uni-padding-wrap uni-common-pb">
		<view class="uni-header-logo">
			<image src="../../../static/componentIndex.png"></image>
		</view>
		<view class="uni-hello-text uni-common-pb">
			以下将展示uni-app官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见uni-app开发文档。
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
							label:"@input同步"
						},
						{
							url:"form/decreateInput",
							label:"动态增加"
						},
						{
							url:"form/singleForm",
							label:'自定义错误&&成功样式'
						},
						{
							url:"form/singleToat",
							label:'toast提示，顺序校验'
						},
						
						]
					}
				]
			}
		},
		onLoad() {
			// #ifdef APP-PLUS 
			// web-view组件支持本地html，依赖最新版的客户端基座
			var innerversion = plus.runtime.innerVersion;
			var _v = innerversion.substring(innerversion.lastIndexOf('.') + 1, innerversion.length);
			if (_v && parseInt(_v) >= 53650) {

				var newPages = [{
					name: '网络网页',
					url: '/pages/component/web-view/web-view'
				}, {
					name: '本地网页',
					url: '/platforms/app-plus/web-view-local/web-view-local'
				}];
				this.lists[this.lists.length - 1].pages = newPages;
			}
			// #endif
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/tabBar/component/component'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				// #ifdef APP-PLUS
				url: '/platforms/app-plus/about/about',
				// #endif
				// #ifdef H5
				url: '/platforms/h5/about/about',
				// #endif
			})
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
