var game = new Phaser.Game(560, 560, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('tilemap', 'assets/tilemaps/test3.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tilemaps/tileset.png');
	game.load.image('player', 'assets/images/player.png');

}
var player;
var cursors;
var map;
var layer;

function create() {
    map = game.add.tilemap('tilemap');
    map.addTilesetImage('basic', 'tiles');
	  
    layer = map.createLayer('Background');
	layer2 = map.createLayer('Walls');

    layer.resizeWorld();
	
	game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.setBoundsToWorld(true, true, true, true, false);
	
	map.setCollision(1, true, "Walls");
	game.physics.p2.convertTilemap(map, "Walls");
	
	
	player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
	game.physics.p2.enable(player);
	
	player.body.fixedRotation = true;
	
	player.body.clearShapes();  
	player.body.addRectangle(20, 0, 0, 0);
	
	cursors = game.input.keyboard.createCursorKeys();
	game.camera.follow(player);
	//player.body.debug = true;

}
function update() {

    player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }
	if (player.x > 248 && player.x < 311 && player.y < 25)
	{
		console.log("Door opened");
	}
}

function render() {

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);

}