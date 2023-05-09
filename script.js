function mostrarFormulario() {
    let displayForm = window.document.getElementById('formulario').style.display;

    if(displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block';
    }
    if (displayForm == '') {
        document.getElementById('formulario').style.display = 'block';
    }
    if(displayForm == 'block') {
        document.getElementById('formulario').style.display = 'none';
    }
}

function adicionarTask() {
    let tarefa = document.getElementById('idtarefa').value;
    let data = document.getElementById('iddata').value;
    let horario = document.getElementById('idhorario').value;

    let tasks = document.querySelector('div.tasks');
    novaTask = document.createElement('div');
    novaTask.innerHTML = `<p>Uai</p>
                         <p>Teste</p>
                         <p>Ué</p>`

    mostrarFormulario();
    tasks.appendChild(novaTask);
}


