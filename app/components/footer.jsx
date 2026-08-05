// @flow strict
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="voyage-footer">
      <div>© {currentYear} ADITYA MALKAR · ALL CHARTS ORIGINAL</div>
      <div className="fline">
        DRAWN WITH NEXT.JS &amp; A STEADY HAND · <a href="#hero">RETURN TO PORT ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
