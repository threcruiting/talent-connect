const Footer = () => {
  return (
    <footer className="bg-primary border-t border-secondary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-lg text-primary-foreground">
            Tuhon<span className="text-secondary">Recruiting</span>
          </p>
          <div className="flex gap-8 text-sm text-primary-foreground/50">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#process" className="hover:text-secondary transition-colors">Process</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
          <p className="text-primary-foreground/30 text-sm">
            © 2026 Tuhon Recruiting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
