import { Link } from 'react-router-dom';

export default function ErrorElement() {
  return (
    <section className="flex flex-col justify-center items-center h-screen px-12">
      <div className='w-fit p-4'>
        <h1 className="text-2xl font-bold w-fit">404 NOT FOUND</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p>
          Please check the URL for any spelling mistakes or try navigating back
          to the <Link className='text-gray-600' to={'/'}>homepage</Link>.
        </p>
      </div>
    </section>
  );
}
