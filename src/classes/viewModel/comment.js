/**
 * class comment
 */

// 回复
class Reply {
	constructor(userId, userIcon,commentId, replyId, cont, time) {
		this.content = cont;
		this.pubTime = time;
		this.userId = userId;
		this.replyId = replyId;
		this.userIcon = userIcon;
		this.commentId = commentId;
	}
}

// 评论
class Comment {
	constructor(userId,userIcon,commentId,cont, time) {
		this.content = cont;
		this.pubTime = time;
		this.userId = userId;
		this.userIcon =userIcon;
		this.commentId = commentId;
		this.replies = [];
	}
	pushReply (id,cont,time){
		let _reply = new Reply(this.userId,this.userIcon,this.commentId,id,cont,time);
		this.replies.push(_reply);
	}
}

export {Reply,Comment};
