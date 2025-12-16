import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogData from "../data/BlogData";
import BlogCard from "../components/BlogCard";
import CategoryFilter from "../components/CategoryFilter";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogsPerPage = 6;

  // Unique categories
  const categories = ["All", ...new Set(BlogData.map((blog) => blog.category))];

  // Filter blogs
  const filteredBlogs =
    selectedCategory === "All"
      ? BlogData
      : BlogData.filter((blog) => blog.category === selectedCategory);

  // Pagination setup
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div>
      <div>
        <Banner/>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-6">
      
      {/* Left: Main Content */}
      <div className="flex-1">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategoryChange}
        />

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          ) : (
            <p className="text-gray-500 text-sm">No blogs found in this category.</p>
          )}
        </div>

        <div className="flex justify-center">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>

      {/* Right: Sidebar */}
      <Sidebar />
    </div>
    </div>
    
  );
};

export default Blog;
