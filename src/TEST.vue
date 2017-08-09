<template>
	<div  style="">
	<div>
		<myHeader></myHeader>
		<mBanner class="testBox"></mBanner>
		<h-card></h-card>
		<sm-banner></sm-banner>
		<el-row >
			<el-col :span="18">
				<el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(o, index) in 9" :key="o">
					<b-card :picUrl="1" :bTitle="2" :bIntro="3" :bTime="4"></b-card>
				</el-col>
			</el-col>
			<el-col :span="6">
				<user-card></user-card>
			</el-col>
		</el-row>
		<news-card></news-card>
		<choose-card></choose-card>
		<el-row type="flex" justify="center">
			<el-col :span="12">
				<ft-dialog></ft-dialog>
			</el-col>
		</el-row>


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




		<my-footer></my-footer>
	</div>
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
				dialogInfos:[
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
	.testBox{
		/*box-sizing: content-box;*/
		padding-top: 6rem;
	}
</style>
