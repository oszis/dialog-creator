import React, {useEffect, useState} from 'react';
import {addReplic, setReplic} from "../../store/actions/replics";
import {connect} from "react-redux";
import AnswersForm from "../answers-form/answers-form";
import { v1 as uuidv1 } from 'uuid';

const mapStateToProps = ({replics}, ownProps) => {
    return {
        replics,
        ...ownProps,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addReplic: () => dispatch(addReplic()),
        setReplic: (replicId, replic) => dispatch(setReplic({replicId, replic})),
    }
};

const NewReplic = props => {
    const {replicId = false, addReplic, setReplic, replics, onSubmit = null} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const answersArr = [...e.target.querySelectorAll('.answer-form-item')].map(answer => {
            return {
                text: answer.querySelector('[name="answer-text"]')?.value,
                goto: answer.querySelector('[name="answer-goto"]')?.value,
                key: uuidv1(),
            }
        });
        const replic = {
            id: uuidv1(),
            name: e.target.querySelector('[name="name"]')?.value,
            text: e.target.querySelector('[name="text"]')?.value,
            answers: [...answersArr]
        };
        setReplic(replics.length,replic);
        // eslint-disable-next-line no-unused-expressions
        props.onSubmit ? props.onSubmit() : null;
    };

    return (
        <form className="new-replic" onSubmit={submitHandler}>
            <input type="text" placeholder={'автор'} name="name" required/>
            <textarea placeholder={'текст реплики'} name="text" required/>
            <h3>Ответы</h3>
            <AnswersForm />
            <button className="new-replic__add" type="submit">Сохранить</button>
        </form>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReplic);
