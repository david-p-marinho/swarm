interface data {
    icon: string,
    title: string,
    link: string
}
const Card = ({icon, title, link}: data) => {
    return(
        <div className="mx-3">
            <a className="flex flex-col items-center" href={link} target="_blank" rel="noopener noreferrer">
                {/* @ts-ignore */}
                <ion-icon name={icon} className="w-[30px] h-[30px] text-white"></ion-icon>
                <p>{title}</p>
            </a>
        </div>
    )
}

export default Card