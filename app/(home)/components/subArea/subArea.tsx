import Title from "../../../../components/title"
import Card from "./card"
import List from "./list"

const SubArea = () => {
    return(
        <section className="flex flex-col items-center py-[70px] w-full"> 
            <Title content={"Sub Área"} />
            <List/>   
        </section>
    )
}

export default SubArea