<template>
	<div class="">
		<myHeader></myHeader>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(o, index) in 9" :key="o">
				<b-card :picUrl="1" :bTitle="2" :bIntro="3" :bTime="4"></b-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import bCard from './components/cards/blogCard.vue'
	import myHeader from './components/bars/header.vue'
	export default {
		name: "",
		components: {
			bCard,
			myHeader
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
</style>
