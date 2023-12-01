<?php
// Retrieve tasks from the file
$tasksFile = 'tasks.txt';
$tasks = file($tasksFile, FILE_IGNORE_NEW_LINES);

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newTask = $_POST['task'];
    file_put_contents($tasksFile, $newTask . PHP_EOL, FILE_APPEND);
    $tasks[] = $newTask;
}

// Output tasks as JSON
header('Content-Type: application/json');
echo json_encode($tasks);
?>
