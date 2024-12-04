import React, { useState } from "react";

const Profile: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://via.placeholder.com/150"
  );

  const user = {
    userId: 101,
    email: "jane.doe@example.com",
    userName: "jane_doe",
    password: "P@ssw0rd123",
    firstName: "Jane",
    bio: "Full-stack developer with a passion for building amazing applications.",
    location: "San Francisco, CA",
    website: "https://janedoe.dev",
  };

  // Handle file input change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfilePicture(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded-lg">
        <div className="card-header text-white" style={{ backgroundColor: "#1DA1F2" }}>
          <h3 className="text-center mb-0">User Profile</h3>
        </div>
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            {/* Profile Picture Section */}
            <label
              htmlFor="profileImageInput"
              style={{
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
              }}
            >
              {/* Profile Picture */}
              <img
                src={profilePicture}
                alt="Profile"
                className="img-fluid rounded-circle border border-4 border-white shadow-sm"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              {/* Icon Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  opacity: 0,
                  borderRadius: "50%",
                  transition: "opacity 0.3s ease-in-out",
                }}
                className="image-overlay"
              >
                <i className="bi bi-camera" style={{ fontSize: "24px" }}></i>
              </div>
            </label>
            {/* Hidden File Input */}
            <input
              type="file"
              id="profileImageInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
            <h5 className="mt-2">{user.userName || "Anonymous User"}</h5>
            <p>{user.email}</p>

            {/* User Details Section */}
            <div className="mt-2 border-dark border-top pt-2">
              <h5 className="text-primary text-center">Details</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name:</strong> {user.firstName || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Bio:</strong> {user.bio || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> {user.location || "N/A"}
                </li>
                <li className="list-group-item">
                  <strong>Website:</strong>{" "}
                  {user.website ? (
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {user.website}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
