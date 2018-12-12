'use strict';

// get image elements by id

Images.imageOne = document.getElementById('img1');
Images.imageTwo = document.getElementById('img2');
Images.imageThree = document.getElementById('img3');
Images.userName = document.getElementsByTagName('input');
Images.chart = document.getElementById('results-chart');
Images.counter = 0;
Images.allNames = [];
Images.allVotes = [];


Images.allImagesArray = [];
Images.currentIndexArray = [];
Images.previousIndexArray = [];
Images.fullIndexArray = [];

// constructor function

function Images(name, filepath, description) {
  this.name = name;
  this.url = filepath;
  this.altText = description;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentPref = 0;
  Images.allImagesArray.push(this);
  Images.allNames.push(this.name);
}

// make image instances

new Images('bag.jpg','img/bag.jpg', 'bag that looks like R2D2');
new Images('banana.jpg', 'img/banana.jpg', 'banana slicer');
new Images('bathroom.jpg', 'img/bathroom.jpg', 'ipad and toilet paper holder');
new Images('boots.jpg', 'img/boots.jpg', 'rain boots with open toes');
new Images('breakfast.jpg', 'img/breakfast.jpg', 'all-in-one breakfast maker; eggs, bacon, toast, and coffee');
new Images('bubblegum.jpg', 'img/bubblegum.jpg', 'italian meatball shaped bubblegum');
new Images('chair.jpg', 'img/chair.jpg', 'super comfy chair');
new Images('cthulhu.jpg', 'img/cthulhu.jpg', 'octopus dragon monster');
new Images('dog-duck.jpg', 'img/dog-duck.jpg', 'duck bill muzzle for puppy');
new Images('dragon.jpg', 'img/dragon.jpg', 'can of dragon meat');
new Images('pen.jpg', 'img/pen.jpg', 'utensil pen lids; spoon, fork, and knife shapes');
new Images('pet-sweep.jpg', 'img/pet-sweep.jpg', 'dust mops for your pet\'s feet');
new Images('scissors.jpg', 'img/scissors.jpg', 'scissors to help you cut pizza slices');
new Images('shark.jpg', 'img/shark.jpg', 'shark sleeping bag');
new Images('sweep.png', 'img/sweep.png', 'onesie for your baby that sweeps the floor as they crawl');
new Images('tauntaun.jpg', 'img/tauntaun.jpg', 'star wars sleeping bag for nerds');
new Images('unicorn.jpg', 'img/unicorn.jpg', 'can of unicorn meat: excellent source of sprinkles');
new Images('usb.gif', 'img/usb.gif', 'octopus leg usb stick');
new Images('water-can.jpg', 'img/water-can.jpg', 'productive plant watering can: self filling');
new Images('wine-glass.jpg', 'img/wine-glass.jpg', 'best wine glass EVAR!');

// generate random number

Images.randomNum = function() {
  var random = Math.random() * Images.allImagesArray.length;
  var randomRoundedDown = Math.floor(random);
  return randomRoundedDown;
};

// generate 25 random image arrays that don't repeat with most recent set of 3

Images.generateImageArrays = function() {
  for (var i = 0; i < 25; i++) {
    Images.previousIndexArray = Images.currentIndexArray;
    Images.currentIndexArray = [];
    var randomIndexOne = Images.randomNum();
    while (Images.previousIndexArray.includes(randomIndexOne)) {
      randomIndexOne = Images.randomNum();
    }
    var randomIndexTwo = Images.randomNum();
    while (Images.previousIndexArray.includes(randomIndexTwo) || randomIndexTwo === randomIndexOne) {
      randomIndexTwo = Images.randomNum();

    }
    var randomIndexThree = Images.randomNum();
    while (Images.previousIndexArray.includes(randomIndexThree) || randomIndexThree === randomIndexOne || randomIndexThree === randomIndexTwo) {
      randomIndexThree = Images.randomNum();
    }

    Images.currentIndexArray.push(randomIndexOne);
    Images.currentIndexArray.push(randomIndexTwo);
    Images.currentIndexArray.push(randomIndexThree);

    Images.fullIndexArray.push(Images.currentIndexArray);
  }
};

