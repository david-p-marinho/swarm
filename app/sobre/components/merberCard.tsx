import { Member } from "@/types/member"
import Image from "next/image"
import { RiUserLine } from "react-icons/ri"

const MemberCard = ({ name, img, position, links }: Member) => {

    return (
        <div className="bg-[#3D3E45] rounded-md flex justify-between items-center p-5 shadow-md md:w-[220px] md:h-[300px] md:flex-col md:justify-center">
            <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-white rounded-full flex justify-center items-center">
                {
                    img != "" ? (
                        <Image className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-cover rounded-full" src={img} alt="Foto da equipe" height={70} width={70} />
                    ) : (
                        <RiUserLine className="md:w-[60px] md:h-[60px] text-black" />
                    )
                }
            </div>

            <div className="w-fit h-full md:w-full">
                <p className="text-[#D72229] text-[20px] font-bold">{name}</p>
                <p className="text-[14px]">{position}</p>
            </div>

            <div className="flex flex-col md:flex-row md:w-full justify-start">
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