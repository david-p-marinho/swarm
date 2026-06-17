import Image from "next/image"

interface CardProps {
    title: string,
    content: string,
    icon: string
}

const Card = ({ title, content, icon }: CardProps) => {
    return (
        <div className="border-1 border-[#ffffff12] rounded-md flex justify-between w-full">
            <div className="p-5 flex">
                <Image className="rounded-md me-[20px]" src={'/news1.png'} alt="" width={230} height={155} />
                <div>
                    <p className="text-[#D72229] mb-2" style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</p>
                    <p style={{ fontSize: 14 }}>{content}</p>
                </div>
            </div>

            <div className="flex items-end mb-3 me-3">
                <p>Ver Mais</p>
            </div>
        </div>
    )
}

export default Card