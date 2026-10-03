import { Member } from "@/types/member"
import { useState } from "react"
import MemberCard from "./merberCard"

interface props {
    sub: number,
    eletronica: Member[],
    marketing: Member[],
    mecanica: Member[],
    ti: Member[],
    gestao: Member[]
}

const MemberList = ({ sub, eletronica, marketing, mecanica, ti, gestao }: props) => {

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
        case 4:
            data = gestao
            title = "Gestão"
    }

    return (
        <div>
            <h2 className="text-center text-white text-[36px] font-bold mt-[40px] mb-[20px]">{title}</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    data?.map((data, index) => (
                        <MemberCard key={index} name={data.name} img={data.img} position={data.position} links={data.links} />
                    ))
                }
            </div>
        </div>
    )
}
export default MemberList