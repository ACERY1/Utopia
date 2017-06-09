<template>
	<div  style="">
	<div>
		<myHeader></myHeader>
		<el-row class="testBox">
			<el-col :span="18">
				<el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(o, index) in 9" :key="o">
					<b-card :picUrl="1" :bTitle="2" :bIntro="3" :bTime="4"></b-card>
				</el-col>
			</el-col>
			<el-col :span="6">
				<user-card></user-card>
			</el-col>
		</el-row>
	</div>
	</div>
</template>

<script>
	import bCard from './components/cards/blogCard.vue'
	import myHeader from './components/bars/header.vue'
	import userCard from './components/cards/userCard.vue'
	export default {
		name: "",
		components: {
			bCard,
			myHeader,
			userCard
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
