import React from 'react';
import { motion } from 'framer-motion';

const ToggleBtn = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? (
        <i class="fa-solid fa-bars"></i>
      ) : (
        <i class="fa-solid fa-xmark"></i>
      )}
    </button>
  );
};

export default ToggleBtn;
