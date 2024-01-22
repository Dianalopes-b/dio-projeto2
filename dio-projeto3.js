class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
      switch (this.tipo) {
        case "Mago":
          ataque = "usou magia"
          break
        case "Guerreiro":
          ataque = "usou espada"
          break 
        case "Arqueiro":
          ataque = "usou arco e flecha"
          break
          
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const heroi = new Heroi("Toge", 18, "Arqueiro")
  heroi.atacar()
  
  const heroi2 = new Heroi("Diana", 25, "Mago")
  heroi2.atacar()