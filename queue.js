class Queue {
  elements
  constructor(){
    this.elements = []
  }

  // Verifica se a fila existe e está vazia
  isEmpty() {
    return this.elements.length === 0;
  }

  //adiciona
  add(element){
    return this.elements.push(element);
  }

  //remove item frente 
  remove(){
    if (this.isEmpty()) {
      return "Fila está vazia";
    }
    return this.elements.shift();
  }

  //retorna item 1 
  first(){
    if (this.isEmpty()) {
      return "Fila está vazia";
    }
    return this.elements[0];
  }

  size(){
    if (this.isEmpty()) {
      return "Fila está vazia";
    }
    return this.elements.length;
  }
}

module.exports = Queue