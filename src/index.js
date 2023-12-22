import apple from '../src/images/apple.png';
import banana from '../src/images/banana.png';
import cherry from '../src/images/cherry.png';
import pineapple from '../src/images/pineapple.png';
import pumpkin from '../src/images/pumpkin.png';
import watermelon from '../src/images/watermelon.png';

const volume = document.getElementById('volume');
const volumeOn = document.getElementById('volume-on');
const volumeOff = document.getElementById('volume-off');
const openCard = document.getElementById('open-card');
const match = document.getElementById('match');
const win = document.getElementById('win');

const images = {
  apple: `${apple}`,
  banana: `${banana}`,
  cherry: `${cherry}`,
  pineapple: `${pineapple}`,
  pumpkin: `${pumpkin}`,
  watermelon: `${watermelon}`,
};

let openedClasses = new Set();

const savedVolumeEnabled = localStorage.getItem('volumeEnabled');
let volumeEnabled = false;
if (savedVolumeEnabled !== null) {
  volumeEnabled = savedVolumeEnabled === 'true';
}

function play(func) {
  if (!volumeEnabled) {
    func.play();
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const cards = [];
for (let i = 1; i <= 12; i++) {
  const card = document.getElementById(`${i}`);
  cards.push(card);
}

const arrayOfImages = [];
for (const key in images) {
  arrayOfImages.push(images[key], images[key]);
}
const shuffledImages = arrayOfImages.sort(() => Math.random() - 0.5);

for (let i = 0; i < cards.length; i++) {
  const randomIndex = getRandomIndex(shuffledImages);
  const currentFlipCardBack = cards[i].querySelector('.flip-card-back');

  if (currentFlipCardBack) {
    const currentImage = shuffledImages[randomIndex];
    const imageKey = Object.keys(images).find(
      key => images[key] === currentImage
    );
    const imageClass = imageKey ? `image-${imageKey}` : '';

    if (imageClass) {
      cards[i].classList.add(imageClass);
    }
    currentFlipCardBack.style.backgroundImage = `url('${currentImage}')`;
  }

  shuffledImages.splice(randomIndex, 1);
}

function toggleCard(e) {
  const currentCard = document.getElementById(e.currentTarget.id);
  const currentInner = currentCard.querySelector('.flip-card-inner');
  currentCard.classList.add('open');
  currentInner.style.transform = 'rotateY(180deg)';
  play(openCard);
  const classList = currentCard.classList;
  let fruitClass;
  classList.forEach(className => {
    if (className.startsWith('image-')) {
      fruitClass = className;
    }
  });

  cards.forEach(card => {
    const cardClassList = card.classList;
    let cardFruitClass;
    cardClassList.forEach(className => {
      if (className.startsWith('image-')) {
        cardFruitClass = className;
      }
    });
    if (
      card.id !== currentCard.id &&
      card.classList.contains(fruitClass) &&
      card.classList.contains('open')
    ) {
      openedClasses.add(fruitClass);
      if (!match.paused) {
        match.currentTime = 0;
        play(match);
      } else {
        play(match);
      }
      return;
    } else if (
      card.id !== currentCard.id &&
      !card.classList.contains(fruitClass) &&
      !openedClasses.has(cardFruitClass) &&
      card.classList.contains('open')
    ) {
      card.classList.remove('open');
      currentCard.classList.remove('open');
      const innerCard = card.querySelector('.flip-card-inner');

      setTimeout(() => {
        currentInner.style.transform = 'rotateY(0deg)';
        innerCard.style.transform = 'rotateY(0deg)';
      }, 600);
      return;
    } else if (card.id !== currentCard.id && !card.classList.contains('open')) {
      return;
    }
  });

  if (openedClasses.size === 6) {
    setTimeout(() => {
      play(win);
      setTimeout(() => {
        alert('Congratulations! You won!');
        location.reload();
      }, 1000);
    }, 700);
  }
}

function toggleVolume() {
  volumeEnabled = !volumeEnabled;

  if (volumeEnabled) {
    volumeOn.style.display = 'none';
    volumeOff.style.display = 'block';
    openCard.pause();
    match.pause();
    win.pause();
    localStorage.setItem('volumeEnabled', 'true');
  } else {
    volumeOn.style.display = 'block';
    volumeOff.style.display = 'none';
    localStorage.setItem('volumeEnabled', 'false');
  }
}

cards.forEach(card => {
  card.addEventListener('click', toggleCard);
});
volume.addEventListener('click', toggleVolume);
window.addEventListener('DOMContentLoaded', () => {
  if (volumeEnabled) {
    volumeOn.style.display = 'none';
    volumeOff.style.display = 'block';
  } else {
    volumeOn.style.display = 'block';
    volumeOff.style.display = 'none';
  }
});
