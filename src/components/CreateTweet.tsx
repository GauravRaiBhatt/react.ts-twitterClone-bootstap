import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTweet: React.FC = () => {
  const navigate = useNavigate();
  // State for storing the tweet content
  const [tweetContent, setTweetContent] = useState("");
  const [isTweetButtonActive, setIsTweetButtonActive] = useState(true);

  // Handle text area input and check character length
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setTweetContent(content);
    setIsTweetButtonActive(content.length <= 280);
  };

  const handleTweetCreation = () => {
    setTimeout(() => {
      console.log(tweetContent);
      navigate("../home");
    }, 2000);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      {/* Heading */}
      <h2
        className="text-center mb-4 text-primary"
        style={{ fontWeight: "bold" }}
      >
        Create Your Tweet
      </h2>

      {/* Card Wrapper */}
      <div
        className="card shadow-lg border-0 rounded-lg"
        style={{ width: "100%", maxWidth: "600px", padding: "1.5rem" }}
      >
        {/* Input Box */}
        <textarea
          className="form-control mb-3"
          placeholder="What's happening..."
          rows={4}
          value={tweetContent}
          onChange={handleTextChange}
          style={{
            resize: "vertical",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            padding: "10px",
          }}
        ></textarea>

        {/* Character Count and Warning Message */}
        <div className="d-flex justify-content-between">
          <p className="text-muted">{tweetContent.length}/280</p>
          {tweetContent.length > 280 && (
            <p className="text-danger">Max of 280 characters allowed!</p>
          )}
        </div>

        {/* Tweet Button */}
        <button
          className="btn btn-primary w-100 py-2"
          disabled={!isTweetButtonActive}
          onClick={handleTweetCreation}
          style={{
            backgroundColor: "#1DA1F2",
            borderColor: "#1DA1F2",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default CreateTweet;
