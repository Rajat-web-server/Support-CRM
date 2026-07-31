import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/navbar";
import StatusBadge from "../components/statusBadge";

import { getTicket, updateTicket } from "../services/ticketService";

function TicketDetails() {
  const { ticket_id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadTicket() {
      try {
        setLoading(true);
        setError("");

        const data = await getTicket(ticket_id);

        setTicket(data);
        setStatus(data.status);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTicket();
  }, [ticket_id]);

  async function handleUpdateStatus() {
    try {
      setUpdating(true);
      setMessage("");
      setError("");

      await updateTicket(ticket_id, { status });

      setMessage("Ticket updated successfully.");

      // Reload the ticket so the UI reflects the database.
      const freshTicket = await getTicket(ticket_id);
      setTicket(freshTicket);
      setStatus(freshTicket.status);
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-gray-500">Loading ticket...</p>
        </main>
      </div>
    );
  }

  if (error && !ticket) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-10">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>

          <Link
            to="/"
            className="mt-4 inline-block text-sm font-medium text-black hover:underline"
          >
            ← Back to tickets
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="mx-auto w-full px-6 py-8">
        <Link to="/" className="text-sm text-gray-500 hover:text-black">
          ← Back to tickets
        </Link>

        <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">Ticket ID</p>

              <h1 className="mt-1 text-2xl font-bold">{ticket.ticket_id}</h1>
            </div>

            <StatusBadge status={ticket.status} />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Customer Name</p>

              <p className="mt-1 font-medium">{ticket.customer_name}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Customer Email</p>

              <p className="mt-1 font-medium">{ticket.customer_email}</p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm text-gray-500">Subject</p>

              <p className="mt-1 font-medium">{ticket.subject}</p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm text-gray-500">Description</p>

              <p className="mt-2 whitespace-pre-wrap text-gray-700">
                {ticket.description}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Created At</p>

              <p className="mt-1 text-sm">{ticket.created_at}</p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold">Update Status</h2>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-black"
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button
                onClick={handleUpdateStatus}
                disabled={updating || status === ticket.status}
                className="rounded-lg bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updating ? "Updating..." : "Update Status"}
              </button>
            </div>

            {message && (
              <p className="mt-3 text-sm text-green-600">{message}</p>
            )}

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetails;
