
import Header from "@/components/header";
import EventCard from "@/components/eventCard";
import Test from "@/utils/test";
import AboutUs from "@/components/aboutUs";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero/> 
        <EventCard title={"Rifa solidária Swarm 79"} text={"Apoie a equipe e concorra a prêmios — pagamento via Pix"} value="R$30" />
        <AboutUs/>
        <div className="h-[100px]"/>
      </main>
    </div>
  );
}


