import React from 'react';
import {setStep} from "../../store/actions/step";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    setStep: step => dispatch(setStep(step)),
});

const mapStateToProps = ({step}, ownProps) => {
    return {
        ...ownProps,
        step
    };
};

const StepForm = props => {
    const clickHandler = (e) => {
        props.setStep(e.target.dataset.step);
    };
    return (
        <div className="step-form">
            <button className="step-form__button" onClick={clickHandler} data-step={2}>Новый диалог</button>
            <button className="step-form__button" onClick={clickHandler} data-step={3}>Редактировать диалог</button>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
