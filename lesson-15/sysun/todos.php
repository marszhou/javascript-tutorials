<?php

function findTodoIndex($todos, $todoId) {
  foreach ($todos as $i => $todo) {
    if ($todo['id'] === $todoId) {
      return $i;
    }
  }
  return -1;
}

function loadTodos($filePath) {
  if (!file_exists($filePath)) {
    return [];
  }

  try{
    $content = file_get_contents($filePath);
    $todos = json_decode($content, true);
    if (!is_array($todos)) {
      throw new Exception('');
    }
  } catch(Exception $e) {
    $todos = [];
  }
  return $todos;
}

function saveTodos($todos, $filePath) {
  $content = json_encode($todos);
  file_put_contents($filePath, $content);
}

function outputTodos($todos) {
  header('Content-Type: application/json');
  echo json_encode($todos);
}

$filePath = './.output';
$todos = loadTodos($filePath);

if ($_SERVER["REQUEST_METHOD"] === 'GET') {

}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $newTodo = json_decode(file_get_contents('php://input'), true);
  array_push($todos, $newTodo);
  saveTodos($todos, $filePath);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $todoId = $_GET['todoId'];
  $findIndex = findTodoIndex($todos, $todoId);
  if ($findIndex > -1) {
    $todos[$findIndex]['completed'] = !$todos[$findIndex]['completed'];
  }
  saveTodos($todos, $filePath);
}

outputTodos($todos);
