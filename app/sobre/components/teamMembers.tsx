'use client'

import { useState } from "react"
import SubAreaBtn from "./subAreaBtn"
import SubArea from "@/types/subArea"
import MemberList from "./memberList"
import { Member } from "@/types/member"

interface props {
    areas: SubArea[],
    eletronica: Member[],
    marketing: Member[],
    mecanica: Member[],
    ti: Member[],
    gestao: Member[]
}

const TeamMembers = ({ areas, eletronica, marketing, mecanica, ti, gestao }: props) => {
    const [subArea, setSubArea] = useState(0)

    return (
        <div>
            <div className="flex justify-center gap-4">
                {
                    areas.map((sub, index) => (<SubAreaBtn key={index} setArea={setSubArea} isSelect={subArea == index} title={sub.title} img={sub.icon} index={index} />))
                }
            </div>

            <MemberList sub={subArea} eletronica={eletronica} marketing={marketing} mecanica={mecanica} ti={ti} gestao={gestao} />
        </div>
    )
}
export default TeamMembers