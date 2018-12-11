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

// generate random image array
Images.createCurrentImageArray = function() {
  for (var i = 0; i < 25; i++) {
    Images.previousImageArray = Images.currentImageArray;
    Images.currentImageArray = [];
    var randomIndexOne = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexOne)) {
      randomIndexOne = Images.randomNum();
    }
    var randomIndexTwo = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexTwo)) {
      randomIndexTwo = Images.randomNum();
      while (randomIndexTwo === randomIndexOne) {
        randomIndexTwo = Images.randomNum();
      }
    }
    var randomIndexThree = Images.randomNum();
    while (Images.previousImageArray.includes(randomIndexThree)) {
      randomIndexThree = Images.randomNum();
      while (randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo) {
        randomIndexThree = Images.randomNum();
      }
    }

    Images.currentImageArray.push(randomIndexOne);
    Images.currentImageArray.push(randomIndexTwo);
    Images.currentImageArray.push(randomIndexThree);

    Images.totalImagesArray.push(Images.currentImageArray);

    // console.log('Previous: ', Images.previousImageArray);
    // console.log('Current: ', Images.currentImageArray);
  }
};

Images.createCurrentImageArray();

console.log(Images.totalImagesArray);










// // modify src & alt of images

// Images.renderImage = function() {

//   var randomImageOne = Images.allImagesArray[randomIndexOne];
//   var randomImageTwo = Images.allImagesArray[randomIndexTwo];
//   var randomImageThree = Images.allImagesArray[randomIndexThree];

//   // get element
//   Images.imageOne.src = randomImageOne.url;
//   Images.imageOne.alt = randomImageOne.altText;
//   Images.imageTwo.src = randomImageTwo.url;
//   Images.imageTwo.alt = randomImageTwo.altText;
//   Images.imageThree.src = randomImageThree.url;
//   Images.imageThree.alt = randomImageThree.altText;

//   Images.currentImageArray = [];
//   Images.currentImageArray.push(randomIndexOne, randomIndexTwo, randomIndexThree);

//   console.log('Previous Array: ', Images.previousImageArray);
//   console.log('Current Array: ', Images.currentImageArray);
// };

// Images.renderImage();
