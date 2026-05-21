import {
  BrickWall,
  CloudLightning,
  CarFront,
  ClipboardCheck,
  Droplets,
  Facebook,
  Fence,
  FoldHorizontal,
  Grid3X3,
  Hammer,
  House,
  Instagram,
  Layers,
  LayoutGrid,
  Leaf,
  Linkedin,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Triangle
} from "lucide-react";

const icons = {
  BrickWall,
  CloudLightning,
  CarFront,
  ClipboardCheck,
  Droplets,
  Facebook,
  Fence,
  FoldHorizontal,
  Grid3X3,
  Hammer,
  House,
  Instagram,
  Layers,
  LayoutGrid,
  Leaf,
  Linkedin,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Triangle
};

export default function Icon({ name = "Leaf", className = "h-5 w-5", strokeWidth = 1.8 }) {
  const LucideIcon = icons[name] || Leaf;
  return <LucideIcon aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
