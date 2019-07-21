import React, { Component } from 'react';
import { Field, reduxForm, FormErrors, InjectedFormProps } from 'redux-form';
import { renderInputField } from 'helpers';

type Props = {
  voices: SpeechSynthesisVoice[];
};

const validate = (values: any): FormErrors<any, string> => {
  const errors: any = {};

  if ( ! values.text) {
    errors.text = 'Required';
  }

  return errors;
};

class SynthesisForm extends Component<Props & InjectedFormProps<{}, Props>> {
  render() {
    const { voices, handleSubmit } = this.props;

    return (
      <form
      className="form pt-5"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <Field
          className="form-control form-control-lg"
          placeholder="Type anything..."
          component="textarea"
          name="text"
        />
      </div>
      <Field
        component={renderInputField}
        type="number"
        label="Rate"
        name="rate"
        id="rate"
        step={0.1}
        min={0.1}
        max={2}
      />
      <Field
        component={renderInputField}
        type="number"
        label="pitch"
        name="pitch"
        id="pitch"
        step={0.1}
        min={0.1}
        max={2}
      />
      <div className="form-group">
        <Field
          className="form-control"
          component="select"
          name="lang"
        >
          {voices.map((voice: SpeechSynthesisVoice) => (
            <option
              key={voice.name}
              value={voice.lang}
            >
              {voice.name} ({voice.lang})
            </option>
          ))}
        </Field>
      </div>
      <button
        className="btn btn-outline-primary btn-block"
        type="submit"
      >
        Speak it
      </button>
    </form>
    );
  }
}

export default reduxForm<{}, Props>({
  form: 'synthesis',
  validate,
  initialValues: {
    rate: 1,
    pitch: 1,
  }
})(SynthesisForm);