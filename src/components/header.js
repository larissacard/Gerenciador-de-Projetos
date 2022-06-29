import React from "react";

const Header = ({children}) => {
    return (
        <div className="header">
            <div className="header1"></div>
            {children}
        </div>
    )
}

export default Header;