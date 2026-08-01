import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import TicketForm from "../components/ticketForm";

import { createTicket } from "../services/ticketService";

function CreateTicket() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleCreateTicket(formData) {
    try {
      setLoading(true);

      const result = await createTicket(formData);

      console.log("Created ticket:", result);

      navigate(`/ticket/${result.ticket_id}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0909]">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-white"
          >
            ← Back to tickets
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Create New Ticket
          </h1>

          <p className="mt-2 text-gray-500">
            Add the customer's information and describe the issue.
          </p>
        </div>

        <TicketForm
          onSubmit={handleCreateTicket}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default CreateTicket;