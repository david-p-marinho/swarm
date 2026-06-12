'use client';

import Test from "@/utils/test";
import { IoTicket } from "react-icons/io5";

interface cardProps {
    title: string;
    text: string;
    value: string;
}

export default function EventCard({title, text, value}: cardProps) {
    return (
        <div className="flex flex-row justify-between items-center px-5 py-2" style={{width: '100%', backgroundColor: '#D72229'}}>
            <div className="flex flex-row items-center">
                <IoTicket className="me-5" />

                <div>
                    <p>{title}</p>
                    <p>{text}</p>
                </div>
            </div>
            
            <div className="flex flex-row items-center">
                <p className="me-5">{value}</p>

                <button className="px-3 py-2 rounded-md" style={{backgroundColor: 'white', color: 'red'}} onClick={Test}>Comprar</button>
            </div>
            
        </div>
    )
}