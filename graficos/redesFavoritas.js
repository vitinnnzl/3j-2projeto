async function redesFavoritas(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const red = await fetch(url);
    const dados = await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);
    
    const infos = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];
}