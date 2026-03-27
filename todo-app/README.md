# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  SQL Queries Guide

This document contains useful SQL queries for interacting with the **to-do app 2.0** database. These queries assume a table named `Notes` with the following structure:

```sql
id INTEGER PRIMARY KEY
title TEXT
content TEXT
favorite BOOLEAN
createdAt DATETIME
updatedAt DATETIME
```

---

## basic queries

### 🔍 Get All Notes

```sql
SELECT * FROM Notes;
```

---

### get favorite notes

```sql
SELECT * FROM Notes
WHERE favorite = 1;
```

---

### search notes by title

```sql
SELECT * FROM Notes
WHERE title LIKE '%keyword%';
```

---

### insert

```sql
INSERT INTO Notes (title, content, favorite, createdAt, updatedAt)
VALUES ('My First Note', 'This is the content', 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
```

---

### Update a Note

```sql
UPDATE Notes
SET title = 'Updated Title',
    content = 'Updated content',
    updatedAt = CURRENT_TIMESTAMP
WHERE id = 1;
```

---

### Delete a Note

```sql
DELETE FROM Notes
WHERE id = 1;
```

---

### count favorites notes

```sql
SELECT COUNT(*) AS favorite_notes
FROM Notes
WHERE favorite = 1;
```

---

### get most recent notes

```sql
SELECT * FROM Notes
ORDER BY updatedAt DESC
LIMIT 5;
```

---

### Search Title AND Content

```sql
SELECT * FROM Notes
WHERE title LIKE '%keyword%'
   OR content LIKE '%keyword%';
```

---

