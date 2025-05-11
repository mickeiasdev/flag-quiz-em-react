import { useState, useEffect } from "react";
import { ListarPaises, ObterPais } from "./infra/paises";
// importei as funções que estão no arquivo infra/paises.js
// ListarPaises: lista todos os paises
// ObterPais: obtem um pais específico
import "./App.css";

function App() {
    // estados criados para armazenar os paises e o pais selecionado
    const [paises, setPaises] = useState([]);
    const [pais, setPais] = useState({});

    // handleChange: função que é chamada quando o usuario seleciona um pais
    // ela chama a função ObterPais e passa o valor do pais selecionado
    // e armazena o resultado no estado pais
    const handleChange = async (event) => {
        let pais = await ObterPais(event.target.value);
        setPais(pais);
    };

    // useEffect: função que é chamada quando o componente é montado
    // ela chama a função ListarPaises e armazena o resultado no estado paises
    // o segundo parametro [] faz com que a função seja chamada apenas uma vez
    useEffect(() => {
        const carregarPaises = async () => {
            let lista = await ListarPaises();
            setPaises(lista);
        };
        carregarPaises();
    }, []);

    return (
        <div className="App">
            <h2 style={{ color: "white", letterSpacing: "5px" }}>
                RestCountries
            </h2>
            <div className="container">

                {/*
                no exercicio original foi utilizado um botão para chamar a função
                ListarPaises, mas como a função é chamada no useEffect
                não é mais necessário o botão

                <button className="btn" onClick={heandleClick}>
                    Get Countries
                </button> 
                */}

                
                {paises.length > 0 && (
                
                // faco um teste no array paises para saber se ele tem algum conteudo
                // e caso tenha, crio um select com os paises
                // o select chama a função handleChange quando o usuario seleciona um pais
                // o value do select é o codigo do pais (cca3) e o texto é o nome do pais


                    <select className="select" onChange={handleChange}>
                        {paises.map((pais) => {
                            return (
                                <option key={pais.cca3} value={pais.cca3}>
                                    {pais.name.official}
                                </option>
                            );
                        })}
                    </select>
                )}
            </div>
            {pais.name && (
                <div className="card">
                    {/*
                    "?" é o optional chaining. se a func chamada retornar
                    null ou undefined ira gerar um erro
                    
                    {errors.email?.message && (
                        <span className="error">{errors.email.message}</span>
                    )}
                    */}
                    <h3>{pais.name?.official}</h3>
                    <h4>Capital: {pais.capital[0]}</h4>
                    <img
                        className="flag"
                        src={pais.flags?.png}
                        alt={pais.name.official}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
