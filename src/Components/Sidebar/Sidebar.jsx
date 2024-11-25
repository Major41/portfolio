import React, { useState } from 'react';
import './Sidebar.scss';
import { motion } from 'framer-motion';
import Links from './Links/Links';
import ToggleBtn from './ToggleBtn/ToggleBtn';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      delay: 0.5,
      type: 'spring',
      stiffnesss: 100,
      damping: 10,
    },
    closed: {
      clipPath: 'circle(30px at 50px)',
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
