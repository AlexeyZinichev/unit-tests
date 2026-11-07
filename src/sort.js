/**
 * Сортирует массив персонажей по их здоровью по убыванию.
 * @param {Array<Object>} characters - Массив объектов героев.
 * @param {string} characters[].name - Имя героя.
 * @param {number} characters[].health - Здоровье героя.
 * @returns {Array<Object>} Новый отсортированный массив.
 */
export function sortHeroesByHealth(characters) {
  // Создаем копию массива, чтобы не мутировать исходные данные
  return [...characters].sort((a, b) => b.health - a.health);
}
