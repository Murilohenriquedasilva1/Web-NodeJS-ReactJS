import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'http://pm1.narvii.com/7279/7848d0da8edf70d408efec9aca9baa692b62ee5er1-1520-855v2_uhq.jpg';

      return (
        <img src={img} width={400} height={400} />
      );
    }
  }

  export default Perfil;