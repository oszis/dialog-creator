import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Replic from "../replic/replic";
import {addReplic} from "../../store/actions/replics";
import NewReplic from "../new-replic/new-replic";

const mapStateToProps = ({replics}, ownProps) => {
    return {
        ...ownProps,
        replics
    }
};

const mapDispatchToProps = () => {
    return {
        addReplic: (replic) => addReplic(replic),
    }
};

const Dialog = props => {
    const {replics = [], } = props;
    const [showNewReplic, setShowNewReplic] = useState(false);

    const showReplicHandler = (e) => {
        e.preventDefault();
        setShowNewReplic(true);
    };

    const replicSubmit = () => {
        setShowNewReplic(false);
    };

    return (
        <div className="dialog">
            <div className="dialog__replics">
                {replics.map((replic, index) => {
                    return <Replic {...replic} key={replic.id}/>
                })}
            </div>
            <div className="dialog__add-wrapper">
                <button type="button" onClick={showReplicHandler}>Добавить реплику</button>
                {showNewReplic && <NewReplic onSubmit={replicSubmit} />}
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
