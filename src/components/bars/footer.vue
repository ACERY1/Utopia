<template>
	<div>
		<el-row>
			<el-col :span="24">
				<div class="myFooter">

					<div class="myFooter-main">
						<div class="myFooter-main-cont">
							<div class="userInfo">
								<p class="title">{{blogName.toUpperCase()}}</p>
								<p class="intro">{{blogIntro.toUpperCase()}}</p>
							</div>
							<div class="copyRight">Copyright © 2017.{{userName}} All rights reserved.</div>
						</div>
					</div>

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
			blogName:{
				default:"HELLOYZY"
			},
			blogIntro:{
				default:"VOICE IN ACTION"
			},
			userName:{
				default:'ACERU'
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

	.title{
		@include fontSizeColor(2rem,darken($fontClr,10%))
	}
	.intro{
		margin-top: -2rem;
		@include fontSizeColor(1rem,lighten($fontClr,30%))
	}
	.myFooter {
		height: 14rem;
		@include allMidBox();
		background-color: #ffffff;
		&-main {
			height: 80%;
			width: 80%;
			border: 1px solid $fontClr;
			padding:  0 10% 0 10%;
			box-sizing: border-box;
			/*background-color: #42b983;*/
			&-cont {
				width: 100%;
				height: 100%;
				.userInfo {
					padding-bottom: 4%;
					@include allMidBox();
					@include wh(100%,60%)
				}
				.copyRight {
					@include allMidBox();
					@include wh(100%,20%)
				}
			}
		}
	}
</style>
