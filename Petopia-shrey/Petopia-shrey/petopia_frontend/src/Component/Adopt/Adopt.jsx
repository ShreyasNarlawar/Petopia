import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayImage from "../../assets/cover.jpg";
import "../Adopt/Adopt.css";

const API_BASE_URL = "https://localhost:44395/api"; // Base API URL

const Adopt = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/PetProfile`);
        const petsData = response.data;

        const petsWithDetails = await Promise.all(
          petsData.map(async (pet) => {
            const images = await fetchPetImages(pet.petId);
            const user = await fetchUserDetails(pet.userId);
            return { ...pet, images, user };
          })
        );

        setPets(petsWithDetails);
      } catch (err) {
        setError("Failed to load pets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const fetchPetImages = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/PetImage/get/${id}`);
      return response.data.map((img) => img.imageUrl);
    } catch (err) {
      return [];
    }
  };

  const fetchUserDetails = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Users/${id}`);
      return response.data;
    } catch (err) {
      return { name: "Unknown", email: "N/A", phoneNo: "N/A", location: "N/A" };
    }
  };

  const renderPetCards = (petsList) =>
    petsList.map((pet) => (
      <div className="pet-card" key={pet.petId} onClick={() => setSelectedPet(pet)}>
        {pet.images?.length > 0 ? (
          <img src={pet.images[0]} alt={pet.name} className="pet-image" />
        ) : (
          <img src={DisplayImage} alt="Default Pet" className="pet-image" />
        )}
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age} years</p>
        <p>Owner: {pet.user?.name}</p>
        <button className="adopt-button">View Details</button>
      </div>
    ));

  if (loading) return <p>Loading pets...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="adopt-page">
      <header className="header">
        <img src={DisplayImage} alt="Adoption Logo" className="header-image" />
        <h2>Adopt love. Adopt life. Adopt a friend forever.</h2>
      </header>

      <main>
        <h2 className="companion">Find your perfect companion!</h2>
        <p id="p1">Browse through our available pets looking for a new home.</p>

        {selectedPet && (
          <div className="selected-pet">
            <h3>Pet Details</h3>
            <div className="image-gallery">
              {selectedPet.images?.length > 0 ? (
                selectedPet.images.map((img, index) => (
                  <img key={index} src={img} alt={`${selectedPet.name} Image`} className="pet-image" />
                ))
              ) : (
                <p>No images available.</p>
              )}
            </div>
            <p>Name: {selectedPet.name}</p>
            <p>Breed: {selectedPet.breed}</p>
            <p>Age: {selectedPet.age} years</p>
            <p>Gender: {selectedPet.gender}</p>
            <p>Size: {selectedPet.size}</p>
            <p>Weight: {selectedPet.weight} kg</p>
            <p>Health: {selectedPet.health}</p>
            <h3>Owner Details</h3>
            <p>Name: {selectedPet.user?.name}</p>
            <p>Email: {selectedPet.user?.email}</p>
            <p>Phone: {selectedPet.user?.phoneNo}</p>
            <p>Location: {selectedPet.user?.location}</p>
            <button className="adopt-button">Adopt {selectedPet.name}</button>
          </div>
        )}

        <section>
          <h2>Available Pets</h2>
          <div className="pet-grid">{renderPetCards(pets)}</div>
        </section>
      </main>
    </div>
  );
};

export default Adopt;