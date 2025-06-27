import Head from 'next/head';
import posts from '../../data/posts.json';

export default function Post({ post }) {
  if (!post) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Article non trouvé.</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog Santé Mentale</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className="container">
        <h1>{post.title}</h1>
        <p>
          📝 {post.type} • 👤 {post.author} • 📅 {post.date} • ⏱️ {post.readTime}
        </p>

        <img src={post.image} alt={post.title} />

        <div>
          {post.content.split('\n\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
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
    fallback: false, s
  };
}

// Passe les données à la page en props (SSG)
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: { post }
  };
}
