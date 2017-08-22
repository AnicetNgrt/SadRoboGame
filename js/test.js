var game = new Phaser.Game(315, 220, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render });
game.antialias = false;
function preload() {

    game.load.audio('fight',['assets/fight.ogg']);
    game.load.audio('bruh',['assets/blueWin.ogg']);
    game.load.audio('bruh2',['assets/redWin.ogg']);
    game.load.audio('hiting',['assets/hit.mp3']);
    game.load.audio('laser',['assets/laser1.ogg']);
    game.load.audio('laser2',['assets/laser1.mp3']);
    game.load.audio('laser3',['assets/laser3.mp3']);
    game.load.audio('laser4',['assets/laser5.mp3']);
    game.load.audio('snd1', ['assets/stone.mp3']);
    game.load.audio('snd2', ['assets/stone2.mp3']);
    game.load.audio('snd3', ['assets/stone3.mp3']);
    game.load.audio('snd4', ['assets/stone.mp3']);
    game.load.spritesheet('dude', 'assets/ROBOT/spritesheetROBOT.png', 25, 25);
    game.load.spritesheet('dude2', 'assets/ROBOT/spritesheetROBOT2.png', 25, 25);
    game.load.image('background', 'assets/BACKGROUND AND TILES/background.png');
    game.load.image('background2', 'assets/BACKGROUND AND TILES/background2.png');
    game.load.image('background4', 'assets/BACKGROUND AND TILES/background4.png');
    game.load.image('sight2', 'assets/sight2.png');
    game.load.image('sight', 'assets/sight.png');
    game.load.image('sightFar', 'assets/sightFAR.png');
    game.load.image('hitmarkerr','assets/hitmarker.png');
    game.load.image('hitmarkerr2','assets/hitmarker.png');
    game.load.spritesheet('laserrSprite','assets/laser.png', 11, 11);
    game.load.spritesheet('laserrSprite2','assets/laser2.png', 11, 11);
    game.load.image('menuB', 'assets/BACKGROUND AND TILES/menuBLUE.png');
    game.load.image('menuP', 'assets/BACKGROUND AND TILES/menuPRIN.png');
    game.load.image('menuR', 'assets/BACKGROUND AND TILES/menuRED.png');
    game.load.image('menuI', 'assets/BACKGROUND AND TILES/inputsettings.png');
    game.load.image('menuN', 'assets/BACKGROUND AND TILES/notaBene.png');
    game.load.image('menuI2', 'assets/BACKGROUND AND TILES/inputsettings2.png');
    game.load.image('limite', 'assets/limite.png');
    game.load.image('limiteV', 'assets/limite2.png');
    game.load.image('heart', 'assets/cr/cr10.png');
}

var verou3 = true; var cherche; var ixe; var igrec;
var saveSight; var verou2; var aimLengh = 0.055; var angle;
var droiteA; var droiteB; var sight; var player;
var facing = 'right'; var jumpTimer = 0; var cursors;
var jumpButton; var bg; var wasLeft; var wasRight;
var wasJump; var needed; var yolo = true; var ssss;
var aaaa; var dddd; var wwww; var sightFar; var aimX = 30;
var aimY = 30; var qqqq; var zzzz; var aimAcc = 0.1;
var laser; var hitmarker; var laserSprite; var aimTimer = 0; var verou4 = true;
var life = 10; var playerTrueY; var playerTrueX;
var menuBlue; var menuRed; var cr; var angleHeart; var anglePlayer; var droiteC; var droiteD; var droiteE; var droiteG;
var pad1; var pad2; var verou7 = true;
var verou5 = true; var limite; var limite2; var limite3; var limite4;
var verou6 = true; var menuN;
var verou32 = true; var cherche2; var ixe2; var igrec2;
var saveSight2; var verou22; var aimLengh2 = 0.055; var angle2;
var droiteA2; var droiteB2; var sight2; var player2;
var facing2 = 'left'; var jumpTimer2 = 0; var aim2X = 30;
var jumpButton2; var wasLeft2; var wasRight2; var wwd = true; var zzd = true; var iid = true;
var wasJump2; var needed2; var yolo2 = true; var sightFar2;
var aim2Y = 30; var aimAcc2 = 0.1; var laser2;
var hitmarker2; var laserSprite2; var aimTimer2 = 0; var verou42 = true;
var player2TrueY; var player2TrueX; var menuPrin; var entere;
var hitSnd; var menuIndex = 1; var actionTimer = 0;
var life2 = 10; var heartTime; var jumpNow = false; var runLeftNow = false; var runRightNow = false; var shootHeartNow = false; var shootPlayerNow = false;
var stepId2 = 1; var pppp; var iaDoId = 1; verou11 = true;
var snd1; var up; var down; var left; var right;
var snd2; var up2; var down2; var left2; var right2;
var zzzz2; var qqqq2; var dddd2; var ssss2; var tttt; var ffff; var gggg; var hhhh; var iiii; var kkkk; var llll; var jjjj;
var snd3; var menuInput; var menuInput2;
var snd4; var verou8 = true; var verou10 = true;
var bruh; var aimReset = 0; var aimReset2 = 0;
var bruh2; var text; var text2; var isIa = false;
var sndFight; var stepId = 1; var alpha; var omega;
var randomizer; var terminus; var limiteCool
var randomizer3; var alpha2; var omega2;

function domInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPlayer2() {
  player2 = game.add.sprite(275, 25, 'dude2');
  game.physics.enable(player2, Phaser.Physics.ARCADE);

  player2.body.bounce.y = 0.2;
  player2.body.collideWorldBounds = true;
  player2.body.setSize(20, 32, 5, 16);
  player2.setSmoothingEnabled = false;
  player2.smoothed = false;

  player2.animations.add('idleLeft', [8, 9, 10, 11], 5, true);
  player2.animations.add('idleRight', [0, 1, 2, 3], 5, true);
  player2.animations.add('left', [12, 13, 14, 15], 10, true);
  player2.animations.add('turn', [4], 20, true);
  player2.animations.add('right', [4, 5, 6, 7], 10 , true);
  player2.animations.add('jumpRight', [36, 37, 38, 39], 15 , true);
  player2.animations.add('jumpLeft', [44, 45, 46, 47], 15 , true);

}

function createPlayer() {
  player = game.add.sprite(15, 25, 'dude');
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = true;
  player.body.setSize(20, 32, 5, 16);
  player.setSmoothingEnabled = false;
  player.smoothed = false;

  player.animations.add('idleLeft', [8, 9, 10, 11], 5, true);
  player.animations.add('idleRight', [0, 1, 2, 3], 5, true);
  player.animations.add('left', [12, 13, 14, 15], 10, true);
  player.animations.add('turn', [4], 20, true);
  player.animations.add('right', [4, 5, 6, 7], 10 , true);
  player.animations.add('jumpRight', [36, 37, 38, 39], 15 , true);
  player.animations.add('jumpLeft', [44, 45, 46, 47], 15 , true);
}

