
import Header from "@/components/header";
import EventCard from "./components/eventCard";
import AboutUs from "./components/aboutUs";
import Hero from "./components/hero/hero";
import SubArea from "./components/subArea/subArea";
import News from "./components/news/news";
import Calendar from "./components/calendar/calendar";
import Follow from "./components/follow/follow";

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
        <Follow/>
      </main>
    </div>
  );
}


