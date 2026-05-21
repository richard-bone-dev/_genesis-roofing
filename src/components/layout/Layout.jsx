import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-warmstone text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