function createInputs() {
  game.input.gamepad.start();
  pad1 = game.input.gamepad.pad1;
  pad2 = game.input.gamepad.pad2;



  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.X);
  jumpButton2 = game.input.keyboard.addKey(Phaser.Keyboard.COMMA);
  pppp = game.input.keyboard.addKey(Phaser.Keyboard.P);
  wwww = game.input.keyboard.addKey(Phaser.Keyboard.W);
  tttt = game.input.keyboard.addKey(Phaser.Keyboard.T);
  ffff = game.input.keyboard.addKey(Phaser.Keyboard.F);
  gggg = game.input.keyboard.addKey(Phaser.Keyboard.G);
  hhhh = game.input.keyboard.addKey(Phaser.Keyboard.H);
  iiii = game.input.keyboard.addKey(Phaser.Keyboard.I);
  kkkk = game.input.keyboard.addKey(Phaser.Keyboard.K);
  jjjj = game.input.keyboard.addKey(Phaser.Keyboard.J);
  llll = game.input.keyboard.addKey(Phaser.Keyboard.L);
  aaaa = game.input.keyboard.addKey(Phaser.Keyboard.A);
  ssss = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dddd = game.input.keyboard.addKey(Phaser.Keyboard.D);
  zzzz = game.input.keyboard.addKey(Phaser.Keyboard.Z);
  qqqq = game.input.keyboard.addKey(Phaser.Keyboard.Q);
  entere = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  laser = new Phaser.Line(player.x, player.y, sight.x, sight.y);
  laser2 = new Phaser.Line(player2.x, player2.y, sight2.x, sight2.y);




}
function wd() {
  wwd = true;
}
function zd() {
  zzd = true;
}
function id() {
  iid = true;
}
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    stepId = 1;

    var randomizer3 = Math.random();
    if (randomizer3 <= 0.3333) {
      bg = game.add.tileSprite(0, 0, 315, 220, 'background');
    }else if(randomizer3 <= 0.7666 ) {
      bg = game.add.tileSprite(0, 0, 315, 220, 'background2');
    }else{
      bg = game.add.tileSprite(0, 0, 315, 220, 'background4');
    }

    sight = game.add.sprite(0, 0, 'sight');

    sight2 = game.add.sprite(0, 0, 'sight2');

    game.physics.arcade.gravity.y = 150;


    laserSprite = game.add.sprite(100000,100000,'laserrSprite');

    laserSprite2 = game.add.sprite(100000,100000,'laserrSprite2');

    game.physics.enable(laserSprite, Phaser.Physics.ARCADE);

    laserSprite.body.collideWorldBounds = false;
    laserSprite.body.setSize(10, 10, 5, 5);

    laserSprite.animations.add('laze', [0,1], 20, true);

    game.physics.enable(laserSprite2, Phaser.Physics.ARCADE);

    laserSprite2.body.collideWorldBounds = false;
    laserSprite2.body.setSize(10, 10, 5, 5);

    laserSprite2.animations.add('laze', [0,1], 20, true);








    game.time.desiredFps = 60;

    limite1 = game.add.sprite(600,600,'limite');
    limite2 = game.add.sprite(600,600,'limite');
    limite3 = game.add.sprite(600,600,'limiteV');
    limite4 = game.add.sprite(600,600,'limiteV');

    createPlayer2();
    createPlayer();
    createInputs();

    playerTrueY = player.y + 8
    playerTrueX = player.x + 8
    player2TrueY = player2.y + 8
    player2TrueX = player2.x + 8

    hitmarker = game.add.sprite(0,0, 'hitmarkerr');
    hitmarker2 = game.add.sprite(0,0, 'hitmarkerr2');
    text2 = game.add.text(32, 52, "", { font: "bold 15px Arial", fill: "#ffffff" });
    text = game.add.text(32, 32, "", { font: "bold 15px Arial", fill: "#ffffff" });
    text.stroke = '#0000dd';
    text.strokeThickness = 2;
    text2.stroke = '#dd0000';
    text2.strokeThickness = 2;

    cr = game.add.sprite(3000, 3000, 'heart');

    hitmarker.alpha = 0;
    hitmarker2.alpha = 0;
    menuN = game.add.sprite(0,0, 'menuN');
    menuInput = game.add.sprite(0,0, 'menuI');
    menuInput2 = game.add.sprite(0,0, 'menuI2');
    menuPrin = game.add.sprite(0,0, 'menuP');
    menuBlue = game.add.sprite(0,0, 'menuB');
    menuRed = game.add.sprite(0,0, 'menuR');


    menuBlue.alpha = 0;
    menuRed.alpha = 0;
    menuInput.alpha = 255;
    menuInput2.alpha = 255;

    snd1 = game.add.audio('snd1');
    snd2 = game.add.audio('snd2');
    snd3 = game.add.audio('snd3');
    snd4 = game.add.audio('snd4');
    laserSnd = game.add.audio('laser');
    laserSnd2 = game.add.audio('laser2');
    laserSnd3 = game.add.audio('laser3');
    laserSnd4 = game.add.audio('laser4');

    hitSnd = game.add.audio('hiting');
    bruh = game.add.audio('bruh');
    bruh2 = game.add.audio('bruh2');
    sndFight = game.add.audio('fight');


    snd4.volume = 0.15;
    snd1.volume = 0.15;
    snd2.volume = 0.15;
    snd3.volume = 0.15;
    laserSnd.volume = 0.15;
    laserSnd2.volume = 0.15;
    laserSnd3.volume = 0.15;
    laserSnd4.volume = 0.15;
    hitSnd.volume = 0.2;


    game.physics.enable(cr, Phaser.Physics.ARCADE);
    cr.body.collideWorldBounds = false;
    cr.body.setSize(10, 10, 5, 5);
    cr.body.allowGravity = false;

    if (verou10 == true) {
      snd1.onStop.add(soundStopped, this);
      snd2.onStop.add(soundStopped, this);
      snd3.onStop.add(soundStopped, this);
      snd4.onStop.add(soundStopped, this);
      wwww.onDown.add(wd, this);
      zzzz.onDown.add(zd, this);
      iiii.onDown.add(id, this);
      pppp.onDown.add(iaNotIa, this);
      entere.onDown.add(indexPlus, this);
      verou10 = false;
    }


}

