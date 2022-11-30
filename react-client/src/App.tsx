import { useState } from 'react'
import './App.css'
import { Usuario } from './types'
import UserDisplay from './components/UserDisplay'
import { useQuery } from 'urql'
import { GetUsuariosDocument} from './graphql/generated'

function App() {


  const [usuarios]= useQuery({query:GetUsuariosDocument})
  const [mensajes]= useQuery( {
  query:
  `query getMensajesUsuario($id: Int) {
    getMensajesUsuario(id: $id) {
      id  
      cuerpo
      userId
    }
  }
  `,
  variables:{ id: 12 }
})
  console.log("Mensajes: ", mensajes.data)

  return (
    <div className="bg-zinc-800 flex-col  w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      <h2 className="text-4xl text-yellow-500">Application prisma-graphql/react-client</h2>
      {
        usuarios.data?.getUsuarios.map( (user,i)=>
          <UserDisplay usuario={user} key={i}></UserDisplay>
        )
      }


    </div>
  )
}

export default App
