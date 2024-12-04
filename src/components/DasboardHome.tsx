import React from "react";
import TweetCard from "./TweetCard";

const TweetsFeed: React.FC = () => {
  // Example tweet data
  const tweets = [
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    {
      content: "Just started working on a new project! #exciting",
      author: "Jane Doe",
      createdAt: "2024-12-04T15:18:09.469Z",
      likes: 25,
    },
    {
      content: "Had a great lunch today! #yum",
      author: "John Smith",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 15,
    },
    // More tweets...
  ];

  return (
    <div
      style={{
        height: "100%", // Ensure it takes up the full available height
        overflow: "hidden", // Prevent the entire component from scrolling
        display: "flex",
        flexDirection: "column", // Make the header and content stack vertically
      }}
    >
      {/* Sticky Header */}
      <h2
        className="text-center mb-4"
        style={{
          position: "sticky", // Make it sticky
          top: 0, // Stick to the top of the right section
          backgroundColor: "white", // Ensure background color to avoid overlap with content
          zIndex: 10, // Make sure the heading stays on top of other content
          padding: "1rem", // Optional: Adjust the padding to prevent overlap with content
          marginBottom: 0,
          color: "#037cf4",
        }}
      >
        Latest Tweets
      </h2>

      {/* Scrollable Content */}
      <div
        style={{
          flexGrow: 1, // Allow this container to take up remaining space
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        {tweets.map((tweet, index) => (
          <TweetCard
            key={index}
            content={tweet.content}
            author={tweet.author}
            createdAt={tweet.createdAt}
            likes={tweet.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default TweetsFeed;
