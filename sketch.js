//making man
var man,zombie;
var bg1,standing;

function preload()
{

    bg1 = loadImage("images/bg.jpg")
    standing = loadAnimation("images/stand.png","images/stand1.png","images/stand.png")
    punching = loadAnimation("images/punch1.png","images/punch2.png")
    Zom1 = loadImage("images/z1.png");
    Zom2 = loadImage("images/z2.png");
    Zom3 = loadImage("images/z3.png");
    Zom4 = loadImage("images/z4.png");

}

function setup()
{
    //basics
    createCanvas(1820,1070);

    //making man
    man = createSprite(500,800,100,100);
    man.addAnimation("hi", standing);
    man.scale = 3.7;

    //making zombie
    zombie = createSprite(100,100,10,10);

    ZomGroup = new Group();

}

function draw ()
{
    //basics
    background(bg1);

    spawnZombies();

    if(keyDown("SPACE"))
    {

      man.addAnimation("hi",punching)

    }

    //printing the sprites
    drawSprites();
}

function spawnZombies()
{
   if (frameCount % 150 === 0)
     {
       var zombie = createSprite(1500,865,10,40);
       zombie.velocityX = -3;

        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) 
        {
          case 1: zombie.addImage(Zom1);
                  break;
          case 2: zombie.addImage(Zom2);
                  break;
          case 3: zombie.addImage(Zom3);
                  break;
          case 4: zombie.addImage(Zom4);    
          default: break;
        }

        //assign scale and lifetime to the zombie           
        zombie.scale = 2;
        zombie.lifetime = 300;

       //add each zombie to the group
        ZomGroup.add(zombie);
    }
}