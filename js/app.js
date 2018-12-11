'use strict';
// get image elements by id

Images.imageOne = document.getElementById('img1');
Images.imageTwo = document.getElementById('img2');
Images.imageThree = document.getElementById('img3');

Images.allImagesArray = [];
Images.currentImageArray = [];
Images.previousImageArray = [];
Images.totalImagesArray = [];

// creat constructor

function Images(filepath, description) {
  this.url = filepath;
  this.altText = description;
  Images.allImagesArray.push(this);
}

// make image instances
new Images('img/bag.jpg', 'bag that looks like R2D2');
new Images('img/banana.jpg', 'banana slicer');
new Images('img/bathroom.jpg', 'ipad and toilet paper holder');
new Images('img/boots.jpg', 'rain boots with open toes');
new Images('img/breakfast.jpg', 'all-in-one breakfast maker; eggs, bacon, toast, and coffee');
new Images('img/bubblegum.jpg', 'italian meatball shaped bubblegum');
new Images('img/chair.jpg', 'super comfy chair');
new Images('img/cthulhi.jpg', 'octopus dragon monster');
new Images('img/dog-duck.jpg', 'duck bill muzzle for puppy');
new Images('img/dragon.jpg', 'can of dragon meat');
new Images('img/pen.jpg', 'utensil pen lids; spoon, fork, and knife shapes');
new Images('img/pet-sweep.jpg', 'dust mops for your pet\'s feet');
new Images('img/scissors.jpg', 'scissors to help you cut pizza slices');
new Images('img/shark.jpg', 'shark sleeping bag');
new Images('img/sweep.png', 'onesie for your baby that sweeps the floor as they crawl');
new Images('img/tauntaun.jpg', 'star wars sleeping bag for nerds');
new Images('img/unicorn.jpg', 'can of unicorn meat: excellent source of sprinkles');
new Images('img/usb.gif', 'octopus leg usb stick');
new Images('img/water-can.jpg', 'productive plant watering can: self filling');
new Images('img/wine-glass.jpg', 'best wine glass EVAR!');

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
  Images.imageOne.src = Images.totalImagesArray[counter[0]].url;
  Images.imageOne.alt = Images.totalImagesArray[counter[0]].altText;
  Images.imageTwo.src = Images.totalImagesArray[counter[1]].url;
  Images.imageTwo.alt = Images.totalImagesArray[counter[1]].altText;
  Images.imageThree.src = Images.totalImagesArray[counter[2]].url;
  Images.imageThree.alt = Images.totalImagesArray[counter[2]].altText;

};

Images.renderImage();

Images.imageOne.addEventListener('click', Images.renderImage);
Images.imageTwo.addEventListener('click', Images.renderImage);
Images.imageThree.addEventListener('click', Images.renderImage);
