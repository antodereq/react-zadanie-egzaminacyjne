# Menedżer Zadań – React SPA

## Aplikacja webowa (React)

Z wykorzystaniem biblioteki React.js wykonaj aplikację typu SPA realizującą funkcję menedżera zadań z kategoriami i cykliczną zmianą statusu.

---

# Dane źródłowe

Plik `tasks.json` umieść w folderze `src/data/`.

### Struktura pojedynczego obiektu

```json
{
  "id": 1,
  "title": "Przygotować raport",
  "description": "Raport miesięczny dla działu marketingu",
  "category": "praca",
  "status": "do_zrobienia",
  "createdAt": "2025-04-10"
}
```

### Zawartość pliku `tasks.json`

```json
[
  {
    "id": 1,
    "title": "Przygotować raport miesięczny",
    "description": "Raport dla działu marketingu za marzec 2025",
    "category": "praca",
    "status": "do_zrobienia",
    "createdAt": "2025-04-10"
  },
  {
    "id": 2,
    "title": "Naprawić kran w kuchni",
    "description": "Cieknący zawór wymaga wymiany uszczelki",
    "category": "dom",
    "status": "w_trakcie",
    "createdAt": "2025-04-08"
  },
  {
    "id": 3,
    "title": "Przerobić rozdział 5 z Reacta",
    "description": "Hooki, useEffect i zarządzanie stanem",
    "category": "nauka",
    "status": "do_zrobienia",
    "createdAt": "2025-04-12"
  },
  {
    "id": 4,
    "title": "Wysłać fakturę do klienta",
    "description": "Faktura VAT za projekt strony internetowej",
    "category": "praca",
    "status": "ukonczone",
    "createdAt": "2025-04-05"
  },
  {
    "id": 5,
    "title": "Posprzątać garaż",
    "description": "Posegregować narzędzia i oddać stare rzeczy",
    "category": "dom",
    "status": "do_zrobienia",
    "createdAt": "2025-04-11"
  },
  {
    "id": 6,
    "title": "Przygotować prezentację na egzamin",
    "description": "Slajdy z podstawami Git i React",
    "category": "nauka",
    "status": "w_trakcie",
    "createdAt": "2025-04-09"
  }
]
```

### Dozwolone wartości

#### category

* `"praca"`
* `"dom"`
* `"nauka"`

#### status

* `"do_zrobienia"`
* `"w_trakcie"`
* `"ukonczone"`

---

# Założenia aplikacji

* Aplikacja składa się z minimum 3 komponentów funkcyjnych umieszczonych w osobnych plikach (np. `App`, `TaskForm`, `TaskList`, `TaskItem`).
* Do stylowania wykorzystaj Bootstrap lub własny CSS.
* Wymagane użycie klas responsywnych.
* Wszystkie dane początkowe wczytuj przy montowaniu aplikacji (`useEffect`).
* Stan aplikacji przechowuj w `useState`.
* Każda zmiana (dodanie, edycja statusu, usunięcie) musi być persystowana w `localStorage`.
* Aplikacja musi działać poprawnie po odświeżeniu przeglądarki (dane odczytywane z `localStorage`, fallback do `tasks.json`, jeśli `localStorage` jest pusty).

---

# Funkcjonalności

## Nagłówek aplikacji

```html
<h1>Menedżer Zadań</h1>
```

---

## Panel filtrów

* 3 checkboxy (kategorie):

  * Praca
  * Dom
  * Nauka

* 3 radio buttony (statusy)

Domyślnie wszystkie filtry włączone.

---

## Lista zadań

Wyświetlana warunkowo w zależności od aktywnych filtrów.

Każdy element zawiera:

* tytuł (`<h4>`)
* opis
* etykietę kategorii
* przycisk zmiany statusu
* przycisk usuwania

### Zmiana statusu

Przycisk statusu działa cyklicznie:

```text
do_zrobienia
    ↓
w_trakcie
    ↓
ukonczone
    ↓
do_zrobienia
```

### Kolor etykiety statusu

| Status       | Kolor   |
| ------------ | ------- |
| do_zrobienia | szary   |
| w_trakcie    | żółty   |
| ukonczone    | zielony |

---

## Formularz dodawania zadania

### Pola

* `title` (wymagane, min. 3 znaki)
* `description` (opcjonalne)
* `category` (select)

### Walidacja

Brak dodania zadania jeśli tytuł jest pusty lub zbyt krótki.

### Po poprawnym dodaniu

* reset formularza
* aktualizacja stanu
* zapis do `localStorage`

Commit Git:

```bash
git commit -m "Add task creation & validation"
```

---

## Usuwanie zadania

Potwierdzenie przez:

* `window.confirm()`

lub

* komponent modalny

Po usunięciu:

```bash
git commit -m "Implement task deletion"
```

---

# Git workflow w trakcie pracy

* Wszystkie zmiany implementacyjne na gałęzi `dev`.
* Minimum 3 dodatkowe commity z opisami.

Na końcu:

```bash
git checkout main
git merge dev
```
