const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function visualizarinformacoesGlobais() {
    const res = await fetch (url)
    const dados = await res.json() 
   const pesoasConectadas = (dados.total_pessoas_conectadas/1e9)
   const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
   const horas = pareInt (dados.tempo_medio)
   const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo )* 100).toFixed(2);
    const paragrafo = document.createElement ('p')
    paragrafo.classList.add('graficos__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.'
    const conteiner = document 
 
}
visualizarinformacoesGlobais()