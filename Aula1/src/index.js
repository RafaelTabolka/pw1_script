function somaNumero(c1, c2, op) {
    if(op == "+"){
        return c1+c2
    }
    else if (op == "-"){
        return c1-c2
    }
    else if (op == "/"){
        return c1/c2
    }
    else if (op == "*"){
        return c1*c2
    }
    else if (op == "raiz"){
        return Math.sqrt(c1 + c2)
    }
    else if (op == "potencia"){
        return Math.pow(c1, c2)
    }
    else{
        console.log("Para de ser bobo e escreve um sinal das quatro operações básicas");
    }
}

alert(somaNumero(7, 2, "raiz"));