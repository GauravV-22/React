export default function EventFilters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="filters">
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="">All Types</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>

      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Workshop">Workshop</option>
        <option value="Meetup">Meetup</option>
        <option value="Webinar">Webinar</option>
      </select>

      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
      />
    </div>
  )
}
