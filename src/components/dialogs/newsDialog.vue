<template>
	<div class="newsDialog">
		<!--mainBox-->
		<div class="newsDialog-box1">
			<div class="newsDialog-box1-img"></div>
			<div class="newsDialog-box1-txt">
				<div class="newsDialog-box1-txt-time"></div>
				<div class="newsDialog-box1-txt-title"></div>
				<div class="newsDialog-box1-txt-cont"></div>
			</div>
		</div>
		<!--带大图的-->
		<div class="newsDialog-box2">
			<div class="newsDialog-box2-img"></div>
			<div class="newsDialog-box2-txt">
				<div class="newsDialog-box2-txt-time"></div>
				<div class="newsDialog-box2-txt-title"></div>
				<div class="newsDialog-box2-txt-cont"></div>
			</div>
		</div>
		<!--半图半文字-->
		<div class="newsDialog-box3">
			<div class="newsDialog-box3-img"></div>
			<div class="newsDialog-box3-txt">
				<div class="newsDialog-box3-txt-time"></div>
				<div class="newsDialog-box3-txt-title"></div>
				<div class="newsDialog-box3-txt-cont"></div>
			</div>
		</div>
		<!--全文字-->
		<div class="newsDialog-box4">
			<div class="newsDialog-box4-txt">
				<div class="newsDialog-box4-txt-time"></div>
				<div class="newsDialog-box4-txt-title"></div>
				<div class="newsDialog-box4-txt-cont"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import {parseTime,monthFilter} from '../../common/scripts/utils'
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
						picUrl:'',
						pubTime:+new Date(),
						mainTitle:'',
						cont:'',
					}
				}
			}
		},
		computed: {
			pubDate (){
				let a = parseTime(this.info.pubTime)
				return {
					year: a.year,
					month: monthFilter(a.month),
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
	.newsDialog{
		&-box1{
			&-img{}
			&-txt{
				&-time{}
				&-title{}
				&-cont{}
			}
		}
		&-box2{
			&-img{}
			&-txt{
				&-time{}
				&-title{}
				&-cont{}
			}
		}
		&-box3{
			&-img{}
			&-txt{
				&-time{}
				&-title{}
				&-cont{}
			}
		}
		&-box4{
			&-txt{
				&-time{}
				&-title{}
				&-cont{}
			}
		}

	}
</style>
