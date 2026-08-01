function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by ticket ID, name, or email..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-lg border border-white px-4 py-2.5 outline-none transition focus:border-black bg-[#1d1b1b]"
    />
  );
}

export default SearchBar;
