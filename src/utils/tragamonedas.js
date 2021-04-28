//JUEGO - INSTALACION =========
export function bernoulli(p){
    return 1 && ( Math.random() < p ) || 0 
}
export function getRewards(p, max){
    var reward = 0
    for(var i = 0; i < max ; i++){
    reward += bernoulli(p)
    }
    return reward
}
export function debugResult(p, tries, maxRewards){
    var rewards = []
    var sum = 0
    for(var i = 0; i < tries ; i++){
        var r = getRewards(p, maxRewards)
        rewards.push(r)
        sum += r
    }
    console.log(rewards, sum, sum/tries)
}
export function get2Randoms(options){
    var r1 = Math.floor(Math.random() * options.length)
    var result1 = options.splice(r1, 1)
    var r2 = Math.floor(Math.random() * options.length)
    var result2 = options.splice(r2, 1)
    return [result1[0], result2[0]]
}
export function getResultNoReward(){
    return get2Randoms(['J', 'Q', 'K', 'A']).join('')
}
export function getResult(p){
    var rewards = []
    var sum = 0
    var maxRewards = 10
    var tries = 5
    var results = [
        '', '', 'JJ', 'QQ', 'KK', '', '', 'AA'
    ]
    var r = getRewards(p, maxRewards)
    var result = results[ r < results.length ? r : 0 ]
    if(result == ''){
        return getResultNoReward()
    }
    return result
}
export function getWin(result){
    var results = {
        'JJ': 2, 'QQ': 3, 'KK': 4, 'AA': 10
    }
    var win = results[result]
    return win || 0
}
export function getDistributions(){
    return get2Randoms([0.2, 0.4])
}

export function apostarYJugar(maquina, apuesta){
    var resultado = getResult(maquina)
    var ganancia = getWin(resultado)
    return {
        resultado,
        ganancia
    }
}

export function imprimirIntento(i, maquina, intento){
     console.log(
        i + '-',
        maquina + ':', 
        intento.resultado, 
        intento.ganancia, 
        intento.ganancia * apuesta
    )
}
//JUEGO - INICIO ===============================
var distribuciones = getDistributions()
console.log(distribuciones)
//0.4 significa que tiene más probabilidades de ganar que 0.2
var maquinas = {
    maquinaA: distribuciones[0],
    maquinaB: distribuciones[1]
}

//JUGAR ========================================
//INTENTO 1
//PRESIONAR EL BOTON DE UNA MAQUINA
var i = 1
var maquina = 'maquinaA'
var apuesta = 10
var intento = apostarYJugar(maquinas[maquina]) 
imprimirIntento(i, maquina, intento)

//INTENTO 2
//PRESIONAR EL BOTON DE UNA MAQUINA
var i = 2
var maquina = 'maquinaB'
var apuesta = 10
var intento = apostarYJugar(maquinas[maquina]) 
imprimirIntento(i, maquina, intento)

//INTENTO 3
//PRESIONAR EL BOTON DE UNA MAQUINA
var i = 3
var maquina = 'maquinaB'
var apuesta = 10
var intento = apostarYJugar(maquinas[maquina]) 
imprimirIntento(i, maquina, intento)

//INTENTO 4
//PRESIONAR EL BOTON DE UNA MAQUINA
var i = 4
var maquina = 'maquinaA'
var apuesta = 10
var intento = apostarYJugar(maquinas[maquina]) 
imprimirIntento(i, maquina, intento)

//INTENTO N mientras se tenga monedas para apostar
//PRESIONAR EL BOTON DE UNA MAQUINA
var i = 10
var maquina = 'maquinaA'
var apuesta = 10
var intento = apostarYJugar(maquinas[maquina])
imprimirIntento(i, maquina, intento)
