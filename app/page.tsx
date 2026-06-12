import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <div className="flex flex-col items-center pt-30" style={{ width: '100%', height: '100vh', backgroundImage: "url('/heroBg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <Image src={'/logo.png'} alt="logo" width={120} height={120} />
          <h1 style={{ fontSize: 'clamp(42px, 8vw, 72px)', fontFamily: 'var(--font-bebas), sans-serif', color: '#D72229' }}>EQUIPE SWARM 79</h1>
          <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Universidade Federal de Sergipe · Grupo de Estudos, Pesquisa e Inovação</p>

          <ul className="flex mt-15">
            <li className="flex flex-col items-center p-3" style={style.listContainer}>
              <p style={style.listTitle}>5+</p>
              <p>Anos de projeto</p>
            </li>
            <li className="flex flex-col items-center p-3" style={style.listContainer}>
              <p style={style.listTitle}>20+</p>
              <p>Membros ativos</p>
            </li>
            <li className="flex flex-col items-center p-3" style={style.listContainer}>
              <p style={style.listTitle}>SAE</p>
              <p>Brasil 2025</p>
            </li>
            <li className="flex flex-col items-center p-3" style={style.listContainer}>
              <p style={style.listTitle}>UFS</p>
              <p>Sergipe</p>
            </li>
          </ul>
        </div>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </main>
    </div>
  );
}

const style = {
  'listTitle': {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '30px',
    lineHeight: 1,
    color: '#D72229'
  },
  'listContainer': {
    background: 'rgba(0, 0, 0, 0.42)',
    width: '140px'
  }
}
