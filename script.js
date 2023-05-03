
function adicionar() {
    
    window.alert("Você clicou no botão");
    
    var tarefa = window.document.getElementById('idtarefa').value;
    var data = window.document.getElementById('iddata').value;
    var horario = window.document.getElementById('idhorario').value;
    console.log("TAREFA: " + tarefa)
    console.log("DATA: " + data);
    console.log("HORÁRIO: " + horario);

    var novoH1 = document.createElement("h1");
    var textoAntigo = document.getElementById("textoParagrafo");
    var novoTexto = document.createTextNode(textoAntigo.innerHTML);
    novoH1.appendChild(novoTexto);
    textoAntigo.replaceChild(novoH1, textoAntigo);
    
/*
    let textinho = document.getElement('p#texto');
    textinho.document.setElement('Novo texto aí galera pessoal!');
    
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskItemParagrafo = document.createElement('p');
    taskItemParagrafo.innerHTML = 
    `${tarefa}<br>
    DIA: ${data}<br>
    HORÁRIO: ${horario}`
    
    /*
    var novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `<p>${tarefa}</p`
    novaTarefa.innerHTML += `<p>DIA: ${data}</p>`
    novaTarefa.innerHTML += `<p>HORÁRIO: ${horario}</p>`
    
    
    tarefa = '';
    data = '';
    horario = '';
    */
    
    window.location.href = "menuzinho.html"
}


function funcione() {
    window.alert("Funcione imediatamente!")
}



function preencherformulario() {
    window.location.href = "formulario.html"
}


