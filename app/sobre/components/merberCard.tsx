import { Member } from "@/types/member"
import Image from "next/image"
import { RiUserLine } from "react-icons/ri"

const MemberCard = ({ name, img, position, links }: Member) => {

    return (
        <div className="w-[360px] h-[410px] bg-[#2E2E2E] rounded-md flex flex-col items-center mr-[20px] mb-[50px] justify-center p-5">
            <div className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center">
                {
                    img != "" ? (
                        <Image className="w-[150px] h-[150px] object-cover rounded-t-md" src={img} alt="Foto da equipe" height={422} width={456} />
                    ) :
                        (
                            <RiUserLine className="w-[90px] h-[90px] text-black" />
                        )
                }
            </div>

            <div className="w-full my-15">
                <p className="text-[#D72229] text-[24px] font-bold">{name}</p>
                <p className="text-[16px]">{position}</p>
            </div>
            
            <div className="flex w-full justify-start">
                {
                    links.map((item, index) => (
                        <a className="mr-5 group" key={index} href={item.link}>
                            {/* @ts-ignore */}
                            <ion-icon name={item.icon} className="w-[30px] h-[30px] text-white group-hover:text-[#D72229] transition-colors duration-200"></ion-icon>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
export default MemberCard