import React from "react"; 

const year = new Date().getFullYear();
function Footer(){
    return (
        <footer>
            <p1>Copyright {year}</p1>
        </footer>

    );
}

export default Footer;