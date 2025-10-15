
// Liste des tâches 
let tasks = [];
// Générer des identifiants uniques
let nextId = 1;

// Fonction pour récupérer les tâches
function getTasks() {
  return tasks;
}

// Ajouter une tâche
function addTask(name) {
  const task = {
    id: nextId,        // Id unique
    name: name.trim(), // Nom sans espaces au début/fin
    done: false        // Pas terminée
  };
  
  // Augmenter l'identifiant de +1 pour la prochaine tâche
  nextId = nextId + 1;
  
  // Ajouter la tâche à la liste
  tasks.push(task);
  
  // Return la tache
  return task;
}

// Fonction pour tout réinitialiser
function reset() {
  tasks = [];
  nextId = 1;
}

// Exporter les fonctions pour les utiliser ailleurs
module.exports = { getTasks, addTask, reset };
