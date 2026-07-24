import { Member } from "@/types/member"
import Image from "next/image"
import { RiUserLine } from "react-icons/ri"

const MemberCard = ({ name, img, position }: Member) => {

    return (
        <div>
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
            
            <div>
                <p>{name}</p>
                <p>{position}</p>
            </div>


        </div>
    )
}
export default MemberCard