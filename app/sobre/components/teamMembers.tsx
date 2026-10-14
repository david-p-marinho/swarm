'use client'

import { useState } from "react"
import SubAreaBtn from "./subAreaBtn"
import SubArea from "@/types/subArea"
import MemberList from "./memberList"
import { Member } from "@/types/member"

interface props {
    areas: SubArea[],
    memberData: Record<string, Member[]>
}

const TeamMembers = ({ areas, memberData }: props) => {
    const [subArea, setSubArea] = useState('Mecanica')

    return (
        <div>
            <div className="hidden md:block">
                <div className="flex justify-center gap-4">
                    {
                        areas.map((sub, index) => (<SubAreaBtn key={index} setArea={setSubArea} isSelect={subArea == sub.title} title={sub.title} img={sub.icon} index={index} />))
                    }
                </div>

                <MemberList sub={subArea} selectedData={memberData[subArea]} />
            </div>

            <div className="md:hidden">
                {
                    areas.map((sub, index) => (
                        <MemberList key={index} sub={sub.title} selectedData={memberData[sub.title]}/>
                    ))
                }
            </div>
        </div>
    )
}
export default TeamMembers