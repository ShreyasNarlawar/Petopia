import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const petData = [
  //   { name: 'Buddy', breed: 'Golden Retriever', description: 'Friendly and loyal companion.' },
  //   { name: 'Max', breed: 'Beagle', description: 'Curious and playful, loves to explore.' },
  //   { name: 'Bella', breed: 'Bulldog', description: 'Gentle and affectionate, great with kids.' },
  //   // ... Other pet data
  // ];

  return (
    <div>

    <h1>From Homepage</h1>
    {/* <Stats /> */}
    </div>
    // <div className="home">

    //     <h1>Find Your Furry Best Friend.</h1>
    //     <p>Give a loving home to a deserving pet.</p>
    //     <motion.div
    //       className="search-bar"
    //       initial={{ y: 50, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       transition={{ delay: 0.5, duration: 0.8 }}
    //     >
    //       <input type="text" placeholder="Search by breed, location, etc." />
    //       <button>Search</button>
    //     </motion.div>

    //   <div className="categories">
    //     <h2>Browse by Category</h2>
    //     <motion.div
    //       className="category-grid"
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: { opacity: 0, y: 50 },
    //         visible: {
    //           opacity: 1,
    //           y: 0,
    //           transition: {
    //             staggerChildren: 0.2,
    //           },
    //         },
    //       }}
    //     >
    //       {['Dogs', 'Cats', 'Rabbits', 'Birds'].map((category, index) => (
    //         <motion.div
    //           className="category"
    //           key={index}
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.9 }}
    //         >
    //           {category}
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>

    //   <div className="featured-animals">
    //     <h2>Featured Pets</h2>
    //     <motion.div
    //       className="animal-grid"
    //       initial="hidden"
    //       animate="visible"
    //       variants={{
    //         hidden: { opacity: 0 },
    //         visible: {
    //           opacity: 1,
    //           transition: {
    //             staggerChildren: 0.2,
    //           },
    //         },
    //       }}
    //     >
    //       {petData.map((pet, index) => (
    //         <motion.div
    //           className="animal-card"
    //           key={index}
    //           whileHover={{ scale: 1.05 }}
    //           initial={{ opacity: 0, y: 50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.2 }}
    //         >
    //           <div className="animal-image">
    //             <svg width="100" height="100" viewBox="0 0 100 100">
    //               <circle cx="50" cy="50" r="40" fill="#FFD700" />
    //               <text x="50" y="55" fontSize="12" textAnchor="middle" fill="#000">
    //                 {pet.breed}
    //               </text>
    //             </svg>
    //           </div>
    //           <h3>{pet.name}</h3>
    //           <p>{pet.description}</p>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
  //   </div>
  );
};

export default Home;