// modify src & alt of images

Images.renderImages = function() {
  if (Images.counter < 25) {
    var img1 = Images.fullIndexArray[Images.counter][0];
    Images.imageOne.name = Images.allImagesArray[img1].name;
    Images.imageOne.src = Images.allImagesArray[img1].url;
    Images.imageOne.alt = Images.allImagesArray[img1].altText;
    Images.allImagesArray[img1].timesDisplayed++;

    var img2 = Images.fullIndexArray[Images.counter][1];
    Images.imageTwo.name = Images.allImagesArray[img2].name;
    Images.imageTwo.src = Images.allImagesArray[img2].url;
    Images.imageTwo.alt = Images.allImagesArray[img2].altText;
    Images.allImagesArray[img2].timesDisplayed++;

    var img3 = Images.fullIndexArray[Images.counter][2];
    Images.imageThree.name = Images.allImagesArray[img3].name;
    Images.imageThree.src = Images.allImagesArray[img3].url;
    Images.imageThree.alt = Images.allImagesArray[img3].altText;
    Images.allImagesArray[img3].timesDisplayed++;
  } else {
    Images.imageOne.src = 'img/the-end.jpg';
    Images.imageOne.alt = 'That\'s All Folks!';

    Images.imageTwo.src = 'img/the-end.jpg';
    Images.imageTwo.alt = 'That\'s All Folks!';

    Images.imageThree.src = 'img/the-end.jpg';
    Images.imageThree.alt = 'That\'s All Folks!';

    Images.renderResults();
    
    Images.imageOne.removeEventListener('click', Images.addClick);
    Images.imageTwo.removeEventListener('click', Images.addClick);
    Images.imageThree.removeEventListener('click', Images.addClick);

    Images.imageOne.removeEventListener('click', Images.renderImages);
    Images.imageTwo.removeEventListener('click', Images.renderImages);
    Images.imageThree.removeEventListener('click', Images.renderImages);


    Images.displayChart();
  }
  Images.counter++;

};

Images.addClick = function(event) {
  if (Images.counter < 25) {
    for (var i = 0; i < Images.allImagesArray.length; i++) {
      if(event.target.name === Images.allImagesArray[i].name) {
        Images.allImagesArray[i].timesClicked++;
      }
    }
  }
};


// render results list

Images.renderResults = function() {
  var header = document.getElementById('results-header');
  var ulEl = document.getElementById('results');

  header.textContent = 'Here are the results!';

  for (var i = 0; i < Images.allImagesArray.length; i++) {
    var thisImage = Images.allImagesArray[i];
    thisImage.percentPref = Math.floor(thisImage.timesClicked / thisImage.timesDisplayed * 100);
    var liEl = document.createElement('li');
    if (!isNaN(thisImage.percentPref)) {
      liEl.textContent = `${thisImage.name} was preferred ${thisImage.timesClicked} times or ${thisImage.percentPref}% of the time it was displayed.`;
    } else {
      liEl.textContent = `${thisImage.name} was not displayed in this round of testing.`;
    }
    ulEl.appendChild(liEl);
    Images.allVotes.push(thisImage.timesClicked);
  }


};






Images.generateImageArrays();
Images.renderImages();

Images.imageOne.addEventListener('click', Images.addClick);
Images.imageTwo.addEventListener('click', Images.addClick);
Images.imageThree.addEventListener('click', Images.addClick);

Images.imageOne.addEventListener('click', Images.renderImages);
Images.imageTwo.addEventListener('click', Images.renderImages);
Images.imageThree.addEventListener('click', Images.renderImages);



Images.displayChart = function() {
  new Chart(Images.chart, {
    type: 'bar',
    data: {
      labels: Images.allNames,
      dataset: [{
        label: 'Votes Per Image',
        data: Images.allVotes,
        backgroundColor: ['#FFF', '#FFE', '#FFD', '#FFC', '#FFB', '#FFA', '#FF9', '#FF8', '#FF7', '#FF6', '#FF5', '#FF4', '#FF3', '#FF2', '#FF1', '#FF0', '#FEF', '#FEE', '#FED', '#FEC'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};

