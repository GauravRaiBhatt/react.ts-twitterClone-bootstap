import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TweetCard from "./TweetCard";

// Define the type for a tweet
interface Tweet {
  content: string;
  author: string;
  createdAt: string;
  likes: number;
}

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTweets, setFilteredTweets] = useState<Tweet[]>([]); // Explicitly define the type of state

  // Example tweets data for searching
  const tweets: Tweet[] = [
    {
      content: "Excited to start a new journey! #motivation",
      author: "Alice Johnson",
      createdAt: "2024-12-01T10:00:00Z",
      likes: 32,
    },
    {
      content: "Lunch was amazing today! #foodie",
      author: "John Doe",
      createdAt: "2024-12-03T14:30:00Z",
      likes: 18,
    },
    {
      content: "What a wonderful day to code! #developer",
      author: "Jane Smith",
      createdAt: "2024-12-02T09:00:00Z",
      likes: 22,
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = tweets.filter(
        (tweet) =>
          tweet.content.toLowerCase().includes(query) ||
          tweet.author.toLowerCase().includes(query)
      );
      setFilteredTweets(filtered);
    } else {
      setFilteredTweets([]);
    }
  };

  return (
    <div className="container mt-4" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Sticky Header Section */}
      <div
        className="sticky-top bg-white pb-3"
        style={{ zIndex: 1000, top: 0, borderBottom: "1px solid #ddd" }}
      >
        {/* Heading */}
        <h2 className="text-center mb-3" style={{ color: "#037cf4" }}>
          Search Tweets Here
        </h2>

        {/* Search Input */}
        <div className="input-group">
          <span className="input-group-text bg-primary text-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by content or author..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          maxHeight: "calc(100vh - 120px)", // Account for sticky header height
          overflowY: "auto",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        {filteredTweets.length > 0 ? (
          filteredTweets.map((tweet, index) => (
            <TweetCard
              key={index}
              content={tweet.content}
              author={tweet.author}
              createdAt={tweet.createdAt}
              likes={tweet.likes}
            />
          ))
        ) : searchQuery ? (
          <p className="text-center text-muted">No tweets found.</p>
        ) : (
          <p className="text-center text-muted">
            Start typing to search for tweets.
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
