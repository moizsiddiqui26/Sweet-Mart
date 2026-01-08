<?php
// Include the database connection file
include 'connect.php'; // Adjust the file path as per your project structure

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from the form
    $pincode = $_POST['pincode'];
    $street = $_POST['street'];
    $area = $_POST['area'];
    $city = $_POST['city'];

    // Validate required fields
    if (!empty($pincode) && !empty($street) && !empty($area) && !empty($city)) {
        // SQL query to insert data into the database
        $insertQuery = "INSERT INTO address (pincode, street, area, city) VALUES ('$pincode', '$street', '$area', '$city')";

        // Execute the query
        if ($conn->query($insertQuery) === TRUE) {
            
        } else {
             "Error: " . $conn->error;
}
    } else {
        echo "All fields are required!";
    }
}
?>
