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
      <div className="min-h-screen bg-[#0B0909]">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-10">
          <p className="text-gray-500">Loading ticket...</p>
        </main>
      </div>
    );
  }

  if (error && !ticket) {
    return (
      <div className="min-h-screen bg-[#0B0909]">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-10">
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>

          <Link
            to="/"
            className="mt-4 inline-block text-sm font-medium text-white hover:underline"
          >
            ← Back to tickets
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-white"
        >
          ← Back to tickets
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-xl shadow-black/40">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.02] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Ticket ID
              </p>
              <h1 className="mt-1.5 font-mono text-2xl font-bold text-white">
                {ticket.ticket_id}
              </h1>
            </div>

            <StatusBadge status={ticket.status} />
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 px-6 py-8 sm:grid-cols-2 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Customer Name
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-gray-100">
                {ticket.customer_name}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Customer Email
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-gray-100">
                {ticket.customer_email}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Subject
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-gray-100">
                {ticket.subject}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 pb-3">
                Description
              </p>
              <p className="mt-1.5 whitespace-pre-wrap rounded-lg border border-white/5 bg-white/[0.02] p-4 text-[15px] leading-relaxed text-gray-300">
                {ticket.description}
              </p>
            </div>

            <div className="text-center sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Created At
              </p>
              <p className="mt-1.5 text-sm text-gray-400">
                {ticket.created_at}
              </p>
            </div>
          </div>

          {/* Update status */}
          <div className="flex flex-col items-center border-t border-white/10 bg-white/[0.02] px-6 py-6 sm:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Update Status
            </h2>

            <div className="mt-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-11 rounded-lg border border-white/10 bg-[#1a1a1a] px-4 text-sm font-medium text-white outline-none transition focus:border-white/40 sm:w-48"
              >
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button
                onClick={handleUpdateStatus}
                disabled={updating || status === ticket.status}
                className="h-11 rounded-lg bg-white px-5 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40 sm:w-40"
              >
                {updating ? "Updating..." : "Update Status"}
              </button>
            </div>

            {message && (
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-emerald-400">
                {message}
              </p>
            )}

            {error && (
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-red-400">
                {error}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetails;
