import { sortHeroesByHealth } from '../src/sort';

describe('sortHeroesByHealth', () => {
  it('должен сортировать массив от большего здоровья к меньшему', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortHeroesByHealth(input);

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    // Проверка структуры (Deep Equality)
    expect(result).toEqual(expected);

    // Проверка того, что это разные объекты в памяти (сортировка создала новый массив)
    expect(result).not.toBe(input);
  });

  it('должен возвращать пустой массив, если передан пустой массив', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  it('должен корректно работать, если у всех героев одинаковое здоровье (стабильность не требуется, важен порядок убывания)', () => {
    const input = [
      { name: 'A', health: 50 },
      { name: 'B', health: 50 },
      { name: 'C', health: 50 },
    ];

    const result = sortHeroesByHealth(input);
    const expected = [
      { name: 'A', health: 50 },
      { name: 'B', health: 50 },
      { name: 'C', health: 50 },
    ];

    expect(result).toEqual(expected);
  });

  it('должен сортировать массив из одного элемента', () => {
    const input = [{ name: 'Одинокий', health: 42 }];
    expect(sortHeroesByHealth(input)).toEqual([{ name: 'Одинокий', health: 42 }]);
  });

  it('исходный массив не должен изменяться (отсутствие мутации)', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    const inputCopy = [...input]; // Делаем слепок до сортировки

    sortHeroesByHealth(input);

    expect(input).toEqual(inputCopy);
  });
});
