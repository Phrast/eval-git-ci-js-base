// Importer les fonctions
const { getTasks, addTask, reset, countDone } = require('../lib/tasks');

// Remettre à zero
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

// Test  countDone
test('countDone retourne 0 quand la liste est vide', () => {
  expect(countDone()).toBe(0);
});

test('countDone compte les tâches terminées', () => {
  const tache1 = addTask('Tâche 1');
  const tache2 = addTask('Tâche 2');

  tache1.done = true;

  expect(countDone()).toBe(1);
});
