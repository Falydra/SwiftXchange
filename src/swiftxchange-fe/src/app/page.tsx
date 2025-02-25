import ABout from "./components/about";
import Hero from "./components/hero";
import Mechanism from "./components/mechanism";
import Navbar from "./components/navbar";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-500 to-teal-400">
      <Navbar/>
      <Hero/>
      <Services/>
      <ABout/>
      <Mechanism/>

    </div>
  );
}
