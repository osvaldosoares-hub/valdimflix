import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './pag/home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pag/cadastro/video';
import CadastroCategoria from './pag/cadastro/categoria'
ReactDOM.render(
      <BrowserRouter>
      <Switch>
      <Route  path="/" component={home} exact />
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route  component={()=>(<div>pena ne seu poha</div>)} />
        </Switch>
        </BrowserRouter>,
  document.getElementById('root')
);
