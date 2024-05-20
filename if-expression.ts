const winner = "A"

// インスパイア元のコード
// https://ja.react.dev/learn/tutorial-tic-tac-toe
// letを極力使いたくない時に考えたコード

// IIFEバージョン
// https://typescriptbook.jp/reference/functions/iife#if%E3%82%84switch%E3%81%AA%E3%81%A9%E3%82%92%E5%BC%8F%E3%81%A8%E3%81%97%E3%81%A6%E6%89%B1%E3%81%84%E3%81%9F%E3%81%84%E5%A0%B4%E5%90%88
const state = ((winner) => {
        if (winner) {
            return "Winner: " + winner;
        } else {
            return "Next player: "
        }
    })(winner)

console.log(state)

// 2分岐しかないなら素直に、三項演算子？
const state2 = winner ?
    "Winner: " + winner: "Next player: "

console.log(state2)

// letを使うパターン
let state3: string
if (winner) {
    state3 = "Winner: " + winner
} else {
    state3 = "Next player: "
}
console.log(state3)
