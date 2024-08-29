"use client";

import Divider from "@/components/Divider";
import About from "@/components/partials/About";
import Facilities from "@/components/partials/Facilities";
import Hero from "@/components/partials/Hero";
import Register from "@/components/partials/Register";
import Stories from "@/components/partials/Stories";
import Workflow from "@/components/partials/Walkthrough";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full">
      <Hero />
      <Stories />
      <About />
      <Divider />
      <Workflow />
      <Divider />
      <Facilities />
      <Divider />
      <Register />
    </div>
  );
}
