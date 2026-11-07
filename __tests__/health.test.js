import { defineHealthStatus } from '../src/health';

describe('defineHealthStatus', () => {
  it('должен возвращать "healthy", если здоровье больше 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(defineHealthStatus(character)).toBe('healthy');
  });

  it('должен возвращать "wounded", если здоровье равно 50 (нижняя граница healthy)', () => {
    const character = { name: 'Воин', health: 50 };
    expect(defineHealthStatus(character)).toBe('wounded');
  });

  it('должен возвращать "wounded", если здоровье находится в диапазоне от 15 до 49', () => {
    const character = { name: 'Лучник', health: 30 };
    expect(defineHealthStatus(character)).toBe('wounded');
  });

  it('должен возвращать "wounded", если здоровье равно 15 (нижняя граница wounded)', () => {
    const character = { name: 'Разбойник', health: 15 };
    expect(defineHealthStatus(character)).toBe('wounded');
  });

  it('должен возвращать "critical", если здоровье меньше 15', () => {
    const character = { name: 'Призрак', health: 10 };
    expect(defineHealthStatus(character)).toBe('critical');
  });

  it('должен возвращать "critical", если здоровье равно 0', () => {
    const character = { name: 'Труп', health: 0 };
    expect(defineHealthStatus(character)).toBe('critical');
  });
});
