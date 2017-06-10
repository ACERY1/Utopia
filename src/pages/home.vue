<template>
	<div class="home">

		<!--banner图-->
		<m-Banner :bannerItems="bannerItems"></m-Banner>

		<!--分割线-->
		<dvd :words="'最近笔记'"></dvd>

		<!--最近笔记-->
		<el-row type="flex" justify="center" >
			<el-col :lg="16" :sm="24" :xs="24" :md="24" >
				<el-col :lg="8" :sm="24" :xs="24" :md="24" v-for="j,index2 in 3"  :key="j" > <b-card class="home-padding blog-card"></b-card></el-col>
			</el-col>
		</el-row>


		<!--分割线-->
		<dvd :words="'精选笔记'"></dvd>

		<!--精品笔记-->
		<el-row type="flex" justify="center" v-for="i in 3" :key="i">
			<el-col :lg="16" :md="16" :sm="20" :xs="24"  >
				<h-card class="home-padding" :pos="cardStyle"></h-card>
			</el-col>
		</el-row>

		<!--分割线-->
		<dvd :words="'足迹'"></dvd>

		<!--九宫格-->
		<el-row type="flex" justify="center">
			<el-col :lg="16"><c-card class="home-padding home-cCard"></c-card></el-col>
		</el-row>
	</div>
</template>

<script>
	import userCard from '../components/cards/userCard.vue'
	import mBanner from '../components/swipers/banner.vue'
	import hCard from '../components/cards/homeCard.vue'
	import bCard from  '../components/cards/blogCard.vue'
	import cCard from '../components/cards/chooseCard.vue'
	import smBanner from '../components/swipers/smallBanner.vue'
	import dvd from '../components/bars/divide.vue'
	import {randomNum} from  '../common/scripts/commonMethods'
	export default {
		name: "homepage",
		components: {
			mBanner,
			hCard,
			bCard,
			cCard,
			userCard,
			dvd,
			smBanner
		},
		data () {
			return {
				bannerItems:[
					{
						picUrl: "http://pic1.5442.com/2013/0525/05/13.jpg",
						bnrTitle: "ECMAScript6 从入门到放弃",
						bnrCont: "ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。"
					},
					{
						picUrl: "http://pic1.5442.com/2013/0525/05/13.jpg",
						bnrTitle: "ECMAScript6 从入门到放弃",
						bnrCont: "ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。"
					},
					{
						picUrl: "http://pic1.5442.com/2013/0525/05/13.jpg",
						bnrTitle: "ECMAScript6 从入门到放弃",
						bnrCont: "ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。"
					}
				],
				cardStyle:this.randomStyle(),
				newList:9
			}
		},
		props:{},
		computed: {
			listRow(){
				return parseInt(this.newList/3)
			}
		},
		created () {
		},
		mounted () {},
		methods: {
			randomStyle(){
				let _r = randomNum();
				switch (_r){
					case 1:
						return 'top';
					case 2:
						return 'right';
					case 3:
						return 'left';
					default:
						return'left';
				}
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../common/style/mixin";
	.home{
		&-dvd{
			@include fontSizeColor(1.4rem,darken($fontClr,20%));
			font-weight: 300;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: flex-end;
			border: solid lighten($fontClr,10%);
			border-width: 0  0 1px 0;

		}
		&-cCard{
			/*height: 24rem;*/
		}

	}
	.home-padding{
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
	.blog-card{
		padding-left: 10%;
		width: 80%;
	}
</style>
