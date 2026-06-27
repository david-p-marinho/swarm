import Title from "@/components/title"
import Card from "./card"

const Follow = () => {
    return(
        <section>
            <Title content={"Siga-nos"}/>

            <div className="flex justify-center">
                <Card icon={"logo-github"} title={"GitHub"} link={"https://github.com/"}/>
                <Card icon={"logo-linkedin"} title={"Linkedin"} link={"https://br.linkedin.com/"}/>
            </div>
        </section>
    )
}

export default Follow