import { useState } from 'react'
import About from './components/Perfil/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [visibilidadeDoFormulario, setEstadoFormulario] = useState(true)

  return (
    <>
      <input type="text" onBlur={(evt)=>setNomeUsuario(evt.target.value)} placeholder='Insert the nickname'/>

      {nomeUsuario.length > 4 &&(
        <>
          <About nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {visibilidadeDoFormulario && (
        <Formulario/>
      )}
      <button type="button" onClick={()=>{setEstadoFormulario(!visibilidadeDoFormulario)}}>Toggle</button> */}
    </>
  )
}

export default App