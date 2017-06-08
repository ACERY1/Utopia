/**
 * user Class
 */

class normalUser {
	constructor(userName, userIcon, userId) {
		this.userName = userName;
		this.userIcon = userIcon;
		this.userId = userId;
		this.permission = 0;
	}

	comment() {
		return console.error('method from baseClass');
	}

	reply() {
		return console.error('method from baseClass');
	}

	praise() {
		return console.error('method from baseClass');
	}
}

class vipUser extends normalUser {
	constructor(userName, userIcon, userId) {
		super(userName, userIcon, userId);
		this.permission = 1;
	}

}

class admin extends normalUser {
	constructor(userName, userIcon, userId) {
		super(userName, userIcon, userId);
		this.permission = 2;
	}
}

class author extends admin{
	constructor(userName, userIcon, userId,intro,links) {
		super(userName, userIcon, userId);
		this.intro = intro;
		this.links = links;
	}
}
export {normalUser, vipUser, admin,author};
