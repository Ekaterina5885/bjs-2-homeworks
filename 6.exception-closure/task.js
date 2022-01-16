// Задача №1. Форматтер чисел

  function parseCount(value) {
    const result = Number.parseInt(value);
       if(isNaN(result)) {
           throw new Error("Невалидное значение")
       } 
           return result;
    };
    
    function validateCount(value) {
        try {
        return parseCount(value);
        } catch (error) {
           return error;
        }
    };
    
  // Задача №2. Треугольник
    class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error('Треугольник с такими сторонами не существует')
      }
    };

    getPerimeter() {
      return this.a + this.b + this.c;
    };

    getArea() {
      const value = this.getPerimeter() / 2;
      const s = Math.sqrt(value * (value - this.a) * (value - this.b) * (value - this.c));
      return Number(s.toFixed(3));
    }
  };
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
        getArea() {
          return 'Ошибка! Треугольник не существует';
        },
        getPerimeter() {
          return 'Ошибка! Треугольник не существует';
        },
      }
    }
  };