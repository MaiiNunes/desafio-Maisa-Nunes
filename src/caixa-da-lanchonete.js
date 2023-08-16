

class CaixaDaLanchonete {

    valores = {
        cafe: 3.00,
        chantily: 1.50,
        suco: 6.20,
        sanduiche: 6.50,
        queijo: 2.00,
        salgado: 7.25,
        combo1: 9.50,
        combo2: 7.50,
    };
    
    metodosDePagamento = {
        dinheiro: 0.95,
        debito: 1.00,
        credito: 1.03,
    };

    calcularValorDaCompra(formaDePagamento, itens) {
        if (itens.length == 0){ //caso carrinho vazio
            return 'Não há itens no carrinho de compra!'
        }
        else if(!(formaDePagamento in this.metodosDePagamento)){ //caso forma de pagamento especie
            return 'Forma de pagamento inválida!'
        }
        
        let total = 0;
        let cafe = false;
        let sanduiche = false;
        
        for(let item of itens){
            let codProduto = item.split(',')[0]
            let qtd = item.split(',')[1]

            if (codProduto == 'cafe'){
                cafe = true
            }
            if (codProduto == 'sanduiche'){
                sanduiche = true
            }


            if(!(codProduto in this.valores)){ //caso produto inexistente
                return 'Item inválido!'
            }
            else if (qtd == 0){ //caso quantidade zero
                return 'Quantidade inválida!'
            }
            else if (codProduto == 'chantily' && !cafe){ //caso extra sem o principal (chantily)
                return 'Item extra não pode ser pedido sem o principal'
            }
            else if (codProduto == 'queijo' && !sanduiche){ //caso extra sem o principal (queijo)
                return 'Item extra não pode ser pedido sem o principal'
            }

            let totalProduto = qtd * this.valores[codProduto]
            total = total + totalProduto
        };

        total = (total * this.metodosDePagamento[formaDePagamento]).toFixed(2);

        return `R$ ${total}`.replace('.',',');
    }
}

export { CaixaDaLanchonete };