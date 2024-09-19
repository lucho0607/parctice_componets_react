import React from "react";
const books = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la camara secreta",
  "Harry Potter y el prisionero de Askaban",
  "Harry Potter y el caliz de fuego",
  "Harry Potter y la orden del fenix",
  "Harry Potter y el misterio del principe",
  "Harry Potter y las reliquias de la muerte",
  "Animales fantasticos y donde encontrarlos",
];
const MySecondComponent = () => {
  return (
    <div>
      <ul>
        {books.map((book, index) => {
          return <li key={index}>{book}</li>;
        })}
      </ul>
    </div>
  );
};

export default MySecondComponent;
