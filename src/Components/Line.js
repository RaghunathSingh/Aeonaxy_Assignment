import React from 'react'

const Line = ({color}) => {
  return (
    <div style={{ width: '100%', borderTop: `2px solid ${color}`, margin: '0 auto', marginBottom:"2rem" }} />
  )
}

export default Line