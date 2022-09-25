

function contar(n){
    for(let i=0;i<n;i++) {
        console.log(i)

    }
}

let inicio=performance.now()
contar(5)
let fin=performance.now()

let duracion=fin - inicio

console.log(`El algoritmo ha durado ${duracion} ms.`)