import Article from './Article';
import Aside from './Aside';

export default function Main() {
  return (
    <main>
      <Article title="Article 1" content="This is the content of the first article. You can add more details here." />
      <Article title="Article 2" content="This is the content of the second article. Feel free to expand it." />
      <Aside />
    </main>
  );
}