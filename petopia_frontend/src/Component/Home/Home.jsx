import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling

// Button Component
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/Login' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

// CardItem Component
function CardItem(props) {
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Pet" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </li>
  )
}

// HeroSection Component
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADOPT NOW!</h1>
      <p>Every pet deserves a purfect home</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Adopt Now
        </Button>
      </div>
    </div>
  )
}

// Cards Component
function Cards() {
  return (
    <div className="cards">
      <h1>Find a loving home for your pet</h1>
      <h1>Why Pet Adoption?</h1>
      <p>
        Pet adoption offers a win-win solution for both humans and animals. By choosing adoption, you save a life and combat unethical breeding practices, such as puppy mills. Additionally, adopting a pet is financially savvy, as fees often cover essential services like vaccinations and spaying/neutering.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="../../assets/bunny.jpg" 
              text="Adorable bunnies" 
              label="Bunny" 
              path="/adoption" 
            />
            <CardItem 
              src="../../assets/cat.jpg" 
              text="Adorable kittens" 
              label="Kittens" 
              path="/adoption" 
            />
            <CardItem 
              src="../../assets/dog.jpg" 
              text="Adorable pups" 
              label="Puppies" 
              path="/adoption" 
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="../../assets/fish.jpg" 
              text="Adorable fishes" 
              label="Fish" 
              path="/adoption" 
            />
            <CardItem 
              src="../../assets/duck.jpg" 
              text="Adorable birds" 
              label="Birds" 
              path="/adoption" 
            />
            <CardItem 
              src="../../assets/cow.jpg" 
              text="Adorable cattle" 
              label="Cattle" 
              path="/adoption" 
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

// Home Component
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
    </div>
  )
}

export default Home