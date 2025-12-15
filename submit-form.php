<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    // Capture form data 
    $firstName = $_POST['firstName'] ?? ''; 
    $lastName = $_POST['lastName'] ?? ''; 
    $email = $_POST['email'] ?? ''; 
    $phone = $_POST['phone'] ?? ''; 
 
    // Redirect to choose-team.html 
    header("Location: choose-team.html"); 
    exit(); // Ensure no further code is executed after the redirect 
} else { 
    echo "Invalid form submission."; 
} 