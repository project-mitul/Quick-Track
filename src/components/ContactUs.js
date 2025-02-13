import React, { useState } from "react";
import "./ContactUs.css"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Check your network.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let’s get in touch</h2>
          <p>Email, call, or complete the form to connect with us.</p>
          <p><strong>Phone:</strong> +91 999xx-xxxxx</p>
          <p><strong>Email:</strong> quicktrackai@gmail.com</p>
          <p><strong>Office:</strong> Parul University, PO-Limbda, Vaghodia, Vadodara, 391-760</p>
        </div>

        <div className="contact-form-container">
          <h3>Get in Touch</h3>
          <p>We’ll get back to you within 24 hours.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
              <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
            </div>

            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <input type="text" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />

            {status && <p className="status-message">{status}</p>}

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
