import React, { useState, useCallback, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const { listening, finalTranscript, resetTranscript } =
    useSpeechRecognition();

  const handleCliclUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!","success");
  };

  const handleClicklowerecase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleClearText = () => {
    setText("");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const startListening = useCallback(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  const stopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  const handleReset = useCallback(() => {
    resetTranscript();
    setText("");
  }, [resetTranscript]);

  const handleListen = useCallback(() => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  }, [listening, startListening, stopListening]);

  useEffect(() => {
    if (finalTranscript) {
      setText(finalTranscript); // Update text with finalTranscript
    }
  }, [finalTranscript]);

  return (
    <div
      className="you"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <div className="mb-3">
        <h1 className="my-4">{props.heading}</h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          value={text}
          id="Box"
          placeholder="Enter Text Here"
          onChange={handleOnchange}
          rows="8"
        />
      </div>
      <button
        className="btn btn-primary text-white mx-1"
        type="button"
        onClick={handleCliclUppercase}
      >
        Convert To UPPERCASE
      </button>
      <button
        className="btn btn-primary text-white mx-1"
        type="button"
        onClick={handleClicklowerecase}
      >
        Convert To lowercase
      </button>
      <button
        className="btn btn-primary text-white"
        type="button"
        onClick={handleClearText}
      >
        Clear Text
      </button>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something To TextBox Above To Preview Here"}</p>
      </div>
      <div className="speech-to-text-container">
        <button
          onClick={handleListen}
          className="btn btn-primary text-white mx-1"
        >
          {listening ? "Stop" : "Start"} Listening
        </button>
        <button
          onClick={handleReset}
          className="btn btn-primary text-white mx-1"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TextForm;
