"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Feedback({ title }) {
  const siteKey = process.env.NEXT_PUBLIC_SITE_KEY;
  const BACKEND_URI = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = `${title} - Advanced Text Editor`;
    window.scrollTo(0, 0);
  }, [title]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length > 50) {
      newErrors.name =
        "Name is required and should be less than 50 characters.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !formData.email ||
      formData.email.length > 100 ||
      !emailPattern.test(formData.email)
    ) {
      newErrors.email =
        "Email is required, should be less than 100 characters, and must be a valid email address.";
    }
    if (!formData.feedback || formData.feedback.length > 500) {
      newErrors.feedback =
        "Feedback is required and should be less than 500 characters.";
    }
    return newErrors;
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!recaptchaVerified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URI}/feedback`, formData);
      if (response.data.status === "success") {
        alert("Feedback sent successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      }
    } catch (error) {
      console.error("Error sending feedback: " + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">{title}</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Your feedback"
                rows="4"
                required
              ></textarea>
              {errors.feedback && (
                <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>
              )}
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
