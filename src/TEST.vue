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
			newsCard
		},
		data () {
			return {}
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
