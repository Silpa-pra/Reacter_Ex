import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    //console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  //setText("New Text");
  return (
    <>
      <div className="container">
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
      </div>
    </>
  );
}
