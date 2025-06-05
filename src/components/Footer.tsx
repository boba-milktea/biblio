const Footer = () => {
  return (
    <footer className="w-full bg-footer-bk text-surface py-4 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Biblio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
