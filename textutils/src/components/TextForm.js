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

  const handleSubStrClick = () => {
    setShowInput(true); // show input field when button is clicked
    setHighlightedText(text); // reset highlighted text
    setSearchTerm(''); // Clear input field
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      // Match the whole word only
      const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');

      if (!regex.test(text)) {
        alert('Word not found!'); // Notify if word isn't found
        return;
      }

      const newText = text.replace(regex, '<mark>$&</mark>'); // Wrap matches in <mark> tag
      setHighlightedText(newText);
    }
  };

  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
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
        <button className="btn btn-primary mx-2" onClick={handleSubStrClick}>
          Find given Word
        </button>
        {showInput && (
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter word to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        )}
        <p dangerouslySetInnerHTML={{ __html: highlightedText }} />
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
