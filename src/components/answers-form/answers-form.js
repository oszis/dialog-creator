import React, { useState, useEffect } from 'react';
import AnswerFormItem from "../answer-form-item/answer-form-item";

const AnswersForm = props => {
    const [answers, setAnswers] = useState([]);

    const {initialAnswers = []} = props;

    useEffect(() => {
        setAnswers(initialAnswers);
    }, []);

    const createAnswer = () => {
        return {
            text: '',
            goto: 0
        }
    };

    const removeAnswer = answerId => {
        const newAnswers = [...answers];
        newAnswers.slice(answerId, 1);
        setAnswers(newAnswers);
    };

    const addAnswersHandler = (e) => {
        const newAnswer = createAnswer();
        setAnswers([...answers, newAnswer]);
    };

    const changeAnswer = (answerId, value) => {
        const newAnswers = [...answers];
        newAnswers[answerId] = {...value};
        setAnswers([...newAnswers]);
    };

    return (
        <div className="answers-form">
            {answers.map((answer, index) => (
                <AnswerFormItem
                    key={index}
                    onChange={changeAnswer}
                    onRemove={removeAnswer}
                    index={answer.index}
                    {...answer}/>
            ))}
            <button type="button" onClick={addAnswersHandler}>Добавить ответ</button>
        </div>
    )
};

export default AnswersForm;
