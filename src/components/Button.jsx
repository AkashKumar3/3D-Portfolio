import React from 'react'
import './button.css'
import {motion} from 'framer-motion'


const Button = ({name}) => {
    return (
        <motion.button
          initial={{ "--x": "100%", scale: 1 }}
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
            type: "spring",
            stiffness: 30,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          className="px-6 py-2 rounded-md relative radial-gradient border-2 border-neutral-800"
        >
          <span className="text-neutral-100 tracking-wide font-bold h-full w-full block relative linear-mask">
           {name}
          </span>
          <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
      );
}

export default Button