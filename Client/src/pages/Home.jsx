import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";
import StatusFilter from "../components/statusFilter";
import TicketTable from "../components/ticketTable";

import { getTickets } from "../services/ticketService";

function Home() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTickets() {
      try {
        setLoading(true);
        setError("");

        const data = await getTickets({
          search,
          status,
        });

        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTickets();
  }, [search, status]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Support Tickets
          </h1>

          <p className="mt-2 text-gray-500">
            Manage and track customer support tickets.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <StatusFilter
            value={status}
            onChange={setStatus}
          />
        </div>

        {loading && (
          <div className="py-10 text-center text-gray-500">
            Loading tickets...
          </div>
        )}

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <TicketTable tickets={tickets} />
        )}
      </main>
    </div>
  );
}

export default Home;