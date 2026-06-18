import Title from "../title"
import List from "./list"

const Calendar = () => {
    return(
        <section className="flex flex-col items-center bg-[#302F2D] pt-10">
            
            <Title content={"Calendario"} />

            <div className="flex flex-col w-[75%] items-center">
                <List/>
            </div>
        </section>
    )
}

export default Calendar