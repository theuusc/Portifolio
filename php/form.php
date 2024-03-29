<?php
    $Name    = $_POST["Name"];
    $Email   = $_POST["Email"];
    $Phone   = $_POST["Phone"];
    $Subject = $_POST["Subject"];
    $Message = $_POST["Message"];
    $From    = "sctheusmsc@gmail.com";

    echo $Name;
    echo $Email;
    echo $Phone;
    echo $Subject;
    echo $Message;
    /*$Headers  = "MIME-Version: 1.0\r\n";
    $Headers .= "Content-type: text/html; charset=utf-8\r\n";
    $Headers .= "From: portfolio <$From>\r\n";
    $Headers .= "Return-Path: $From\r\n";
    $Headers .= "Reply-to: $Email\r\n";

    $message = "Name: $name <br>";
    $message .= "Email: $Email <br>";
    $message .= "Subject: $subject <br>";

    // Envio do email
    if (mail($From, $subject, $message, $Headers)) {
        echo "Email enviado com sucesso.";
    } else {
        echo "Falha ao enviar o email.";
    }*/
?>




