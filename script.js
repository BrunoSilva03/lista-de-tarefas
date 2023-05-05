


function adicionarTask() {
    desapareceApareceFormulario();
    
    /*
    if(document.getElementById('formulario').style.display == 'block') {

        confereFormulario();
    }
    */
    

}

function insereNovo() {
    

    if(document.getElementById('formulario').style.display == 'block') {
        confereFormulario();
    }
}

/*
function adicionar() {
    var tarefa = document.getElementById('idtarefa').value;
    var data = document.getElementById('iddata').value;
    var horario = document.getElementById('idhorario').value;

    if(document.getElementById('formulario').style.display == 'block') {

        confereFormulario();
    }

    desapareceApareceFormulario();

    /*
    var tasks = document.getElementById('div.tasks');
    
    var novaTask = document.createElement('div');
    
    novaTask = `<p>${tarefa}</p>
               DATA: ${data}
               HORÁRIO: ${horario}`;
               
    tasks.appendChild(novaTask);
    
}
*/



function desapareceApareceFormulario() {
    var displayForm = document.getElementById('formulario').style.display;

    if (displayForm == 'block') {
        document.getElementById('formulario').style.display = 'none';
    } 
    if (displayForm == '') {
        document.getElementById('formulario').style.display = 'block';
    }
    if (displayForm == 'none') {
        document.getElementById('formulario').style.display = 'block';
    }
}

function confereFormulario() {
let tarefa = window.document.getElementById('idtarefa').value
let data = window.document.getElementById('iddata').value;
let horario = window.document.getElementById('idhorario').value;
    if(tarefa == '' || data == '' || horario == '') {
        console.log('uai');
        alert('Preencha todos os campos por favor.');
    }
}

function preencherformulario() {
    window.location.href = "formulario.html"
}


