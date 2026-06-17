import Title from "../title"
import Card from "./card"

const News = () => {
    return(
        <section className="flex flex-col items-center ">
            
            <Title content={"Noticias"} />

            <div className="flex flex-col w-[95%] items-center">
                <Card icon="settings" title={"Novo site da equipe"} content={"Nosso novo site está no ar"}/>
                
            </div>
        </section>
    )
}

export default News