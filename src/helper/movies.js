import React from "react";
import uuid from "uuid";

let film1 = {
  id: uuid.v4(),
  title: "deadbool",
  year: 2016,
  img:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png",
  stars: 4
};

let film2 = {
  id: uuid.v4(),
  title: "Tomb-Raider",
  year: 2018,
  img:
    "http://cinecinephile.com/wp-content/uploads/2018/03/Tomb-Raider-2018-Film.jpg",
  stars: 3
};

let film3 = {
  id: uuid.v4(),
  title: "Film",
  year: "XXXX",
  img:
    "https://www.greatplacetowork.ca/templates/gptw/images/no-image-available.jpg",
  stars: 2
};

let film4 = {
  id: uuid.v4(),
  title: "Alita: Battle Angel",
  year: 2019,
  img:
    "https://timesofindia.indiatimes.com/thumb/61997245.cms?width=219&height=317&imgsize=29984",
  stars: 2
};

let film5 = {
  id: uuid.v4(),
  title: "Titanic",
  year: 1997,
  img:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOFQDoP7BfBfQaSobObOyct2r1qt-3zf0TN5BJwKwq0_4f2yW",
  stars: 5
};

let film6 = {
  id: uuid.v4(),
  title: "PIRATES DES CARAÏBES : LA VENGEANCE DE SALAZAR",
  year: 2017,
  img: "https://www.sortiesdvd.com/affichethumb/1095.jpg",
  stars: 3
};

let film7 = {
  id: uuid.v4(),
  title: "Aqua Man",
  year: 2018,
  img: "https://www.journaldugeek.com/content/uploads/2018/11/5170089.jpg",
  stars: 5
};
export const movies = [film1, film2, film3, film4, film5, film6, film7];


