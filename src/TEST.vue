<template>
	<div style="">
		<h1>首页轮播图</h1>
		<mBanner class="testBox"></mBanner>
		<br>

		<h1>首页博客Item</h1>
		<h-card></h-card>
		<br>

		<h1>小轮播图</h1>
		<sm-banner></sm-banner>
		<br>

		<h1>分页博客Item</h1>
		<el-row type="flex" justify="center">
			<el-col :span="6">
				<b-card :picUrl="1" :bTitle="2" :bIntro="3" :bTime="4"></b-card>
			</el-col>
		</el-row>
		<br>

		<h1>作者介绍Item</h1>
		<el-row type="flex" justify="center">
			<el-col :span="6">
				<user-card></user-card>
			</el-col>
		</el-row>
		<br>

		<h1>侧边动态栏</h1>
		<el-row type="flex" justify="center">
			<el-col :span="6">
				<news-card></news-card>
			</el-col>
		</el-row>
		<br>


		<h1>足迹栏</h1>
		<choose-card></choose-card>

		<h1>足迹Item</h1>
		<el-row type="flex" justify="center">
			<el-col :span="12">
				<ft-dialog></ft-dialog>
			</el-col>
		</el-row>

		<h1>海报POST</h1>
		<el-row type="flex" justify="center">
			<el-col :span="18">
				<news-dialog :type="'XL'" :info="dialogInfos[0]"></news-dialog>
			</el-col>
		</el-row>
		<br>
		<el-row type="flex" justify="center" :gutter="20">
			<el-col :span="6">
				<news-dialog :type="'M'" :info="dialogInfos[1]"></news-dialog>
			</el-col>
			<el-col :span="12">
				<news-dialog :type="'L'" :info="dialogInfos[2]"></news-dialog>
			</el-col>
		</el-row>
		<br>
		<el-row type="flex" justify="center" :gutter="20">
			<el-col :span="6">
				<news-dialog :type="'L'" :info="dialogInfos[3]"></news-dialog>
			</el-col>
			<el-col :span="6">
				<news-dialog :type="'L'" :info="dialogInfos[4]"></news-dialog>
			</el-col>
			<el-col :span="6">
				<news-dialog :type="'L'" :info="dialogInfos[5]"></news-dialog>
			</el-col>
		</el-row>
		<br>

		<h1>footer</h1>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import bCard from './components/cards/blogCard.vue'
	import hCard from './components/cards/homeCard.vue'
	import userCard from './components/cards/userCard.vue'
	import chooseCard from './components/cards/chooseCard.vue'
	import myHeader from './components/bars/header.vue'
	import newsCard from './components/cards/newsCard.vue'
	import mBanner from './components/swipers/banner.vue'
	import smBanner from './components/swipers/smallBanner.vue'
	import myFooter from './components/bars/footer.vue'
	import ftDialog from './components/dialogs/footDialog.vue'
	import newsDialog from './components/dialogs/newsDialog.vue'
	export default {
		name: "",
		components: {
			bCard,
			myHeader,
			userCard,
			mBanner,
			smBanner,
			hCard,
			myFooter,
			ftDialog,
			chooseCard,
			newsCard,
			newsDialog
		},
		data () {
			return {
				dialogInfos: [
					{
						picUrl: '../../../static/picHolder/street.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					},
					{
						picUrl: '../../../static/picHolder/p1.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					},
					{
						picUrl: '../../../static/picHolder/p2.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					},
					{
						picUrl: '../../../static/picHolder/p3.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					},
					{
						picUrl: '../../../static/picHolder/p4.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					},
					{
						picUrl: '../../../static/picHolder/p5.jpg',
						pubTime: +new Date(),
						mainTitle: 'A Better Way To Design For Retina in PhotoShop',
						cont: 'Madewith.unity.com profile and story creation is moving to Unity Connect,Madewith.unity.com profile and story creation is moving to Unity Connect',
					}
				]
			}
		},
		props: {},
		computed: {},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	h1{
		margin: 0;
		text-align: center;
	}
</style>
