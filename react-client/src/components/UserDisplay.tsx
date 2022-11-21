//Componente Visualizar Usurio
import { Usuario } from "../types"
import MessageDisplay from './MessageDisplay'

type Props = {
    usuario: Usuario
}


function UserDisplay(  {usuario}:Props ){

    return (
    <div className="flex gap-x-24 justify-center">
        <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
            <p className="text-xl text-gray-200 font-bold">
                {usuario.nombre}
            </p>
        </div>
        <div>
+            {usuario.mensajes.map((message, i) => <MessageDisplay key={i} index={i} mensaje={message} />)}
+       </div>
    </div>
    )
}
export default UserDisplay