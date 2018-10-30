class DeckofCards {
    constructor() {
  
      this.decks = [];
  
      const cards = ['Hearts', 'Spades', 'Clubs', 'Diamonds', 'Ace', 'Jack', 'Queen', 'King'];
      const cardvalues = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  
      for (let suit in cards) {
        for (let value in cardvalues) {
          this.decks.push(` ${cardvalues[value]} of ${cards[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { decks } = this;
      let m = decks.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [decks[m], decks[i]] = [decks[i], decks[m]];
      }
  
      return this;
    }
  
    deal(){
      return this.decks.pop();
    }
  }
  
  const decksone = new DeckofCards();