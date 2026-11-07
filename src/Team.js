export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((char) => {
      try {
        this.add(char);
      } catch (e) {
        // Намеренно пусто: игнорируем дубликаты по условию
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
