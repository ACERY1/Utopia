<template>
    <div class="">
		<el-row type="flex" justify="center">
			<el-col :lg="16" :xs="24" :sm="24">
				<div class="divide-line">
					{{words}}
				</div>
			</el-col>
		</el-row>
    </div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			words:{
				type:String,
				default:'null'
			}
		},
		computed: {},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";
	.divide-line{
		margin-top: 2rem;
		@include fontSizeColor(1.4rem,darken($fontClr,20%));
		font-weight: 300;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		border: solid lighten($fontClr,10%);
		border-width: 0  0 1px 0;
	}
</style>
