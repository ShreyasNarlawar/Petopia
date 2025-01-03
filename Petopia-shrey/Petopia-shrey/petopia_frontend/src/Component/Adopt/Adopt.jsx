import React from "react";
import DisplayImage from "../../../public/DisplayImage.jpg";
import Dog1 from "../../../public/Dog1.jpg";
import Dog2 from "../../../public/Dog2.jpg";
import Dog3 from "../../../public/Dog3.jpg";
import Dog4 from "../../../public/Dog4.jpg";
import Cat1 from "../../../public/Cat1.jpg";
import Cat2 from "../../../public/Cat2.jpg";
import Cat3 from "../../../public/Cat3.jpg";
import Cat4 from "../../../public/Cat4.jpg";
import Bird1 from "../../../public/Bird1.jpg";
import Bird2 from "../../../public/Bird2.jpg";
import Bird3 from "../../../public/Bird3.jpg";
import Bird4 from "../../../public/Bird4.jpg";
import Fish1 from "../../../public/Fish1.jpg";
import Fish2 from "../../../public/Fish2.jpg";
import Fish3 from "../../../public/Fish3.jpg";
import Fish4 from "../../../public/Fish4.jpg";

import "../Adopt/Adopt.css";

const Adopt = () => {
  const pets = {
    dogs: [
      { id: 1, name: "Buddy", breed: "Golden Retriever", age: "2 years", image: Dog1 },
      { id: 2, name: "Max", breed: "Labrador", age: "1 year", image: Dog2 },
      { id: 3, name: "Rolex", breed: "Poodle", age: "2 years", image: Dog3 },
      { id: 4, name: "Lina", breed: "Boxer", age: "1 year", image: Dog4 },
    ],
    cats: [
      { id: 1, name: "Whiskers", breed: "Siamese", age: "3 years", image: Cat1 },
      { id: 2, name: "Khao Manee", breed: "Persian", age: "4 months", image: Cat2 },
      { id: 3, name: "Whiskers", breed: "Ragdoll", age: "3 years", image: Cat3 },
      { id: 4, name: "Luna", breed: "Birman", age: "4 months", image: Cat4 },
    ],
    birds: [
      { id: 1, name: "Sky", breed: "Parrot", age: "1 year", image: Bird1 },
      { id: 2, name: "Blue Finch", breed: "Finch", age: "6 months", image: Bird2 },
      { id: 3, name: "Fly", breed: "Parrot", age: "1 year", image: Bird3 },
      { id: 4, name: "Chirpy", breed: "Canary", age: "6 months", image: Bird4 },
    ],
    fishes: [
      { id: 1, name: "Blue Fish", breed: "Cichlid", age: "6 months", image: Fish1 },
      { id: 2, name: "Bubbles", breed: "Betta", age: "3 months", image: Fish2 },
      { id: 3, name: "Goldie", breed: "Tuna", age: "6 months", image: Fish3 },
      { id: 4, name: "Bubbles", breed: "Blue Tang", age: "3 months", image: Fish4 },
    ],
  };

  const renderPetCards = (category) =>
    pets[category].map((pet) => (
      <div className="pet-card" key={pet.id}>
        <img
          src={pet.image}
          alt={`${pet.name} the ${pet.breed}`}
          className="pet-image"
        />
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <button className="adopt-button">Adopt {pet.name}</button>
      </div>
    ));

  return (
    <div className="adopt-page">
      <header className="header">
        <img
          src={DisplayImage}
          alt="Adoption Logo"
          className="header-image"
        />
        <h2>Adopt love. Adopt life. Adopt a friend forever.</h2>
      </header>
      <main>
        <h2 className="companion">Find your perfect companion!</h2>
        <p id="p1">Browse through our available pets looking for a new home.</p>

        <section>
          <h2>Dogs</h2>
          <p id="Quote1">
            Sometimes <span>angels</span> come to us with four <span>paws</span>{" "}
            and <span>a wet nose</span>.
          </p>
          <div className="pet-grid">{renderPetCards("dogs")}</div>
        </section>

        <section>
          <h2>Cats</h2>
          <p id="Quote2">Oh, to be a kitty! Eating, Sleeping, and being pretty</p>
          <div className="pet-grid">{renderPetCards("cats")}</div>
        </section>

        <section>
          <h2>Birds</h2>
          <div className="pet-grid">{renderPetCards("birds")}</div>
        </section>

        <section>
          <h2>Fishes</h2>
          <div className="pet-grid">{renderPetCards("fishes")}</div>
        </section>
      </main>
    </div>
  );
};

export default Adopt;
