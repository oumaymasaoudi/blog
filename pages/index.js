import Head from 'next/head'
import Link from 'next/link'
import posts from '../data/posts.json'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
      
    <>
      <Head>
        <title>Blog Santé Mentale</title>
        <meta name="description" content="Articles bien-être, méditation, stress et santé mentale." />
      </Head>

      <Header />

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          <span style={styles.faded}>Cultivez votre</span>{' '}
          <span style={styles.highlight}>bien-être mental</span>
        </h1>
        <p style={styles.heroText}>
          Découvrez des conseils pratiques, des techniques éprouvées et des ressources pour prendre soin de votre santé mentale au quotidien.
        </p>
        <div style={styles.heroButtons}>
          <Link href="/about" style={styles.primaryBtn}>Découvrir notre mission</Link>
          <Link href="#articles" style={styles.secondaryBtn}>Voir les articles</Link>
        </div>
      </section>


      <section style={styles.approachSection}>
        <h2 style={styles.sectionTitle}>Pourquoi choisir notre approche ?</h2>
        <p style={styles.sectionText}>
          Une approche bienveillante et scientifique pour vous accompagner vers un meilleur équilibre mental.
        </p>
        <div style={styles.cardsRow}>
          <div style={{ ...styles.approachCard, backgroundColor: '#e3f2fd' }}>
            <span style={styles.icon}>🧠</span>
            <h3>Approche scientifique</h3>
            <p>Basée sur les recherches en psychologie et neurosciences, validée par des professionnels.</p>
          </div>
          <div style={{ ...styles.approachCard, backgroundColor: '#f3e5f5' }}>
            <span style={styles.icon}>💛</span>
            <h3>Accompagnement personnalisé</h3>
            <p>Des ressources adaptées à votre rythme et à vos besoins spécifiques.</p>
          </div>
          <div style={{ ...styles.approachCard, backgroundColor: '#e8f5e9' }}>
            <span style={styles.icon}>⚡</span>
            <h3>Pratique et accessible</h3>
            <p>Techniques simples à intégrer, sans jargon complexe ni perte de temps.</p>
          </div>
        </div>
      </section>


      <section id="articles" style={styles.articlesSection}>
        <h2 style={styles.sectionTitle}>Nos derniers articles</h2>
        <p style={styles.sectionText}>
          Explorez nos guides pratiques pour améliorer votre bien-être mental et développer des habitudes saines.
        </p>
        <div style={styles.container}>
          {posts.map((post) => (
            <div key={post.slug} style={styles.card}>
              <img src={post.image} alt={post.title} style={styles.image} />
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.meta}>
                📅 {post.date} • ✍️ {post.author} • ⏱️ {post.readTime} • 📘 {post.type}
              </p>
              <p style={styles.description}>{post.description}</p>
              <Link href={`/posts/${post.slug}`} style={styles.readMore}>Lire plus →</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}


const styles = {
  hero: {
    backgroundColor: '#eef4ff',
    textAlign: 'center',
    padding: '60px 20px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '20px',
  },
  faded: {
    color: '#555',
  },
  highlight: {
    background: 'linear-gradient(to right, #2e86de, #9b59b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroText: {
    fontSize: '1.2rem',
    color: '#333',
    maxWidth: '700px',
    margin: '0 auto 30px',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#2e86de',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    border: '2px solid #2e86de',
    padding: '12px 24px',
    borderRadius: '6px',
    color: '#2e86de',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  approachSection: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '40px',
  },
  cardsRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  approachCard: {
    padding: '20px',
    borderRadius: '12px',
    width: '260px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '10px',
  },
  articlesSection: {
    backgroundColor: '#f9fbfd',
    padding: '60px 20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    padding: '16px',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    marginBottom: '6px',
  },
  meta: {
    fontSize: '0.85rem',
    color: '#666',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.95rem',
    color: '#444',
    marginBottom: '12px',
  },
  readMore: {
    display: 'inline-block',
    color: '#2980b9',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
}