function iaNotIa() {
  switch (isIa) {
    case true :
      isIa = false;
      break;
    case false :
      isIa = true;
      break;
  }
}

function iaThink() {
  if (isIa == true) {
    switch (iaDoId) {
      case 1:
        iaDoId = domInt(2,7);
        runLeftNow = false;
        runRightNow = false;
        jumpNow = false;
        shootHeartNow = false;
        shootPlayerNow = false;
        break;
      case 2:
        if (actionTimer < game.time.now && verou11 == true) {
          actionTimer = game.time.now + domInt(800, 3000);
          verou11 = false;
          runLeftNow = false;
          jumpNow = false;
        }else if (actionTimer > game.time.now && player2.x > 280) {
          verou11 = true;
          iaDoId = domInt(3,3);
          return;
        }else if (actionTimer > game.time.now && player2.x < 280) {
          runLeftNow = false;
          runRightNow = true;
        }else if (actionTimer < game.time.now) {
          verou11 = true;
          iaDoId = domInt(2,7);
        }

        break;
      case 3:
        if (actionTimer < game.time.now && verou11 == true) {
          actionTimer = game.time.now + domInt(800, 3000);
          verou11 = false;
          runRightNow = false;
          jumpNow = false;
        }else if (actionTimer > game.time.now && player2.x < 30) {
          verou11 = true;
          iaDoId = domInt(2,2);
          return;
        }else if (actionTimer > game.time.now && player2.x > 30) {
          runRightNow = false;
          runLeftNow = true;
        }else if (actionTimer < game.time.now) {
          verou11 = true;
          iaDoId = domInt(2,7);
        }

        break;
      case 4:
        jumpNow = true;
        iaDoId = domInt(2,7);
        break;
      case 5:
        shootPlayerNow = true;
        jumpNow = false;
        iaDoId = domInt(2,7);
        break;
      case 6:
        shootPlayerNow = true;
        jumpNow = false;
        iaDoId = domInt(2,7);
        break;
      case 7:
        jumpNow = true;
        iaDoId = domInt(2,7);
        break;
    }
  }else{
    runLeftNow = false;
    runRightNow = false;
    jumpNow = false;
    shootHeartNow = false;
    shootPlayerNow = false;
    iaDoId = 1;
  }
}





function indexPlus() {
  if (menuIndex == 4) {
    sndFight.play();
  }
  if (menuIndex < 5) {
    menuIndex++;
    console.log("plus un");
  }else if (menuIndex != 5) {
    menuIndex = 1;
  }
}



function soundStopped() {
  verou6 = true;
}
function heartForP1() {
  life++;
  cr.x = 1000;
  cr.y = 1000;
}
function heartForP2() {
  life2++;
  cr.x = 1000;
  cr.y = 1000;
}

function hit () {
  if (laserSprite2.x <= player.x) {
      player.angle = angle2;
      game.physics.arcade.velocityFromAngle(player.angle, 100, player.body.velocity);
      player.angle = 0;
    }else if (laserSprite2.x > player.x) {
      player.angle = angle2;
      game.physics.arcade.velocityFromAngle(player.angle, -100, player.body.velocity);
      player.angle = 0;
    }

  hitmarker.x = playerTrueX;
  hitmarker.y = playerTrueY;
  hitmarker.alpha = 255;
  life = life-1;
  hitSnd.play();
  laserSprite2.x = 1000
  laserSprite2.y = 1000
}


function hit2 () {
  if (laserSprite.x <= player2.x) {
      player2.angle = angle;
      game.physics.arcade.velocityFromAngle(player2.angle, 100, player2.body.velocity);
      player2.angle = 0;
    }else if (laserSprite.x > player2.x) {
      player2.angle = angle;
      game.physics.arcade.velocityFromAngle(player2.angle, -100, player2.body.velocity);
      player2.angle = 0;
    }


  hitmarker2.x = player2TrueX;
  hitmarker2.y = player2TrueY;
  hitmarker2.alpha = 255;
  life2 = life2-1;
  hitSnd.play();
  laserSprite.x = 1000
  laserSprite.y = 1000
}

