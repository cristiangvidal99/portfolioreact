import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/outline'

const EmailSucces = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-6xl'>Email enviado!</h1>

      <button className='text-center'><Link to="/"><HomeIcon />Volver al Inicio</Link></button>
    </div>
  )
}

export default EmailSucces