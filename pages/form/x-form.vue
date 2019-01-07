<template name="x-form-demo">
	<view>
		 <form >
			 <input placeholder="这是一个可以自动聚焦的input,form组件里面"></input>
			<view>app不显示呀</view>
		   <slot @change="change"></slot>
		</form> 
	</view>
</template>

<script>
	export default {
		name:"x-form-demo"
	}
</script>

<style>

</style>
