const path = require('path')
const { check } = require('express-validator');

const postValidation = [
    check("AR_Ref").notEmpty().withMessage("empty inputs"), 
    check("AR_Design").notEmpty().withMessage("empty inputs"), 
    check("FA_CodeFamille").notEmpty().withMessage("empty inputs"),
    check("AR_Garantie").notEmpty().withMessage("empty inputs"), 
    check("AR_UnitePoids").notEmpty().withMessage("empty inputs"), 
    check("AR_PoidsNet").notEmpty().withMessage("empty inputs"), 
    check("AR_PoidsBrut").notEmpty().withMessage("empty inputs"), 
    check("AR_UniteVen").notEmpty().withMessage("empty inputs"), 
    check("AR_PrixAch").notEmpty().withMessage("empty inputs"), 
    check("AR_Coef").notEmpty().withMessage("empty inputs"), 
    check("AR_PrixVen").notEmpty().withMessage("empty inputs"), 
    check("AR_SuiviStock").notEmpty().withMessage("empty inputs"), 
    check("AR_Gamme1").notEmpty().withMessage("empty inputs"), 
    check("AR_Gamme2").notEmpty().withMessage("empty inputs"), 
    

]



module.exports = {  postValidation}