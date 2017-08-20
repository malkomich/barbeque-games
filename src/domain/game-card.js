export default class GameCard {

  static CLUBS = '♣';
  static DIAMONDS = '♦';
  static HEARTS = '♥';
  static SPADES = '♠';

  constructor(symbol, rank, flippable = true, revealed = false) {
    this.symbol = symbol;
    this.rank = rank;
    this.flippable = flippable;
    this.revealed = revealed;
  }

  toggleFlippable(flippable) {
    this.flippable = flippable;
  }

  get key() {
    return ''.concat(this.rank).concat(this.symbol);
  }

}
