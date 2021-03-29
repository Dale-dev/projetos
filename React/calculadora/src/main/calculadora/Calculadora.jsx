import React, {Component} from 'react'

import './Calculadora.css'
import Botao from '../../components/botao/Botao' 
import Display from '../../components/botao/Display' 

const estadoInicial = {
    valorDisplay: '0',
    clearDisplay: false,
    operaçao: null,
    valores: [0, 0],
    atual: 0
}

export default class Calculadora extends Component {


    state = { ...estadoInicial}

    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setOperacao= this.setOperacao.bind(this)
        this.adicionarDigito = this.adicionarDigito.bind(this)
    }
    limparMemoria() {
        this.setState({...estadoInicial})
    }

    setOperacao(operacao) {
        if (this.state.atual === 0) {
            this.setState({ operacao, atual: 1, clearDisplay: true})
        } else {
            const equals = operacao === '='
            const operacaoAtual = this.state.operacao

            const valores = [...this.state.valores]

            try {
            valores[0] = eval(`${valores[0]} ${operacaoAtual} ${valores[1]}`)
            } catch(e) {
               valores[0] = this.state.valores[0]
            }   

            valores[1] = 0 

            this.setState({
                valorDisplay: valores[0],
                operacao: equals ? null : operacao,
                atual: equals ? 0 : 1,
                clearDisplay: !equals,
                valores
            })
        }
    }

    adicionarDigito (n) {

        // previne excesso de pontos(.)
        if (n === '.' && this.state.valorDisplay.includes('.')) {
            return
        }

        //regra limpeza do 0
        const clearDisplay = this.state.valorDisplay === '0' || this.state.clearDisplay

        // mudança de estado
        const atual = clearDisplay ? '' : this.state.valorDisplay
        const valorDisplay = atual + n
        this.setState({ valorDisplay, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.atual
            const novoValor = parseFloat(valorDisplay)
            const valores = [...this.state.valores]
            valores[i] = novoValor
            this.setState ({valores})
        }
    }

    render() {
        
        return (
            <div className="Calculadora">
                <Display value={this.state.valorDisplay}/>
                <Botao label="AC" click={this.limparMemoria} triple/>
                <Botao label="/" click={this.setOperacao} operacao/>
                <Botao label="7" click={this.adicionarDigito}/>
                <Botao label="8" click={this.adicionarDigito}/>
                <Botao label="9" click={this.adicionarDigito}/>
                <Botao label="*" click={this.setOperacao} operacao/>
                <Botao label="4" click={this.adicionarDigito}/>
                <Botao label="5" click={this.adicionarDigito}/>
                <Botao label="6" click={this.adicionarDigito}/>
                <Botao label="-" click={this.setOperacao} operacao/>
                <Botao label="1" click={this.adicionarDigito}/>
                <Botao label="2" click={this.adicionarDigito}/>
                <Botao label="3" click={this.adicionarDigito}/>
                <Botao label="+"click={this.setOperacao} operacao/>
                <Botao label="0" click={this.adicionarDigito} double/>
                <Botao label="." click={this.adicionarDigito}/>
                <Botao label="=" click={this.setOperacao} operacao/>            
                </div>
        )
    }
}
