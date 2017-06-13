<template>
    <div class="newsCard-box">
		<div class="newsCard">
			<div class="newsCard-title">
				<i class="el-icon-caret-right title"></i>
				<span class="newsCard-title-txt">最新动态</span>
			</div>
			<div class="newsCard-news">
				<ul>
					<li class="newsCard-news-item" v-for="item,index in newsItems" :key="item">
						<div class="newsCard-news-item-img" v-if="index === 0">
							<img v-lazy="item.picUrl" alt="">
							<span class="newsCard-news-item-imgTXT">{{item.bTitle}}</span>
						</div>
						<span style="margin-top: 2rem;" v-if="index !== 0">{{item.bTitle}}</span>
						<div class="newsCard-news-item-intro">{{item.bIntro}}</div>
						<div class="newsCard-news-item-time">{{item.bTime}}</div>
						<div class="newsCard-news-item-bar">
							<div class="flexBox">
								<span class="iconfont icon-zan"></span>
								<span class="txt">{{item.praiseNum}}</span>
								<span class="iconfont icon-pinglun"></span>
								<span class="txt">{{item.commentNum}}</span>
							</div>

						</div>
					</li>
				</ul>
			</div>
		</div>

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
			newsItems:{
				type:Array,
				default:function () {
					return [
						{
							bTitle:'ES6从入门到放弃',
							picUrl: 'http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-4.jpg',
							bIntro:'ECMAscript很难啊，学不动啊,typeScript很难啊，去你妈的强类型，var作用域很坑啊用let啊 const是es7的啊',
							bTime:getTime(new Date()),
							praiseNum:12,
							commentNum:24,

						},
						{
							bTitle:'ES6从入门到放弃',
							picUrl: 'http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-4.jpg',
							bIntro:'ECMAscript很难啊，学不动啊,typeScript很难啊，去你妈的强类型，var作用域很坑啊用let啊 const是es7的啊',
							bTime:getTime(new Date()),
							praiseNum:12,
							commentNum:24,

						},
						{
							bTitle:'ES6从入门到放弃',
							picUrl: 'http://pic.jj20.com/up/allimg/1011/05241G14F4/1F524114F4-4.jpg',
							bIntro:'ECMAscript很难啊，学不动啊,typeScript很难啊，去你妈的强类型，var作用域很坑啊用let啊 const是es7的啊',
							bTime:getTime(new Date()),
							praiseNum:12,
							commentNum:24,

						}
					]
				}
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
		color: #42b983;
	}

	.newsCard{
		width: 100%;
		padding-top: 2rem;
		&-title{
			height: 2rem;
			&-txt{
				margin-left: .4rem;
				@include fontSizeColor(1rem,$fontClr)
			}
		}
		&-news{
			margin-top: 2rem;
			ul{
				list-style-type: none; // 取消默认样式
				-webkit-margin-before: 0;
				-webkit-margin-after: 0;
				-webkit-margin-start: 0;
				-webkit-margin-end: 0;
				-webkit-padding-start: 0;
			}
			ul>li{
				@include allMidBox();
			}
			&-item{
				border: solid lighten($fontClr,40%);
				border-width: 0 0 1px 0;
				color: $fontClr;
				&-img{
					@include wh(80%,10rem);
					overflow: hidden;
					img{
						height: 100%;
						width: 100%;
					}
				}
				&-imgTXT{
					background: rgba(18,18,18,.4);
					position: absolute;
					@include wh(80%,10rem);
					margin-top: -10.25rem;
					@include allMidBox();
					color: #ffffff;
				}
				&-intro{
					overflow: hidden;
					margin-top: 1rem;
					font-weight: 400;
					color: lighten($fontClr,10%);
					line-height: 1.6rem;
					@include wh(80%,5rem)
				}
				&-time{
					font-weight: 300;
					@include allMidBox();
					@include wh(80%,1rem);
					@include fontSizeColor(1rem,lighten($fontClr,10%))
				}
				&-bar{
					.flexBox{
						display: flex;
						align-items: center;
					}
					margin-top: 1rem;
					@include wh(80%,2rem);
					.iconfont{
						color: $green;
						font-size: 1.6rem;
						font-weight: 400;
					}
					.txt{
						margin-left: 1rem;
						margin-right: 1rem;
						margin-top: -.2rem;
						font-weight: 300;
						font-size: 1rem;
						color: lighten($fontClr,10%);
					}
				}
			}
		}
	}

</style>
