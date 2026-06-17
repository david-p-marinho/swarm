import Title from "../title"
import Card from "./card"

const SubArea = () => {
    return(
        <section className="flex flex-col items-center ">
            
            <Title content={"Sub Área"} />

            <div className="flex">
                <Card icon="settings" title={"mecanica"} content={"responsável pela modelagem, otimização física da estrutura do drone, cálculo e simulação de propulsão. desenvolvemos melhorias estruturais e de desempenho, aplicando análises, testes e engenharia para tornar cada projeto mais eficiente, estável e confiável."}/>
                <Card icon="code-slash" title={"Programação"} content={"desenvolvemos aplicações e ferramentas que tornam o drone mais inteligente, eficiente para operar de forma autônoma. criamos e aprimoramos o software que sustenta nossos sistemas garantindo integração, eficiência e evolução contínua."}/>
                <Card icon="stats-chart" title={"marketing"} content={"cuidamos da comunicação e da presença da equipe, criando materiais que fortalecem nossa marca e conectam pessoas ao nosso trabalho. desenvolvemos estratégias e conteúdos que ampliam nossa visibilidade, reforçam nossa identidade e aproximam a comunidade da equipe."}/>
                <Card icon="flash" title={"eletronica"} content={"projetamos e otimizamos os sistemas elétricos e eletrônicos que sustentam o funcionamento do drone garantindo segurança, eficiência e precisão. desenvolvemos e integramos circuitos, componentes e soluções embarcadas que tornam o drone mais confiável e responsivo."}/>
            </div>
        </section>
    )
}

export default SubArea