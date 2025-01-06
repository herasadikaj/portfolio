export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="p-6  text-center text-white">
        <p>&copy; {currentYear} Hera Sadikaj. All Rights Reserved.</p>
      </footer>
    );
  }
  