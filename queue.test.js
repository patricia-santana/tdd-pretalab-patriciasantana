const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue.isEmpty()).toBe(true)
  })
  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.add(1);
    queue.add(3);
    queue.add(0);
    queue.add(7);

    expect(queue.size()).toEqual(4);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.add(1);
    
    expect(queue.isEmpty()).toBe(false);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(1);
    queue.add(3);

    expect(queue.first()).toBe(1);
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(1);
    queue.add(3);
    queue.add(0);
    queue.add(7);

    //tamanho antes de remover item
    expect(queue.size()).toBe(4);

    //remoção item
    expect(queue.remove()).toBe(1);

    //tamanho depois de remover item
    expect(queue.size()).toBe(3);
  })
})