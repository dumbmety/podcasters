import Logo from "@/components/shared/Logo";
import Navigation from "@/components/shared/Navigation";

export default function Navbar() {
  return (
    <header className="container mx-auto px-6 py-6 flex justify-between lg:justify-normal space-x-12 items-center lg:divide-x divide-gray-200">
      <Logo />
      <Navigation />
    </header>
  );
}
