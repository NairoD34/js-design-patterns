class Produit {
    constructor() {
      this.nom = '';
      this.grade = '';
      this.categorie = null;
      this.marque = null;
      this.ingredients = [];
      this.allergenes = [];
      this.additifs = [];
    }
  }
  class Categorie {
    constructor(nom) {
      this.nom = nom;
    }
  }
  
  class Marque {
    constructor(nom) {
      this.nom = nom;
    }
  }
  
  class Ingredient {
    constructor(nom, qteMilligramme) {
      this.nom = nom;
      this.qteMilligramme = qteMilligramme;
    }
  }
  
  class Allergene {
    constructor(nom, qteMilligramme) {
      this.nom = nom;
      this.qteMilligramme = qteMilligramme;
    }
  }
  
  class Additif {
    constructor(nom, qteMilligramme) {
      this.nom = nom;
      this.qteMilligramme = qteMilligramme;
    }
  }

  class ProduitBuilder {
    constructor() {
      this.produit = new Produit();
    }
  
    setNom(nom) {
      this.produit.nom = nom;
      return this;
    }
  
    setGrade(grade) {
      this.produit.grade = grade;
      return this;
    }
  
    setCategorie(nomCategorie) {
      this.produit.categorie = new Categorie(nomCategorie);
      return this;
    }
  
    setMarque(nomMarque) {
      this.produit.marque = new Marque(nomMarque);
      return this;
    }
  
    addIngredient(nom, qteMilligramme) {
      this.produit.ingredients.push(new Ingredient(nom, qteMilligramme));
      return this;
    }
  
    addAllergene(nom, qteMilligramme) {
      this.produit.allergenes.push(new Allergene(nom, qteMilligramme));
      return this;
    }
  
    addAdditif(nom, qteMilligramme) {
      this.produit.additifs.push(new Additif(nom, qteMilligramme));
      return this;
    }
  
    build() {
      return this.produit;
    }
  }

  const produit = new ProduitBuilder()
  .setNom('Nutella')
  .setGrade('B')
  .setCategorie('Pâte à tartiner')
  .setMarque('Ferrero')
  .addIngredient('Sucre', 4500)
  .addIngredient('Huile de palme', 3000)
  .addAllergene('Noisettes', 250)
  .addAdditif('E322', 20)
  .build();

console.log(produit.ingredients);