// This code is API from library ListGenerator.
//link to my library ListGenerator: https://github.com/berlandbor/Library-s-/blob/main/listGenerator.js

import { ListGenerator } from 'https://berlandbor.github.io/ExampleUseListGenerator/listGenerator.js';

const myListGenerator = new ListGenerator("myListContainer");

const myListItems = [
  { text: "Обо мне:", link: " " },
  { text: " ", link: "https://github.com/berlandbor/berlandbor.github.io/blob/main/what-is-information.md" },
  { text: " ", link: "" },
  { text: " ", link: " " }
];

myListGenerator.generateList(myListItems);



//https://www.example1.com