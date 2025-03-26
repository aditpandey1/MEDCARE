"use client";
import { useState } from "react";
import styles from "./DoctorManagement.module.css";

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState([
    { 
      id: 1, 
      name: "Dr. John Doe", 
      specialty: "Cardiologist", 
      email: "john@example.com", 
      phone: "123-456-7890", 
      qualification: "MBBS, MD", 
      location: "New York", 
      experience: "10 years",
      image: "" 
    }
  ]);
  const [newDoctor, setNewDoctor] = useState({ 
    name: "", 
    specialty: "", 
    email: "", 
    phone: "", 
    qualification: "", 
    location: "", 
    experience: "", 
    image: "" 
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    if (!imageFile) return null;
    
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      return data.secure_url; // Returns the uploaded image URL
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const addDoctor = async () => {
    if (!newDoctor.name || !newDoctor.specialty || !newDoctor.email || !newDoctor.phone || !newDoctor.qualification || !newDoctor.location || !newDoctor.experience) return;
    
    setLoading(true);
    const imageUrl = await uploadImageToCloudinary();
    setLoading(false);

    setDoctors([...doctors, { ...newDoctor, id: Date.now(), image: imageUrl || "" }]);
    setNewDoctor({ name: "", specialty: "", email: "", phone: "", qualification: "", location: "", experience: "", image: "" });
    setImageFile(null);
  };

  const deleteDoctor = (id: any) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2>Manage Doctors</h2>

      {/* Add Doctor Form */}
      <div className={styles.form}>
        <input type="text" name="name" placeholder="Doctor Name" value={newDoctor.name} onChange={handleChange} />
        <input type="text" name="specialty" placeholder="Specialty" value={newDoctor.specialty} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={newDoctor.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" value={newDoctor.phone} onChange={handleChange} />
        <input type="text" name="qualification" placeholder="Qualification" value={newDoctor.qualification} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={newDoctor.location} onChange={handleChange} />
        <input type="text" name="experience" placeholder="Experience (e.g., 5 years)" value={newDoctor.experience} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={addDoctor} className={styles.addBtn} disabled={loading}>
          {loading ? "Uploading..." : "Add Doctor"}
        </button>
      </div>

      {/* Doctor List */}
      <ul className={styles.doctorList}>
        {doctors.map((doctor) => (
          <li key={doctor.id} className={styles.doctorItem}>
            <div>
              <strong>{doctor.name}</strong> - {doctor.specialty}
              <p>Email: {doctor.email} | Phone: {doctor.phone}</p>
              <p>Qualification: {doctor.qualification} | Location: {doctor.location}</p>
              <p>Experience: {doctor.experience}</p>
              {doctor.image && <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />}
            </div>
            <button onClick={() => deleteDoctor(doctor.id)} className={styles.deleteBtn}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


