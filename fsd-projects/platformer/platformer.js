$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
    
    createPlatform(400,575,200,10);
    createPlatform(200,450,100,10);
    createPlatform(400,325,100,10);
    createPlatform(100,200,100,10);
    createPlatform(400,125,100,10);
    createPlatform(600,200,10,450);
    createPlatform(500,125,10,210);
    createPlatform(650,200,75,10);
    createPlatform(100,50,10,600);
    createPlatform(300,650,10,10);
    createPlatform(850,200,75,10);
    createPlatform(1050,300,100,10);
    createPlatform(1200,400,100,10);
    createPlatform(1050,500,100,10);
    createPlatform(900,500,100,10);

    createPlatform(725,300,300,10, "red");  
    createBadPlatform(700,650,100,10, "grey");
    createPlatform(700,730,700,10, "red")
    createBadPlatform(775,575,100,10, "grey")




    // TODO 3 - Create Collectables
createCollectable("diamond",725,350);
createCollectable("database",150,250);
createCollectable("steve",550,300)


    
    // TODO 4 - Create Cannons
createCannon("right",250,1400);
createCannon("bottom",750,1500);
createCannon("bottom", 900,1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
