<template>
	<div class="newsDialog">
		<!--mainBox-->
		<div class="newsDialog-box1" v-if="type =='XL'">
			<el-row>
				<el-col :span="16">
					<div class="newsDialog-box1-img">
						<img :src="info.picUrl" alt="">
					</div>
				</el-col>
				<el-col :span="8">
					<div class="newsDialog-box1-txt">
						<div class="newsDialog-box1-txt-time">{{pubDate.month}} {{pubDate.date}}, {{pubDate.year}}</div>
						<div class="newsDialog-box1-txt-title">{{info.mainTitle}}</div>
						<div class="newsDialog-box1-txt-cont">{{info.cont}}</div>
					</div>
				</el-col>
			</el-row>


		</div>
		<!--带大图的-->
		<div class="newsDialog-box2" v-if="type=='L'">
			<div class="newsDialog-box2-img">
				<img :src="info.picUrl" alt="">
			</div>
			<div class="newsDialog-box2-txt">
				<div class="newsDialog-box2-txt-time">{{pubDate.month}} {{pubDate.date}}, {{pubDate.year}}</div>
				<div class="newsDialog-box2-txt-title">{{info.mainTitle}}</div>
				<div class="newsDialog-box2-txt-cont">{{info.cont}}</div>
			</div>
		</div>
		<!--半图半文字-->
		<div class="newsDialog-box3" v-if="type=='M'">
			<div class="newsDialog-box3-img">
				<img :src="info.picUrl" alt="">
			</div>
			<div class="newsDialog-box3-txt">
				<div class="newsDialog-box3-txt-time">{{pubDate.month}} {{pubDate.date}}, {{pubDate.year}}</div>
				<div class="newsDialog-box3-txt-title">{{info.mainTitle}}</div>
				<div class="newsDialog-box3-txt-cont">{{info.cont}}</div>
			</div>
		</div>
		<!--全文字-->
		<div class="newsDialog-box4" v-if="type=='S'">
			<div class="newsDialog-box4-txt">
				<div class="newsDialog-box4-txt-time">{{pubDate.month}} {{pubDate.date}}, {{pubDate.year}}</div>
				<div class="newsDialog-box4-txt-title">{{info.mainTitle}}</div>
				<div class="newsDialog-box4-txt-cont">{{info.cont}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {parseTime, monthFilter} from '../../common/scripts/utils'
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			info: {
				type: Object,
				default: () => {
					return {
						picUrl: '../../../static/picHolder/p3.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					}
				}
			},

			/*type: XL,L,M,S*/
			type:{
				type:String,
				default:()=>{
					return "S"
				}
			}
		},
		computed: {
			pubDate (){
				let a = parseTime(this.info.pubTime)
				return {
					year: a.year,
					month: monthFilter(a.month),
					date: a.date
				}
			}
		},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";
	$height: 38rem;
	.newsDialog {
		height: $height;
		&-box1 {
			height: $height;
			background: $white;
			&-img {
				height: $height;
				background: $placeHolder;
				overflow: hidden;
				img{
					@include wh(100%,100%)
				}

			}
			&-txt {
				padding: 10%;
				&-time {
					margin-bottom: 2rem;
					@include fontSizeColor(1.2rem,$placeHolder)
				}
				&-title {
					@include fontSizeColor(1.4rem,darken($fontClr,20%));
					font-weight: bold;
					margin-bottom: 2rem;
				}
				&-cont {
					@include fontSizeColor(1.2rem,$fontClr);
					word-spacing: 6px;
					line-height: 1.6rem;
				}
			}
		}
		&-box2 {
			height: $height;
			background: $white;
			display: flex;
			flex-flow: column nowrap;
			&-img {
				height: 60%;
				overflow: hidden;
				img{
					@include wh(100%,100%)
				}
			}
			&-txt {
				padding: 2rem;
				&-time {
					margin-bottom: 1rem;
					@include fontSizeColor(1.4rem,$placeHolder)
				}
				&-title {
					@include fontSizeColor(2rem,darken($fontClr,20%));
					font-weight: bold;
				}
				&-cont {
					display: none;
				}
			}
		}
		&-box3 {
			height: $height;
			background: $white;
			display: flex;
			flex-flow: column nowrap;
			&-img {
				height: 50%;
				overflow: hidden;
				img{
					@include wh(100%,100%)
				}
			}
			&-txt {
				height: 50%;
				overflow: hidden;
				padding: 2rem;
				&-time {
					margin-bottom: 1rem;
					@include fontSizeColor(1.4rem,$placeHolder)
				}
				&-title {
					@include fontSizeColor(2rem,darken($fontClr,20%));
					font-weight: bold;
					margin-bottom: 2rem;
				}
				&-cont {
					height: 30%;
					overflow: hidden;
					@include fontSizeColor(1.2rem,$fontClr);
					word-spacing: 6px;
					line-height: 1.6rem;
				}
			}
		}
		&-box4 {
			background: $white;
			&-txt {
				padding: 2rem;
				&-time {
					margin-bottom: 1rem;
					@include fontSizeColor(1.4rem,$placeHolder)
				}
				&-title {
					@include fontSizeColor(2rem,darken($fontClr,20%));
					font-weight: bold;
					margin-bottom: 2rem;
				}
				&-cont {
					@include fontSizeColor(1.2rem,darken$fontClr);
				}
			}
		}

	}
</style>
