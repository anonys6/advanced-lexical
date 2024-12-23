"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

// Update this with your own image import:
import heroImage from "@/assets/editing-tools.jpg";

interface FeedbackFormProps {
    title?: string;
}

interface FormData {
    name: string;
    email: string;
    feedback: string;
}

export default function FeedbackPage({ title = "Feedback" }: FeedbackFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        feedback: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");

    // Adjust your environment variables to match Next.js conventions
    const siteKey = process.env.NEXT_PUBLIC_SITE_KEY || "";
    const BACKEND_URI = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = (): Record<string, string> => {
        const newErrors: Record<string, string> = {};

        if (!formData.name || formData.name.length > 50) {
            newErrors.name = "Name is required and should be less than 50 characters.";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || formData.email.length > 100 || !emailPattern.test(formData.email)) {
            newErrors.email =
                "Email is required, should be less than 100 characters, and must be a valid email address.";
        }
        if (!formData.feedback || formData.feedback.length > 500) {
            newErrors.feedback = "Feedback is required and should be less than 500 characters.";
        }

        return newErrors;
    };

    const handleRecaptchaChange = (value: string | null) => {
        // reCAPTCHA returns a token or null
        setRecaptchaVerified(!!value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMessage(""); // Reset any previous success message
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
                setSuccessMessage("Your feedback has been sent successfully. Thank you!");
                // Reset form fields
                setFormData({ name: "", email: "", feedback: "" });
                setErrors({});
            }
        } catch (error) {
            console.error("Error sending feedback:", error);
        }
    };

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <Image
                    src={heroImage}
                    alt="Feedback Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-6"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                        <p className="text-sm text-gray-200">
                            We value your feedback! Share your thoughts or suggestions to help us improve.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose lg:prose-lg mx-auto">
                    <p className="text-xl text-gray-600 mb-8">
                        Please fill out the form below and let us know what you think about our service.
                    </p>

                    {/* Feedback Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Success Message */}
                        {successMessage && (
                            <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">
                                {successMessage}
                            </div>
                        )}

                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none ${errors.name ? "border-red-500" : "focus:border-blue-500"
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none ${errors.email ? "border-red-500" : "focus:border-blue-500"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Feedback Field */}
                        <div>
                            <label
                                htmlFor="feedback"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Feedback
                            </label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows={5}
                                value={formData.feedback}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none ${errors.feedback ? "border-red-500" : "focus:border-blue-500"
                                    }`}
                            ></textarea>
                            {errors.feedback && (
                                <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>
                            )}
                        </div>

                        {/* reCAPTCHA */}
                        <div className="flex justify-center">
                            <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </article>
    );
}
