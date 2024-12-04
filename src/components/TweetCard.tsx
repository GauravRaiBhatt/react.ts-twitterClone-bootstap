import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { formatDistanceToNow, parseISO } from "date-fns";

interface TweetCardProps {
  content: string;
  author: string;
  createdAt: string; // The creation date will be passed as a string (ISO format)
  likes: number;
}

const TweetCard: React.FC<TweetCardProps> = ({
  content,
  author,
  createdAt,
  likes,
}) => {
  // State to track the like count for the tweet
  const [likeCount, setLikeCount] = useState<number>(likes);

  // State to track whether the tweet is liked by the current user
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // Function to handle the like button click
  const handleLikeClick = () => {
    if (isLiked) {
      // If already liked, decrement the like count
      setLikeCount(likeCount - 1);
    } else {
      // If not liked, increment the like count
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked); // Toggle the liked state
  };

  // Calculate the time difference (e.g., "3 days ago", "2 months ago")
  const timeAgo = formatDistanceToNow(parseISO(createdAt), { addSuffix: true });

  return (
    <div
      className="card shadow-sm mb-4 mx-auto"
      style={{ width: "70%", padding: "1.5rem" }}
    >
      <div className="d-flex justify-content-between">
        <span className="fw-bold">{author}</span>
        <span className="text-muted">{timeAgo}</span>
      </div>
      <p className="mt-2">{content}</p>

      <div className="d-flex align-items-center">
        {/* Like button with dynamic color */}
        <button
          className="btn btn-link p-0"
          onClick={handleLikeClick}
          style={{ color: isLiked ? "#007bff" : "#6c757d" }} // Blue when liked, grey when not liked
        >
          <FaThumbsUp />
        </button>
        <span className="ms-2">{likeCount}</span>
      </div>
    </div>
  );
};

export default TweetCard;
