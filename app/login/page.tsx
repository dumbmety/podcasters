import LoginForm from "@/components/forms/LoginForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";

export default function Login() {
  return (
    <div>
      <Navbar activeLink="/login" />
      <div className="container mx-auto px-6 py-16 flex flex-col min-h-[calc(100vh-83px)]">
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
}
