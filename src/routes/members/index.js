const express = require("express");
const router = express.Router();

// POST - /v1/members/add: Mitglieder hinzufügen
router.post("/add", (req, res) => {
  // Implementierung zum Hinzufügen von Mitgliedern zu einem Todo
  const todoId = req.body.todoId;
  const memberId = req.body.memberId;

  // Logik zum Hinzufügen des Mitglieds zu einem Todo
});

// DELETE - /v1/members/remove: Mitglieder entfernen
router.delete("/remove", (req, res) => {
  // Implementierung zum Entfernen von Mitgliedern aus einem Todo
  const todoId = req.body.todoId;
  const memberId = req.body.memberId;

  // Logik zum Entfernen des Mitglieds aus einem Todo
});

// GET - /v1/members/:todoId: Mitglieder auslesen
router.get("/:todoId", (req, res) => {
  // Implementierung zum Auslesen der Mitglieder eines Todos
  const todoId = req.params.todoId;

  // Logik zum Auslesen der Mitglieder eines Todos und Senden der Antwort
});

module.exports = router;
