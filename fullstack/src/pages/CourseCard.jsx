import React, { useState } from 'react';

const CourseCard = ({ id, title, imageUrl, description, onUpdate, onDelete }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedImageUrl, setUpdatedImageUrl] = useState(imageUrl);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingImageUrl, setIsEditingImageUrl] = useState(false);

  const handleUpdate = () => {
    onUpdate({ title: updatedTitle, description: updatedDescription, imageUrl: updatedImageUrl });
    setIsEditingDescription(false);
    setIsEditingImageUrl(false);
  };

  const handleEditDescription = () => {
    setIsEditin0gDescription(true);
  };

  const handleEditImageUrl = () => {
    setIsEditingImageUrl(true);
  };

  return (
    <div className="course-card">
      <img src={updatedImageUrl} alt={title} />
      <h3>{title}</h3>
      {isEditingDescription ? (
        <textarea
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
      ) : (
        <p>{description}</p>
      )}
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      {isEditingImageUrl ? (
        <div>
          <input
            type="text"
            value={updatedImageUrl}
            onChange={(e) => setUpdatedImageUrl(e.target.value)}
            onBlur={() => setIsEditingImageUrl(false)}
            placeholder="Enter Image URL"
          />
          <button onClick={handleUpdate}>Update Image</button>
        </div>
      ) : (
        <button onClick={handleEditImageUrl}>Edit Image</button>
      )}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
      {isEditingDescription ? (
        <button onClick={handleUpdate}>Save Description</button>
      ) : (
        <button onClick={handleEditDescription}>Edit Description</button>
      )}
    </div>
  );
};

export default CourseCard;
