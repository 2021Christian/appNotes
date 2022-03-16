const notesController = {};

notesController.getNotes = (req,res) => res.json({message: []});

notesController.createNote = (req,res) => res.json({ message : 'Nota guardada'});

notesController.getNote = (req,res) => res.json({ message : 'Nota'});

notesController.updateNote = (req,res) => res.json({ message : 'Nota actualizada'});

notesController.deleteNote = (req,res) => res.json({ message : 'Nota eliminada'});

module.exports = notesController;