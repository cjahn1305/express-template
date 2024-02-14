const express = require("express");
const router = express.Router();
const HttpStatus = require('http-status-codes');

// PUT - /v1/todos/update: Update Todo
router.put('/update', (req, res) => {
    // Implementierung des Todo-Updates
    if (!req.body.todoId || !req.body.newTodo) {
        return res.status(HttpStatus.BAD_REQUEST).send('todoId und newTodo erforderlich.');
    }
    // Weitere Logik für das Todo-Update
});

// PUT - /v1/todos/mark: Todo erledigt markieren
router.put('/mark', (req, res) => {
    // Implementierung der Markierung als erledigt
    if (!req.body.todoId) {
        return res.status(HttpStatus.BAD_REQUEST).send('todoId erforderlich.');
    }
    // Weitere Logik für die Markierung als erledigt
});

// Weitere Routen ...

module.exports = router;
