<template name="za-za-hui" >
	<view>
		<view>{{type?type:'我被嵌套在自定义组件x-form里面了,我接收不到type'}}</view>
	   <view>大家好，我是渣渣辉</view>
	   <input placeholder="我是砸砸辉的input"></input> 
	</view>	
</template>

<script>
	export default {
		name: "zaZaHui",
		props:{
			type:{
				type: String,
				default:()=>{
					return "text";
				},
				required:true
			}
		}
	}
</script>


