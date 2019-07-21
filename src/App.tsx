import React, { FunctionComponent } from 'react';

import Template from 'components/layout/Template';
import SynthesisForm from 'components/forms/SynthesisForm';

import SynthService from 'services/synth';

const App: FunctionComponent = () => {
  const voices: SpeechSynthesisVoice[] = SynthService.getVoices();

  const submit = (values: any) => {
    SynthService.speak(values);
  };

  return (
    <div className="app">
      <Template>
        <SynthesisForm
          voices={voices}
          onSubmit={submit}
        />
      </Template>
    </div>
  );
};

export default App;
