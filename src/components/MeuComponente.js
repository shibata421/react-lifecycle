import React, { Component } from 'react'

class MeuComponente extends Component {
    constructor(props) {
        super(props)

        this.state = { numero: 5 }
        this.adicionarNumero = this.adicionarNumero.bind(this)

        console.log('construtor....')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps....')
        // console.log(props)
        // console.log(state)
        // return { numero: 6 }
        return null
    }

    componentDidMount() {
        console.log('componentDidMount...')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate...')
        console.log('estado atual', this.state)
        console.log('proximo estado', nextState)
        return true
    }

    componentDidUpdate() {
        console.log('componentDidUpdate...')
    }

    adicionarNumero() {
        console.log('setState...')
        let numeroAtual = this.state.numero
        numeroAtual++;
        this.setState({ numero: numeroAtual })
    }

    render() {
        console.log('render....')
        return(
            <div>
                <p>Olá, eu sou um componente</p>
                <p>{this.state.numero}</p>
                <p>{this.props.titulo}</p>

                <button onClick={this.adicionarNumero}>
                    Adicionar Número
                </button>
            </div>
        )
    }
}

export default MeuComponente