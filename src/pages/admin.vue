<template>
	<div class="admin">

		<div class="slide">
			<div class="imgBox" :style="'background:url('+picUrl+') center;'">
				<el-row type="flex" justify="center" class="inputBox">
					<el-col :lg="10" :md="10" :sm="24" :xs="24">
						<login-bar></login-bar>
					</el-col>
				</el-row>
			</div>

		</div>


	</div>
</template>

<script>
	import loginBar from '../components/inputs/loginBar.vue'
	export default {
		name: "",
		components: {
			loginBar
		},
		data () {
			return {
				picUrl: '../../static/picHolder/login.jpeg',
			}
		},
		props: {},
		computed: {},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../common/style/mixin";

	.slide {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.imgBox {
		//		@include scaleAnimation();
		padding-top: 30vh;
		height: 100rem;
		background: #3b3b3b;
	}
</style>
