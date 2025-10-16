
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
    id: nextId,       
    name: name.trim(), 
    done: false        
  };
  
  // Augmenter l'identifiant de +1 pour la prochaine tâche
  nextId = nextId + 1;
  
  // Ajouter la tâche à la liste
  tasks.push(task);
  
  return task;
}

// Basculer l'état d'une tache
function toggleTask(id) {
  // Trouver le bon id pour la tâche
  for (let i = 0; i < tasks.length; i = i + 1) {

    if (tasks[i].id === id) {
      
      //Si c'est false ça devient true et inversement
      tasks[i].done = !tasks[i].done;

      return tasks[i];
    }
  }
  // Return null si la tache n'est pas trouver 
  return null;
}

//Tout reset
function reset() {
  tasks = [];
  nextId = 1;
}

// Fonction pour compter les tâches terminées
function countDone() {
  return tasks.filter(task => task.done === true).length;
}

module.exports = { getTasks, addTask, toggleTask, reset, countDone };
