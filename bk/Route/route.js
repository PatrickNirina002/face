var notes = require('../Controleur/controle');


module.exports.route =function (app) {

app.route('/profil')
  .post(notes.Poste)
  .get(notes.GetProfil)
  

  // app.route('/prof')
  // .post(notes.PosteProf)
  // .get(notes.GetProf)
  

  // app.route('/eleve/:id')
  // .get(notes.findOne)
}
