## 🧮 Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido com **fins educacionais**, visando a **prática de estruturas básicas da programação com JavaScript**. A lógica consiste em calcular o saldo de vitórias de um herói e determinar seu nível em partidas ranqueadas. Aplica fundamentos como **variáveis, funções e estruturas de decisão.**

---

## ⚙ Conceitos Abordados

- Criação, declaração, armazenamento e uso de variáveis
- Funções
- Estruturas condicionais (`if`, `else if` e `else`)
- Lógica de programação aplicada a classificações

---

## 🧠 Lógica de Classificação

| Vitórias                    | Nível     |
|-----------------------------|-----------|
| Menor que 10                | Ferro     |
| Entre 11 e 20               | Bronze    |
| Entre 21 e 50               | Prata     |
| Entre 51 e 80               | Ouro      |
| Entre 81 e 90               | Diamante  |
| Entre 91 e 100              | Lendário  |
| 101 ou mais                 | Imortal   |

---

## 🖥️ Exemplo de uso

```JavaScript

let victoryBalance = amountWinsDefeats(351, 151)
let level = ""

function amountWinsDefeats(victory, defeat){
    return victory - defeat
}

if (victoryBalance <= 10) {
    level = "Iron"
} else if (victoryBalance <= 20) {
    level = "Bronze"
} else if (victoryBalance <= 50) {
    level = "Silver"
} else if (victoryBalance <= 80) {
    level = "Gold"
} else if (victoryBalance <= 90) {
    level = "Diamond"
} else if (victoryBalance <= 100) {
    level = "Legendary"
} else {
    level = "Immortal"
}

console.log("The hero has a balance of " + victoryBalance + " and is at " + level )

```

## 🧾 Saída Esperada

```bash

The hero has a balance of 200 and is at Immortal

```

## 📚 Tecnologias Utilizadas

* JavaScript
* Node.js

## 📂 Como Executar

1. Clone este repositório:

```

git clone https://github.com/seu-usuario/calculadora_partidas_rankeadas.git

```

2. Acesse a pasta do projeto:

```

cd calculadora_partidas_rankeadas

```

3. Execute o script:

```

python nome_do_arquivo.py

```

Feito com  💻 por **Vinicios Ruan Silva**

