import SubArea from "@/types/subArea"
import Link from "next/link"

const Card = ({title, desc, icon}: SubArea) => {
    return(
        <div className="w-full md:w-[250px] h-[300px] md:h-[100px] mb-[10px] md:mb-[0px] relative">
            <Link href="#" className="w-full md:w-[250px] h-[300px] md:h-[100px] absolute md:overflow-hidden bg-[#3D3E45] transition-all px-3 py-1 duration-100 shadow-md group hover:h-[300px] hover:shadow-lg rounded-md cursor-pointer">
                <div className="h-[100px] flex flex-col items-center justify-center">
                    {/* @ts-ignore */}
                    <ion-icon name={icon} className="w-[45px] h-[45px] md:w-[30px] md:h-[30px] text-[#D72229] "></ion-icon>
                    <p className="text-[#D72229] text-[18px] md:text-[16px] font-bold">{title}</p>
                </div>

                <div>
                    <p className="text-[14px] md:text-[12px]">{desc}</p>
                </div>

                <div className="absolute right-2 flex items-center">
                    <p className="mr-1 text-[#D72229] text-[14px] md:text-[12px] font-bold">Ver integrantes</p>
                    {/* @ts-ignore */}
                    <ion-icon className="text-[#D72229]" name="arrow-forward"></ion-icon>
                </div>
            </Link>
        </div>
    )
}


export default Card