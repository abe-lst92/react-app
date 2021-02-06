import React from "react";
import "../Styles/Header.css";



const navStyling = {
    headerStyle:{
        color: "blue",
        backgroundColor: "red"
    },
    
    headStyle:{
        textAlign: "center",
        fontSize: 10
    }
} 


function Header() {
    return (

        <header className="header">

            <h1 style={navStyling.headStyle} >Welcome!</h1>
            <h2 style={navStyling.headStyle}>Abraham</h2>


        </header>









    );
}

export default Header;
