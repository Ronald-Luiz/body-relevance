document.getElementById('calculo').addEventListener('click', (event) => {
    event.preventDefault();

    // Atribui os valores dos Input para as variáveis
    let pesoInput = parseFloat(document.getElementById('peso').value);
    let alturaInput = parseFloat(document.getElementById('altura').value);
    let idadeInput = parseFloat(document.getElementById('idade').value);
    let select = document.getElementById('select').value;

    // Validar os dados de entrada
    if (isNaN(pesoInput) || isNaN(alturaInput) || isNaN(idadeInput) || select === '') {
        Swal.fire({
            position: 'bottom',
            icon: 'error',
            text: 'Por favor, preencha todos os campos.',
            footer: '<a href="">Why do I have this issue?</a>'
        })
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
    if (select === 'Masculino') {
        const message = `Percentual de gordura corporal está em aproximadamente (homem): ${BfMasculino}%`;
        Swal.fire({
            position: 'bottom',
            icon: 'success',
            title: 'Your work has been saved',
            text: message,
            showConfirmButton: true,
        });

    } else if (select === 'Feminino') {
        const message = `Percentual de gordura corporal está em aproximadamente (mulher): ${BfFeminino}%`;
        Swal.fire({
            position: 'bottom',
            icon: 'success',
            title: 'Your work has been saved',
            text: message,
            showConfirmButton: true,
        });

    } else {
        Swal.fire({
            position: 'bottom',
            icon: 'error',
            text: 'Por favor, selecione uma das opções',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }


})


