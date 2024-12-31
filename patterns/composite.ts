abstract class Product {
  abstract getName(): string;
  abstract getPrice(): number;

  isBox(): boolean {
    return false;
  }
}

class Box extends Product {
  private products: Product[];

  constructor(products: Product[]) {
    super();
    this.products = products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
  removeProduct(product: Product) {
    this.products = this.products.filter((p) => p !== product);
  }

  getName(): string {
    return this.products.map((product) => product.getName()).join(", ");
  }

  getPrice(): number {
    return this.products.reduce((acc, product) => acc + product.getPrice(), 0);
  }

  isBox(): boolean {
    return true;
  }
}
class Phone extends Product {
  getName(): string {
    return "Phone";
  }

  getPrice(): number {
    return 100;
  }
}
class Computer extends Product {
  getName(): string {
    return "Computer";
  }

  getPrice(): number {
    return 200;
  }
}
class Laptop extends Product {
  getName(): string {
    return "Laptop";
  }

  getPrice(): number {
    return 300;
  }
}
class Monitor extends Product {
  getName(): string {
    return "Monitor";
  }

  getPrice(): number {
    return 400;
  }
}
 

const products: Product[] = [
  new Phone(),
  new Computer(),
  new Box([new Phone(), new Computer()]),
];

export default function ClientCode() {
  for (const product of products) {
    console.log(
      `${product.getName()} costs ${product.getPrice()} and is ${
        product.isBox() ? "a box" : "not a box"
      }`
    );
  }
}

// Example usage

/**
* The inventory class is a composite of boxes. we also add nested boxes to the inventory.
*/
 const inventory: Box = new Box([]); // inventory with no products
inventory.addProduct(new Phone()) // Add a phone to the inventory
inventory.addProduct(new Computer()) // Add a computer to the inventory
/**
* The inventory class is a composite. we also add nested boxes to the inventory.
*/
inventory.addProduct(new Box([new Monitor(), new Laptop()])); // Add a box to the inventory
// new we can get inventory price easily
console.log(inventory.getPrice()); // 100 + 200 + 300 + 400 = 1000
// new we can get inventory name easily
console.log(inventory.getName()); // Phone, Computer, Laptop, Monitor
