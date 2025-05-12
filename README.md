# 🚀 Запуск frontend части проекта

Полнофункциональное SPA-приложение на React с маршрутизацией, формами, защищёнными маршрутами, валидацией и интеграцией с API. Проект построен на Vite, Zustand и React Router DOM, с полной поддержкой ESLint, Prettier, Husky и тестов.

Чтобы запустить проект на локальной машине, выполните следующие шаги:

1. **Клонируйте репозиторий:**

    ```bash
    git clone git@github.com:Nepetrov7/online-store-frontend.git
    ```

2. **Перейдите в директорию проекта:**

    ```bash
    cd online-store-frontend
    ```

3. **Установите зависимости:**

    ```bash
    npm install
    ```

4. **Инициализируйте Husky (один раз):**

    ```bash
    npx husky install
    ```

5. **Запустите локальный сервер разработки:**

    ```bash
    npm run dev
    ```

6. **Переключиться на ветку:**

    ```bash
    git checkout -b minor/вашНикGithub
    ```

7. **Форматирование и линтинг:**

    ```bash
    npm run format   # Prettier
    npm run lint     # ESLint
    ```

8. **Запустите тесты:**

    ```bash
    чуть позже будет
    ```

9. **Проверьте работу приложения:**

    Откройте в браузере http://127.0.0.1:5173

## 🧪 Pre-commit хук

Перед каждым коммитом автоматически выполняются:

- форматирование файлов через Prettier

- линтинг через ESLint

## 📁 Основные технологии

- React 19

- Vite

- React Router DOM v7

- Zustand (управление состоянием)

- Zod (валидация форм)

- Axios (запросы к api)

- ESLint + Prettier + Husky + lint-staged

## 👤 Авторы

Команда "Слизерин"

[GitHub](https://github.com/Nepetrov7/online-store-frontend) репа

## 📄 Лицензия

Этот проект лицензирован под лицензией MIT.
