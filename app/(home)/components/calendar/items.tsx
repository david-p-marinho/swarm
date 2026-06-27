interface data {
    title: string,
    status: string
}

const Items = ({title, status}: data) => {
    return(
        <div className="flex justify-center items-center relative w-full bg-[#1e1d1c] h-[65px] rounded-xl mb-3">
            <div className="bg-[#D72229] rounded-full absolute left-4 w-[15px] h-[15px]"/>

            <p>{title}</p>

            <div className="bg-[#c8102e1f] rounded-full absolute right-4 px-2 py-1">
                <p className="text-[#D72229]">{status}</p>
            </div>
        </div>
    )
}

export default Items