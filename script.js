function adicionarTask() {
    desapareceApareceFormulario();
    if(document.getElementById('formulario').style.display == 'block') {

        confereFormulario();
    }

}


function adicionar() {
    var tarefa = document.getElementById('idtarefa').value;
    var data = document.getElementById('iddata').value;
    var horario = document.getElementById('idhorario').value;

    desapareceApareceFormulario();

    /*
    var tasks = document.getElementById('div.tasks');
    
    var novaTask = document.createElement('div');
    
    novaTask = `<p>${tarefa}</p>
               DATA: ${data}
               HORÁRIO: ${horario}`;
               
    tasks.appendChild(novaTask);
    
    */
}


function desapareceApareceFormulario() {
    var displayForm = document.getElementById('formulario').style.display;

    if (displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block';
    } else {
        document.getElementById('formulario').style.display = 'none';
    }
}

function confereFormulario() {
    var tarefa = document.getElementById('idtarefa').value;
    var data = document.getElementById('iddata').value;
    var horario = document.getElementById('idhorario').value;

    if(tarefa == '' || data == '' || horario == '') {
        alert('Preencha todos os campos por favor.')
    }
}

function preencherformulario() {
    window.location.href = "formulario.html"
}


