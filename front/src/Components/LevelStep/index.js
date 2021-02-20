import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useWindowSize } from '../../Utils/useWindowSize'

const Level = ({ level }) => {
  return (
    <AnimateSharedLayout>
      <div className='h-full flex flex-row justify-evenly items-center '>
        {colors.map((color, i) => (
          <Item
            key={i}
            color={color}
            isSelected={level === i}
            level={i + 1}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  )
}

function Item ({ color, isSelected, level }) {
  const { width } = useWindowSize()
  return (
    <div
      className='flex relative justify-center itens-center rounded-full shadow-md '
      style={{
        opacity: !isSelected ? 0.3 : 1,
        backgroundColor: color,
        width: width / 24,
        height: width / 24,
        margin: width / 50
      }}
    >
      <p className='self-center font-sans text-gray-700 text-xl sm:text-xl md:text-3xl lg:text-5xl'>
        {level}
      </p>
      {isSelected && (
        <motion.div
          layoutId='outline'
          className='absolute border-solid shadow-xl'
          style={{
            top: -(width / 100),
            bottom: -(width / 100),
            left: -(width / 100),
            right: -(width / 100),
            borderWidth: width / 250,
            borderRadius: 100
          }}
          initial={{ scale: 0.9 }}
          animate={{ borderColor: color, scale: 1 }}
          transition={spring}
        />
      )}
    </div>
  )
}

const colors = ['#3df7b3', '#3df7b3', '#3df7b3', '#3df7b3', '#3df7b3']

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 20
}

export default Level
