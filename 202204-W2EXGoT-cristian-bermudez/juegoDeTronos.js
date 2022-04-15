/* eslint-disable max-classes-per-file */
class Serie {
  serie = "Juego de Tronos";
}

class Personaje extends Serie {
  estado = "vivo";
  constructor(nombre, familia, edad, frase) {
    super(Serie);
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.frase = frase;
  }

  decirFrase(frase) {
    this.frase = frase;
    return this.frase;
  }
}

class Rey extends Personaje {
  constructor(tiempoReinando) {
    super(Personaje);
    this.tiempoReinando = tiempoReinando;
  }
}

class Luchador extends Personaje {
  constructor(arma, destreza) {
    super(Personaje);
    this.arma = arma;
    this.destreza = destreza;
  }

  destrezaLuchador(destreza) {
    if (this.destreza >= 0 || this.destreza <= 10) {
      this.destreza = destreza;
    }
    this.destreza = "No valido";
  }
}

class Asesor extends Personaje {
  constructor(aQuien) {
    super(Personaje);
    this.aQuien = aQuien;
  }

  asesorar() {}
}

const JonPruebas = new Personaje("Jon", "Stark", 20);
