import React, { useState, useEffect } from "react";
import AdvancedStatistics from "./AdvancedStatistics";
import LinksShortener from ".";

const UrlSection = () => {
  return (
    <section className="url-section-container">

       <div className="url-box"> 
       <LinksShortener/>
       
      </div> 
      <AdvancedStatistics />
    </section>
  );
};

export default UrlSection;
