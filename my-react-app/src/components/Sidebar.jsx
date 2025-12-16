import React from "react";
import BlogData from "../Data/BlogData";

const Sidebar = () => {
  // Sort blogs by date for "Latest" section
  const latestBlogs = [...BlogData]
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 3);

  // "Popular" blogs (you can later change this logic, e.g., based on views or likes)
  const popularBlogs = BlogData.slice(0, 3); // just the first 3 for now

  return (
    <aside className="w-full md:w-80 lg:w-96 p-4 bg-white rounded-2xl shadow-sm">
      {/* 🔹 Popular Blogs */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Popular Blogs
        </h3>
        <ul className="space-y-4">
          {popularBlogs.map((blog) => (
            <li key={blog.id} className="flex items-start gap-3">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {blog.title}
                </p>
                <span className="text-xs text-gray-500">{blog.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 🔹 Latest Blogs */}
      <section>
        <h3 className="text-lg font-semibold mb-4 border-b pb-2 text-gray-800">
          Latest Blogs
        </h3>
        <ul className="space-y-4">
          {latestBlogs.map((blog) => (
            <li key={blog.id} className="flex items-start gap-3">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {blog.title}
                </p>
                <span className="text-xs text-gray-500">{blog.published_date}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
