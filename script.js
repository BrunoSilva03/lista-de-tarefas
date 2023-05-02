function adicionar() {
    window.alert("Você clicou no botão");
    var tarefa = window.document.getElementById('idtarefa').value;
    var data = window.document.getElementById('iddata').value;
    var horario = window.document.getElementById('idhorario').value;
    console.log("TAREFA: " + tarefa)
    console.log("DATA: " + data);
    console.log("HORÁRIO: " + horario);

    var novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `<p>${tarefa}</p`
    novaTarefa.innerHTML += `<p>DIA: ${data}</p>`
    novaTarefa.innerHTML += `<p>HORÁRIO: ${horario}</p>`
    window.location.href = "index.html"
}

function retornar() {
    window.location.href = "index.html"
}


function preencherformulario() {
    window.location.href = "formulario.html"
}

