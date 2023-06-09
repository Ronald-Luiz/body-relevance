document.getElementById('calculo').addEventListener('click', (event) => {
    event.preventDefault();

    // Atribui os valores dos Input para as variáveis
    let pesoInput = parseFloat(document.getElementById('peso').value);
    let alturaInput = parseFloat(document.getElementById('altura').value);
    let idadeInput = parseFloat(document.getElementById('idade').value);
    let select = document.getElementById('select').value;

    // Validar os dados de entrada
    if (isNaN(pesoInput) || isNaN(alturaInput) || isNaN(idadeInput) || select === '') {

        swal({
            title: "Ops...!",
            text: "Por favor, preencha todos os campos.",
            icon: "error",
        });

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

        swal({
            title: "Calculado!",
            text: message,
            icon: "success",
        });

    } else if (select === 'Feminino') {
        const message = `Percentual de gordura corporal está em aproximadamente (mulher): ${BfFeminino}%`;

        swal({
            title: "Calculado!",
            text: message,
            icon: "success",
        });

    } else {

        swal({
            title: "Ops...!",
            text: "Por favor, selecione uma das opções",
            icon: "error",
        });



    }
})

function formatarAltura(input) {
    var valor = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    valor = valor.replace(/(\d{1})(\d)/, '$1.$2'); // Adiciona o ponto após os primeiros dois dígitos
    input.value = valor;
}


