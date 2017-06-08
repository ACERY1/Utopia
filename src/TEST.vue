<template>
	<div class="">
		<my-header :links="links" :activeIndex="links[0].link"></my-header>
	</div>
</template>

<script>
	import myHeader from './components/bars/header.vue'
	export default {
		name: "",
		components: {
			myHeader
		},
		data () {
			return {
				links:[
					{name: 'HOME', link: 'homepage'},
					{name: 'CATEGORY', link: 'categories'},
					{name: 'IDEAS', link: 'ideas'},
					{name: 'CONTACT', link: 'contact'}
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
</style>
