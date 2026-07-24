import { Member } from "@/types/member"
import { useState } from "react"
import MemberCard from "./merberCard"

interface props {
    sub: number,
    eletronica: Member[],
    marketing: Member[],
    mecanica: Member[],
    ti: Member[]
}

const MemberList = ({ sub, eletronica, marketing, mecanica, ti }: props) => {

    var data = mecanica
    var title = "mecanica"

    switch (sub) {
        case 0:
            data = mecanica
            title = "Mecanica"
            break
        case 1:
            data = ti
            title = "Programação"
            break
        case 2:
            data = marketing
            title = "Marketing"
            break
        case 3:
            data = eletronica
            title = "Eletronica"
            break
    }

    return (
        <div>
            <h2>{title}</h2>
            <div className="flex">
                {
                    data?.map((data) => (
                        <MemberCard name={data.name} img={data.img} position={data.position} />
                    ))
                }
            </div>
        </div>
    )
}
export default MemberList