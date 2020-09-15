import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private dataHeroes:Heroe[] = [
    {
      name: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      image: "aquaman.png",
      release: "1941-11-01",
      familyId:"DC"
    },
    {
      name: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      image: "batman.png",
      release: "1939-05-01",
      familyId:"DC"
    },
    {
      name: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      image: "daredevil.png",
      release: "1964-01-01",
      familyId: "Marvel"
    },
    {
      name: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      image: "hulk.png",
      release: "1962-05-01",
      familyId:"Marvel"
    },
    {
      name: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      image: "linterna-verde.png",
      release: "1940-06-01",
      familyId: "DC"
    },
    {
      name: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      image: "spiderman.png",
      release: "1962-08-01",
      familyId: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      image: "wolverine.png",
      release: "1974-11-01",
      familyId: "Marvel"
    },
    {
      name: "Iron Man",
      bio: "Fue uno de los héroes de Marvel que inició la revolución en el mundo de los cómics. Junto a Ant-Man (El Hombre Hormiga), El Poderoso Thor, La Avispa y El Increíble Hulk, fundó Los Vengadores, erigiéndose como un icono de Marvel.",
      image: "iron_man.png",
      release: "1970-11-01",
      familyId: "Marvel"
    },
    {
      name: "Ant-Man",
      bio: "Scott Lang fue el primer personaje legado del MCU, pues a pesar de que su debut se dio tras los eventos de Age of Ultron, durante la película descubrimos que ya había existido un Hombre Hormiga en la figura de Hank Pym.La idea de poner al segundo Ant-Man dentro del MCU se criticó durante mucho tiempo, para fortuna de todo el mundo el resultado no fue un problema para los lectores e incluso se tomó como punto de partida para nuevas historias de Lang y Pym en los cómics.",
      image: "no-disponible.png",
      release: "1970-11-01",
      familyId: "Marvel"
    }
  ];

  constructor() {
    console.log('service listo para usarser');
  }

  getHeroes():Heroe[] {
    return this.dataHeroes;
  }

  getHeroe(idx:number) {
    return this.dataHeroes[idx];
  }

  buscarHeroes(findText:string):Heroe[] {

    let heroesArray:Heroe[] = [];
    findText = findText.toUpperCase();

    for (let i = 0; i < this.dataHeroes.length; i++) {
      let heroe = this.dataHeroes[i];
      let name = heroe.name.toUpperCase();
      if (name.indexOf(findText) >= 0) {
        heroe.idx = i;
        heroesArray.push(heroe);
      }
    }
    return heroesArray;
  }

}

export interface Heroe {
  name    : string;
  bio     : string;
  image   : string;
  release : string;
  familyId: string;
  idx?:     number
}
