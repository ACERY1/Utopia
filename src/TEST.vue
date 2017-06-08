<template>
	<div class="">
		<!--<h1>this is test page</h1>-->
		<el-row>

			<el-menu :default-active="activeIndex2" class="header" mode="horizontal" @select="handleSelect">
				<el-col :span="8">
					<el-menu-item index="1"></el-menu-item>
				</el-col>
				<el-col :span="8">
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
					</el-submenu>
				</el-col>
				<el-col :span="8">
					<el-menu-item index="3">订单管理</el-menu-item>
				</el-col>
			</el-menu>

		</el-row>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data () {
			return {
				activeIndex: '0',
				activeIndex2: '0'
			}
		},
		computed: {},
		created () {
		},
		mounted () {

		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "common/style/mixin";

	.header {
		background: #ffffff;
	}
</style>
