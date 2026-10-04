import { Member } from "@/types/member"
import Image from "next/image"
import { RiUserLine } from "react-icons/ri"

const MemberCard = ({ name, img, position, links }: Member) => {

    return (
        <div className="w-[250px] h-[360px] bg-[#3D3E45] rounded-md flex flex-col items-center mb-[50px] justify-center p-5 shadow-md">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
                {
                    img != "" ? (
                        <Image className="w-[70px] h-[70px] object-cover rounded-full" src={img} alt="Foto da equipe" height={70} width={70} />
                    ) :
                        (
                            <RiUserLine className="w-[60px] h-[60px] text-black" />
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
                        <a target="_blank" className="mr-5 group" key={index} href={item.link}>
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