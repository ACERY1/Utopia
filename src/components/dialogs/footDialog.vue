<!--TODO:这是一个足迹卡片-->
<template>
	<div class="footDialog">
		<el-row>
			<el-col :span="8">
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
							<span>{{info.authorName}}</span>
						</el-row>
						<el-row>
							<i class="el-icon-minus icon dvd"></i>
						</el-row>
						<span class="dlgTitle">
							{{info.mainTitle}}
						</span>
					</el-row>
				</div>
			</el-col>
			<el-col :span="16">
				<div class="footDialog-main">
					<div class="footDialog-main-pic">
						<img v-lazy="info.picUrl">
					</div>
					<div class="footDialog-main-cont">
						<div class="title">{{info.postTitle}}</div>
						<div class="mainCont">{{info.postCont}}</div>
						<div class="time">{{pubDate.year}}-{{pubDate.month}}-{{pubDate.date}}</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {parseTime} from '../../common/scripts/utils'
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			info: {
				type: Object,
				default: () => {
					return {
						authorName: "ACERY",
						mainTitle: "Hello world this is some test words",
						postTitle: 'TEST WORDS',
						postCont: "你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》你以为我会把你的爱情和车子、首饰相比吗？你以为我会把虚荣当作幸福吗？一个人心中没有爱情的时候可以满足于虚荣，但一旦有了爱情，虚荣就变得庸俗不堪了。——《茶花女》",
						picUrl: 'http://img.hb.aicdn.com/f688414f4798ce419f24859693d8e4736dc256c13bcc0-otRRlS_fw658',
						pubTime: 1502193579762
					}
				}
			}
		},
		computed: {
			pubDate (){
				let a = parseTime(this.info.pubTime)

				return {
					year: a.year,
					month: a.month,
					date: a.date
				}
			}
		},
		created () {
		},
		mounted () {
		},
		methods: {}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import "../../common/style/mixin";

	$height: 38rem;
	.footDialog {
		/*TODO：固定了高度*/
		/*width: 68rem;*/
		overflow: hidden;
		height: $height;
		background: $white;
		&-banner {
			box-sizing: border-box;
			padding: 1rem;
			height: $height;
			width: 100%;
			background: $userHolder;
			.mainTitle {
				color: $white;
				.username {
					color: $orange;
				}
				.dvd {
					margin-bottom: 1rem;
					color: $orange;
				}
			}
			.head {
				margin-bottom: $height/1.5;
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
				height: $height/5 *2;
				background: $userBg;
				overflow: hidden;
				img {
					height: 300%;
					width: 100%;
				}
			}
			&-cont {
				overflow: hidden;
				color: $fontClr;
				padding: 1.4rem;
				box-sizing: border-box;
				width: 100%;
				background: rgba(255, 255, 255, .2);
				height: $height/5*3;
				.title {
					margin-bottom: 1.2rem;
					font-size: 2rem;
				}
				.mainCont {
					letter-spacing: 2px;
					line-height: 1.8rem;
					font-size: 1.1rem;
				}
				.time{
					margin-top: 20px;
					float: right;
				}
			}
		}
	}
</style>
