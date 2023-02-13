const formatarDigito = (digito) => `0${digito}`;

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');

    segundos.textContent = formartarDigito(tempo);

}

const contagemRegressiva= (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo == 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

contagemRegressiva(5);