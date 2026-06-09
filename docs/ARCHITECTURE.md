# Legend Booking — Frontend Architecture

## Overview

Frontend построен на layered architecture для booking-системы жилого комплекса.

Основная идея:
- pages → маршруты
- widgets → переиспользуемые UI-блоки
- shared → базовые компоненты и утилиты
- app → инфраструктура (router, providers, layouts)

---

## Structure

- src/
  - app/
    - router/
    - providers/
    - layouts/
      - AppLayout.tsx
      - GuestLayout.tsx
      - OwnerLayout.tsx

  - pages/
    - search/
      - SearchPage.tsx
    - bookings/
    - owner/

  - widgets/
    - search-bar/
      - SearchBar.tsx
      - fields/
        - DateField.tsx
        - GuestsField.tsx
        - PropertyTypeField.tsx
    - filters/
    - apartment-grid/
    - nav/
      - MainNav.tsx
      - OwnerNav.tsx

---
## Pages Layer

Pages = маршруты приложения.

### Examples:
- `/search` → SearchPage (главная страница гостя)
- `/bookings` → история бронирований
- `/owner/*` → кабинет собственника

Pages НЕ содержат сложную UI-логику, только композицию widgets.

---

## Widgets Layer

Widgets = крупные UI-блоки с бизнес-логикой.

### Examples:

#### SearchBar
Отвечает за ввод параметров поиска:
- даты (check-in / check-out)
- количество гостей
- тип апартаментов

#### Nav
- MainNav → для гостя и авторизованного пользователя
- OwnerNav → для кабинета собственника

#### ApartmentGrid
- отображение списка доступных квартир

Widgets могут использовать shared UI и собственные fields.

---

## Fields (внутри widgets)

Fields = атомарные элементы формы.

### Examples:
- DateField
- GuestsField
- PropertyTypeField

Каждое поле:
- имеет свою локальную логику
- может содержать popover / dropdown / picker
- не зависит от других полей

---

## Shared Layer

Reusable UI и утилиты.

### Contains:
- Button
- Input
- Badge
- utility hooks
- helper functions

Shared НЕ содержит бизнес-логики.

---

## App Layer

Инфраструктура приложения.

### Contains:
- Router configuration
- Providers (auth, query, theme)
- Layout composition

---

## Layout Strategy

- GuestLayout → search + browsing
- OwnerLayout → dashboard
- AppLayout → base shell

Layouts подключают Nav и общий каркас UI.

---

## State Strategy

- UI state → local state inside widgets
- Search state → URL params or controlled state
- Auth state → provider (global context)

Global state использовать минимально.

---

## Design Principles

- UI разбит по уровням: page → widget → field
- Нет “feature/” слоя (он заменён widgets/pages)
- Максимальная переиспользуемость UI
- Логика ближе к UI, а не в глобальном store

---

## Current Focus

- SearchPage (guest entry point)
- SearchBar (filters + input logic)
- ApartmentGrid (results rendering)

---

## Goal

Создать систему поиска и бронирования уровня Airbnb:
- быстрый поиск
- понятные фильтры
- масштабируемая архитектура под роли (guest/owner)
