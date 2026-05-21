import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-tile text-white shadow-sm hover:-translate-y-0.5 hover:bg-lead-900 focus-visible:ring-tile/30 active:translate-y-0",
  light: "bg-white text-lead-900 shadow-sm hover:-translate-y-0.5 hover:bg-warmstone focus-visible:ring-white/70 active:translate-y-0",
  outline: "border border-white/60 text-white hover:-translate-y-0.5 hover:bg-white hover:text-lead-900 focus-visible:ring-white/70 active:translate-y-0",
  ghost: "border border-lead-900/15 bg-white/70 text-lead-900 shadow-sm hover:-translate-y-0.5 hover:border-tile hover:bg-white focus-visible:ring-tile/30 active:translate-y-0"
};

export default function ButtonLink({ to, href, children, variant = "primary", className = "", showArrow = true }) {
  const classes = `inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-extrabold leading-tight transition duration-300 focus:outline-none focus-visible:ring-4 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  );
}
