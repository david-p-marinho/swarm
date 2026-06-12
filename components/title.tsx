interface titleProps {
    content: string
}

const Title = ({content}: titleProps) => {
    return(
        <h2 className="mb-3 tracking-[3px] uppercase text-[#D72229]" style={{fontFamily: 'var(--font-dm-sans)'}}>{content}</h2>
    )
}

export default Title