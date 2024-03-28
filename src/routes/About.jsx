export default function About() {
  return (
    <section className="border-dashed border-primary border-opacity-20 px-6 pb-6 pt-2 text-accent">
      <h2>Who Am I?</h2>
      <p>
        {
          "I'm Hamza, a mechanical engineering student and a self-taught developer."
        }
      </p>
      <h2>{"What's This Blog?"}</h2>
      <p>{"It's a place where You can share stories, ideas, and thoughts."}</p>
      <h2>{"What's Here?"}</h2>
      <ul>
        <li>
          <strong>Explore Posts:</strong> {"Find recent content in 'blog'."}
        </li>
        <li>
          <strong>Authors:</strong> Authenticated authors can publish at{' '}
          {"'/author/posts'"}.
        </li>
      </ul>
      <h2>Connect</h2>
      <p>Need to reach me? hamzalahmouz01@gmail.com</p>
      <h2>The Tech Stack</h2>
      <ul>
        <li>
          <strong>Backend:</strong> MongoDB, Express.js, JWT (JSON Web Tokens)
        </li>
        <li>
          <strong>Frontend:</strong> React.js, Tailwind CSS
        </li>
      </ul>
    </section>
  );
}
