import React from 'react';
import './App.scss';
import StepForm from "./components/step-form/step-form";
import {Provider} from "react-redux";
import store from './store';
import WithStep from "./components/with-step/with-step";
import Dialog from "./components/dialog/dialog";

const App = () => {
  return (
      <Provider store={store}>
        <div className="dialog-creator">
            <WithStep step={1}>
                <StepForm />
            </WithStep>
            <WithStep step={3}>
                <Dialog />
            </WithStep>
        </div>
      </Provider>
  );
};

export default App;
