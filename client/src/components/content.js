import React, { useState } from "react";
import "./content.css";

const Content = ({ children }) => {
    return (
        <>
            <div className="content">
                {children}
            </div>
        </>
    );
};

export default Content;