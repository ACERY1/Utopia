<template>
	<div class="card-box">
		<el-card class="card" :body-style="{ padding: '0px'}" v-if="type === 'top'">
			<div class="card-imgBox">
				<img v-lazy="picUrl">
			</div>
			<div class="card-txtBox">
				<div>
					<time class=" card-txtBox-time">{{ bTime }}</time>
					<span class="card-txtBox-title">{{bTitle}}</span>
					<span class="card-txtBox-intro">{{bIntro}}</span>
					<div class="card-txtBox-button">
						<el-button type="text" class="card-txtBox-button-text">READ MORE</el-button>
					</div>
					<div class="downArrow">
						<span class="iconfont icon-icon arrow"></span>
					</div>
				</div>
			</div>

		</el-card>
		<el-card :body-style="{ padding: '0px'}" v-if="type === 'bg' " >
			<div class="bgCard" :style="{background: 'url('+picUrl+')'}">
				<div class="bgCard-main">
					<div class="bgCard-main-title">{{bTitle}}</div>
					<div class="bgCard-main-cont">{{bIntro}}</div>
					<div class="bgCard-main-time">{{bTime}}</div>
					<el-button type="primary" size="large" class="bgCard-main-btn" >more</el-button>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
	import {getTime} from '../../common/scripts/commonMethods'
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			picUrl: {
				default: 'http://sjbz.fd.zol-img.com.cn/t_s540x960c/g5/M00/07/04/ChMkJ1jlsOKIUYUYAAQhvA87IyIAAbZHwKhfVgABCHU427.jpg'
			},
			bTitle: {
				default: "es6从入门到放弃"
			},
			bIntro: {
				default: 'ECMAscript很难啊，学不动啊,type Script很难啊，去你妈的强类型，var作用域很坑啊用let啊 const是es7的啊'
			},
			bTime: {
				default: getTime(new Date())
			},
			type: {
				// top 图片在上方 // bg 图片作为背景 // big 图片占3/4 只留时间和title
				default: 'bg'
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
	.el-card {
		box-shadow: none;
		border: none;
	}

	.downArrow {
		cursor: pointer;
		@include allMidBox();
		.arrow {
			@include fontSizeColor(1.4rem, $green);
		}
	}

	.downArrow:hover {
		/*transform: translateY(.4rem);*/
		/*transition: all .8s;*/
	}

	.card {
		height: 30rem;
		&-imgBox {
			width: 100%;
			height: 18rem;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		&-txtBox {
			padding: 1rem 2rem 0 2rem;
			&-title {
				cursor: default;
				@include allMidBox();
				@include wh(100%, 2rem);
				@include fontSizeColor(1.2rem, darken($fontClr, 20%));
				font-weight: 800;
			}
			&-time {
				cursor: default;
				height: 1rem;
				@include fontSizeColor(0.6rem, $fontClr)
			}
			&-button {
				cursor: pointer;
				display: flex;
				justify-content: flex-end;
				height: 2rem;
				font-size: 1rem;
				&-text {
					color: $green;
				}
			}
			&-intro {
				cursor: default;
				display: block;
				text-overflow: ellipsis;
				overflow: hidden;
				height: 4.2rem;
				width: 100%;
				white-space: normal; /*强制不换行*/
				@include fontSizeColor(0.6rem, lighten($fontClr, 10%));
			}
		}
	}

	.bgCard{
		height: 28rem;
		/*background-color: #3b3b3b;*/
		background-size: cover!important;
		&-main{
			@include allMidBox();
			@include wh(100%,100%);
			background-color: rgba(24,24,24,0.76);
			box-sizing: border-box;
			color: #ffffff;
			&-title,&-cont,&-time{
				width: 80%;
				@include allMidBox()
			}
			&-title{
				@include fontSizeColor(1.4rem,#fff);
				margin-bottom: 3rem;
				margin-top: 3rem;
			}
			&-cont{
				height: 8rem;
				@include fontSizeColor(1.1rem,#fff);
				font-weight: 300;
				overflow: hidden;
			}
			&-time{
				@include fontSizeColor(1rem,#fff);
			}
			&-btn{
				background-color: #ffffff;
				border: #ffffff;
				color: $fontClr;
				margin-top: 4rem;
			}
		}
	}

	.card:hover {
		transform: translateY(-2%);
		box-shadow: 1px 4px 10px 2px #CCCCCC;
		-webkit-box-shadow: 1px 4px 10px 2px #CCCCCC;
		-moz-box-shadow: 1px 4px 10px 2px #CCCCCC;
		transition: all .3s;
	}

</style>
