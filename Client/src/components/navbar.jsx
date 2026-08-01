import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-white">
          Support CRM
        </Link>

        <Link
          to="/create"
          className="rounded-lg bg-white px-4 py-2 text-sm text-black transition hover:bg-gray-500 font-bold"
        >
          + Create Ticket
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
