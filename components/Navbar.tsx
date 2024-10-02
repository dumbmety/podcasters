import Logo from "@/components/shared/Logo";
import Navigation from "@/components/shared/Navigation";

export default function Navbar({
  activeLink,
}: {
  activeLink: "/" | "/about" | "/pricing" | "/blog" | "/login" | "/signup";
}) {
  return (
    <header className="sticky top-0 bg-white/5 backdrop-blur-md z-20">
      <div className="container mx-auto px-6 py-6 flex justify-between lg:justify-normal space-x-12 items-center lg:divide-x divide-gray-200">
        <Logo />
        <Navigation activeLink={activeLink} />
      </div>
    </header>
  );
}
