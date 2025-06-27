
const TypeElement = Object.freeze({
  INGREDIENT: 'INGREDIENT',
  ALLERGENE: 'ALLERGENE',
  ADDITIF: 'ADDITIF',
});


const Unite = Object.freeze({
  MICRO_GRAMMES: 'µg',
  MILLI_GRAMMES: 'mg',
});


class Element {
  constructor(nom, valeur, unite) {
    this.nom = nom;
    this.valeur = valeur;
    this.unite = unite;
  }
}


class Ingredient extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}

class Allergene extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}

class Additif extends Element {
  constructor(nom, valeur, unite) {
    super(nom, valeur, unite);
  }
}


class ElementFactory {
  static creerElement(type, nom, valeur, unite) {
    if (!Object.values(Unite).includes(unite)) {
      throw new Error("Unité non reconnue. Utilisez l'énumération Unite.");
    }
    switch (type) {
      case TypeElement.INGREDIENT:
        return new Ingredient(nom, valeur, unite);
      case TypeElement.ALLERGENE:
        return new Allergene(nom, valeur, unite);
      case TypeElement.ADDITIF:
        return new Additif(nom, valeur, unite);
      default:
        throw new Error("Type d'élément inconnu");
    }
  }
}


const sucre = ElementFactory.creerElement(TypeElement.INGREDIENT, 'Sucre', 10, Unite.MILLI_GRAMMES);
const gluten = ElementFactory.creerElement(TypeElement.ALLERGENE, 'Gluten', 500, Unite.MICRO_GRAMMES);
const e330 = ElementFactory.creerElement(TypeElement.ADDITIF, 'E330', 100, Unite.MICRO_GRAMMES);

console.log(sucre);    
console.log(gluten);   
console.log(e330);     
