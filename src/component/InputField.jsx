import React, {memo} from 'react';

const InputFieldImpl = ({text, handleInput, handleSubmit}) => {
  return (
    <label>
      <input value={text} onChange={handleInput} />
      <button onClick={handleSubmit}> Add Todo </button>
    </label>
  );
};

export const InputField = memo(InputFieldImpl);
