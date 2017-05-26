/**
 * mockJs配置文件
 * 配置node服务起本地服务拿数据
 * 必须解决跨域问题
 * 所需组件 http/mockJs/express
 */

let Mock = require('mockjs');
let express = require('express');
let staticUrl =	require('./staticUrl');
let staticData = require('./staticData');

const PORT = 3000;

let app = express();

app.get('/square/1', (req, res) => {
	let data = Mock.mock({
		"code": 0,
		"data": [{
			"trendId": 121,
			"userId": 139,
			"userNickName": "Sisyphus",
			"userIcon": "http://wx.qlogo.cn/mmopen/VNh9KzHdAdHX0NS6L5HhCnOt7AqOja93hibvhzR4eeqbhQDVrhClv7zrwW1wibS1bfibyiaD6jmdqpCLFdZt2xChM26KnkANCMjic/0",
			"trendContent": "先吃饭",
			"trendGoodNum": 0,
			"trendPublishDate": 1495601915000,
			"trendIsLike": false,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/8e1e974ca24f47218a358115b3fbc46c.jpg"}]
		}, {
			"trendId": 120,
			"userId": 130,
			"userNickName": "许天骄",
			"userIcon": "http://wx.qlogo.cn/mmopen/eJDFU8hdz1WKiaiasJX7GoO1T9u9mwjAfJayD62fiavLq7PKDNUoLYsaNP5C4oKmxt2WXNQicelEz2OvzYQiah92x5m0YkSG3HvyU/0",
			"trendContent": "(｢･ω･)｢嘿",
			"trendGoodNum": 1,
			"trendPublishDate": 1495358085000,
			"trendIsLike": true,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/44e806d4a97b48858a2b3161f2245406.jpg"}]
		}, {
			"trendId": 118,
			"userId": 129,
			"userNickName": "Ida  艾达",
			"userIcon": "http://wx.qlogo.cn/mmopen/fiaWR6KDFhM3KqKuSB1gNLibDDe5nb5k3ta83iaib5eQRUo5KoKHwd41NHlX5ibws0TQkxIvwOnOsNHEsZf5iatjDoOrib0vI68PycC/0",
			"trendContent": "abc",
			"trendGoodNum": 0,
			"trendPublishDate": 1495350640000,
			"trendIsLike": false,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/e2bb65b8549b434abed586eaaa9619f2.jpg"}]
		}, {
			"trendId": 117,
			"userId": 103,
			"userNickName": "睡觉的金鱼",
			"userIcon": "http://wx.qlogo.cn/mmopen/eJDFU8hdz1WKiaiasJX7GoOzNia8xw2gxibLoaSPpdtAdibEiafFV3ibFooO0IEwQicv0YrpWJL0Sn4P3nXj4MWicX1JndjylwF51X4Tz/0",
			"trendContent": "建议专心阅读的界面，增加一个横向翻页操作的小提示。习惯上下滚动阅读了，同时横屏翻页的操作有点意外。",
			"trendGoodNum": 0,
			"trendPublishDate": 1494928094000,
			"trendIsLike": false,
			"trendIsCollection": false
		}, {
			"trendId": 114,
			"userId": 120,
			"userNickName": "倚天照海",
			"userIcon": "http://wx.qlogo.cn/mmopen/hBUzPQYy57IjtysJ03ZUeFBibxnDv3tml71V7eTMQ0BMESXwNgMe2oIKv2ymtfym1dYvEYk8lkLf4Pg277DX7fl5har5CpQMo/0",
			"trendContent": "自控力这本书，棒棒哒，爱死小编啦",
			"trendGoodNum": 0,
			"trendPublishDate": 1494642454000,
			"trendIsLike": false,
			"trendIsCollection": false
		}, {
			"trendId": 113,
			"userId": 110,
			"userNickName": "仰望星空",
			"userIcon": "http://wx.qlogo.cn/mmopen/ZHK9X5JK58wzfBOJCoGicSHic8odH19YgDaf3vIEYlwcia6kkTT7oTyo02tibYgTllVfic8eJxtnKY22Fcufj71O1pHxXRdY7GibSz/0",
			"trendContent": "自我管理能力很重要。",
			"trendGoodNum": 1,
			"trendPublishDate": 1494572237000,
			"trendIsLike": false,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/3ee3894be23d43b5ad7ed6fe0397e1e0.jpg"}, {"pictureUrl": "http://img.yueneng.pro/170a9d504bdf4134b547cceb7f41d374.jpg"}]
		}, {
			"trendId": 112,
			"userId": 58,
			"userNickName": "带头大哥",
			"userIcon": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLCPVwIibWOIbVrzwJSjaVAlB9bzjdZ1bPtDrO0G6AX3O21Dbu7gFegEEy2MTtBwakuSY0HMQNsx2CA/0",
			"trendContent": "自我管理：每天坚持阅读半小时。",
			"trendGoodNum": 0,
			"trendPublishDate": 1494527219000,
			"trendIsLike": false,
			"trendIsCollection": false,
			"comments": [{
				"commentId": 128,
				"commentFromId": 123,
				"commentFromNickName": "天元",
				"commentFromIcon": "http://wx.qlogo.cn/mmopen/VNh9KzHdAdGxPXfMhqmosh4Gib3nNSDT5wmtpAsL5PjiamObRCfj4mSqfFn3fYNKDTo6S5Zjsgkem0Q7iaBKeuYLw/0",
				"commentGoodNum": 0,
				"commentContent": "深呼吸靠谱吗",
				"commentIsLike": false
			}],
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/e1253e7984714f1289d1f395a9b7a40a.jpg"}]
		}, {
			"trendId": 106,
			"userId": 59,
			"userNickName": "Await",
			"userIcon": "http://wx.qlogo.cn/mmopen/VNh9KzHdAdE8MNhzreMNYOpZxN08MK9RBgUEYBicTpopia0sPuPjmhsHa0IhYUqic2Hmgb4DruibmoibejUxXOicfNXQXbkbPk6jwt/0",
			"trendContent": "爱读书，更爱读书的人",
			"trendGoodNum": 0,
			"trendPublishDate": 1494430043000,
			"trendIsLike": false,
			"trendIsCollection": false,
			"comments": [{
				"commentId": 129,
				"commentFromId": 59,
				"commentFromNickName": "Await",
				"commentFromIcon": "http://wx.qlogo.cn/mmopen/VNh9KzHdAdE8MNhzreMNYOpZxN08MK9RBgUEYBicTpopia0sPuPjmhsHa0IhYUqic2Hmgb4DruibmoibejUxXOicfNXQXbkbPk6jwt/0",
				"commentGoodNum": 0,
				"commentContent": "show me the code",
				"commentIsLike": false
			}],
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/210d811a53ae4ed2bc9b2e80336dbdc8.jpg"}]
		}, {
			"trendId": 105,
			"userId": 58,
			"userNickName": "带头大哥",
			"userIcon": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLCPVwIibWOIbVrzwJSjaVAlB9bzjdZ1bPtDrO0G6AX3O21Dbu7gFegEEy2MTtBwakuSY0HMQNsx2CA/0",
			"trendContent": "每次阅读一本书，我总是有写点东西的想法，但是一直没有坚持下去。现在我决定在此坚持写读书笔记。希望小伙伴们都坚持写读书笔记，一起坚持下去。✌️",
			"trendGoodNum": 1,
			"trendPublishDate": 1494429740000,
			"trendIsLike": true,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/8d4987216cbf46ba8ec22d49bab296ce.jpg"}]
		}, {
			"trendId": 104,
			"userId": 58,
			"userNickName": "带头大哥",
			"userIcon": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLCPVwIibWOIbVrzwJSjaVAlB9bzjdZ1bPtDrO0G6AX3O21Dbu7gFegEEy2MTtBwakuSY0HMQNsx2CA/0",
			"trendContent": "今天开始跟着阅能书院学习《自控力》，我准备控制饮食，减掉多余的脂肪。立此为证。",
			"trendGoodNum": 1,
			"trendPublishDate": 1494429378000,
			"trendIsLike": true,
			"trendIsCollection": false,
			"comments": [{
				"commentId": 127,
				"commentFromId": 85,
				"commentFromNickName": "鬼谷",
				"commentFromIcon": "http://wx.qlogo.cn/mmopen/eJDFU8hdz1V3AEFfodsoWBXzJA2V2sg4qWyv386cAWmkQS3LoQ74Fp8vTY5bibCnVXxs1clUNgyLobH1xHDtYFWjhT5TvcVY2/0",
				"commentGoodNum": 2,
				"commentContent": "班长，",
				"commentIsLike": true
			}],
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/2c6da561aa864f65b464861db63d78c6.jpg"}]
		}, {
			"trendId": 103,
			"userId": 57,
			"userNickName": "StormMa",
			"userIcon": "http://wx.qlogo.cn/mmopen/eJDFU8hdz1WKiaiasJX7GoOw6WeGmcFpeEJh7vPTyGfrKPAPkQxnKUoiau2RIdFMmWib92CYksiaibKeTB821BPl85icYQ4SseiafJvJ/0",
			"trendContent": "占楼",
			"trendGoodNum": 1,
			"trendPublishDate": 1494427873000,
			"trendIsLike": true,
			"trendIsCollection": false,
			"pictures": [{"pictureUrl": "http://img.yueneng.pro/5716e83af3dc41efa67e3013c8a58f04.jpg"}]
		}],
		"msg": "success"
	});
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.send(data);
	res.end();
});



let server = app.listen(PORT,()=>{
	console.log('now listen at %d',PORT);
});



