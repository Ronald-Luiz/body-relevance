document.getElementById('calculo').addEventListener('click', (event) => {
    event.preventDefault();

    // Atribui os valores dos Input para as variáveis
    let pesoInput = parseFloat(document.getElementById('peso').value);
    let alturaInput = parseFloat(document.getElementById('altura').value);
    let idadeInput = parseFloat(document.getElementById('idade').value);
    let sexo = document.getElementById('sexo').value;

    // Validar os dados de entrada
    if (isNaN(pesoInput) || isNaN(alturaInput) || isNaN(idadeInput) || sexo === '') {
        alert('Por favor, preencha todos os campos com valores numéricos.');
        return;
    }

    // Calcular o IMC
    let IMC = pesoInput / (alturaInput * alturaInput);

    // Calcular o percentual de gordura corporal
    // masculino
    let BfMasculino = (1.20 * IMC) + (0.23 * idadeInput) - (10.8 * 1) - 5.4;
    // feminino
    let BfFeminino = (1.20 * IMC) + (0.23 * idadeInput) - (10.8 * 0) - 5.4;

    // Arrendodar o resultado para duas casa decimais
    BfMasculino = BfMasculino.toFixed(2);
    BfFeminino = BfFeminino.toFixed(2);

    // Exibir o resultado formatado
    if (sexo === 'masculino') {
        alert(`Percentual de gordura corporal está em aproximadamente (homem): ${BfMasculino}%`);

    } else if (sexo === 'feminino') {
        alert(`Percentual de gordura corporal está em aproximadamente (mulher): ${BfFeminino}%`);
    }

})


