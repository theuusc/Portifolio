<?php
/*$name    = $_POST["name"];
$Email   = $_POST["email"];
$subject = $_POST["subject"];
$From    = "https://theuusc.netlify.app/";

$Headers  = "MIME-Version: 1.0\r\n";
$Headers .= "Content-type: text/html; charset=utf-8\r\n";
$Headers .= "From: portfolio <$From>\r\n";
$Headers .= "Return-Path: $From\r\n";
$Headers .= "Reply-to: $Email\r\n";

mail($name, $subject, $Email, $Headers, $From);

// Envio do email
if (mail($to, $subject, $body, $headers)) {
    echo "Email enviado com sucesso.";
} else {
    echo "Falha ao enviar o email.";
}*/

$name    = $_POST["name"];
$Email   = $_POST["email"];
$subject = $_POST["subject"];
$From    = "sctheusmsc@gmail.com";

$Headers  = "MIME-Version: 1.0\r\n";
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
}
?>