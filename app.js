var textarea = document.querySelector('.text-area')
var mensagem = document.querySelector('.mensagem')

function btnCriptografar() {
    let textoCriptografado = criptografar(textarea.value)
    mensagem.value = textoCriptografado
    textarea.value = ''
    esconderAvisoBoneco()
}

function criptografar(stringCriptografar) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'obter'], ['u', 'ufat']]
    stringCriptografar = stringCriptografar.toLowerCase()

    for (let inicio = 0; inicio < matrizCodigo.length; inicio++) {
        if (stringCriptografar.includes(matrizCodigo[inicio][0])) {
            stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[inicio][0], matrizCodigo[inicio][1])
        }
    }

    return stringCriptografar
}

function btnDescriptografar() {
    let textoDescriptografado = Descriptografar(textarea.value)
    mensagem.value = textoDescriptografado
    textarea.value = ''
    esconderAvisoBoneco()
}

function Descriptografar(stringDescriptografar) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'obter'], ['u', 'ufat']]
    stringDescriptografar = stringDescriptografar.toLowerCase()

    for (let inicio = 0; inicio < matrizCodigo.length; inicio++) {
        if (stringDescriptografar.includes(matrizCodigo[inicio][1])) {
            stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[inicio][1], matrizCodigo[inicio][0])
        }
    }

    return stringDescriptografar
}

function esconderAvisoBoneco() {
    document.getElementById('divboneco').classList.add('esconder')
    document.getElementById('divaviso').classList.add('esconder')
    document.getElementById('divavisodestaque').classList.add('esconder')
    document.getElementById('btncopiar').classList.remove('esconder')
}

function Copiar() {
    mensagem.select()
    document.execCommand("copy")
    mensagem.value = 'Nenhuma mensagem'
}
