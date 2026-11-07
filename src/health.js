/**
 * Определяет статус здоровья персонажа на основе его текущего значения.
 * @param {Object} character - Объект персонажа.
 * @param {string} character.name - Имя персонажа.
 * @param {number} character.health - Текущее здоровье (от 0 до 100).
 * @returns {'healthy'|'wounded'|'critical'} Статус здоровья.
 */
export function defineHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }

  if (character.health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
