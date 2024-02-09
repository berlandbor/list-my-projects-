// This code is API from library ListGenerator.
//link to my library ListGenerator: https://github.com/berlandbor/Library-s-/blob/main/listGenerator.js

import { ListGenerator } from 'https://berlandbor.github.io/ExampleUseListGenerator/listGenerator.js';

const myListGenerator = new ListGenerator("myListContainer");

const myListItems = [
  /*{ text: "Что такое информатика?", link: "https://berlandbor.github.io/Informatics.md" },*/
  { text: "Обученный Нейрон управляет мячиком:", link: "NeuronBall.html" },
  { text: "Генератор открытки: ", link: "https://berlandbor.github.io/gen-img/" },
  { text: "Заметки программиста", link: "https://t.me/NotesByProgrammer" }
];

myListGenerator.generateList(myListItems);



//https://www.example1.com