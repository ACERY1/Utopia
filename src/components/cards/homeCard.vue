<template>
	<div class="homeCard">
		<el-row>
			<el-col :span="16">
				<div class="homeCard-txt">
					<div class="homeCard-txt-title">{{hTitle}}</div>
					<div class="homeCard-txt-cont" v-html="hCont">
						{{hCont}}
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="homeCard-img">
					<img v-lazy="picUrl" alt="">
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
			picUrl: {
				default: "http://demo.sc.chinaz.com//Files/DownLoad/moban/201608/moban1467/img/about.jpg"
			},
			hTitle: {
				default: "Our Team"
			},
			hCont: {
				default: `<p>Vue.js 的核心是一个响应的数据绑定系统，它允许我们在普通 HTML 模板中使用特殊的语法将 DOM “绑定”到底层数据。被绑定的DOM 将与数据保持同步，每当数据有改动，相应的DOM视图也会更新。</p>
							<p>基于这种特性，通过vue.js动态绑定class就变得非常简单</p>`
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

	.homeCard {
		background-color: #ffffff;
		height: 24rem;
		width: 100%;
		&-img {
			@include wh(100%, 24rem);
			background-color: $placeHolder;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		&-txt {
			overflow: hidden;
			box-sizing: border-box;
			padding: 1.6rem 3rem;
			@include wh(100%, 24rem);
			&-title {
				@include fontSizeColor(3rem, $fontClr);
				display: flex;
				justify-content: flex-start;
				font-weight: 300;
			}
			&-cont {
				width: 90%;
				margin-right: 10%;
				@include fontSizeColor(1.3rem, darken($fontClr, 30%));
				font-weight: 300;
				height: 18rem;
			}
		}
	}

	/*
	iphone 6s plus width
	 */
	@media screen and (max-width: 414px) {
		.homeCard {
			&-img {
				img {
				}
			}
			&-txt {

				&-title {
					margin-bottom: 1rem;
					@include fontSizeColor(2rem, $fontClr);
					display: flex;
					justify-content: flex-start;
					font-weight: 300;
				}
				&-cont {
					overflow: scroll;
					@include fontSizeColor(1.1rem, darken($fontClr, 30%));
					font-weight: 300;
				}
			}
		}

	}
</style>
