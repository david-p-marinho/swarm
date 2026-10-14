import { Member } from "@/types/member"
import { useState } from "react"
import MemberCard from "./merberCard"

interface props {
    sub: string,
    selectedData: Member[],
}

const MemberList = ({ sub, selectedData }: props) => {
    return (
        <div className="mb-20 w-[100dvw]">
            <h2 className="text-center text-white text-[24px] font-bold mt-[40px] mb-[10px]">{sub}</h2>
            <div className="flex mx-2 flex-col md:grid md:grid-cols-4 gap-x-4 gap-y-2">
                {
                    selectedData?.map((data, index) => (
                        <MemberCard key={index} name={data.name} img={data.img} position={data.position} links={data.links} />
                    ))
                }
            </div>
        </div>
    )
}
export default MemberList