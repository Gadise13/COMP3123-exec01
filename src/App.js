import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="1210 javis St"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address2"
          placeholder="Apartment, studio, or floor"
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <select name="province" onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Quebec">Quebec</option>
          </select>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
          /> Agree Terms & Condition?
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>

      {submitted && (
        <table border="1" style={{ marginTop: '20px', width: '100%' }}>
          <tbody>
            <tr><th>Email:</th><td>{formData.email}</td></tr>
            <tr><th>Full Name:</th><td>{formData.fullName}</td></tr>
            <tr><th>Address:</th><td>{formData.address}</td></tr>
            <tr><th>Address 2:</th><td>{formData.address2}</td></tr>
            <tr><th>City:</th><td>{formData.city}</td></tr>
            <tr><th>Province:</th><td>{formData.province}</td></tr>
            <tr><th>Postal Code:</th><td>{formData.postalCode}</td></tr>
            <tr><th>Agreed:</th><td>{formData.agree ? 'Yes' : 'No'}</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;