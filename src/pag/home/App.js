import React from 'react';
import Menu from '../../components/Menu'
import BanerMain from '../../components/BannerMain'
import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer';
function home() {
  return (
    <div style={{background:"#141414"}}>

      <Menu />
      <BanerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"free Fire"}/>
        <Carousel
         ignoreFirstVideo
         category={dadosIniciais.categorias[0]}/>
          <Carousel
         ignoreFirstVideo
         category={dadosIniciais.categorias[1]}/>
          
         <Footer />
    </div>
  );
}

export default home;
