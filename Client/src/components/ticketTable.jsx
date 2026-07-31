import { Link } from "react-router-dom";
import StatusBadge from "./statusBadge";

function TicketTable({ tickets }) {
  if (tickets.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
        No tickets found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="w-full min-w-[700px] text-left">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-5 py-4 text-sm font-semibold">Ticket ID</th>
            <th className="px-5 py-4 text-sm font-semibold">Customer</th>
            <th className="px-5 py-4 text-sm font-semibold">Subject</th>
            <th className="px-5 py-4 text-sm font-semibold">Status</th>
            <th className="px-5 py-4 text-sm font-semibold">Date</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.ticket_id}
              className="border-b last:border-b-0 hover:bg-gray-50"
            >
              <td className="px-5 py-4">
                <Link
                  to={`/ticket/${ticket.ticket_id}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {ticket.ticket_id}
                </Link>
              </td>

              <td className="px-5 py-4">
                {ticket.customer_name}
              </td>

              <td className="px-5 py-4">
                {ticket.subject}
              </td>

              <td className="px-5 py-4">
                <StatusBadge status={ticket.status} />
              </td>

              <td className="px-5 py-4 text-sm text-gray-500">
                {ticket.created_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketTable;