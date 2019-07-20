import React, { Component, ChangeEvent, FormEvent } from 'react';

import Template from 'components/layout/Template';
import SynthesisForm from 'components/forms/SynthesisForm';

import SynthService from 'services/synth';

export default class App extends Component {
  state = {
    text: '',
    rate: 1,
    pitch: 1,
    lang: '',
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    this.setState({ 
      [name]: value 
    });
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    SynthService.speak(this.state);
  }

  render() {
    const voices: SpeechSynthesisVoice[] = SynthService.getVoices();

    return (
      <div className="app">
        <Template>
          <SynthesisForm
            values={{
              ...this.state,
              voices
            }}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Template>
      </div>
    );
  }
}
