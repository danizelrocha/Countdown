const formatarDigito = (digito) => `0${digito}`. slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);

    segundos.textContent = formatarDigito( qtdSegundos);
    minutos.textContent = formatarDigito( qtdMinutos);
}

const contagemRegressiva= (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

contagemRegressiva(92);