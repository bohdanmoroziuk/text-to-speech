import React, { FunctionComponent } from 'react';

/**
 * TODO:
 *  1. Rewrite using Redux-Form 
 */
const SynthesisForm: FunctionComponent<any> = ({ values, onChange, onSubmit }) => (
  <form 
    className="form pt-5"
    onSubmit={onSubmit}  
  >
    <div className="form-group">
      <textarea
        className="form-control form-control-lg"
        name="text"
        id="text"
        value={values.text}
        placeholder="Type anything..."
        onChange={onChange}
      />
    </div>
    <div className="form-group">
      <label 
        className="text-primary"
        htmlFor="rate"
      >
        Rate
        <span className="badge badge-primary ml-2">{values.rate}</span>  
      </label>
      <input 
        className="form-control"
        type="number"
        name="rate"
        id="rate"
        min={0.1}
        max={2}
        value={values.rate}
        step={0.1}
        onChange={onChange}
      />
    </div>
    <div className="form-group">
      <label 
        className="text-primary"
        htmlFor="pitch"
      >
        Pitch
        <span className="badge badge-primary ml-2">{values.pitch}</span>  
      </label>
      <input 
        className="form-control"
        type="number"
        name="pitch"
        id="pitch"
        min={0.1}
        max={2}
        value={values.pitch}
        step={0.1}
        onChange={onChange}
      />
    </div>
    <div className="form-group">
      <select 
        className="form-control"
        name="lang"
        value={values.voice}
        onChange={onChange}  
      >
        {values.voices.map((voice: SpeechSynthesisVoice) => (
          <option
            key={voice.name}
            value={voice.lang}
          >
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
    </div>
    <button 
      className="btn btn-outline-primary btn-block" 
      type="submit"
    >
      Speak it
    </button>
  </form>
);

export default SynthesisForm;