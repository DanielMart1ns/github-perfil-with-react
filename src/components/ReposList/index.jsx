import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    // const simpleArray = [1,2,3,4,5]
    //vai receber um array com os dados do back
    const [repositoriosList, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)

    //fazendo requisição ao back, convertendo o res em json
    //e atribuindo os resultados a variável
    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
                setTimeout(()=>{
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario])
    
    return(
        <div className="container">
            {estaCarregando? 
            (
                <h3>carregando...</h3>
            )
            :
            (
            <ul className={styles.list}>
                {repositoriosList.map(res => (
                    <li className={styles.listItem} key={res.id}>
                        <div className={styles.itemName}>
                            <strong>Nome: </strong> {res.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <strong> Linguagem: </strong>
                            {res.language}
                        </div>
                        <a href={res.html_url} target="_blank" className={styles.itemLink}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
            )}
            {/* Itenrando pelos valores do array, fazendo o controle por meio das propriedades da API */}
            

            {/* Lista simples */}
            {/* <ul>
                {simpleArray.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default ReposList