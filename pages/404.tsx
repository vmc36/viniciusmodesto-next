import Link from 'components/Link';
import Head from 'next/head';

const Custom404 = (): JSX.Element => (
  <>
    <Head>
      <title>404 | Vinicius Modesto</title>
    </Head>
    <div className="flex flex-col gap-2">
      <h1>404 - Page not found</h1>
      <p className="text-secondary">Página não existente!</p>
      <div className="h-2" />
      <Link href="/" underline>
        Return home
      </Link>
    </div>
  </>
);

export default Custom404;
