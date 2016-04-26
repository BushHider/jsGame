basicGame.inState = function(game) {

};
var currentText = ["> ", "> ", "> ", "> ", "> ", "> ", "> ", "> "];
var toggleButton = false;
var lastPressed = false;

basicGame.inState.prototype = {

  preload: function() {

    this.load.tilemap('tilemap', 'assets/tilemaps/test.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tilemaps/tileset.png');
    this.load.spritesheet('player', 'assets/images/playerani.png', 23, 28, 28);
    this.load.image('quitGame', 'assets/images/qtt.png');
    this.load.image('alpha', 'assets/images/alpha.png');

  },

  create: function() {

    map = this.add.tilemap('tilemap');
    map.addTilesetImage('basic', 'tiles');

    layer = map.createLayer('Background');
    layer2 = map.createLayer('Walls');

    layer.resizeWorld();

    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.setBoundsToWorld(true, true, true, true, false);

    map.setCollision(1, true, "Walls");
    this.physics.p2.convertTilemap(map, "Walls");

    player = this.add.sprite(this.world.centerX, 45, 'player');
    player.animations.add('walkdown', [0, 1, 2, 3, 4, 5, 6, 7], 20);
    player.animations.add('walkup', [8, 9, 10, 11, 12, 13, 14, 15], 20);
    player.animations.add('walkright', [16, 17, 18, 19, 20, 21], 20);
    player.animations.add('walkleft', [24, 25, 26, 27, 28, 29, 29], 20);
    this.physics.p2.enable(player);

    player.body.fixedRotation = true;

    player.body.clearShapes();
    player.body.addRectangle(20, 0, 0, 0);

    var usernameStyle = {
      font: "14px Arial",
      fill: "#000000",
      backgroundColor: "#ffff00"
    };

    var username = localStorage.getItem("user-name");
    usernametext = this.add.text(0, 0, username, usernameStyle);
    usernametext.anchor.set(0.5);

    cursors = this.input.keyboard.createCursorKeys();
    this.camera.follow(player);
    //player.body.debug = true;
    this.playButton = this.add.button(this.camera.x, this.camera.y, 'quitGame', this.endGame, this);
    this.playButton.fixedToCamera = true;
    this.playButton.cameraOffset.setTo(-2, 0);

    alpha = this.add.sprite(5, 405, 'alpha');
    alpha.fixedToCamera = true;
    alpha.cameraOffset.setTo(5, 405);

    var consoleStyle = {
      font: "14px Arial",
      fill: "#ffffff"
    };
    var consoleHeaderStyle = {
      font: "16px Arial",
      fill: "#ffffff"
    };
    var consoleUnderHeaderStyle = {
      font: "16px Arial",
      fill: "#000000"
    };

    consoleText1 = this.add.text(0, 0, currentText[1], consoleStyle);
    consoleText1.fixedToCamera = true;
    consoleText1.cameraOffset.setTo(6, 535);

    consoleText2 = this.add.text(0, 0, currentText[0], consoleStyle);
    consoleText2.fixedToCamera = true;
    consoleText2.cameraOffset.setTo(6, 520);

    consoleText3 = this.add.text(0, 0, currentText[2], consoleStyle);
    consoleText3.fixedToCamera = true;
    consoleText3.cameraOffset.setTo(6, 505);

    consoleText4 = this.add.text(0, 0, currentText[3], consoleStyle);
    consoleText4.fixedToCamera = true;
    consoleText4.cameraOffset.setTo(6, 490);

    consoleText5 = this.add.text(0, 0, currentText[4], consoleStyle);
    consoleText5.fixedToCamera = true;
    consoleText5.cameraOffset.setTo(6, 475);

    consoleText6 = this.add.text(0, 0, currentText[5], consoleStyle);
    consoleText6.fixedToCamera = true;
    consoleText6.cameraOffset.setTo(6, 460);

    consoleText7 = this.add.text(0, 0, currentText[6], consoleStyle);
    consoleText7.fixedToCamera = true;
    consoleText7.cameraOffset.setTo(6, 445);

    consoleText8 = this.add.text(0, 0, currentText[7], consoleStyle);
    consoleText8.fixedToCamera = true;
    consoleText8.cameraOffset.setTo(6, 430);

    consoleHeader = this.add.text(0, 0, "Console", consoleHeaderStyle);
    consoleHeader.fixedToCamera = true;
    consoleHeader.cameraOffset.setTo(250, 405);

    consoleUnderHeader = this.add.text(0, 0, "_____________________________________________________________", consoleUnderHeaderStyle);
    consoleUnderHeader.fixedToCamera = true;
    consoleUnderHeader.cameraOffset.setTo(5, 408);

    // this.changeText("1");
    // this.changeText("2");
    // this.changeText("3");
    // this.changeText("4");
    // this.changeText("5");
    // this.changeText("6");
    // this.changeText("7");
    // this.changeText("123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_");
  },

  update: function() {
    // if (cursors.down.isDown)
    this.changeText(" ");
    this.changeText(" ");
    this.changeText(" ");
    this.changeText("Player x: " + Math.round(player.x));
    this.changeText("Player y: " + Math.round(player.y));
    this.changeText(" ");
    this.changeText(" ");
    this.changeText(" ");

    usernametext.x = Math.floor(player.x);
    usernametext.y = Math.floor(player.y - 30);

    player.body.setZeroVelocity();

    if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
      player.body.moveUp(170);
      player.animations.play('walkup');
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
      player.body.moveDown(170);
      player.animations.play('walkdown');
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      player.body.moveLeft(170);
      player.animations.play('walkleft');
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
      player.body.moveRight(170);
      player.animations.play('walkright');
    }
    if (player.x > 248 && player.x < 311 && player.y < 25) {
      console.log("Door opened");
      this.state.start('outside');
    }
    var tkey = this.input.keyboard.isDown(Phaser.Keyboard.T);
    if (tkey && !lastPressed) {
      if (toggleButton == true) {
        toggleButton = false;
      } else {
        toggleButton = true;
      }
    }
    lastPressed = tkey;
    this.consoleHide();
  },

  endGame: function(pointer) {
    this.state.start('menu');
  },

  changeText: function(text) {

    var linelength = 83;
    var index = 0;

    if (text.length > 573) {
      this.changeText("Error 404 - INTERNAL SERVER ERROR");
    } else {
      while (index < text.length) {
        consolestring = text.substr(index, linelength);
        currentText.pop();
        if (index == 0) {
          graham = "> ";
        } else {
          graham = "   ";
        }
        currentText.unshift(graham + consolestring);
        index += linelength;
      }

      //currentText.unshift("> " + text);
      //currentText.pop();


      consoleText1.setText(currentText[0]);
      consoleText2.setText(currentText[1]);
      consoleText3.setText(currentText[2]);
      consoleText4.setText(currentText[3]);
      consoleText5.setText(currentText[4]);
      consoleText6.setText(currentText[5]);
      consoleText7.setText(currentText[6]);
      consoleText8.setText(currentText[7]);
    }
  },

  consoleHide: function(pointer) {
    if (toggleButton == false) {
      consoleText1.visible = false;
      consoleText2.visible = false;
      consoleText3.visible = false;
      consoleText4.visible = false;
      consoleText5.visible = false;
      consoleText6.visible = false;
      consoleText7.visible = false;
      consoleText8.visible = false;
      consoleHeader.visible = false;
      consoleUnderHeader.visible = false;
      alpha.visible = false;
    } else {
      consoleText1.visible = true;
      consoleText2.visible = true;
      consoleText3.visible = true;
      consoleText4.visible = true;
      consoleText5.visible = true;
      consoleText6.visible = true;
      consoleText7.visible = true;
      consoleText8.visible = true;
      consoleHeader.visible = true;
      consoleUnderHeader.visible = true;
      alpha.visible = true;
    }
  }

};