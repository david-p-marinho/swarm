
import Header from "@/components/header";
import EventCard from "@/components/eventCard";
import Test from "@/utils/test";
import AboutUs from "@/components/aboutUs";
import Hero from "@/components/hero";
import SubArea from "@/components/subArea/page";
import News from "@/components/news/page";
import Calendar from "@/components/calendar/page";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero/> 
        <EventCard title={"Rifa solidária Swarm 79"} text={"Apoie a equipe e concorra a prêmios — pagamento via Pix"} value="R$30" />
        <AboutUs/>
        <SubArea/>
        <News/>
        <Calendar/>
      </main>
    </div>
  );
}


