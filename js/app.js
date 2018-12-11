'use strict';
// get image elements by id

Images.imageOne = document.getElementById('img1');
Images.imageTwo = document.getElementById('img2');
Images.imageThree = document.getElementById('img3');
Images.userName = document.getElementsByTagName('input');


Images.allImagesArray = [];
Images.currentImageArray = [];
Images.previousImageArray = [];
Images.totalImagesArray = [];

// creat constructor

function Images(filepath, description) {
  this.url = filepath;
  this.altText = description;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentPref = this.url + ' was preferred ' + this.timesClicked / this.timesDisplayed * 100 + ' percent of the time.';
  Images.allImagesArray.push(this);
}

// make image instances
Images.bag = new Images('img/bag.jpg', 'bag that looks like R2D2');
Images.banana = new Images('img/banana.jpg', 'banana slicer');
Images.bathroom = new Images('img/bathroom.jpg', 'ipad and toilet paper holder');
Images.boots = new Images('img/boots.jpg', 'rain boots with open toes');
Images.breakfast = new Images('img/breakfast.jpg', 'all-in-one breakfast maker; eggs, bacon, toast, and coffee');
Images.bubblegum = new Images('img/bubblegum.jpg', 'italian meatball shaped bubblegum');
Images.chair = new Images('img/chair.jpg', 'super comfy chair');
Images.cthulhu = new Images('img/cthulhu.jpg', 'octopus dragon monster');
Images.dogDuck = new Images('img/dog-duck.jpg', 'duck bill muzzle for puppy');
Images.dragon = new Images('img/dragon.jpg', 'can of dragon meat');
Images.pen = new Images('img/pen.jpg', 'utensil pen lids; spoon, fork, and knife shapes');
Images.petSweet = new Images('img/pet-sweep.jpg', 'dust mops for your pet\'s feet');
Images.scissors = new Images('img/scissors.jpg', 'scissors to help you cut pizza slices');
Images.shark = new Images('img/shark.jpg', 'shark sleeping bag');
Images.sweep = new Images('img/sweep.png', 'onesie for your baby that sweeps the floor as they crawl');
Images.tauntaun = new Images('img/tauntaun.jpg', 'star wars sleeping bag for nerds');
Images.unicorn = new Images('img/unicorn.jpg', 'can of unicorn meat: excellent source of sprinkles');
Images.usb = new Images('img/usb.gif', 'octopus leg usb stick');
Images.waterCan = new Images('img/water-can.jpg', 'productive plant watering can: self filling');
Images.wineGlass = new Images('img/wine-glass.jpg', 'best wine glass EVAR!');

// generate random number

Images.randomNum = function() {
  var random = Math.random() * Images.allImagesArray.length;
  var roundedDown = Math.floor(random);
  return roundedDown;
};

// generate 25 random image arrays that don't repeat with most recent set of 3
Images.createCurrentImageArray = function() {
  for (var i = 0; i < 25; i++) {
    Images.previousImageArray = Images.currentImageArray;
    Images.currentImageArray = [];
    var randomIndexOne = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexOne)) {
      randomIndexOne = Images.randomNum();
    }
    var randomIndexTwo = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexTwo) || randomIndexTwo === randomIndexOne) {
      randomIndexTwo = Images.randomNum();
    
    }
    var randomIndexThree = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexThree) || randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo) {
      randomIndexThree = Images.randomNum();
    }

    Images.currentImageArray.push(randomIndexOne);
    Images.currentImageArray.push(randomIndexTwo);
    Images.currentImageArray.push(randomIndexThree);

    Images.totalImagesArray.push(Images.currentImageArray);
  }
};

Images.createCurrentImageArray();


// modify src & alt of images

var counter = -1;

Images.renderImage = function() {
  counter += 1;
  if(counter < 25) {
    var img1 = Images.totalImagesArray[counter][0];
    Images.imageOne.src = Images.allImagesArray[img1].url;
    Images.imageOne.alt = Images.allImagesArray[img1].altText;

    var img2 = Images.totalImagesArray[counter][1];
    Images.imageTwo.src = Images.allImagesArray[img2].url;
    Images.imageTwo.alt = Images.allImagesArray[img2].altText;

    var img3 = Images.totalImagesArray[counter][2];
    Images.imageThree.src = Images.allImagesArray[img3].url;
    Images.imageThree.alt = Images.allImagesArray[img3].altText;
  } else {
    Images.imageOne.src = 'img/the-end.jpg';
    Images.imageOne.alt = 'That\'s All Folks!';

    Images.imageTwo.src = 'img/the-end.jpg';
    Images.imageTwo.alt = 'That\'s All Folks!';

    Images.imageThree.src = 'img/the-end.jpg';
    Images.imageThree.alt = 'That\'s All Folks!';
  }

};

Images.prototype.addClick = function() {
  this.timesClicked += 1;
};









Images.renderImage();











Images.imageOne.addEventListener('click', Images.renderImage);
Images.imageTwo.addEventListener('click', Images.renderImage);
Images.imageThree.addEventListener('click', Images.renderImage);

Images.imageOne.addEventListener('click', Images.prototype.addClick);
Images.imageTwo.addEventListener('click', Images.prototype.addClick);
Images.imageThree.addEventListener('click', Images.prototype.addClick);

