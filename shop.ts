
//parent class
abstract class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}

  abstract getInfo(): string;
}


class Electronics extends Product {
  constructor(id: number, name: string, price: number, public brand: string) {
    super(id, name, price);
  }

  getInfo(): string {
    return `Electronics - ${this.name} by ${this.brand}: $${this.price}`;
  }
}


class Clothing extends Product {
  constructor(id: number, name: string, price: number, public size: string) {
    super(id, name, price);
  }

  getInfo(): string {
    return `Clothing - ${this.name}, Size: ${this.size}: $${this.price}`;
  }
}

class Cart {
  private items: Product[] = [];

  addProduct(product: Product): void {
    this.items.push(product);
    console.log(`${product.name} added to the cart.`);
  }

  displayCart(): void {
    console.log("\n🛒 Cart Contents:");
    this.items.forEach((item) => console.log(item.getInfo()));
    console.log(`Total: $${this.getTotal()}`);
  }

  private getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const cart = new Cart();

const laptop = new Electronics(1, "Laptop", 1200, "Dell");
const tshirt = new Clothing(2, "T-Shirt", 25, "M");

cart.addProduct(laptop);
cart.addProduct(tshirt);

cart.displayCart();
