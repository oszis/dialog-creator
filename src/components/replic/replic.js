import React, { useState, useEffect } from 'react';
import Answer from "../answer/answer";

const Replic = props => {
    const {name, text, answers} = props;
    const [canEdit, setCanEdit] = useState(false);

    useEffect(() => {
        console.log(answers);
    }, []);

    const editHandler = () => {
        if (canEdit) {
            console.log('сохранено')
        } else {
            console.log('ща буим редактировать')
        }
        setCanEdit(!canEdit);
    };

    return (
        <div className="replic">
            <div className="replic__author">{name}:</div>
            <div className="replic__text">{text}</div>
            <div className="replic__answers">
                {answers.map(answer => {
                    return <Answer {...answer}/>;
                })}
            </div>
            <button className="replic__edit" type="button" onClick={editHandler}>{canEdit ? 'сохранить' : 'редактировать'}</button>
        </div>
    )
};

export default Replic;