function checkOverlap () {
  game.physics.arcade.collide(player, laserSprite2, hit, null, this);
  game.physics.arcade.collide(cr, laserSprite2, heartForP2, null, this);
}


function checkOverlap1 () {
  game.physics.arcade.collide(player2, laserSprite, hit2, null, this);
  game.physics.arcade.collide(cr, laserSprite, heartForP1, null, this);
}


function sleep(milliseconds) {
  var start = (new Date().getTime());
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function mooveOK() {
  if (facing == 'right' && yolo == true) {
      wasRight = true;
      wasLeft = false;
      yolo = false;

  }else if (facing == 'left' && yolo == true) {
      wasLeft = true;
      wasRight = false;
      yolo = false;
  }





  player.body.velocity.x = 0;

  if (qqqq.isDown || aaaa.isDown || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
  {
      player.body.velocity.x = -50;
      yolo = true;
      if (wasJump != true) {

          player.animations.play('left');
          facing = 'left';
      }
  }
  else if (dddd.isDown || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1))
  {
      console.log(pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1);
      yolo = true;
      player.body.velocity.x = 50;

      if (wasJump != true) {

          player.animations.play('right');
          facing = 'right';
      }
  }



  if ((zzzz.isDown || wwww.isDown || pad1.justPressed(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER))  && player.body.onFloor() && game.time.now > jumpTimer && player.body.velocity.x != 0)
  {
      yolo = true;
      player.body.velocity.y = -210;
      jumpTimer = game.time.now + 1400;
      wasJump = true;
  }

  if (game.time.now < jumpTimer) {
      if (facing == 'left' || wasLeft == true) {
          player.animations.play('jumpLeft');
          facing == 'left';
      }


     if (facing == 'right' || wasRight == true) {
          player.animations.play('jumpRight');
          facing == 'right';
      }



  }else if (wasJump == true){
      player.body.velocity.x = 0;
  }

  if ((zzzz.isDown || pad1.justPressed(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER) || wwww.isDown) && game.time.now > jumpTimer - 800 && !player.body.onFloor() && (wwd == true || zzd == true) ) {
    player.body.velocity.y = 20000/player.y;
    jumpTimer = game.time.now;
    zzd = false;
    wwd = false;
  }

  if (player.body.velocity.x == 0 || player.body.velocity.y == 0) {
      if (wasLeft == true) {
          wasJump = false;
          player.animations.play('idleLeft');
      }else if (wasRight == true) {
          wasJump = false;
          player.animations.play('idleRight');
      }


  }
}

function mooveOK2 () {

  if (facing2 == 'right' && yolo2 == true) {
      wasRight2 = true;
      wasLeft2 = false;
      yolo2 = false;

  }else if (facing2 == 'left' && yolo2 == true) {
      wasLeft2 = true;
      wasRight2 = false;
      yolo2 = false;
  }

  player2.body.velocity.x = 0;

  if (jjjj.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1 || runLeftNow == true)
  {
      player2.body.velocity.x = -50;
      yolo2 = true;
      if (wasJump2 != true) {

          player2.animations.play('left');
          facing2 = 'left';
      }
  }
  else if (llll.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1 || runRightNow == true)
  {
      yolo2 = true;
      player2.body.velocity.x = 50;

      if (wasJump2 != true) {

          player2.animations.play('right');
          facing2 = 'right';
      }
  }


  if ((iiii.isDown || pad2.justPressed(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER) || jumpNow == true) && player2.body.onFloor() && game.time.now > jumpTimer2 && player2.body.velocity.x != 0)
  {
      yolo2 = true;
      player2.body.velocity.y = -210;
      jumpTimer2 = game.time.now + 1400;
      wasJump2 = true;
  }

  if (game.time.now < jumpTimer2) {
      if (facing2 == 'left' || wasLeft2 == true) {
          player2.animations.play('jumpLeft');
          facing2 == 'left';
      }


     if (facing2 == 'right' || wasRight2 == true) {
          player2.animations.play('jumpRight');
          facing2 == 'right';
      }



  }else if (wasJump2 == true){
      player2.body.velocity.x = 0;
  }

  if ((iiii.isDown || pad2.justPressed(Phaser.Gamepad.XBOX360_RIGHT_TRIGGER)) && game.time.now > jumpTimer2 - 800 && !player2.body.onFloor() && iid == true ) {
    player2.body.velocity.y = 20000/player2.y;
    jumpTimer2 = game.time.now;
    iid = false;
  }


  if (player2.body.velocity.x == 0 || player2.body.velocity.y == 0) {
      if (wasLeft2 == true) {
          wasJump2 = false;
          player2.animations.play('idleLeft');
      }else if (wasRight2 == true) {
          wasJump2 = false;
          player2.animations.play('idleRight');
      }


  }

}







function shooting2 () {
  if (jumpButton2.isDown || pad2.isDown(Phaser.Gamepad.XBOX360_LEFT_TRIGGER) || shootPlayerNow == true) {

   if (verou42 = true) {
    verou42 = false;
    if (shootPlayerNow == true) {
      aimTimer2 = game.time.now + domInt(1200,1500);
    }else{
      aimTimer2 = game.time.now + 300;
    }

    var randomizer2 = Math.random();
    if (randomizer2 <= 0.25) {
      laserSnd.play();
    }else if(randomizer2 <= 0.5 ) {
      laserSnd2.play();
    }else if(randomizer2 <= 0.75) {
      laserSnd3.play();
    }else{
      laserSnd4.play();
    }
   }




    laserSprite2.x = player2TrueX;
    laserSprite2.y = player2TrueY;

    droiteA2 = sight2.y - player2TrueY;
    droiteB2 = sight2.x - player2TrueX;
    droiteC = player.y - player2TrueY;
    droiteD = player.x - player2TrueX;
    angle2 = Math.atan(droiteA2/droiteB2)*180/Math.PI;
    anglePlayer = Math.atan(droiteC/droiteD)*180/Math.PI;




    if (shootPlayerNow == false) {
      if (sight2.x <= player2.x) {
        laserSprite2.angle = angle2;
        game.physics.arcade.velocityFromAngle(laserSprite2.angle, -1000, laserSprite2.body.velocity);
        verou42 = true;
        aim2Y = aim2Y + domInt(7, 25);
        aim2X = aim2X - domInt(-5, 5);
      }else if (sight2.x > player2.x) {
        laserSprite2.angle = angle2

          game.physics.arcade.velocityFromAngle(laserSprite2.angle, 1000, laserSprite2.body.velocity);
        verou42 = true;
        aim2Y = aim2Y + domInt(7, 25);
        aim2X = aim2X - domInt(-5, 5);
      }
    }
    if (shootPlayerNow == true) {
      if (player.x <= player2.x) {
        laserSprite2.angle = anglePlayer;
        game.physics.arcade.velocityFromAngle(laserSprite2.angle, -350, laserSprite2.body.velocity);
        verou42 = true;
        aim2Y = aim2Y + domInt(7, 25);
        aim2X = aim2X - domInt(-5, 5);
      }else if (player.x > player2.x) {
        laserSprite2.angle = anglePlayer
        game.physics.arcade.velocityFromAngle(laserSprite2.angle, 350, laserSprite2.body.velocity);
        verou42 = true;
        aim2Y = aim2Y + domInt(7, 25);
        aim2X = aim2X - domInt(-5, 5);
      }
    }




  }
}

function shooting () {
  if (jumpButton.isDown || pad1.isDown(Phaser.Gamepad.XBOX360_LEFT_TRIGGER)) {

   if (verou4 = true) {
    verou4 = false;
    aimTimer = game.time.now + 300;
    var randomizer2 = Math.random();
    if (randomizer2 <= 0.25) {
      laserSnd.play();
    }else if(randomizer2 <= 0.5 ) {
      laserSnd2.play();
    }else if(randomizer2 <= 0.75) {
      laserSnd3.play();
    }else{
      laserSnd4.play();
    }
   }




    laserSprite.x = playerTrueX;
    laserSprite.y = playerTrueY;

    droiteA = sight.y - playerTrueY;
    droiteB = sight.x - playerTrueX;
    angle = Math.atan(droiteA/droiteB)*180/Math.PI;
    console.log(angle);

    if (sight.x <= player.x) {
      laserSprite.angle = angle;
      game.physics.arcade.velocityFromAngle(laserSprite.angle, -1000, laserSprite.body.velocity);
      verou4 = true;
      aimY = aimY + domInt(7, 25);
      aimX = aimX - domInt(-5, 5);
    }else if (sight.x > player.x) {
      laserSprite.angle = angle
      game.physics.arcade.velocityFromAngle(laserSprite.angle, 1000, laserSprite.body.velocity);
      verou4 = true;
      aimY = aimY + domInt(7, 25);
      aimX = aimX - domInt(-5, 5);
    }





  }
}

function update() {
    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    // game.physics.arcade.collide(player, layer);


    cr.body.velocity.y = 0;
    cr.body.velocity.x = 0;


    if (verou6 == true) {
      var randomizer = Math.random();
      if (randomizer <= 0.25) {
        snd1.play();
      }else if(randomizer <= 0.5 ) {
        snd2.play();
      }else if(randomizer <= 0.75) {
        snd3.play();
      }else{
        snd4.play();
      }
    verou6 = false;
    }
    if (life <= 0 && !entere.isDown) {
      if (verou5 == true) {
        verou5 = false;
        bruh2.play();


      }
      menuRed.alpha = 255;
      return;
    }
    if (life2 <= 0 && !entere.isDown) {
      if (verou5 == true) {
        verou5 = false;
        bruh.play();


      }
      menuBlue.alpha = 255;
      return;
    }

    if (life <= 0 || life2 >= 2000) {
      life = 10;
      life2 = 10;
      verou5 = true;
      verou7 = true;
      create();
      menuIndex = 1;



    }

    if (life2 <= 0 || life >= 2000) {
      life = 10;
      life2 = 10;
      verou5 = true;
      verou7 = true;
      create();
      menuIndex = 1;



    }

    switch(menuIndex) {
      case 1 :
        menuPrin.alpha = 255;
        menuInput.alpha = 0;
        menuInput2.alpha = 0;
        return;
        break;
      case 2 :
        menuPrin.alpha = 0;
        menuInput.alpha = 255;
        menuInput2.alpha = 0;
        return;
        break;
      case 3 :
        menuPrin.alpha = 0;
        menuInput.alpha = 0;
        menuInput2.alpha = 255;
        return;
        break;
      case 4 :
        menuPrin.alpha = 0;
        menuInput.alpha = 0;
        menuInput2.alpha = 0;
        break;
      case 5 :
        menuN.alpha = 0;
    }




    laser.fromSprite (player, sight, false);
    laser2.fromSprite (player2, sight2, false);

    laserSprite.animations.play('laze');

    if (game.time.now > aimTimer ) {
      hitmarker.alpha = 0;
    }

    if (game.time.now > aimTimer2 ) {
      hitmarker2.alpha = 0;
    }



    playerTrueY = player.y + 8
    playerTrueX = player.x + 8

//aiming

    /*sight.x = game.input.mousePointer.x /aimLengh + playerTrueX;
    sight.y = game.input.mousePointer.y /aimLengh + playerTrueX;*/
    if (gggg.isDown && hhhh.isDown || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1 && pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1)) {
      aimX = aimX + aimAcc/aimLengh;
      aimY = aimY + aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (gggg.isDown && ffff.isDown || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1 && pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1)) {
      aimX = aimX - aimAcc/aimLengh;
      aimY = aimY + aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (tttt.isDown && ffff.isDown || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1 && pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1)) {
      aimX = aimX - aimAcc/aimLengh;
      aimY = aimY - aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (tttt.isDown && hhhh.isDown || (pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1 && pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1)) {
      aimX = aimX + aimAcc/aimLengh;
      aimY = aimY - aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (ffff.isDown == true || pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1) {
      aimX = aimX - aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (hhhh.isDown == true || pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1) {
      aimX = aimX + aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (tttt.isDown == true || pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1) {
      aimY = aimY - aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (gggg.isDown == true || pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1) {
      aimY = aimY + aimAcc/aimLengh;
      aimAcc = aimAcc + 0.00003;
      aimReset = game.time.now + 701;
    }else if (game.time.now > aimReset) {
      aimX = playerTrueX;
      aimY = playerTrueY;
      aimAcc = 0.1;
      sight.angle = 0;
    }else {
      sight.angle = 0;
    }




    sight.x = aimX;
    sight.y = aimY;
//aiming end
//aiming2
    player2TrueY = player2.y + 8
    player2TrueX = player2.x + 8


    /*sight2.x = game.input.mousePointer.x /aimLengh2 + player2TrueX;
    sight2.y = game.input.mousePointer.y /aimLengh2 + player2TrueX;*/
    if (cursors.down.isDown && cursors.right.isDown || (pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1 && pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1)) {
      aim2X = aim2X + aimAcc2/aimLengh2;
      aim2Y = aim2Y + aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.down.isDown && cursors.left.isDown || (pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1 && pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1)) {
      aim2X = aim2X - aimAcc2/aimLengh2;
      aim2Y = aim2Y + aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.up.isDown && cursors.left.isDown || (pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1 && pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1)) {
      aim2X = aim2X - aimAcc2/aimLengh2;
      aim2Y = aim2Y - aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.up.isDown && cursors.right.isDown || (pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1 && pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1)) {
      aim2X = aim2X + aimAcc2/aimLengh2;
      aim2Y = aim2Y +- aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.left.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) < -0.1) {
      aim2X = aim2X - aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.right.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X) > 0.1) {
      aim2X = aim2X + aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.up.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) < -0.1) {
      aim2Y = aim2Y - aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (cursors.down.isDown || pad2.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y) > 0.1) {
      aim2Y = aim2Y + aimAcc2/aimLengh2;
      aimAcc2 = aimAcc2 + 0.00003;
      aimReset2 = game.time.now + 701;
    }else if (game.time.now > aimReset2) {
      aim2X = player2TrueX;
      aim2Y = player2TrueY;
      aimAcc2 = 0.1;
      sight2.angle = 0;
    }else {
      sight2.angle = 0;
    }

    sight2.x = aim2X;
    sight2.y = aim2Y;

    if (aimX < limite3.x) {
      aimX = aimX + 6;
    }else if (aimX > limite4.x) {
      aimX = aimX - 6;
    }
    if (aim2X < limite3.x) {
      aim2X = aim2X + 6;
    }else if (aim2X > limite4.x) {
      aim2X = aim2X - 6;
    }
    if (aimY < limite1.y) {
      aimY = aimY + 6;
    }else if (aimY > limite2.y) {
      aimY = aimY - 6;
    }
    if (aim2Y < limite1.y) {
      aim2Y = aim2Y + 6;
    }else if (aim2Y > limite2.y) {
      aim2Y = aim2Y - 6;
    }
    iaThink();

    if (game.time.now > aimTimer2) {

      shooting2();
    }



    if (game.time.now > aimTimer) {

      shooting();
    }
    mooveOK();
    mooveOK2();
    checkOverlap();
    checkOverlap1();
    text.x = player.x + 4;
    text2.x = player2.x + 4;
    text.y = player.y - 20;
    text2.y = player2.y - 20;
    text.setText(life);
    text2.setText(life2);
    if (isIa == true) {
      text2.setText("CPU "+life2);
      text2.x = player2.x - 7;
    }

    switch (stepId) {
      case 1:
        limite1.x = 0;
        limite1.y = 0;
        limite2.x = 0;
        limite2.y = 210;
        limite3.x = 0;
        limite3.y = 0;
        limite4.x = 305;
        limite4.y = 0;
        alpha = domInt(1,7);
        omega = domInt(1,8-alpha);
        alpha2 = domInt(1,9);
        omega2 = domInt(1,10-alpha2);
        stepId++;
        terminus = 0;
        break;
      case 2:
        if (terminus < 23) {
          limite1.y = limite1.y + alpha;
          limite2.y = limite2.y - omega;
          limite3.x = limite3.x + alpha2;
          limite4.x = limite4.x - omega2;
          terminus++;
        }else{
          terminus = 0;
          limiteCool = game.time.now + domInt(3000,4000);
          stepId++;
        }
        break;
      case 3:
        if (game.time.now > limiteCool) {
          limite1.y = 0;
          limite2.y = 210;
          limite3.x = 0;
          limite4.x = 305;
          limiteCool = game.time.now + 1000;
          stepId++;
        }
        break;
      case 4:
        if (game.time.now > limiteCool) {
          stepId = 1;
        }
        break;
    }

    switch (stepId2) {
      case 1:
        cr.y = 0;
        cr.x = domInt(20, 295);
        heartTime = game.time.now + domInt(3000, 6000);
        stepId2++;
        break;
      case 2:
        if (game.time.now > heartTime) {
          stepId2 = 1;
        }else {
          cr.body.velocity.y = 0;
          cr.body.velocity.y = 50;
        }
        break;
    }

}

function render () {




    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}
