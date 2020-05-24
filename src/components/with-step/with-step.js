import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = ({step}, ownProps) => {
    return {
        ...ownProps,
        currentStep: step,
    }
};

const WithStep = props => {
    const {step, currentStep, children} = props;
    return (step === currentStep) ? <>{children}</> : null;
};

export default connect(mapStateToProps)(WithStep);
