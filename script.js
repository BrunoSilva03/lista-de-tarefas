


function adicionarTask() {
    desapareceApareceFormulario();

    /*
    if(document.getElementById('formulario').style.display == 'block') {

        confereFormulario();
    }
    */


}

function insereNovo() {


    if (document.getElementById('formulario').style.display == 'block') {
        confereFormulario();
    }
}

function adicionarNovo() {
    console.log('Entrou no adicionarNovo');

    let tarefa = document.getElementById('idtarefa').value;
    let data = document.getElementById('iddata').value;
    let horario = document.getElementById('idhorario').value;

    desapareceApareceFormulario();

    let tasks = document.getElementById('div.tasks');
    let novaTask = document.createElement('div');

    novaTask = `<p> ${tarefa} <p>
                <p>DATA: ${data} <p>
                <p>HORÁRIO: ${horario} </p>`;

    tasks.appendChild(novaTask);
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
    if (tarefa == '' || data == '' || horario == '') {
        console.log('uai');
        alert('Preencha todos os campos por favor.');
    } else {
        adicionarNovo();
    }
}

function preencherformulario() {
    window.location.href = "formulario.html"
}


