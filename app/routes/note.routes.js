module.exports = (app) => {
  const notes = require('../controllers/note.controller.js');

  /* create new note */
  app.post('/notes', notes.create);
  /* show all notes */
  app.get('/notes', notes.showAll);
  /* get a note */
  app.get('/notes/:noteId', notes.getOne);
  /* update a note */
  app.put('/notes/:noteId', notes.update);
  /* delete a note */
  app.delete('/notes/:noteId', notes.delete);
}
