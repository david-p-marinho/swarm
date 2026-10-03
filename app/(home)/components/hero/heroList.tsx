const HeroList = () => {
    return (
        <ul className="flex flex-wrap gap-[1px] flex-row">
            <li className={listContainer + " rounded-tl-md md:rounded-l-md"}>
                <p className={listTitle}>5+</p>
                <p>Anos de projeto</p>
            </li>
            <li className={listContainer + " rounded-bl-md md:rounded-none"}>
                <p className={listTitle}>20+</p>
                <p>Membros ativos</p>
            </li>
            <li className={listContainer + " rounded-tr-md md:rounded-none"}>
                <p className={listTitle}>SAE</p>
                <p>Brasil 2025</p>
            </li>
            <li className={listContainer + " rounded-br-md md:rounded-r-md"}>
                <p className={listTitle}>UFS</p>
                <p>Sergipe</p>
            </li>
        </ul>
    )
}

const listTitle = "font-['Bebas_Neue',_sans-serif] text-[30px] leading-none text-[#D72229]"
const listContainer ="bg-black/42 w-36 flex flex-col items-center p-3"

const style = {
    'listContainer': {
        background: 'rgba(0, 0, 0, 0.42)',
        width: '140px'
    }
}

export default HeroList