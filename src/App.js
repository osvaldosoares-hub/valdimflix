import React from 'react';
import Menu from './components/Menu'
import BanerMain from './components/BannerMain'
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel'
function App() {
  return (
    <div>
      <Menu />
      <BanerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"free Fire"}/>
        <Carousel
         ignoreFirstVideo
         category={dadosIniciais.categorias[0]}/>
    </div>
  );
}

export default App;
