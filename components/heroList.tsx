const HeroList = () => {
    return (
        <ul className="flex mt-15">
            <li className="flex flex-col items-center p-3 rounded-l-md border-r-1 border-r-[#ffffff12]" style={style.listContainer}>
                <p style={style.listTitle}>5+</p>
                <p>Anos de projeto</p>
            </li>
            <li className="flex flex-col items-center p-3 border-r-1 border-r-[#ffffff12]" style={style.listContainer}>
                <p style={style.listTitle}>20+</p>
                <p>Membros ativos</p>
            </li>
            <li className="flex flex-col items-center p-3 border-r-1 border-r-[#ffffff12]" style={style.listContainer}>
                <p style={style.listTitle}>SAE</p>
                <p>Brasil 2025</p>
            </li>
            <li className="flex flex-col items-center p-3 rounded-r-md" style={style.listContainer}>
                <p style={style.listTitle}>UFS</p>
                <p>Sergipe</p>
            </li>
        </ul>
    )
}

const style = {
    'listTitle': {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '30px',
        lineHeight: 1,
        color: '#D72229'
    },
    'listContainer': {
        background: 'rgba(0, 0, 0, 0.42)',
        width: '140px'
    }
}

export default HeroList