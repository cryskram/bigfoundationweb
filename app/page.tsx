import Divider from "@/components/Divider";
import About from "@/components/partials/About";
import Facilities from "@/components/partials/Facilities";
import Hero from "@/components/partials/Hero";
import Register from "@/components/partials/Register";
import Stories from "@/components/partials/Stories";
import Walkthrough from "@/components/partials/Walkthrough";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stories />
      <About />
      <Divider />
      <Walkthrough />
      <Divider />
      <Facilities />
      <Divider />
      <Register />
    </div>
  );
}
