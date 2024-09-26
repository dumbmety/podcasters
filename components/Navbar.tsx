import Logo from "@/components/shared/Logo";
import Navigation from "@/components/shared/Navigation";

export default function Navbar() {
  return (
    <header className="container mx-auto py-6 flex space-x-12 items-center divide-x divide-gray-200">
      <Logo />
      <Navigation />
    </header>
  );
}
