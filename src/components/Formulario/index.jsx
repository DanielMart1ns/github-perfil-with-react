import { useEffect, useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)

    let [nome, setNome] = useState('')

    /* 
    Nomenclatura do componente:
    -mount: quando é inicializado
    -uodate: quando é atualizado
    -unmont: quando é desmontado
    */

    //É realizado sempre que o componente inicializa
    useEffect(()=>{
        //monted / update
        console.log('O componente atualizou')

        //unmont
        return () => {
            console.log('O componente finalizou')
        }
    }, [])

    //É realizado sempre que o estado da váriavel nome muda
    useEffect(()=>{
        console.log(`O nome mudou para ${nome}`)
    }, [nome])

    //Vai ser realizado sempre que algum campo de entrada das matérias mudar
    useEffect(()=>{
        console.log('A materiaA mudou para ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    function mudaNome(evento){
        setNome(() => {
            return evento.target.value
        })
    }

    let soma = materiaA + materiaB + materiaC
    let media = soma/3

    function feedbackDoAluno(){
        if(media >= 7){
            return(
                <p>{nome}, Aprovado!</p>
            )
        }else{
            return(
                <p>{nome}, Reprovado!</p>
            )
        }
    }

    return (
        <form>                                                         
            <input type="text" placeholder="Seu nome" onChange={mudaNome}/>
            <input type="number" placeholder="Nota matéira A" onChange={({target}) =>setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéira B" onChange={evento =>setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéira C" onChange={evento =>setMateriaC(parseInt(evento.target.value))}/>

            {feedbackDoAluno()}
        </form>
    )
}
export default Formulario