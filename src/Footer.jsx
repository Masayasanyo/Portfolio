import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <hr />
        <div>©{currentYear} Masay Nishimura</div>
    </footer>
  );
}

export default Footer;