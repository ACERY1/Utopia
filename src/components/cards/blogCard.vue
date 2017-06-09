<template>
	<div class="card-box">
		<!--<el-row :gutter="20">-->
			<!--<el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(o, index) in 9" :key="o">-->
				<el-card class="card" :body-style="{ padding: '0px'}">
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
			<!--</el-col>-->
		<!--</el-row>-->
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
				default: 'null'
			},
			bTitle: {
				default: "null"
			},
			bIntro: {
				default: 'null'
			},
			bTime: {
				default: getTime(new Date())
			},

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
	.el-card{
		box-shadow: none;
		border: none;
	}
	.downArrow{
		cursor: pointer;
		@include allMidBox();
		.arrow{
			@include fontSizeColor(1.4rem,$green);
		}
	}
	.downArrow:hover{
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
		&-txtBox{
			padding: 1rem 2rem 0 2rem;
			&-title{
				cursor: default;
				@include allMidBox();
				@include wh(100%,2rem);
				@include fontSizeColor(1.2rem,darken($fontClr,20%));
				font-weight: 800;
			}
			&-time{
				cursor: default;
				height: 1rem;
				@include fontSizeColor(0.6rem,$fontClr)
			}
			&-button{
				cursor: pointer;
				display: flex;
				justify-content: flex-end;
				height: 2rem;
				font-size: 1rem;
				&-text{
					color: $green;
				}
			}
			&-intro{
				cursor: default;
				display: block;
				text-overflow: ellipsis;
				overflow: hidden;
				height: 4.2rem;
				width: 100%;
				white-space:normal;/*强制不换行*/
				@include fontSizeColor(0.6rem,lighten($fontClr,10%));
			}
		}
	}
	.card:hover{
		transform: translateY(-2%);
		box-shadow: 1px 4px 10px 2px #CCCCCC;
		-webkit-box-shadow: 1px 4px 10px 2px #CCCCCC;
		-moz-box-shadow: 1px 4px 10px 2px #CCCCCC;
		transition: all .3s;
	}

</style>
