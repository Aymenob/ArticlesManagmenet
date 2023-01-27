import React from 'react'

const ArticleTable = ({handleDelete,AR_Ref, AR_Design, FA_CodeFamille, AR_Garantie, AR_UnitePoids,AR_PoidsNet, AR_PoidsBrut, AR_UniteVen,
     AR_PrixAch, AR_Coef, AR_PrixVen, AR_SuiviStock, AR_Gamme1, AR_Gamme2, AR_DateCreation}) => {
  return (
    
      <tr >
         <td ><button onClick={handleDelete}  type="button" class="btn btn-link"><span id={AR_Ref} class="bi bi-trash"></span></button></td>
        <td>{AR_Ref}</td>
        <td>{AR_Design}</td>
        <td>{FA_CodeFamille}</td>
        <td>{AR_Garantie}</td>
        <td>{AR_UnitePoids}</td>
        <td>{AR_PoidsNet}</td>
        <td>{AR_PoidsBrut}</td>
        <td>{AR_UniteVen}</td>
        <td>{AR_PrixAch}</td>
        <td>{AR_Coef}</td>
        <td>{AR_PrixVen}</td>
        <td>{AR_SuiviStock}</td>
        <td>{AR_Gamme1}</td>
        <td>{AR_Gamme2}</td>
        <td>{AR_DateCreation}</td>
      </tr>
    
  )
}

export default ArticleTable
