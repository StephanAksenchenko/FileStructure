# Пример файловой структуры проекта

## Слои:

1. **Сore** – содержит код, не привязанный к фрэймворку. Код имеет только представление о предметной области (типы, интерфейсы, и прочее).
2. **Shared** – содержит переиспользуемый код. (Компоненты, функции, классы и т.д.)
3. **Widgets** - Компоненты связанные с предметной областью
4. **Services** - модули реализующие бизнес-логику, хранение и получение данных и пр.
5. **Templates** – Композиция из Widgets и Services. (страница)
6. **App** – глобальные настройки приложения (глобальные стили, apollo client, error boundary, global context)

## Entity

Entity – каждая сущность хранится в своей папке, для порядка.

- [Entity] /
  - Entity.tsx – react component
  - Entity.module.scss – стили для компонента
  - Entity.stories.tsx – документация компонента с помощью сторибук
  - Entity.test.tsx – тесты для компонента
  - Entity.utils.ts – функции необходимые для реализации внутреннего поведения компонента (разгружаем код компонента)
  - Entity.hooks.ts – хуки используемые внутри компонента (разгружаем код компонента)

## Пример

- **Core**
  - Post
    - Post.types.ts – cущность которой будем оперировать в Widgets, Services
  - Product
    - Product.types.ts – cущность которой будем оперировать в Widgets, Services
- **Shared**

  - _Components_
    - Button кнопка может делать всё что угодно
  - _Hooks_
  - _HOCs_
  - _Utils_

- **Widgets**
  - SubscribeForm (реализуем конкретный функционал на сайте)
- **Services**
  - Order
  - Products
- **Templates**
  - Blog
    - Blog.tsx (содержит код объединяющий widgets, services)
    - Blog.utils.ts (getStaticProps, getStaticPaths, getServerSideProps)
    - Blog.{other}.{ext}
  - Products
  - ProductId
- **App**
  - Styles
