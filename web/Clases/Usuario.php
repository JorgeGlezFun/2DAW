<?php

class Usuario 
{
    private string $login;
    private string $password;
    private string $nombreClase = 'Usuario';

    public function __construct($login, $password)
    {
        $this-> login = $login;
        $this-> password = $password;
    }

    public function getLogin(){
        return $this->login;
    }

    public function getPassword(){
        return $this->password;
    }

    public function getNombreClase(){
        return $this-> nombreClase;
    }
}