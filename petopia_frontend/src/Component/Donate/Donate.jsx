import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    petName: "",
    age: "",
    houseTrained: false,
    size: "",
    gender: "",
    vaccinated: false,
    spayed: false,
    weight: "",
    breed: "",
    goodWithKids: false,
    goodWithOtherPets: false,
    health: "",
    needs: "",
    personality: "",
    monthlyExpense: "",
    registerId: "",
    imagePath: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="fullscreen-wrapper">
      <form onSubmit={handleSubmit} className="container mt-3 form-wrapper animate-fade-in">
        <h2>Pet Donation Form</h2>
        <div className="mb-3">
          <label>Pet Registration ID:</label>
          <input
            type="text"
            className="form-control"
            name="registerId"
            value={formData.registerId}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Pet Name:</label>
          <input
            type="text"
            className="form-control"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Size:</label>
          <select
            className="form-select"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Gender:</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Weight (kg):</label>
          <input
            type="number"
            className="form-control"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Breed:</label>
          <input
            type="text"
            className="form-control"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="vaccinated"
            checked={formData.vaccinated}
            onChange={handleChange}
          />
          <label className="form-check-label">Vaccinated</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="spayed"
            checked={formData.spayed}
            onChange={handleChange}
          />
          <label className="form-check-label">Spayed/Neutered</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="houseTrained"
            checked={formData.houseTrained}
            onChange={handleChange}
          />
          <label className="form-check-label">House Trained</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="goodWithKids"
            checked={formData.goodWithKids}
            onChange={handleChange}
          />
          <label className="form-check-label">Good With Kids</label>
        </div>
        <div className="mb-3">
          <label>Health:</label>
          <select
            className="form-select"
            name="health"
            value={formData.health}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Healthy">Healthy</option>
            <option value="Minor Health Issues">Minor Health Issues</option>
            <option value="Major Health Issues">Major Health Issues</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Upload Pet Image:</label>
          <input
            type="file"
            className="form-control"
            name="imagePath"
            onChange={(e) =>
              setFormData({ ...formData, imagePath: e.target.files[0] })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Donate;
