<?php

namespace Empresa;

class Cliente extends \Usuario
{
    private string $dni;
    private string $nombre;

    public function __construct($dni, $nombre, $login, $password)
    {
        parent::__construct($login, $password);
        $this-> dni = $dni;
        $this-> nombre = $nombre;
    }

    public function getDni(){
        return $this->dni;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function setDni($dni){
        return $this->dni = $dni;
    }

    public function setNombre($nombre){
        return $this->nombre = $nombre;
    }
}