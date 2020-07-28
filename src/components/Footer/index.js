import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a quarentena com ajuda da <a href="https://www.alura.com.br/">Alura</a>
        {' '}
        <a href="https://www.instagram.com/osvaldo_soa/?hl=pt-br">
          e da aquela força no insta
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
