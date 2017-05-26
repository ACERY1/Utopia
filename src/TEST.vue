<template>
	<div class="">
		<h1 style="text-align: center;">this is TEST page</h1>
	</div>
</template>

<script>
	import {test} from './service/getData'
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		computed: {},
		created () {
			test();
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
