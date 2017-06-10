<template>
    <div class="chooseCard">
		<div class="chooseCard-box">
			<el-row>
				<el-col :span="24">
					<el-row class="cardRow" >
						<el-col  class="cardCol"><div class="chooseCard-box-item odd">{{links[0].name[0].toUpperCase()+links[0].name.slice(1)}}</div></el-col>
						<el-col    class="cardCol"><div class="chooseCard-box-item even"><img v-lazy="picUrls[0]"></div></el-col>
						<el-col    class="cardCol"><div class="chooseCard-box-item odd">{{links[1].name[0].toUpperCase()+links[1].name.slice(1)}}</div></el-col>
					</el-row>
					<el-row class="cardRow">
						<el-col    class="cardCol"><div class="chooseCard-box-item even"><img v-lazy="picUrls[1]"></div></el-col>
						<el-col    class="cardCol"><div class="chooseCard-box-item odd">{{links[2].name[0].toUpperCase()+links[2].name.slice(1)}}</div></el-col>
						<el-col   class="cardCol"><div class="chooseCard-box-item even"><img v-lazy="picUrls[2]"></div></el-col>
					</el-row>
					<el-row class="cardRow">
						<el-col    class="cardCol"><div class="chooseCard-box-item odd">{{links[3].name[0].toUpperCase()+links[3].name.slice(1)}}</div></el-col>
						<el-col    class="cardCol"><div class="chooseCard-box-item even"><img v-lazy="picUrls[3]"></div></el-col>
						<el-col    class="cardCol"><div class="chooseCard-box-item odd">{{links[4].name[0].toUpperCase()+links[4].name.slice(1)}}</div></el-col>
					</el-row>
				</el-col>
			</el-row>

		</div>
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
			links:{
				type:Array,
				default:function () {
					return [
						{
							name:'hello',
							link:'',

						},
						{
							name:'WORLD',
							link:'',

						},
						{
							name:'WITH',
							link:'',

						},
						{
							name:'YOU',
							link:'',

						},
						{
							name:'AGAIN',
							link:'',

						}
					]
				}
			},
			picUrls:{
				type:Array,
				default:function () {
					return [
						'http://demo.sc.chinaz.com//Files/DownLoad/moban/201608/moban1467/img/idea-01.jpg',
						'http://demo.sc.chinaz.com//Files/DownLoad/moban/201608/moban1467/img/idea-02.jpg',
						'http://demo.sc.chinaz.com//Files/DownLoad/moban/201608/moban1467/img/idea-03.jpg',
						'http://demo.sc.chinaz.com//Files/DownLoad/moban/201608/moban1467/img/idea-04.jpg',
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
	.chooseCard{
		background-color: #ffffff;
		&-box{
			height: 100%;
			width: 100%;
			.cardRow{
				height:33.33333333%;
			}
			.cardCol{
				height: 100%;
				width: 33.3333333%;
			}
			&-item{
				@include allMidBox();
				@include wh(100%,100%);

			}
		}
	}

	/*
	奇数是文字
	 */
	.odd{
		margin-top: 40%;
		@include fontSizeColor(2.4rem,$fontClr);
		font-weight: 300;
	}
	/*
	偶数是图片
	 */
	.even{
		overflow: hidden;
		img{
			@include scaleAnimation();
			height: 100%;
			width: 100%;
		}
		background-color: $placeHolder;
	}

	@media screen and (max-width: 414px){
		.chooseCard{
			//@include wh(30rem,30rem)
		}
		.odd{
			margin-top: 38%;
			@include fontSizeColor(1.4rem,$fontClr);
		}
	}
</style>
