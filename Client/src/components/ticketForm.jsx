import { useState } from "react";

function TicketForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    subject: "",
    description: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (
      !formData.customer_name.trim() ||
      !formData.customer_email.trim() ||
      !formData.subject.trim() ||
      !formData.description.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border bg-[#0f0e0e] p-6 shadow-sm"
    >
      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-800 p-3 text-sm text-white">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold">Customer Name</label>

          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            placeholder="Enter customer name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">Customer Email</label>

          <input
            type="email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            placeholder="customer@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">Subject</label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is the issue?"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none "
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the customer's issue..."
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-black px-4 py-3 font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 border border-b-white"
        >
          {loading ? "Creating Ticket..." : "Create Ticket"}
        </button>
      </div>
    </form>
  );
}

export default TicketForm;
