var game = new Phaser.Game(200, 150, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.spritesheet('dude', 'assets/ROBOT/spritesheetROBOT.png', 25, 25);
    game.load.image('background', 'assets/BACKGROUND AND TILES/background.png');

}

var player;
var facing = 'right';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
var wasLeft
var wasRight

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);


    game.time.desiredFps = 30;

    bg = game.add.tileSprite(0, 0, 200, 150, 'background');

    game.physics.arcade.gravity.y = 250;

    player = game.add.sprite(25, 25, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('idleLeft', [8, 9, 10, 11], 10, true);
    player.animations.add('idleRight', [0, 1, 2, 3], 10, true);
    player.animations.add('left', [12, 13, 14, 15], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [4, 5, 6, 7], 10 , true);
    player.animations.add('jumpRight', [36, 37, 38, 39], 10 , true);
    player.animations.add('jumpLeft', [44, 45, 46, 47], 10 , true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update() {
    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    // game.physics.arcade.collide(player, layer);

    if (player.body.velocity.x == 0) {
      facing = 'idle';

    }

    if (facing == 'left' && ( facing != 'idle' && facing != 'idleLeft' && facing != 'idleRight' )) {

      var wasRight = false;
    }
    if (facing == 'right' && ( facing != 'idle' && facing != 'idleLeft' && facing != 'idleRight' )) {

      var wasRight = true;
    }



    player.body.velocity.x = 0;
    if  (facing == 'idleRight') {
      player.body.velocity.x = 0;
      player.animations.play('idleRight');
      facing = 'idleRight'
    }

    if (facing == 'idleLeft') {
      player.body.velocity.x = 0;
      player.animations.play('idleLeft');
      facing = 'idleLeft'
    }

  if (facing == 'idle') {
    if (wasRight == true) {
      player.body.velocity.x = 0;
      player.animations.play('idleRight');
      facing = 'idleRight'
    }else{
      player.body.velocity.x = 0;
      player.animations.play('idleLeft');
      facing = 'idleLeft'
    }
  }

  if (cursors.left.isDown) {
    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer) {
      player.body.velocity.x = -25;
      player.body.velocity.y = -100;
      jumpTimer = game.time.now + 750;
      player.animations.play('jumpLeft');
      facing ='left';
    }else{
      player.body.velocity.x = -50;
      player.animations.play('left');
      facing = 'left';
    }
  }
  if (cursors.right.isDown) {
    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer) {
      player.body.velocity.x = 25;
      player.body.velocity.y = -100;
      jumpTimer = game.time.now + 750;
      player.animations.play('jumpRight');
      facing ='right';
    }else{
      player.body.velocity.x = 50;
      player.animations.play('right');
      facing = 'right';
    }
}







}
function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}
