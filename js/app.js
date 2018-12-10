'use strict';

Image.allImagesArray = [];
Image.currentImageArray = [];
Image.previousImageArray = [];

// creat constructor

function Image(filepath, description) {
  this.url = filepath;
  this.altText = description;
  this.allImagesArray.push(this);
}

// make image instances
new Image('img/bag.jpg', 'bag that looks like R2D2');
new Image('img/banana.jpg', 'banana slicer');
new Image('img/bathroom.jpg', 'ipad and toilet paper holder');
new Image('img/boots.jpg', 'rain boots with open toes');
new Image('img/breakfast.jpg', 'all-in-one breakfast maker; eggs, bacon, toast, and coffee');
new Image('img/bubblegum.jpg', 'italian meatball shaped bubblegum');
new Image('img/chair.jpg', 'super comfy chair');
new Image('img/cthulhi.jpg', 'octopus dragon monster');
new Image('img/dog-duck.jpg', 'duck bill muzzle for puppy');
new Image('img/dragon.jpg', 'can of dragon meat');
new Image('img/pen.jpg', 'utensil pen lids; spoon, fork, and knife shapes');
new Image('img/pet-sweep.jpg', 'dust mops for your pet\'s feet');
new Image('img/scissors.jpg', 'scissors to help you cut pizza slices');
new Image('img/shark.jpg', 'shark sleeping bag');
new Image('img/sweep.png', 'onesie for your baby that sweeps the floor as they crawl');
new Image('img/tauntaun.jpg', 'star wars sleeping bag for nerds');
new Image('img/unicorn.jpg', 'can of unicorn meat: excellent source of sprinkles');
new Image('img/usb.gif', 'octopus leg usb stick');
new Image('img/water-can.jpg', 'productive plant watering can: self filling');
new Image('img/wine-glass.jpg', 'best wine glass EVAR!');

// get image elements by id

// modify src & alt of images

