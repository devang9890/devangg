import React from "react";
import "./GlobalBackground.css";

const GlobalBackground = () => {
  return (
    <div className="global-bg">
      {/* Animated background blobs */}
      <div className="global-blob global-blob-1"></div>
      <div className="global-blob global-blob-2"></div>
      <div className="global-blob global-blob-3"></div>
      
      {/* Overlay with gradient effects matching Contact page aesthetic */}
      <div className="global-bg-overlay"></div>
    </div>
  );
};

export default GlobalBackground;
