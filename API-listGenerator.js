// This code is API from library ListGenerator.
//link to my library ListGenerator: https://github.com/berlandbor/Library-s-/blob/main/listGenerator.js

import { ListGenerator } from 'https://berlandbor.github.io/ExampleUseListGenerator/listGenerator.js';

const myListGenerator = new ListGenerator("myListContainer");

const myListItems = [
  /*{ text: "Что такое информатика?", link: "https://berlandbor.github.io/Informatics.md" },*/
  { text: "Обученный Нейрон управляет мячиком:", link: "NeuronBall.html" },
  { text: "Генератор открытки: ", link: "https://berlandbor.github.io/gen-img/" },
  { text: "Библия онлайн:", link: "https://berlandbor.github.io/Bible-/" },
  { text: "Энциклопедия онлайн:", link: "https://berlandbor.github.io/encyclopedia-berlandbor/" },
  { text: "О лекарствах онлайн:", link: "https://berlandbor.github.io/Search-info-medicaments/" },
  { text: "Обученный Нейрон управляет мячиком есть Рестарт:", link: "NeuronBallRestart.html" }
];

myListGenerator.generateList(myListItems);



//https://www.example1.com
