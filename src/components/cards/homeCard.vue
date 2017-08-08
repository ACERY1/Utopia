<template>
	<div class="homeCard">
		<el-row v-if="pos=='right'">
			<el-col :span="16">
				<div class="homeCard-txt">
					<div class="homeCard-txt-title">{{hTitle}}</div>
					<div class="homeCard-txt-cont" v-html="hCont">
						{{hCont}}
					</div>
					<el-button type="primary" class="top-button-green">阅读更多</el-button>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="homeCard-img">
					<img v-lazy="picUrl" alt="">
				</div>
			</el-col>
		</el-row>
		<el-row v-if="pos=='left'">
			<el-col :span="8">
				<div class="homeCard-img">
					<img v-lazy="picUrl" alt="">
				</div>
			</el-col>
			<el-col :span="16">
				<div class="homeCard-txt">
					<div class="homeCard-txt-title">{{hTitle}}</div>
					<div class="homeCard-txt-cont" v-html="hCont">
						{{hCont}}
					</div>
					<el-button type="primary" class="top-button-green" style="margin-left: 60%">阅读更多</el-button>
				</div>
			</el-col>
		</el-row>
		<el-row v-if="pos=='top'">
			<div class="top">
				<div class="top-img">
					<img v-lazy="picUrl" alt="">
				</div>
				<div class="top-title">{{hTitle}}</div>
				<div class="top-cont" v-html="hCont">
					{{hCont}}
				</div>
				<div class="top-button">
					<el-button type="primary" class="top-button-green">阅读更多</el-button>
				</div>
			</div>
		</el-row>
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
			},
			isLeft: {
				default: false
			},
			pos: {
				default: 'left'
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

	/*
		top可适配手机样式
	*/
	.top {
		height: 24rem;
		width: 100%;
		&-img {
			height: 50%;
			width: 100%;
			overflow: hidden;
			img {
				margin-top: -20%;
				width: 100%;
			}
		}
		&-title {
			top: 0;
			height: 50%;
			width: 100%;
			@include allMidBox();
			position: absolute;
			margin-bottom: 1rem;
			@include fontSizeColor(4rem, lighten($fontClr, 80%));
			background: rgba(26, 26, 26, .4);
			display: flex;
			font-weight: 300;
		}
		&-cont {
			padding-left: 5%;
			width: 90%;
			margin-right: 10%;
			@include fontSizeColor(1.2rem, darken($fontClr, 30%));
			font-weight: 300;
			height: 8rem;
			overflow: hidden;
		}
		&-button {
			margin-top: 1rem;
			@include allMidBox();
			&-green {
				background-color: $green;
				border: none;
			}
		}
	}

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
				/*overflow-y: scroll;*/
				overflow: hidden;
				width: 90%;
				margin-right: 10%;
				@include fontSizeColor(1.3rem, darken($fontClr, 30%));
				font-weight: 300;
				height: 15rem;
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
					overflow: hidden;
					@include fontSizeColor(1.1rem, darken($fontClr, 30%));
					font-weight: 300;
				}
			}
		}

	}
</style>
