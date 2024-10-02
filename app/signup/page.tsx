import SignupForm from "@/components/forms/SignupForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";

export default function Signup() {
  return (
    <div>
      <Navbar activeLink="/signup" />
      <div className="container mx-auto px-6 py-16 flex flex-col min-h-[calc(100vh-83px)]">
        <SignupForm />
        <Footer />
      </div>
    </div>
  );
}
