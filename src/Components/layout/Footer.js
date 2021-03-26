import React from 'react';

function Footer(){
  return(
    <footer style={footerStyle}>
      <h1>Sisu&copy;</h1>
    </footer>
  )
}

const footerStyle = {
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0px',
  width: '100%'
}
export default Footer;