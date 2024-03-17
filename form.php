<?php
    $Name    = $_POST["Name"];
    $Email   = $_POST["Email"];
    $Phone   = $_POST["Phone"];
    $Subject = $_POST["Subject"];
    $Message = $_POST["Message"];
    $From    = "https://theuusc.netlify.app/";

   
    $Headers  = "MIME-Version: 1.0\n";
    $Headers .= "Content-type: text/html; charset=utf-8\n";
    $Headers .= "From: Portfolio <$From>\n";
    $Headers .= "Return-Path: $From\n";
    $Headers .= "Reply-to: $Email\n";

    mail($Email, $Subject, $Subject, $Headers, $From);
?>




