import React from 'react'
import Card from './layout/Card'
import Nav from './layout/Nav'

const Projects = () => {
  return (
    <>
      <Nav />
      <h1 className='text-4xl font-bold text-center'>Mis proyectos</h1>
      <div>
        <Card />
      </div>
    </>
  )
}

export default Projects