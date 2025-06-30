// src/components/landing/Navbar.tsx
export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600">SahaaraAI</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600">Login/Register</a>
          <a href="#" className="hover:text-red-600 font-semibold">URGENT: Book a Consultation</a>
          <a href="#" className="hover:text-purple-600">Our Services</a>
          <a href="#" className="hover:text-purple-600">Our Mission</a>
        </nav>
      </div>
    </header>
  );
}