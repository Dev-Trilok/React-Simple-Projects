import React from 'react'

export const Footer = () => {

    let footerStyle={
        top:"100vh",
        width:"100%"
    }

    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
           <p className="text-center">
           Copyrights &copy; 2021
           </p>
        </footer>
    )
}
