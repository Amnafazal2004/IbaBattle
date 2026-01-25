import AddServices from "@/features/AddServices";
import AllServices from "@/features/AllServices";
import BookingTest from "@/features/BookServices";
import Authentication from "@/features/Login"
import Header from "@/features/Header"
import ServicesSection from "@/features/ServicesSection";
import About from "@/features/About"

export default function Home() {
  return (
    <>
     {/* <Authentication/>
    <AddServices></AddServices>
    <AllServices></AllServices>
    <BookingTest></BookingTest> */}
    <Header/>
    <ServicesSection/>
    <About></About>
    </>
  );
}
