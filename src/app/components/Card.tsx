import React, { useRef } from 'react';
import { ICard } from '../types/types';


const Card : React.FC<ICard> = ({frontSide,backSide}) => {

    const card = useRef<HTMLDivElement>(null);
    const flip = (e: React.MouseEvent<HTMLElement>) => {
        card.current?.classList.toggle('flip')
    }

    return (
        <div className="card" ref={card} onClick={(e) => flip(e)}>
            <div className="side side-front">
                {frontSide}
            </div>
            <div className="side side-back">
                {backSide}
            </div>
        </div>
    );
};

export default Card;