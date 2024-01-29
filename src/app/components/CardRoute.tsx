'use client'
import React, { useEffect, useState } from 'react';
import { questions } from '../server';
import Card from './Card';
import { shuffle } from '../utils/utils';
import { ICard } from '../types/types';
import { fetchQuestions } from '../lib/data';


const CardRoute = () => {
    const [questions , setQuestions] = useState<ICard[]>([])
    const [stage,setStage] = useState<number>(0)
    const maxStages = questions.length

    useEffect(() => {
        const fetchData = async () => {
            setQuestions(await fetchQuestions())
        }
        fetchData()
    }, [])

    const switchStage = () => {
        if (stage + 1 < maxStages) {
            setStage(stage + 1)
        }
        else {
            alert("Все карточки закончились")
            shuffle(questions)
            setStage(0)
        }

    }

    return (
        <div>
            <div>Left</div>
           
                {questions.length > 0 ? <Card id={questions[stage].id} frontSide={questions[stage].frontSide} backSide={questions[stage].backSide} /> : 'Loading...'}
            
            <div onClick={() => {switchStage()}}>Right</div>
        </div>
    );
};

export default CardRoute;