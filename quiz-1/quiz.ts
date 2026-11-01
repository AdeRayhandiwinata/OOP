// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
  HP: number;
  speed: number;
  positionX: number;
  positionY: number;
  invincible: boolean;
  currentForm: "mario" | "super mario" | "fire mario";

  constructor(
    HP: number = 1,
    speed: number = 5,
    currentForm: "mario" | "super mario" | "fire mario" = "mario",
    invincible: boolean = false,
    positionX: number = 0,
    positionY: number = 0,
  ) {
    this.HP = HP;
    this.speed = speed;
    this.currentForm = currentForm;
    this.invincible = invincible;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  // 1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1
  superMushroom(): void {
    this.currentForm = "super mario";
    this.HP += 1;
    console.log(
      `Mario mengambil SuperMushroom Form: ${this.currentForm}, HP: ${this.HP}`,
    );
  }

  // 2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1, dan dapat menembakkan bola api
  fireFlower(): void {
    this.currentForm = "fire mario";
    this.HP += 1;
    console.log(
      `Mario mengambil FireFlower Form: ${this.currentForm}, HP: ${this.HP}`,
    );
  }

  shootFireball(): void {
    if (this.currentForm === "fire mario") {
      console.log("Fire Mario menembakkan bola api");
    } else {
      console.log("Mario belum berada di form 'fire mario', tidak bisa menembakkan bola api.");
    }
  }

  // 3. SuperStar (Bintang): Mario kebal terhadap serangan
  superStar(): void {
    this.invincible = true;
    console.log(`Mario mengambil SuperStar Invincible: ${this.invincible}`);
  }

  // 4. Diserang: HP - 1 dan kembali ke form 'mario'. Jika sedang kebal, serangan tidak berpengaruh
  getAttacked(): void {
    if (this.invincible) {
      console.log("Mario sedang kebal (invincible) Serangan tidak berpengaruh.");
      return;
    }
    this.HP -= 1;
    this.currentForm = "mario";
    console.log(
      `Mario diserang, HP sekarang: ${this.HP}, Form kembali menjadi: ${this.currentForm}`,
    );
  }

  // 5. Bergerak ke kanan: positionX + speed
  moveRight(): void {
    this.positionX += this.speed;
    console.log(`Mario bergerak ke kanan. Position X: ${this.positionX}`);
  }

  // 6. Bergerak ke kiri: positionX - speed
  moveLeft(): void {
    this.positionX -= this.speed;
    console.log(`Mario bergerak ke kiri. Position X: ${this.positionX}`);
  }

  // Method yang akan di-override (Polymorphism)
  attack(): void {
    console.log(`Mario (${this.currentForm}) menyerang dengan lompatan biasa`);
  }

  getStatus(): void {
    console.log(
      `[Status] Form: ${this.currentForm} | HP: ${this.HP} | Speed: ${this.speed} | Pos: (${this.positionX}, ${this.positionY}) | Invincible: ${this.invincible}`,
    );
  }
}

// Inheritance & Polymorphism
// Child Class 1: SuperMario mewarisi Mario
class SuperMario extends Mario {
  constructor(
    HP: number = 1,
    speed: number = 5,
    invincible: boolean = false,
    positionX: number = 0,
    positionY: number = 0,
  ) {
    super(HP + 1, speed, "super mario", invincible, positionX, positionY);
  }

  // Polymorphism: override method attack()
  attack(): void {
    console.log(
      `Super Mario (${this.currentForm}) menyerang dengan pukulan super dan menghancurkan bata`,
    );
  }
}

// Child Class 2: FireMario mewarisi Mario
class FireMario extends Mario {
  constructor(
    HP: number = 1,
    speed: number = 5,
    invincible: boolean = false,
    positionX: number = 0,
    positionY: number = 0,
  ) {
    super(HP + 1, speed, "fire mario", invincible, positionX, positionY);
  }

  // Polymorphism: override method attack() untuk menembakkan bola api
  attack(): void {
    this.shootFireball();
  }
}

// Objek dan simulasi
console.log("1. Object Mario Default & Pergerakan");
const mario = new Mario();
mario.getStatus();
mario.moveRight();
mario.moveRight();
mario.moveLeft();

console.log("\n2. Mengambil Item (SuperMushroom, FireFlower, SuperStar)");
mario.superMushroom();
mario.fireFlower();
mario.shootFireball();

console.log("\n3. Diserang Saat Normal vs Saat Kebal (SuperStar)");
mario.getAttacked();
mario.superStar();
mario.getAttacked();

console.log("\n4. Inheritance & Polymorphism");
const superMario = new SuperMario(mario.HP);
const fireMario = new FireMario(superMario.HP);

superMario.getStatus();
superMario.attack();

fireMario.getStatus();
fireMario.attack();