var basicGame = {};

basicGame.menuState = function(game) {

};

basicGame.menuState.prototype = {

	preload: function() {
		this.load.image('playButton', 'assets/images/playButton.png');
		this.load.image('titleImage', 'assets/images/titleimage.png');
	},

	create: function() {
		this.stage.backgroundColor = "37A1D2";
		this.add.sprite(0, 0, 'titleImage');
		this.playButton = this.add.button(120, 370, 'playButton', this.startGame, this);
	},

	update: function() {
		//
	},

	startGame: function(pointer) {

		if (localStorage.getItem("user-name") == null) {
			do {
				var name = prompt("Please enter your name, maximum 15 characters.", "");
			}
			while (name.length > 15)
			localStorage.setItem("user-name", name);
			this.state.start('inside');
		} else if (localStorage.getItem("user-name") !== null) {
			confirmings = confirm("Your name is " + localStorage.getItem("user-name") + ", correct?");
			if (confirmings == false) {
				do {
					var name = prompt("Please enter your name, maximum 15 characters.", "");
				}
				while (name.length > 15)
				localStorage.setItem("user-name", name);
				this.state.start('inside');
			} else if (confirmings == true) {
				this.state.start('inside');
			}
		}
	}
};