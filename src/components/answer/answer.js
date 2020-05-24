import React, { useState, useEffect } from 'react';

const Answer = props => {
    const {text, goto} = props;
    return (
        <div className="answer">
            <div className="answer__text">{text}</div>
            <div className="answer__text">к реплике <a href={`replic-${goto}`}>{goto}</a></div>
        </div>
    )
};

export default Answer;
