// Тип описывает, какие данные хранятся в объекте profile.
type Profile = {
  name: string;
  city: string;
  phone: string;
  github: string;
};

const profile: Profile = {
  name: 'Alimjanov Abrorbek',
  city: 'Бишкек, Кыргызстан',
  phone: '+996 228 936 151',
  github: 'IsagiYoichiEgo',
};

function App() {
  return (
    <main className="resume">
      <header>
        <h1>{profile.name}</h1>
        <p>Начинающий fullstack-разработчик</p>
        <p>{profile.city}</p>
      </header>

      <section>
        <h2>О себе</h2>
        <p>
          Учусь в INAI и интересуюсь веб-разработкой. Работаю с Java,
          Spring Boot, React и Python. Люблю изучать новые технологии
          и создавать собственные проекты.
        </p>
      </section>

      <section>
        <h2>Образование</h2>
        <p><strong>INAI — институт прикладной информатики</strong></p>
        <p>Направление: прикладная информатика</p>
        <p>2024 — настоящее время</p>
      </section>

      <section>
        <h2>Навыки</h2>
        <ul>
          <li>HTML и CSS</li>
          <li>JavaScript и React</li>
          <li>Java и Spring Boot</li>
          <li>Python</li>
          <li>PostgreSQL и SQLite</li>
          <li>Git и GitHub</li>
        </ul>
      </section>

      <section>
        <h2>Контакты</h2>
        <p>
          Телефон: <a href="tel:+996228936151">{profile.phone}</a>
        </p>
        <p>
          GitHub:{' '}
          <a href={'https://github.com/' + profile.github}>
            {profile.github}
          </a>
        </p>
      </section>
    </main>
  );
}

export default App;
