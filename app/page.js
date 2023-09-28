import About from "@/components/About";
import Banner from "@/components/Banner";
import Description from "@/components/Description";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SeeUsInAction from "@/components/WatchUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Services />
      <About />
      <SeeUsInAction />
      <Reviews />
      <Description />
    </main>
  );
}
