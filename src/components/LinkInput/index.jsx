import React, { useState } from 'react';
import Button from '../Button';

const LinkInput = ({ fetchAPI }) => {
  const [link, setLink] = useState('');
  const [invalid, setInvalid] = useState(false);

  const handleChange = (event) => {
    setLink(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const URL_REGEX = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    if (URL_REGEX.test(link)) {
      setLink('');
      setInvalid(false);

      fetchAPI(link);
    } else {
      setInvalid(true);
    }
  }

  return (
    <div className="link-input">
      <form onSubmit={handleSubmit}>
        <div className="invalid-container .url-input">
          <input
            onChange={handleChange}
            value={link}
            type="text"
            placeholder="Shorten a link here..."
            className={invalid ? 'invalid-input' : ''}
          />
          {invalid && <span className="invalid-message">Please add a valid link</span>}
        </div>
        <Button submit={true} >Shorten it!</Button>
      </form>        
    </div>
  );
}

export default LinkInput;
