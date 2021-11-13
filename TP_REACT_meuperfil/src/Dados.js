import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Murilo Henique Da Silva',
      dados: 'Murilohenrique1944@gmail.com | (13)981042118 | Guarujá - SP',
      formacao: 'Cursando Ciência da Computação na instituição UNIP, conclui curso de TI da minha escola e estou Trabalhando no jornal da minha Cidade',
      exp: 'HTML, CSS, Javascript, Banco de Dados,Manutenção e montagem de Computadores',
      projeto: 'Meus projetos estão todos na minha conta do GitHub "Murilohenriquedasilva1"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;