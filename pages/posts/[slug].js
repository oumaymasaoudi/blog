import Head from 'next/head';
import { useRouter } from 'next/router'; 
import posts from '../../data/posts.json';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Post({ post }) {
  const router = useRouter(); 

  if (!post) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Article non trouvé.</p>;
  }

 
  const backButtonStyle = {
    display: 'inline-block',
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#0070f3', 
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };


  const handleButtonMouseEnter = (e) => {
    e.target.style.backgroundColor = '#005bb5'; 
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.backgroundColor = '#0070f3'; 
  };


  return (
    <>
      <Head>
        <title>{post.title} - Blog Santé Mentale</title>
        <meta name="description" content={post.description} />
      </Head>

      <Header />

      <div style={localStyles.container}>
        {/* Back button added here */}
        <button
          onClick={() => router.back()}
          style={backButtonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          ← Retour
        </button>

        <h1 style={localStyles.h1}>{post.title}</h1>
        <p style={localStyles.metaInfo}>
          📝 {post.type} • 👤 {post.author} • 📅 {post.date} • ⏱️ {post.readTime}
        </p>

        <img src={post.image} alt={post.title} style={localStyles.image} />

        <div style={localStyles.contentDiv}>
          {post.content.split('\n\n').map((para, index) => (
            <p key={index} style={localStyles.paragraph}>{para}</p>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

//Génère les routes dynamiques à la compilation
export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

// Passe les données à la page en props (SSG)
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: { post }
  };
}


const localStyles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  h1: {
    fontSize: '2.8em',
    color: '#2c3e50',
    marginBottom: '15px',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  metaInfo: {
    fontSize: '0.9em',
    color: '#777',
    textAlign: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  contentDiv: {
    padding: '20px 0',
  },
  paragraph: {
    marginBottom: '1em',
    textAlign: 'justify',
  },
};