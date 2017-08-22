export default class GameCard {

  static CLUBS = '♣';
  static DIAMONDS = '♦';
  static HEARTS = '♥';
  static SPADES = '♠';

  static RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

  constructor(symbol, rank, revealed = true, flippable = true) {
    this.symbol = symbol;
    this.rank = rank;
    this.revealed = revealed;
    this.flippable = flippable;
  }

  toggleFlippable(flippable) {
    this.flippable = flippable;
  }

  get key() {
    return ''.concat(this.rank).concat(this.symbol);
  }

}
