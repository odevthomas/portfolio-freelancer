import React from "react";

const Loading = () => {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true"></div>
      <p> Carregando...</p>
    </div>
  );
};

export default Loading;