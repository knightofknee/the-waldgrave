import Head from 'next/head'
import Link from 'next/link'
import AppStoreCta from '../../../components/AppStoreCta'
import HomeButton from '../../../components/HomeButton'
import { electionLine } from '../../../utils/directDemocracyElection'

const APP_STORE = 'https://apps.apple.com/us/app/direct-democracy-chicago/id6797189381'

export async function getServerSideProps() {
  return { props: { election: electionLine('es') } }
}

export default function DirectDemocracyEs({ election }) {
  return (
    <div className="container">
      <Head>
        <title>direct democracy: la app cívica de Chicago</title>
        <meta name="description" content="Participa en tu distrito de Chicago, llena una boleta de práctica antes de votar y hazles a los oficiales las preguntas que tus vecinos quieren respondidas. Gratis." />
        <link rel="alternate" hrefLang="en" href="https://www.waldgrave.com/directdemocracy" />
        <link rel="alternate" hrefLang="es" href="https://www.waldgrave.com/directdemocracy/es" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <HomeButton />

      <header className="hero">
        <p className="kicker">La app cívica de Chicago</p>
        <h1>direct democracy</h1>
        <p className="tagline">Entérate de cuándo y dónde se toman las decisiones de tu distrito, llena una boleta de práctica antes de votar y hazles las preguntas de la ciudad a quienes la gobiernan.</p>
        {election && <p className="election">{election}</p>}
      </header>

      <AppStoreCta url={APP_STORE} lang="es">
        <p className="also">
          Gratis. O <a href="/directdemocracy/app">úsala en tu navegador</a> · <Link href="/directdemocracy">English</Link>
        </p>
      </AppStoreCta>

      <section className="lead">
        <h2>Participa en tu distrito</h2>
        <p className="lede">Elige tu distrito y mira dónde se toman sus decisiones y cuándo puedes hacerte escuchar.</p>
        <div className="row">
          <img className="shot" src="/directdemocracy/screens/es/take-part.jpg" alt="La sección Participa de un distrito: cambios de zonificación y reuniones de los concejos de distrito policial" />
          <ul>
            <li><strong>Reuniones del distrito</strong> y la dirección, el horario y el boletín de la oficina del distrito</li>
            <li><strong>Cambios de zonificación</strong> y audiencias de desarrollo, con sus fechas límite para comentarios</li>
            <li><strong>Reuniones del concejo de distrito policial</strong> cerca de ti</li>
            <li><strong>El Concejo Municipal</strong>: sus reuniones con fechas límite para comentarios del público, y cómo votó tu concejal cuando el Concejo se dividió</li>
            <li><strong>Votaciones de tu concejal</strong> y una calificación hecha por los residentes verificados de su propio distrito</li>
          </ul>
        </div>
      </section>

      <section className="lead">
        <h2>Llena una boleta de práctica</h2>
        <p className="lede">Escribe tu dirección una vez y mira cada contienda en la que vas a votar. Infórmate, elige contienda por contienda y entra a votar con tu guía en la mano.</p>
        <div className="row flip">
          <img className="shot" src="/directdemocracy/screens/es/ballot.jpg" alt="Una contienda en la boleta de práctica, con los antecedentes de cada candidato y un botón para elegir" />
          <ul>
            <li><strong>Cada contienda</strong>, desde el Congreso y la legislatura estatal hasta los cargos del condado, el consejo escolar y los jueces en votación de retención</li>
            <li><strong>Los jueces mal calificados</strong> por los colegios de abogados aparecen primero, para que sepas a quién mantienes en el cargo</li>
            <li><strong>Mi guía para votar</strong> se guarda como imagen o PDF. Tus elecciones se quedan en tu teléfono; nunca se nos envían</li>
            <li><strong>Dónde y cuándo votar</strong>: lugares de voto anticipado en cada distrito, fechas y enlaces para votar por correo</li>
            <li><strong>La contienda por la alcaldía</strong> de febrero de 2027: la plataforma de cada candidato, política por política, abierta a comentarios</li>
          </ul>
        </div>
      </section>

      <section className="lead">
        <h2>La gente hace las preguntas</h2>
        <p className="lede">Cualquiera puede hacerle una pregunta a un oficial, y los vecinos respaldan las preguntas que también quieren respondidas. Cuando llega la respuesta, la comunidad decide si de verdad respondió o si la esquivó.</p>
        <div className="row">
          <img className="shot" src="/directdemocracy/screens/es/alderman.jpg" alt="La página de un concejal: su calificación, un voto de aprobación y un espacio para hacer una pregunta" />
          <ul>
            <li><strong>Pregunta lo que sea</strong>, en público, a tu concejal, al alcalde o a cualquier candidato</li>
            <li><strong>Respalda una pregunta</strong> y pesa más en su calificación. Ignorar a cincuenta vecinos cuesta mucho más que ignorar a uno</li>
            <li><strong>Respondida o esquivada</strong> lo decide la comunidad, nunca el político</li>
            <li><strong>Una pregunta para todos los candidatos a alcalde</strong>: mira quién de verdad la responde</li>
          </ul>
        </div>
      </section>

      <h2 className="moreTitle">Y además</h2>
      <div className="features">
        <div className="feature">
          <h3>El tablero</h3>
          <p>Plantea lo que está mal en tu distrito o en la ciudad y califica qué tanto importa todo lo demás. Los votos cuentan para toda la ciudad y por distrito, y cada resultado muestra a todos junto a los residentes verificados.</p>
        </div>
        <div className="feature">
          <h3>Noticias de Chicago</h3>
          <p>Los titulares de los medios de Chicago, los más recientes primero, nunca ordenados por un algoritmo. Limítalos a las noticias que nombran tu distrito.</p>
        </div>
        <div className="feature">
          <h3>Anónimo por diseño</h3>
          <p>Verificarte es opcional y lo hace un tercero. Guardamos un sí o un no y tu distrito, nunca tu identificación, tu dirección ni tu cara. Apareces con un nombre como &ldquo;Steadfast Heron.&rdquo;</p>
        </div>
        <div className="feature">
          <h3>Siete idiomas</h3>
          <p>English, Español, 中文, Polski, Tagalog, 한국어 y हिन्दी. Cada pantalla tiene un &ldquo;?&rdquo; que explica qué hay en ella y qué puedes hacer ahí.</p>
        </div>
      </div>

      <div className="closer">
        <h2>Chicago funciona mejor contigo adentro.</h2>
        <AppStoreCta url={APP_STORE} lang="es" />
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/es/soporte">Soporte</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/privacy">Política de privacidad</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Términos de servicio</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy">English</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Instrument Sans', 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 920px;
          margin: 0 auto;
          padding: 1.5em 16px 2em;
          text-align: center;
          color: #2c3e50;
        }
        .hero {
          margin-top: 0.5em;
        }
        .kicker {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0B4A6F;
        }
        h1 {
          font-size: clamp(2.6rem, 8vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0.15em 0 0.35em;
        }
        .tagline {
          font-size: clamp(1.1rem, 2.4vw, 1.3rem);
          line-height: 1.5;
          max-width: 34em;
          margin: 0 auto;
          text-wrap: balance;
        }
        .election {
          display: inline-block;
          margin: 1.4em 0 0;
          padding: 0.5em 1.1em;
          border-radius: 999px;
          background: #0B4A6F;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .also {
          margin: 0;
          font-size: 0.95em;
          color: #555;
        }
        .also :global(a) {
          color: #0B4A6F;
        }
        h2 {
          font-size: clamp(1.7rem, 4.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0 0 0.4em;
          text-wrap: balance;
        }
        .lead {
          padding: 3em 0;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .lede {
          font-size: 1.15rem;
          line-height: 1.55;
          max-width: 34em;
          margin: 0 auto 2em;
          text-wrap: balance;
        }
        .row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2em;
        }
        .shot {
          width: 100%;
          max-width: 270px;
          border-radius: 26px;
          box-shadow: 0 18px 40px rgba(11, 20, 40, 0.35);
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: left;
          max-width: 30em;
        }
        li {
          position: relative;
          padding: 0 0 0 1.4em;
          margin: 0 0 1em;
          line-height: 1.5;
          font-size: 1.05rem;
        }
        li::before {
          content: '✶';
          position: absolute;
          left: 0;
          top: 0.05em;
          color: #0B4A6F;
          font-size: 0.85em;
        }
        li strong {
          font-weight: 600;
        }
        @media (min-width: 760px) {
          .row {
            flex-direction: row;
            justify-content: center;
            gap: 3.5em;
          }
          .row.flip {
            flex-direction: row-reverse;
          }
          .shot {
            flex: 0 0 270px;
          }
        }
        .moreTitle {
          padding-top: 1.4em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25em;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          margin: 1.5em 0 1em;
        }
        @media (min-width: 760px) {
          .features {
            grid-template-columns: 1fr 1fr;
          }
        }
        .feature {
          padding: 1.25em 1.4em;
          border: 1px solid rgba(44, 62, 80, 0.22);
          border-radius: 16px;
          text-align: left;
        }
        .feature h3 {
          margin: 0 0 0.4em;
          color: #0B4A6F;
          font-size: 1.15rem;
          font-weight: 700;
        }
        .feature p {
          margin: 0;
          line-height: 1.55;
        }
        .closer {
          margin-top: 3em;
          padding-top: 2.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
        }
        .footer {
          margin-top: 1em;
          padding-top: 1.5em;
          border-top: 1px solid rgba(44, 62, 80, 0.2);
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #888;
        }
        .credit {
          color: #666;
          font-size: 0.85em;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}
