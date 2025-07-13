import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png"; // adjust the path if needed

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo and Brand Name */}
       <div className="flex items-center gap-3">
  <img src={logo} alt="SahaaraAI Logo" className="h-28 w-auto" />
</div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600">
            {t("loginRegister")}
          </a>
          <a href="#" className="hover:text-red-600 font-semibold">
            {t("urgentConsult")}
          </a>
          <a href="#" className="hover:text-purple-600">
            {t("services")}
          </a>
          <a href="#" className="hover:text-purple-600">
            {t("mission")}
          </a>
        </nav>
      </div>
    </header>
  );
}

