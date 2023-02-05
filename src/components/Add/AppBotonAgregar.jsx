import React, { useState } from 'react';
import { AppModal, } from "../Modal"

const AppBotonAgregar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  }

  return (
    <div>
        <AppModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
    </div>
  );
};

export { AppBotonAgregar }