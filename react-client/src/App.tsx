import { useState } from 'react'
import './App.css'
import { Usuario } from './types'
import UserDisplay from './components/UserDisplay'


function App() {

  const usuarios: Usuario[] = [{
    nombre: 'Prisma Fan',
    mensajes: [{
      cuerpo: 'Prisma rocks!!'
    }, {
      cuerpo: 'Did I mention I love Prisma?'
    }]
  }]



  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <h2 className="text-4xl text-yellow-500">Hello World!</h2>
      {
        usuarios.map( (user,i)=>
          <UserDisplay usuario={user} key={i}></UserDisplay>
        )
      }


    </div>
  )
}

export default App
