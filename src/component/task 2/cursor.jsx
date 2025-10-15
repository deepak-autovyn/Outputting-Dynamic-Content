import React from 'react';

function Corsor({ title, description }) {
  return (
    <div className="course-container">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Corsor;
