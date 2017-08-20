function calculate() {
  if (jumpButton.isDown) {
    laserSprite = game.add.sprite(playerTrueX, playerTrueY, 'laserrSprite');
    target = game.add.sprite(sight.x*3,sight.y*3, 'sight');
    
    var pathX = (target.x - playerTrueX)/3000;
    var pathY = (target.Y - playerTrueY)/3000;
    while (target.x != laserSprite.x && target.y != laserSprite.y) {
      laserSprite.x = laserSprite.x + pathX;
      laserSprite.Y = laserSprite.x + pathY;
    }
     

  }



}






















































/*function cursor() {
    console.log(ssss);
    if (cursors.down.isDown) {
        angle = angle - 0.5;
        sight2.x = player2.x + Math.sin(angle)*aimLengh2 + 7;
        sight2.y = player2.y + Math.cos(angle)*aimLengh2 + 7;
    }
    if (pad1.axis(Phaser.Gamepad.XBOX360_DPAD_RIGHT.X) > 0.1) {
        angle = angle + 0.5;
        sight2.x = player2.x + Math.sin(angle)*aimLengh2 + 7;
        sight2.y = player2.y + Math.cos(angle)*aimLengh2 + 7;
    }

    ixe = game.input.mousePointer.x;
    igrec = game.input.mousePointer.y;



   /* savesight2 = angle;
    droiteA = game.input.mousePointer.y - player2.y;
    droiteB = game.input.mousePointer.x - player2.x;
    angle = Math.atan(droiteA/droiteB) * 180 / Math.PI;



    sight2.x = player2.x + Math.sin(angle)*aimLengh2 + 7;
    sight2.y = player2.y + Math.cos(angle)*aimLengh2 + 7;

    /*if ((sight2.y <= 105 && sight2.x <= 45)||(sight2.y <= 105 && sight2.x >= 5) && verou2 == false) {
        verou2 = true;
    }
    if ((sight2.y <= 105 && sight2.x <= 45)||(sight2.y <= 105 && sight2.x >= 5) && verou2 == true) {
        sight2.y = sight2.y* -1;
        sight2.x = sight2.x* -1;
        verou2 = false;
    }

    console.log(angle);



/*
fucntion sleep(milliseconds) {
  var start = (new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
*/
