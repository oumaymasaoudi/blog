import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>À propos - Blog Santé Mentale</title>
        <meta name="description" content="Notre mission : le bien-être mental pour tous." />
      </Head>

      <div className="about-page">
        <header className="about-header">
          <h1>À propos de nous</h1>
          <p>Nous croyons que chacun mérite d&apos;avoir accès à des ressources de qualité pour prendre soin de sa santé mentale.</p>
        </header>

        {/* MISSION */}
        <section className="mission-section">
          <h2>Notre Mission</h2>
          <p className="mission-text">
            Démocratiser l&apos;accès à l&apos;information sur la santé mentale et fournir des outils pratiques pour cultiver le bien-être au quotidien.
          </p>
          <div className="principles">
            <div className="principle-card">
              <div className="icon">🎯</div>
              <h3>Accessible</h3>
              <p>Des conseils pratiques et faciles à appliquer dans votre vie quotidienne.</p>
            </div>
            <div className="principle-card">
              <div className="icon">🧪</div>
              <h3>Scientifique</h3>
              <p>Des informations basées sur la recherche et validées par des experts.</p>
            </div>
            <div className="principle-card">
              <div className="icon">💚</div>
              <h3>Bienveillant</h3>
              <p>Un espace sans jugement où chacun peut progresser à son rythme.</p>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="team-section">
          <h2>Notre Équipe</h2>
          <div className="team-cards">
            <div className="team-card">
              <div className="avatar">MD</div>
              <h3>Dr. Marie Dupont</h3>
              <p>Psychologue clinicienne</p>
              <p>Spécialiste dans la gestion du stress et de l&apos;anxiété, 15 ans d&apos;expérience.</p>
            </div>
            <div className="team-card">
              <div className="avatar">SM</div>
              <h3>Sophie Martin</h3>
              <p>Instructrice de méditation</p>
              <p>Certifiée en mindfulness et pratiques contemplatives depuis 10 ans.</p>
            </div>
            <div className="team-card">
              <div className="avatar">JL</div>
              <h3>Dr. Jean Leblanc</h3>
              <p>Psychiatre</p>
              <p>Expert en burnout et santé mentale au travail, auteur de plusieurs ouvrages.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section">
          <h2>Restons en contact</h2>
          <p>
            Votre bien-être nous tient à cœur. N&apos;hésitez pas à nous écrire : <br />
            <a href="mailto:contact@bienetre-mental.fr">contact@glowcare-mental.fr</a>
          </p>
        </section>
      </div>
    </>
  );
}
