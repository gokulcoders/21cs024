import React from 'react';

function Filter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="filter-container">
      <select name="category" value={filters.category} onChange={handleChange} className="filter">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add other categories */}
      </select>
      <select name="company" value={filters.company} onChange={handleChange} className="filter">
        <option value="">All Companies</option>
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
        {/* Add other companies */}
      </select>
      {/* Add more filter options as needed */}
    </div>
  );
}

export default Filter;