import React, { useState, useEffect } from 'react';

const AnswerFormItem = props => {
    const {text = '', goto = 0, index = 0, onChange} = props;
    const [answerText, setAnswerText] = useState('');
    const [gotoText, setGotoText] = useState('');

    useEffect(() => {
        setAnswerText(text);
        setGotoText(goto);
    }, []);

    const textChangeHandler = (e) => {
        setAnswerText(e.target.value);
        changeHandler();
    };

    const gotoHandler = (e) => {
        setGotoText(e.target.value);
        changeHandler();
    };

    const changeHandler = () => {
        // eslint-disable-next-line no-unused-expressions
        onChange ? onChange({
            text: answerText,
            goto: gotoText,
            index: index
        }) : null;
    };
    return (
        <div className="answer-form-item">
            <textarea name="answer-text" value={answerText} onChange={textChangeHandler}/>
            <input type="number" name="answer-goto" value={gotoText} onChange={gotoHandler}/>
        </div>
    )
};

export default AnswerFormItem;
