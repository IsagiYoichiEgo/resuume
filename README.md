# Простое резюме на React, Vite и TypeScript

Одна страница с разделами «О себе», «Образование», «Навыки» и «Контакты».
Имя, телефон, GitHub, образование и навыки взяты из предыдущего резюме.

## 1. Запуск на компьютере

1. Установи [Node.js 24 LTS](https://nodejs.org/en/download), если он ещё не установлен.
2. Распакуй архив. Открой папку `resume-site` в VS Code: **File → Open Folder**.
3. Открой терминал: **Terminal → New Terminal**.
4. Выполни по очереди:

```powershell
npm install
npm run dev
```

Открой адрес, который появится в терминале, обычно `http://localhost:5173`.
Чтобы остановить сервер, нажми **Ctrl+C**.

Проверить сборку можно командой:

```powershell
npm run build
```

Она сначала проверяет TypeScript, затем собирает сайт в папку `dist`.
Не открывай исходный `index.html` двойным щелчком: этот проект запускается через Vite.

## 2. Где менять резюме

- `src/App.tsx` — весь текст страницы и личные данные. Вверху находится объект `profile`.
- `src/style.css` — цвета, размеры и отступы.
- `src/main.tsx` — запускает React и выводит компонент `App`.
- `index.html` — заголовок вкладки и описание страницы.
- `vite.config.ts` — настройки Vite.
- `.github/workflows/deploy.yml` — автоматическая сборка и публикация.
- `package-lock.json` — фиксирует версии пакетов; обязательно загрузи его на GitHub.

Если меняешь телефон, измени также номер в `href="tel:..."` в `App.tsx`.

## 3. Создание репозитория на GitHub

1. Войди в свой аккаунт [GitHub](https://github.com/).
2. Нажми **+ → New repository**.
3. Назови репозиторий `resume-react`.
4. Выбери **Public**.
5. Оставь добавление README, `.gitignore` и лицензии выключенным: нужные файлы уже есть в проекте.
6. Нажми **Create repository**.

Далее выбери один из двух способов загрузки.

### Способ А: через терминал

Установи [Git для Windows](https://git-scm.com/downloads/win), если он ещё не установлен.
После установки заново открой VS Code. Терминал должен быть открыт в папке
`resume-site`, где лежит `package.json`.

Выполни по очереди:

```powershell
git init
git add .
git commit -m "Add simple React resume"
git branch -M main
git remote add origin https://github.com/IsagiYoichiEgo/resume-react.git
git push -u origin main
```

Адрес выше рассчитан на твой аккаунт `IsagiYoichiEgo` и репозиторий `resume-react`.
Если используешь другой аккаунт или название, скопируй адрес своего нового
репозитория с GitHub и подставь его в команду `git remote add origin`.
При запросе авторизации войди в GitHub через браузер.

Если команда создания коммита просит указать имя и email, задай их
только для этого проекта, затем повтори `git commit`:

```powershell
git config user.name "Твоё имя"
git config user.email "Твой email из аккаунта GitHub"
```

Папки `node_modules` и `dist` автоматически исключены через `.gitignore`.

### Способ Б: через браузер

Этот способ подходит, если пока не хочешь работать с Git.

1. На странице пустого репозитория нажми **uploading an existing file**.
2. Перетащи содержимое папки `resume-site`: папку `src` и файлы
   `index.html`, `package.json`, `package-lock.json`, `tsconfig.json`,
   `vite.config.ts`, `README.md` и `.gitignore`.
3. Не загружай `node_modules`, `dist` или ZIP. Файл `package.json` должен
   оказаться прямо в корне репозитория, а не внутри дополнительной папки.
4. Нажми **Commit changes**. Используй ветку `main`.
5. Нажми **Add file → Create new file**.
6. В поле имени напиши `.github/workflows/deploy.yml`.
7. Открой одноимённый файл из проекта, скопируй весь текст в редактор GitHub
   и нажми **Commit changes** в ветку `main`.

Теперь структура репозитория должна выглядеть так:

```text
resume-react/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 4. Включение GitHub Pages и первая публикация

1. В репозитории открой **Settings → Pages**.
2. В разделе **Build and deployment**, в поле **Source**, выбери **GitHub Actions**.
3. Открой вкладку **Actions**.
4. Слева выбери **Publish resume to GitHub Pages**.
5. Нажми **Run workflow**, выбери `main` и ещё раз нажми **Run workflow**.
6. Дождись зелёной галочки у завершённого запуска.
7. Вернись в **Settings → Pages** и открой ссылку опубликованного сайта.

После успешной публикации в репозитории `resume-react` твоего аккаунта адрес будет:

```text
https://IsagiYoichiEgo.github.io/resume-react/
```

Включение источника **GitHub Actions** и публикация готовой сборки описаны
в [инструкции Vite](https://vite.dev/guide/static-deploy.html#github-pages)
и [документации GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 5. Автоматическое обновление

При каждом новом коммите в `main` GitHub Actions запускает установку пакетов,
проверку TypeScript, сборку Vite и публикацию готовой папки `dist`.
После первой настройки вручную собирать или загружать `dist` не нужно.

Если используешь терминал, после изменения текста выполни:

```powershell
git add .
git commit -m "Update resume"
git push
```

Если загружал через браузер, открой `src/App.tsx` на GitHub, нажми кнопку
редактирования, измени текст и сохрани коммит в `main`.
Дождись зелёной галочки во вкладке **Actions** и обнови страницу сайта.

В Vite задано `base: './'`, поэтому имя репозитория менять в настройках проекта
не требуется: пути к собранным файлам относительные.
Это поддерживается [настройками сборки Vite](https://vite.dev/guide/build.html#relative-base).

## 6. Что показать преподавателю

- Ссылку на репозиторий с файлами проекта.
- Ссылку на работающую страницу GitHub Pages.
- Завершённый запуск с зелёной галочкой во вкладке **Actions**.
- Файл `.github/workflows/deploy.yml`, который выполняет сборку и публикацию.

Короткое объяснение: «Страница написана на React и TypeScript.
Vite запускает проект и собирает его. При загрузке изменений в ветку main
GitHub Actions автоматически собирает сайт и публикует его на GitHub Pages».
