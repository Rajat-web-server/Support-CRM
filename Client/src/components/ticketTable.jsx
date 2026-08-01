import { Link } from "react-router-dom";
import StatusBadge from "./statusBadge";

function TicketTable({ tickets }) {
  if (tickets.length === 0) {
    return (
      <div className="rounded-xl border bg-[#222121] p-10 text-center text-gray-500">
        No tickets found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0d0d0d] shadow-xl shadow-black/40">
  <table className="w-full min-w-[700px] text-left">
    <thead className="border-b border-white/10 bg-white/[0.03]">
      <tr>
        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Ticket ID
        </th>
        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Customer
        </th>
        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Subject
        </th>
        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Status
        </th>
        <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Date
        </th>
      </tr>
    </thead>

    <tbody>
      {tickets.map((ticket) => (
        <tr
          key={ticket.ticket_id}
          className="border-b border-white/5 transition last:border-b-0 hover:bg-white/[0.03]"
        >
          <td className="px-5 py-4">
            <Link
              to={`/ticket/${ticket.ticket_id}`}
              className="font-mono font-medium text-blue-400 hover:text-blue-300 hover:underline"
            >
              {ticket.ticket_id}
            </Link>
          </td>

          <td className="px-5 py-4 text-[15px] text-gray-100">
            {ticket.customer_name}
          </td>

          <td className="px-5 py-4 text-[15px] text-gray-300">
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