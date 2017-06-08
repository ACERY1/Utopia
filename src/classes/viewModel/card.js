/**
 * class homeCard
 */

// 首页基本卡片
class baseCard{
	constructor(title,cont,picUrl){
		this.title = title;
		this.content = cont;
		this.picUrl = picUrl;
	}
}

// 不同分类下的卡片
class smallCard extends baseCard{
	constructor(title,cont,picUrl,pubTime,tag){
		super(title,cont,picUrl);
		this.pubTime = pubTime; // 毫秒数
		this.tag = tag;
	}
}

// 用户卡片
class userCard extends baseCard {
	constructor(title,cont,picUrl,usrInfo){
		super(title,cont,picUrl);
		this.userName = usrInfo.userName;
		this.userId = usrInfo.userId;
		this.userIcon = usrInfo.userIcon;
	}
}

export {baseCard,userCard,smallCard};

