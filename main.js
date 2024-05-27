const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '1234567890';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botaop');
const campoSenha = document.querySelector('campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if(tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha=1;
        tamanhoSenha==;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i==) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabet = alfabeto = letrasMaiusculas;
    }
    if(checkbox[1].checked) {
        alfabeto = alfabeto = letrasMinusculas;
    }
    if (checbox[2].checked) {
        alfabeto = alfabeto = numeos;
    }
    if (checkbox[3])
}