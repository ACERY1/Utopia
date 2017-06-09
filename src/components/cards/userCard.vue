<template>
	<div class="userCard">
		<div class="userCard-userIcon">
			<div class="userCard-userIcon-placeHolder">
				<img v-lazy="userIcon" alt="">
			</div>
		</div>
		<div class="userCard-userName">{{userId.toUpperCase()}}</div>
		<div class="userCard-userIntro">{{userIntro}}</div>
		<div class="userCard-contact">
			<el-row :gutter="50">
				<el-col :span="8"><span class="iconfont  icons icon-github"></span></el-col>
				<el-col :span="8"><span class="iconfont  icons icon-icon1"></span></el-col>
				<el-col :span="8"><span class="iconfont  icons icon-qq"></span></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data () {
			return {}
		},
		props: {
			userId: {
				default: 'Alan'
			},
			userIcon: {
				default: 'http://img0.imgtn.bdimg.com/it/u=3618636960,2620182454&fm=26&gp=0.jpg'
			},
			userName: {
				default: 'null'
			},
			userIntro: {
				default: '泰勒·斯威夫特（Taylor Swift），1989年12月13日出生于美国宾夕法尼亚州，美国流行音乐、乡村音乐创作型女歌手'
			},
			gitAddress: {
				default: 'null'
			},
			codingAddress: {
				default: 'null'
			},
			qqAddress: {
				// 这个可以是二维码地址
				default: 'null'
			},
		},
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

	.icons {
		cursor: pointer;
		@include fontSizeColor(2rem, lighten($fontClr, 50%));
		@include allMidBox();
	}

	.userCard {
		height: 28rem;
		background-color: $userBg;
		&-userIcon {
			@include wh(100%, 12rem);
			@include allMidBox();
			&-placeHolder {
				padding: 1rem;
				@include wh(8rem, 8rem);
				background-color: $userHolder;
				box-shadow: darken($fontClr, 30%) 10px 8px 4px;
				border-radius: 100%;
				overflow: hidden;
				img {
					border-radius: 100%;
					height: 100%;
					width: 100%;
				}
			}
		}
		&-userName {
			@include allMidBox();
			@include wh(100%, 4rem);
			@include fontSizeColor(1.4rem, $bgClr);
			font-weight: 600;
			margin-top: -1rem;
		}
		&-userIntro {
			padding: 0 10%;
			@include wh(80%, 8rem);
			@include fontSizeColor(1rem, lighten($fontClr, 50%));
			overflow: hidden;
		}
		&-contact {
			padding: 0 10%;
			@include wh(80%, 4rem);
		}
	}


</style>
