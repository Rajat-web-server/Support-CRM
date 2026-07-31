function StatusFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none"
    >
      <option value="">All Statuses</option>
      <option value="pending">Pending</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  );
}

export default StatusFilter;