<?php
  include 'connection.php';

  $name = $_GET['name'];
  $mail = $_GET['email'];
  $phone = $_GET['phone'];
  $address = $_GET['address'];
  $message = $_GET['message'];

  $query = "INSERT INTO Client(Name, Mail, Phone, Address, Message) VALUES('$name','$mail','$phone','$address','$message')";

  $result = $connect->query($query);
  echo $result;
  return $result;
 ?>
