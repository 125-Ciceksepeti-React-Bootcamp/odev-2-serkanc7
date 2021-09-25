import '../scss/app.scss';

import Dog from './dog';
import Duck from './duck';

const animals = [
    new Dog('Max', '../images/content/max.jpeg', 4, 4),
    new Dog('Cooper', '../images/content/cooper.jpeg', 4, 3),
    new Dog('Charlie', '../images/content/charlie.jpeg', 4, 5),
    new Dog('Teddy', '../images/content/teddy.jpeg', 4, 2),
    new Dog('Milo', '../images/content/milo.jpeg', 4, 6),
    new Duck('Daffy', '../images/content/daffy.jpeg', 2, 1),
    new Duck('Waddles', '../images/content/waddles.jpeg', 2, 2),
    new Duck('Aflac', '../images/content/aflac.jpeg', 2, 4),
    new Duck('Mallory', '../images/content/mallory.jpeg', 2, 2),
];

const animalsEl = document.querySelector('[data-animals]');
console.log(animalsEl);
animals.forEach((animal) => {
    const animalEl = document.createElement('div');
    animalEl.classList.add('animal');
    const animalImgEl = document.createElement('img');
    animalImgEl.src = animal.image;
    animalImgEl.classList.add('animal__img');
    const animalInfoEl = document.createElement('div');
    animalInfoEl.classList.add('animal__info');
    const animalNameEl = document.createElement('div');
    animalNameEl.classList.add('animal__name');
    animalNameEl.innerText = animal.name;
    const animalAgeEl = document.createElement('div');
    animalAgeEl.classList.add('animal__age');
    animalAgeEl.innerText = animal.age;
    const animalLegsEl = document.createElement('div');
    animalLegsEl.classList.add('animal__legs');
    animalLegsEl.innerText = `Number of Legs: ${animal.numberOfLegs}`;

    animalInfoEl.append(animalNameEl, animalAgeEl);
    animalEl.append(animalImgEl, animalInfoEl, animalLegsEl);
    animalsEl.appendChild(animalEl);
});
