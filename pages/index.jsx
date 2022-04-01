import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <Head>

        {/* <!-- HTML Meta Tags --> */}
        <title>Lean it 101 - Agile & lean business transformation</title>
        <meta name='title' content='Lean it 101 - Agile & lean business transformation' />
        <meta
          name='description'
          content="We maximize our customer's value delivery by developing people, methods and technologies to accelerate lean agile transformations."
        />

        {/* <!-- Open Graph / Facebook --/> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://leanit101.com/' />
        <meta property='og:title' content='Lean it 101 - Agile & lean business transformation' />
        <meta
          property='og:description'
          content="We maximize our customer's value delivery by developing people, methods and technologies to accelerate lean agile transformations."
        />
        <meta property='og:image' content='https://leanit101.com/images/socialMediaHpV3.jpg' />

        {/* <!-- Twitter --/> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://leanit101.com/' />
        <meta property='twitter:title' content='Lean it 101 - Agile & lean business transformation' />
        <meta
          property='twitter:description'
          content="We maximize our customer's value delivery by developing people, methods and technologies to accelerate lean agile transformations."
        />
        <meta property='twitter:image' content='https://leanit101.com/images/socialMediaHpV3.jpg' />

      </Head>
      <Link href='/landing'>
        <h1>index</h1>
      </Link>
    </div>
  )
}
