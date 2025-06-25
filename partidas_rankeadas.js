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