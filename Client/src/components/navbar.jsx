import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900"
        >
          Support CRM
        </Link>

        <Link
          to="/create"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          + Create Ticket
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;