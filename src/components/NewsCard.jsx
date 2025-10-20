import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, details, rating, total_view, thumbnail_url, tags } =
    news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300 mb-7">
      {/* Header */}
      <div className="flex justify-between bg-base-200 items-center px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold px-4 mt-3">{title}</h2>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="px-4 pt-3 text-accent">
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-medium cursor-pointer">
                {" "}
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
        <div className="my-5 border border-base-300"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-3">
        <div className="flex items-center text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar className="ml-3" key={i} />
          ))}
          <span className="ml-4 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaEye className="mr-1" /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
