// Classe pour le produit
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // Classe pour l'élément du panier
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Méthode pour calculer le prix total de l'article
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // Classe pour le panier
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Méthode pour obtenir le total des articles dans le panier
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Méthode pour ajouter des articles au panier
    addItem(product, quantity) {
      // Vérifier si l'article existe déjà dans le panier
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
      }
    }
  
    // Méthode pour supprimer des éléments du panier
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Méthode pour afficher les articles du panier
    displayItems() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
      });
    }
  }
  
 
  // Creation des produits
  const product1 = new Product(1, 'Laptop', 999.99);
  const product2 = new Product(2, 'Smartphone', 499.99);
  const product3 = new Product(3, 'Tablet', 299.99);
  
  // Créer un panier d'achat
  const cart = new ShoppingCart();
  
  // Ajouter des articles au panier
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  
  // Afficher le panier
  console.log('Panier après ajout d\'articles:');
  cart.displayItems();
  
  // Supprimer un article du panier
  cart.removeItem(2);
  
  // Afficher le panier après suppression
  console.log('Panier après suppression de l\'article avec ID 2:');
  cart.displayItems();
  