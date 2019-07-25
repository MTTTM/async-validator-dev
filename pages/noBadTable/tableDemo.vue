<template>
	<view class="demo-wrap">
		<single-demo/>
		<custom-cel-width/>
		<loading-table/>
		<empty-row/>
		<fixed-height-empty-row/>
		<fixed-height/>
		<custom-row-style/>
		<custom-row-style-second/>
		<custom-cel/>
		<custom-cel-content/> 
		 <row-span/>
		 <cel-span/>
		 <mulit-checkbox/>
		<single-selected/>
		<edi-data/> 
	</view>

</template>

<script>
	import customCelWidth from "@/components/no-bad-table/components/example/customCelWidth.vue";
	import singleDemo from "@/components/no-bad-table/components/example/single.vue";
	import fixedHeight from "@/components/no-bad-table/components/example/fixedHeight.vue";
	import mulitCheckbox from "@/components/no-bad-table/components/example/mulitCheckbox.vue";
	import rowSpan from "@/components/no-bad-table/components/example/rowSpan.vue";
	import celSpan from "@/components/no-bad-table/components/example/celSpan.vue";
	import customRowStyle from "@/components/no-bad-table/components/example/customRowStyle.vue";
	import customRowStyleSecond from "@/components/no-bad-table/components/example/customRowStyleSecond.vue";
	import customCel from "@/components/no-bad-table/components/example/customCel.vue";
	import customCelContent from "@/components/no-bad-table/components/example/customCelContent.vue";
	import ediData from "@/components/no-bad-table/components/example/ediData.vue";
    import singleSelected from "@/components/no-bad-table/components/example/singleSelected.vue";
	import emptyRow from "@/components/no-bad-table/components/example/emptyRow.vue";
	import fixedHeightEmptyRow from "@/components/no-bad-table/components/example/fixedHeightEmptyRow.vue";
	import loadingTable from "@/components/no-bad-table/components/example/loadingTable.vue"
	export default {
		components: {
			singleDemo,
			customCelWidth,
			fixedHeight,
			mulitCheckbox,
			rowSpan,
			celSpan,
			customRowStyle,
			customRowStyleSecond,
			customCel,
			customCelContent,
			ediData,
			singleSelected,
			emptyRow,
			fixedHeightEmptyRow,
			loadingTable
		}
	}
</script>
<style>
	.demo-wrap{
		padding:10px ;
	}
</style>

