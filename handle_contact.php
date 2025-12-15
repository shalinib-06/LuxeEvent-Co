<?php
// handle_contact.php (simplified)
// Validate request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Method not allowed";
    exit;
}

// (Your existing validation / email sending logic goes here)
// Example processing (keep your real logic):
$full_name = $_POST['full_name'] ?? '';
$contact_email = $_POST['contact_email'] ?? '';
$query_message = $_POST['query_message'] ?? '';

// If everything OK:
http_response_code(200);
echo "Message sent successfully!";   // <-- IMPORTANT: the frontend shows this text
exit;

// If something fails, return a 500 or 400 with a message:
// http_response_code(500);
// echo "Failed to send message. Please try again.";
?>
