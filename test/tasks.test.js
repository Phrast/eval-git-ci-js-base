// Importer les fonctions 
const { getTasks, addTask, toggleTask, reset, countDone } = require('../lib/tasks');

// Reset
beforeEach(() => {
  reset();
});

// Verifier que la liste est vide
test('la liste de tâches est vide', () => {
  expect(getTasks()).toEqual([]);
});

// Ajouter une tache 
test('addTask ajoute une tâche avec un id, un nom et done=false', () => {

  const tache = addTask('Faire du versioning avec Marc');
  
  expect(tache.id).toBe(1);
  expect(tache.name).toBe('Faire du versioning avec Marc');
  expect(tache.done).toBe(false);
  
  // Vérifier qu'il y a une tâche dans la liste
  expect(getTasks().length).toBe(1);
});

//Le trim fonctionne 
test('addTask enlève les espaces au début et à la fin', () => {
  const tache = addTask('  Apprendre JavaScript  ');
  expect(tache.name).toBe('Apprendre JavaScript');
});

// Les identifiants sont uniques
test('chaque tâche a un id unique', () => {
  const tache1 = addTask('Tâche 1');
  const tache2 = addTask('Tâche 2');
  const tache3 = addTask('Tâche 3');

  expect(tache1.id).toBe(1);
  expect(tache2.id).toBe(2);
  expect(tache3.id).toBe(3);
});

// Passer de false à true
test('toggleTask fait passer done de false à true', () => {

  const tache = addTask('Faire les courses');
  expect(tache.done).toBe(false);
  
  // Basculer l'état
  toggleTask(tache.id);
  
  expect(tache.done).toBe(true);
});

// Passer de true à false
test('toggleTask fait passer done de true à false', () => {
  const tache = addTask('Réviser');

  // false -> true
  toggleTask(tache.id);
  expect(tache.done).toBe(true);
  
  // true -> false
  toggleTask(tache.id);
  expect(tache.done).toBe(false);
});

// Test avec un id qui n'existe pas
test('toggleTask retourne null si lid nexiste pas', () => {
  addTask('Tâche 1');
  
  // Basculer une tâche qui existe pas
  const resultat = toggleTask(999);
  
  expect(resultat).toBe(null);
});

// Test  countDone
test('countDone retourne 0 quand la liste est vide', () => {
  expect(countDone()).toBe(0);
});

test('countDone compte les tâches terminées', () => {
  const tache1 = addTask('Tâche 1');
  const tache2 = addTask('Tâche 2');

  tache1.done = true;

  expect(countDone()).toBe(1);
