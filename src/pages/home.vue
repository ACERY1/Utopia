<template>
	<div class="home">
		<m-Banner :bannerItems="bannerItems"></m-Banner>
		<div class="home-main"></div>
		<div class="home-pageBar"></div>
		<div class="home-chooseBar"></div>
		<div class="slideBar"></div>
		<el-row >
			<el-col :lg="16" :md="16" :sm="20" :xs="20" :offset="4"  >
				<h-card class="home-padding" :pos="'left'"></h-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col  :lg="16" :md="16" :sm="20" :xs="24"  >
				<h-card class="home-padding" :pos="'top'"></h-card>
			</el-col>
			<el-col :span="8"><p></p></el-col>
		</el-row>
		<c-card></c-card>
	</div>
</template>

<script>
	import mBanner from '../components/swipers/banner.vue'
	import hCard from '../components/cards/homeCard.vue'
	import bCard from  '../components/cards/blogCard.vue'
	import cCard from '../components/cards/chooseCard.vue'
	export default {
		name: "homepage",
		components: {
			mBanner,
			hCard,
			bCard,
			cCard
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
				]
			}
		},
		props:{},
		computed: {},
		created () {
		},
		mounted () {},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../common/style/mixin";
	.home{

	}
	.home-padding{
		margin-top: 4rem;
	}
</style>
