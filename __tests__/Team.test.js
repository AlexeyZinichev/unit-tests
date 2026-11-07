import Team from '../src/Team';
import Character from '../src/Character';

describe('Team', () => {
  let team;
  let hero1;
  let hero2;
  let hero3;

  beforeEach(() => {
    team = new Team();
    hero1 = new Character('Маг', 1, 100);
    hero2 = new Character('Воин', 2, 100);
    hero3 = new Character('Лучник', 3, 100);
  });

  it('должен создавать пустую команду', () => {
    expect(team.toArray()).toEqual([]);
  });

  it('метод add должен добавлять персонажа', () => {
    team.add(hero1);
    expect(team.toArray()).toEqual([hero1]);
  });

  it('метод add должен выбрасывать ошибку при дублировании', () => {
    team.add(hero1);
    expect(() => team.add(hero1)).toThrow('Персонаж уже в команде');
  });

  it('метод addAll должен добавлять несколько персонажей', () => {
    team.addAll(hero1, hero2, hero3);
    const result = team.toArray();
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([hero1, hero2, hero3]));
  });

  it('метод addAll должен игнорировать дубликаты без ошибок', () => {
    team.addAll(hero1, hero2, hero1, hero3, hero2);
    const result = team.toArray();
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([hero1, hero2, hero3]));
  });

  it('метод addAll должен работать, если в него не передали аргументы', () => {
    team.addAll();
    expect(team.toArray()).toEqual([]);
  });

  it('метод toArray должен возвращать новый массив', () => {
    team.add(hero1);
    const arr1 = team.toArray();
    const arr2 = team.toArray();
    expect(arr1).toEqual(arr2);
    expect(arr1).not.toBe(arr2);
  });
});
