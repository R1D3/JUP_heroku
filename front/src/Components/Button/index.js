import React from 'react'
import { motion } from 'framer-motion'
import { loadingCircleTransition, loadingCircleVariants, circleStyle } from './Styles'

const Button = ({
  className,
  onClick,
  text,
  args,
  disabled
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => args ? onClick.push(args) : onClick()}
      disabled={disabled}
      className={disabled ? `${className} opacity-40` : className}
    >
      {
        disabled
          ? <motion.span
              style={circleStyle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
              animate={{ rotate: 360 }}
            />
          : text
      }
    </motion.button>
  )
}
export default Button
