// ВАЖНО: импортируем функцию getLevel ПОСЛЕ того, как настроим систему моков
// Но так как import статический, мы используем динамический import внутри describe

describe('getLevel', () => {
  let getLevel;
  let fetchDataMock;

  beforeAll(async () => {
    // Подменяем модуль ДО того, как он будет импортирован
    await jest.doMock('../src/http', () => ({
      __esModule: true,
      default: jest.fn()
    }));

    // Теперь импортируем нашу функцию. Она подхватит мокнутый http
    const module = await import('../src/level');
    getLevel = module.getLevel;

    // Получаем доступ к мок-функции через динамический импорт http
    const httpModule = await import('../src/http');
    fetchDataMock = httpModule.default;
  });

  beforeEach(() => {
    fetchDataMock.mockClear();
  });

  it('возвращает уровень при успехе', () => {
    fetchDataMock.mockImplementation(() => ({
      status: 'ok',
      level: 10
    }));

    expect(getLevel(1)).toBe('Ваш текущий уровень: 10');
    expect(fetchDataMock).toHaveBeenCalledWith('https://server/user/1');
  });

  it('возвращает ошибку если статус не ok', () => {
    fetchDataMock.mockImplementation(() => ({
      status: 'error',
      level: 0
    }));

    expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
    expect(fetchDataMock).toHaveBeenCalledWith('https://server/user/2');
  });

  it('возвращает сообщение об ошибке, если fetchData бросает исключение', () => {
    fetchDataMock.mockImplementation(() => {
      throw new Error('Network Error');
    });

    expect(getLevel(3)).toBe('Информация об уровне временно недоступна');
    expect(fetchDataMock).toHaveBeenCalledWith('https://server/user/3');
  });
});
