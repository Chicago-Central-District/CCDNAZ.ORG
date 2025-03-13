<?php

  if (isset($_POST['submit'])) {

    if(empty($_POST['firstname']) || empty($_POST['lastname']) || empty($_POST['email']) ||empty($_POST['phoone']) ||empty($_POST['community']) ||empty($_POST['peopleg']) ||empty($_POST['style']) ||empty($_POST['model']) ||empty($_POST['descriptions']) ){

      $response = "All fields are required.";

    } else {

      $fname = $_POST['firstname'];

      $lname = $_POST['lastname'];

      $from = $_POST['email'];

      $phone = $_POST['phone'];

      $community = $_POST['community'];

      $peopleg = $_POST['peopleg'];

      $style = $_POST['style'];

      $model = $_POST['model'];

      $descriptions = $_POST['descriptions'];





      $to = "msparentijr@gmail.com";
      
      $subject = "Form Submission - Church Planting";

      $subject2 = "Free Online Course!";

      $headers = "From: " . $from;

      $headers2 = "From:" . $to;

      $txt = $fname . " " . $lname . " has submitted a form on the CCD Church Planting website.\n********************************************************************\n\n" . "Phone: " . $phone . "\n\n" . "Community: " . $community . "\n" . "People Group:" . $peopleg . "\n" . "Style:" . $style . "\n" . "Model:" . $model . "\n" . "Description:" . $descriptions;

      $txt2 = $fname . "," . "\n\n Thank you for sharing your idea with the CCD Church Planting team. \n\n Here is a link to your free online web-training course: \n https://ccdnaz.org/go-somewhere-on-the-website";
      
      
      
        sendMail($to, $subject, $txt, $headers);

        sendMail($from, $subject2, $txt2, $headers2);

        $response = "Thank you, " . $fname . "We will contact you shortly.\n Please check your email for your free access to the CCD Church Planting Web-Training Course.";
      
        // header("Location http://msparenti.com/CCDCP/index.html");
    }
  }
 
?>
