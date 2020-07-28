import React from 'react'
import PageDefault from '../../../components/pagDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria(){
    return (
       <PageDefault>
         <h1>cadastro de video</h1>        
          <Link to="/">
            ir para home
         </Link>
       </PageDefault>
    )
 }
 export default CadastroCategoria;