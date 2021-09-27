import React from "react";

let curryear = new Date().getFullYear();

const Footer = () => {
    return (
    <footer>
        <p>Copyright @ {curryear}</p>
    </footer>
    );
}

export default Footer;