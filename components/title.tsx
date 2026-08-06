interface titleProps {
    content: string
}

const Title = ({ content }: titleProps) => {
    return (
        <h2 className="mb-6 font-bold text-[24px] tracking-[3px] uppercase text-[#D72229] text-center" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            {content}
        </h2>
    )
}

export default Title