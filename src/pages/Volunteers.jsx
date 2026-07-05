import React, { useState } from 'react'

const Volunteers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    course: "",
    phone: "",
    college: "",
    batch: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.batch || !formData.course || !formData.college || !formData.rollNo) {
      alert("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    try {
      const baseApiUrl = import.meta.env.VITE_API_BASE_URL || "https://backend-yrc.onrender.com/api/v1";
      const payload = {
        fullName: formData.fullName.trim(),
        rollNo: formData.rollNo.trim(),
        phone: Number(formData.phone) || formData.phone,
        course: formData.course.trim(),
        batch: formData.batch.trim(),
        college: formData.college.trim(),
        address: formData.address.trim()
      };

      const response = await fetch(`${baseApiUrl}/volunteer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const errMsg = result?.error || result?.message || "Failed to register. Please try again.";
        throw new Error(errMsg);
      }

      alert(result?.message || "Registration Successful!");
      setFormData({
        fullName: "",
        rollNo: "",
        course: "",
        phone: "",
        college: "",
        batch: "",
        address: "",
      });
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#A7101F]">
          Volunteer Registration
        </h2>

        {/* Full Name */}
        <label className="block mb-2 font-medium">Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter full name"
          required
        />

        {/* Roll Number */}
        <label className="block mb-2 font-medium">Roll Number *</label>
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter roll number"
          required
        />

       
        {/* Course */}
        <label className="block mb-2 font-medium">Course *</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter course"
          required
        />
        
         {/* Batch */}
         <label className="block mb-2 font-medium">Batch *</label>
        <input
          type="text"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter batch"
          required
        />


        {/* Phone Number */}
        <label className="block mb-2 font-medium">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter phone number"
          required
        />

        {/* College Name */}
        <label className="block mb-2 font-medium">College Name *</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter college name"
          required
        />

        {/* Address */}
        <label className="block mb-2 font-medium">Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter address"
          required
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#A7101F] text-white py-2 rounded-lg hover:bg-red-500 transition-transform duration-200 hover:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    )
}

export default Volunteers