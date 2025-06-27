// Définition de l'énumération des types d'éléments
const TypeElement = Object.freeze({
  INGREDIENT: 'INGREDIENT',
  ALLERGENE: 'ALLERGENE',
  ADDITIF: 'ADDITIF',
});

// Définition de l'énumération des unités
const Unite = Object.freeze({
  MICRO_GRAMMES: 'µg',
  MILLI_GRAMMES: 'mg',
});

// Classe mère Element
class Element {
  constructor(nom, valeur, unite) {
    this.nom = nom;
    this.valeur = valeur;
    this.unite = unite;
  }
}

// Sous-classes
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

// Factory
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

// Exemples d'utilisation
const sucre = ElementFactory.creerElement(TypeElement.INGREDIENT, 'Sucre', 10, Unite.MILLI_GRAMMES);
const gluten = ElementFactory.creerElement(TypeElement.ALLERGENE, 'Gluten', 500, Unite.MICRO_GRAMMES);
const e330 = ElementFactory.creerElement(TypeElement.ADDITIF, 'E330', 100, Unite.MICRO_GRAMMES);

console.log(sucre);    // Ingredient { nom: 'Sucre', valeur: 10, unite: 'mg' }
console.log(gluten);   // Allergene { nom: 'Gluten', valeur: 500, unite: 'µg' }
console.log(e330);     // Additif { nom: 'E330', valeur: 100, unite: 'µg' }
