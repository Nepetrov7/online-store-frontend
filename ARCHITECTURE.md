# 🧱 Архитектура проекта

Этот проект построен по принципам **feature-sliced** архитектуры, с прицелом на масштабируемость, изоляцию ответственности и удобство поддержки.

---

## 📁 Структура каталогов

```
src/
├── app/          # Точка входа, маршруты, провайдеры, Zustand store
├── pages/        # Верхнеуровневые страницы (сборка из features/widgets)
├── features/     # Изолированные фичи (логин, фильтр, поиск)
├── entities/     # Модели бизнес-сущностей (User, Product)
├── widgets/      # Сложные UI-блоки, собирающие features/entities
├── shared/       # Общие компоненты, хуки, утилиты, типы, стили
```

---

## ⛔ Правила и ограничения

### `shared/`
- ✅ Можно использовать везде
- ❌ Нельзя импортировать `features/`, `entities/`, `widgets/`
- Примеры: `Button`, `useDebounce`, `apiClient`, `logo.svg`

---

### `entities/`
- ✅ Может использовать `shared/`
- ❌ Не может использовать `features/` или `widgets/`
- Примеры: `User`, `Product`, `CartItem`

---

### `features/`
- ✅ Может использовать `shared/`, `entities/`
- ❌ Не может использовать другие `features/`
- ❌ Не может использовать `widgets/`
- Примеры: `auth`, `search`, `addToCart`

---

### `widgets/`
- ✅ Можно использовать `features/`, `entities/`, `shared/`
- ❌ Нельзя использовать в `features/`
- Примеры: `Header`, `CartPanel`

---

### `pages/`
- Только композиция `widgets` + `features` + `entities`
- ❌ Никакой логики, только сборка

---

### `app/`
- Только базовая инфраструктура (Router, Providers, Store)
- ❌ Никакой UI-логики или компонентов

---

## 🔗 Пример зависимостей

```
shared → можно везде
entities → используют только shared
features → используют shared + entities
widgets → используют shared + features + entities
pages → используют widgets/features/entities
app → точка входа, не содержит бизнес-логики
```

---

## 📂 Папка `public/`

- Для `favicon.ico`, `robots.txt`, статических картинок, к которым нужен прямой URL
- ❌ Не импортируется в JS (используйте абсолютные пути `/logo.png`)

---

## ✅ Рекомендуемые пути

| Назначение              | Где хранить                   |
|--------------------------|-------------------------------|
| favicon/logo             | `public/`                     |
| UI иконки                | `shared/assets/`              |
| Фичевые изображения      | `features/<feature>/assets/`  |
| Переиспользуемый компонент | `shared/components/`        |
| Один экран (страница)    | `pages/`                      |

---

## 🧪 Тесты

- Юнит-тесты рядом с фичами (`*.test.jsx`) или в `tests/`
- Используется Vitest / Jest
- Pre-commit хук запускает тесты, линтер и форматирование
