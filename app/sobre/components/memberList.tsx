import { Member } from "@/types/member"
import { useState } from "react"
import MemberCard from "./merberCard"

interface props {
    selectedData: Member[],
}

const MemberList = ({ selectedData }: props) => {
    return (
        <div className="mb-20 md:w-[100dvw] flex justify-center">
            
            <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-2">
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