// AllProductsPage.js
import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { fetchAllProducts } from '../api'; // API function to fetch all products

function AllProductsPage() {
  // State for products, filters, current page, products per page, etc.
  // Implement useEffect to fetch products based on filters
  // Implement sorting, filtering, and pagination logic
  
  return (
    <div>
      <h1>All Products</h1>
      <Filter filters={filters} setFilters={setFilters} />
      {currentProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllProductsPage;
