import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-blue-500 font-medium">{blog.category}</p>
        <h2 className="text-lg font-semibold text-gray-900 mt-1">
          {blog.title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {blog.content}
        </p>

        <div className="flex items-center mt-4">
          <img
            src={blog.image}
            alt={blog.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-800">{blog.author}</p>
            <p className="text-xs text-gray-500">
              {blog.published_date} • {blog.reading_time}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-green-300 cursor-pointer text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
