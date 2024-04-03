import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Rating } from "./StarRating";

export function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <article
      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      key={post.id}
    >
      <div className="flex justify-between items-center mb-3 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center  rounded dark:bg-primary-200 dark:text-primary-800">
          {/* Numero de estrellas */}
          <Rating rating={post.rating} />
          Rating: {post.rating}/5
        </span>
        <span className="text-sm">
          {format(post.updated_at, "yyyy-MM-dd, h:mm:ss a")}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{post.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {post.content}
      </p>
      <div className="flex justify-end items-center">
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
}
