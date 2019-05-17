var Profil = require('../Model/profil.model');


// Create tableau des eleves
module.exports.Poste = function(req,res) {
   

    var nom = req.body.nom
    var email = req.body.email
    var password  = req.body.password
     //var classe = req.body.classe
     
     Profil.find()
            .then(note0 => {
                if(note0.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note0[note0.length-1].id)+1;
                }

            const insert = new Profil({_id:id,nom:nom,email:email,password:password});
            (!nom || !email)? console.log("reussi"):insert.save()
                .then(()=>{
                    Profil.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
            })
    }


    module.exports.GetProfil = (req, res) => {
        Profil.find()
            .then(note=>{
                res.send(note)
            })
            .catch (e =>{
                res.status(500).send({mes:e.mes || "erreur"})
            });
    };
    
    //Post prof

//     module.exports.PosteProf = function(req,res) {
   
//         var nom = req.body.nom
        
//         var prenom = req.body.prenom
//         var matiere1  = req.body.matiere1
//         var matiere2=req.body.matiere2
//          var classe1 = req.body.classe1
//          var classe2= req.body.classe2
//         Prof.find()
//             .then(note => {
//                 if(note.length==0) {
//                     id = 0;
//                     console.log('tss',id);
                    
//                 }else{
//                     id = parseInt(note[note.length-1].id)+1;
//                 }
    
//                 const insert = new Prof({_id:id,nom:nom,prenom:prenom,matiere:{matiere1:matiere1,matiere2:matiere2},classe:{classe1:classe1,classe2:classe2}});
//                 (!nom || !prenom)? console.log(" données"):insert.save()
//                     .then(()=>{
//                         Prof.find()
//                             .then(note=>{
//                                 res.send(note);
//                             })
//                     })
//                     .catch(e=>{
//                         res.status(500).send({mes:e.mes || "erreur"})
//                     })
//             })
//         }


//         module.exports.GetProf = (req, res) => {
//             Prof.find()
//                 .then(note=>{
//                     res.send(note)
//                 })
//                 .catch (e =>{
//                     res.status(500).send({mes:e.mes || "erreur"})
//                 });
//         };



//         exports.findOne = (req, res) => {
//             Eleve.find({_id:req.params.id})
//             .then(note => {
//                 if(!note) {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.id
//                     });        
                    
                
//                 }
//                 Prof.find({_classe:req.params.classe})
//                 .then(prof=>{
                   
// //noveau
//                    // var tab = []
//                     // var Prof = [{
//                     //     nom: req.body.nom,
//                     //     classe:{
//                     //         classe1=req.body.classe1,
//                     //         classe2=req.body.classe2
//                     //     }

//                     // }]
//                     // for(let i=0;i<Prof.length;i++){
//                     //     if(Prof[i].classe.classe1==note[0].classe)
//                     //     tab.push(Prof[i])
//                     // }
//                     // console.log(tab);
                    
//                     // res.send[tab]

//                     //jusq


//                     console.log("voici prof2",prof[0].classe," voici eleve classe",note);
//                     //if(prof[0].classe[1].classe1==note[0].classe)
//                    // {
//                         note.push(prof[0] )
                    
//                // }
//                 res.send(note);
//                 })
//                 .catch (e =>{
//                     res.status(500).send({mes:e.mes || "erreur prof"})
//                 });


                
//             }).catch(err => {
//                 if(err.kind === 'ObjectId') {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.id
//                     });                
//                 }
//                 return res.status(500).send({
//                     message: "Error retrieving note with id " + req.params.id
//                 });
//             });
//         };