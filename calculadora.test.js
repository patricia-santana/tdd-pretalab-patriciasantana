const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calc = new Calculadora()

    expect(calc.soma(5,5)).toEqual(10)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calc = new Calculadora()

    expect(calc.subt(5,5)).toEqual(0)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calc = new Calculadora()

    expect(calc.multi(5,5)).toEqual(25)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calc = new Calculadora()

    expect(calc.div(5,5)).toEqual(1)
  })
})