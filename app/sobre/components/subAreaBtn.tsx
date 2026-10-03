import { RiUserLine } from "react-icons/ri"

interface props {
    setArea: (val: number) => void
    isSelect: boolean
    title: string
    img: string
    index: number
}

const SubAreaBtn = ({setArea, isSelect, title, img, index} : props) => {
    return(
        <button className={`rounded-full w-[200px] h-[75px] flex items-center justify-center mx-5 px-5 ${isSelect ? 'bg-[#D72229] text-white': 'border border-[#D72229] text-[#D72229]'}`} onClick={() => setArea(index)}>
            {/* @ts-ignore */}
                <ion-icon name={img} className="w-[20px] h-[20px] mr-[10px]"></ion-icon>
            <p className="text-[20px] font-bold">{title}</p>
        </button>
    )
}
export default SubAreaBtn