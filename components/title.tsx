interface titleProps {
    content: string
}

const Title = ({content}: titleProps) => {
    return(
        <h2 className="mb-4 font-bold text-[20px] tracking-[3px] uppercase text-[#D72229]" style={{fontFamily: 'var(--font-dm-sans)'}}>{content}</h2>
    )
}

export default Title