import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>

        {/* <!-- HTML Meta Tags --> */}
        <title>Lean Agile Foundation</title>
        <meta name='title' content='Lean Agile Foundation' />
        <meta
          name='description'
          content='Aprenda toda a essência do Lean e do Agile para transformar a sua organização e entregar mais valor para os seus clientes em menos tempo'
        />

        {/* <!-- Open Graph / Facebook --/> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://leanit101.com/' />
        <meta property='og:title' content='Lean Agile Foundation' />
        <meta
          property='og:description'
          content='Aprenda toda a essência do Lean e do Agile para transformar a sua organização e entregar mais valor para os seus clientes em menos tempo'
        />
        <meta property='og:image' content='https://leanit101.com/images/socialMediaLp.jpg' />

        {/* <!-- Twitter --/> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://leanit101.com/' />
        <meta property='twitter:title' content='Lean Agile Foundation' />
        <meta
          property='twitter:description'
          content='Aprenda toda a essência do Lean e do Agile para transformar a sua organização e entregar mais valor para os seus clientes em menos tempo'
        />
        <meta property='twitter:image' content='https://leanit101.com/images/socialMediaLp.jpg' />

      </Head>
      <Link href='/'>
        <h1>landing</h1>
      </Link>
    </div>
  )
}
