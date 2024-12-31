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
