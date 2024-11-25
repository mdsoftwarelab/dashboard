import React, { ReactNode} from "react"
import './card.css'

interface CardProps {
    title: string
    children: ReactNode
}

const Card: React.FC<CardProps> = ({title, children}) => {
    return (
        <div className="card-section">
            <div className="card-heading">
                <div className="card-title">
                    <p>{ title }</p>
                </div>
            </div>
            <div className="card-content">
                { children }
            </div>
        </div>
    )
}

export default Card