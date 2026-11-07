# Health Status Checker

[![Node.js CI](https://github.com/AlexeyZinichev/unit-tests/actions/workflows/nodejs.yml/badge.svg)](https://github.com/AlexeyZinichev/unit-tests/actions/workflows/nodejs.yml)

> Функция для определения статуса здоровья игрового персонажа.

## Описание

Функция `defineHealthStatus(character)` принимает объект персонажа и возвращает строку-статус на основе его здоровья:

* **healthy** — здоровье больше 50.
* **wounded** — здоровье от 15 до 50 (включительно).
* **critical** — здоровье меньше 15.

## Технологический стек

* Node.js
* Jest (тестирование)
* ESLint (линтер)

## Запуск проекта

```bash
npm install
npm test

*(Обратите внимание: после слова ISC идет невидимый перенос строки).*

### Ваши действия:
1. Вставьте этот текст в `README.md`.
2. Сохраните файл.
3. Выполните в терминале:
```bash
git add README.md
git commit --amend --no-edit
git push --force-with-lease

## Функционал

Проект состоит из двух основных модулей:

1.  **health.js**: Определение текстового статуса (`healthy`, `wounded`, `critical`) на основе числового значения здоровья.
2.  **sort.js**: Сортировка массива персонажей по здоровью в порядке убывания для отображения интерфейса "битвы".

Функция `sortHeroesByHealth` возвращает **новый** отсортированный массив, не изменяя (не мутируя) исходные данные.
