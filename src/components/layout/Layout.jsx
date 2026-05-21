import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const reserveHeaderSpace = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-warmstone text-ink">
      <Header />
      <main className={reserveHeaderSpace ? "pt-[var(--site-header-height)]" : ""}>{children}</main>
      <Footer />
    </div>
  );
}
