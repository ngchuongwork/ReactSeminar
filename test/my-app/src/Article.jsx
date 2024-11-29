export default function Article({ title, content }) {
  const note = "This is: "
  return (
    <article>
      <h2>{note + title}</h2>
      <p>{content}</p>
    </article>
  );
}

