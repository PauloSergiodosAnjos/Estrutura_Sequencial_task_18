// 18
let question = Number(prompt('Qual o tamanho do arquivo em MB\n'));
let question2 = Number(prompt('Qual a velocidade da sua internet\n'));
function calcTempoDeDownload() {
    return question / (question2 / 8);
}
console.log('O tempo do seu download é de', calcTempoDeDownload(), 'segundos');

