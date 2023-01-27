const config = require('./dbConfig')
const sql=require('mssql');
const { validationResult } = require('express-validator');

   // get all articles
   const getArticles=async function(req,res){
    try {
      let database= await sql.connect(config);
      let articles= await database.request().query('SELECT AR_Ref, AR_Design, FA_CodeFamille, AR_Garantie, AR_UnitePoids,AR_PoidsNet, AR_PoidsBrut, AR_UniteVen, AR_PrixAch, AR_Coef, AR_PrixVen, AR_SuiviStock, AR_Gamme1, AR_Gamme2, AR_DateCreation, deleted FROM F_ARTICLE')        
      return res.status(200).json(articles.recordsets[0])
    } catch (error) {
        console.log(error)
       
    }
   }   
   // post one article
      const postArticles=async function(req,res){
     
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ Errors: errors.array({ onlyFirstError: true }) });
      }
      const { AR_Ref, AR_Design, FA_CodeFamille, AR_Garantie, AR_UnitePoids,AR_PoidsNet, AR_PoidsBrut, AR_UniteVen, AR_PrixAch, AR_Coef, AR_PrixVen, AR_SuiviStock, AR_Gamme1, AR_Gamme2, AR_DateCreation } = req.body
    /*  return console.log(`Insert Into F_ARTICLE VALUES ('${AR_Ref}','${AR_Design}','${FA_CodeFamille}',${AR_Garantie},${AR_UnitePoids},${AR_PoidsNet},${AR_PoidsBrut},${AR_UniteVen},${AR_PrixAch},${AR_Coef},${AR_PrixVen},${AR_SuiviStock},${AR_Gamme1},${AR_Gamme2},'${AR_DateCreation}')`)*/
    var d1=new Date().toISOString().slice(0, 19).replace('T19', 'T18')
      let database= await sql.connect(config);
      let articles= await database.request().query(`INSERT INTO F_ARTICLE (AR_Ref, AR_Design, FA_CodeFamille, AR_Garantie, AR_UnitePoids, 
        AR_PoidsNet, AR_PoidsBrut, AR_UniteVen, AR_PrixAch, AR_Coef, AR_PrixVen, AR_SuiviStock, 
        AR_Gamme1, AR_Gamme2, AR_DateCreation) VALUES 
      ('${AR_Ref}','${AR_Design}','${FA_CodeFamille}',${AR_Garantie},${AR_UnitePoids},${AR_PoidsNet},${AR_PoidsBrut},${AR_UniteVen},${AR_PrixAch},${AR_Coef},${AR_PrixVen},${AR_SuiviStock},${AR_Gamme1},${AR_Gamme2},'${d1}')
      `)      
      return res.status(200).json(articles)  
      
    } catch (error) {
        console.log(error)
       
    }
   }
   // delete an artical
   const deleteArticles=async function(req,res){
      const{Data,id}=req.body
        /* return console.log(`UPDATE F_ARTICLESET deleted=${Data}WHERE AR_Ref='${id}'`)*/
    try {
      let database= await sql.connect(config);
      let article= await database.request().
      query(`UPDATE F_ARTICLE
      SET deleted=${Data}
      WHERE AR_Ref='${id}'`)        
      return res.status(200).json(article)
    } catch (error) {
        console.log(error)
       
    }
   }   
    
   module.exports= {postArticles,getArticles,deleteArticles}
