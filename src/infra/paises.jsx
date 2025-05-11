export async function ListarPaises() {
    let retorno = []
    const url = 'https://restcountries.com/v3.1/all?fields=name,cca3';
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((paises) => {
            retorno = paises;
            console.log(retorno);
        })
        .catch((error) => {
            console.error('Erro ao buscar os países:', error);
        });
    return retorno;
}

export async function ObterPais(cca3) {
    let retorno = {}
    const url = `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,capital,flags`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((pais) => {
            retorno = pais;
            console.log(retorno);
        })
        .catch((error) => {
            console.error('Erro ao buscar o país:', error);
        });
        
    return retorno;
}