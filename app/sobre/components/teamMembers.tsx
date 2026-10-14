'use client'

import { useState } from "react"
import SubAreaBtn from "./subAreaBtn"
import SubArea from "@/types/subArea"
import MemberList from "./memberList"
import { Member } from "@/types/member"
import { RiArrowDownLine} from "react-icons/ri"

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
                        areas.map((sub, index) => (
                            <SubAreaBtn key={index} setArea={setSubArea} isSelect={subArea === sub.title} title={sub.title} img={sub.icon}/>
                        ))
                    }
                </div>

                <div key={subArea} className="animate-fadeIn">
                    <h2 className="text-center text-white text-[24px] font-bold mt-[40px] mb-[10px]">{subArea}</h2>
                    <MemberList selectedData={memberData[subArea]} />
                </div>
            </div>

            <div className="md:hidden">
                {
                    areas.map((sub, index) => (
                        <div>
                            <div onClick={() => setSubArea(subArea === sub.title ? "" : sub.title)} className="flex border-b items-center justify-between w-[90dvw] mb-3 px-1 py-2 gap-4 cursor-pointer select-none">
                                <h2 className="text-center text-white text-[24px] font-bold">{sub.title}</h2>

                                <RiArrowDownLine className={`rounded-full border w-[20px] h-[20px] text-white transition-transform duration-300 ${subArea === sub.title ? 'rotate-180' : 'rotate-0'}`}/>
                            </div>

                            <div className={`w-[90dvw] grid transition-all duration-300 ease-in-out ${subArea === sub.title? 'grid-rows-[1fr] opacity-100': 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <MemberList key={index} selectedData={memberData[sub.title]} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default TeamMembers