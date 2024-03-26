import { useEffect } from 'react';
import useFetch from '../customHooks/useFetch';

export default function Blog() {
  const { data, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData('posts');
  });

  return loading ? (
    <section className="position absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <p>Fetching Data...</p>
    </section>
  ) : (
    <section>
      {data.posts.map((post) => {
        return <div key={post._id}>{post.title}</div>;
      })}
    </section>
  );
}
