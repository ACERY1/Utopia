<template>
	<div class="footDialog">
		<el-row>
			<el-col :span="9">
				<div class="footDialog-banner">
					<el-row class="head">
						<el-col :span="16">
							<i class="el-icon-more icon"></i>
						</el-col>
						<el-col :span="8" class="title">
							足迹
						</el-col>
					</el-row>
					<el-row class="mainTitle">
						<el-row class="username">
							<span>{{userName}}</span>
						</el-row>
						<el-row>
							<i class="el-icon-minus icon dvd"></i>
						</el-row>
						<span class="dlgTitle">
							{{title1}}
						</span>
					</el-row>
				</div>
			</el-col>
			<el-col :span="15">
				<div class="footDialog-main">
					<div class="footDialog-main-pic">
						<img v-lazy="picUrl">
					</div>
					<div class="footDialog-main-cont">
						<div class="title">{{title2}}</div>
						<div class="mainCont">{{cont}}</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data () {
			return {
				userName: "Acery",
				title1: "Hello world this is some test words",
				picUrl:'http://img.hb.aicdn.com/f688414f4798ce419f24859693d8e4736dc256c13bcc0-otRRlS_fw658',
				title2: "TEST WORDS",
				cont:"你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》"
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
	@import "../../common/style/mixin";

	$height: 34rem;
	.footDialog {
		height: $height;
		background: #42b983;
		&-banner {
			box-sizing: border-box;
			padding: 1rem;
			height: $height;
			width: 100%;
			background: #2F3137;
			.mainTitle {
				color: $white;
				.username {
					color: $green;
				}
				.dvd {
					margin-bottom: 1rem;
					color: $green;
				}
			}
			.head {
				margin-bottom: $height/1.8;
			}
			.icon {
				font-size: 1.4rem;
				color: $white;
			}
			.title {
				@include allMidBox();
				color: $white;
			}
			.dlgTitle {
				font-size: 2rem;
			}
		}
		&-main {
			@include allMidBox();
			&-pic {
				width: 100%;
				height: $height/3;
				background: #5B5F6C;
				img{
					width: 100%;
				}
			}
			&-cont {
				padding: 1.4rem;
				box-sizing: border-box;
				width: 100%;
				background: #3b3b3b;
				height: $height/3*2;
				.title {
				}
				.mainCont {
				}
			}
		}
	}
</style>
