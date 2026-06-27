interface CardProps {
    title: string,
    content: string,
    icon: string
}

const Card = ({title, content, icon}: CardProps) => {
    return(
        <div className="border-1 border-[#ffffff12] rounded-md px-10 py-5 mx-3 flex flex-col items-center justify-between w-[280px] h-[385px]">
            {/* @ts-ignore */}
            <ion-icon name={icon} className="w-[30px] h-[30px] text-[#D72229]"></ion-icon>
            <p className="text-[#D72229]" style={{fontSize: 16, fontWeight: 'bold'}}>{title}</p>
            <p className="h-[231px]" style={{fontSize: 14}}>{content}</p>
        </div>
    )
}

export default Card