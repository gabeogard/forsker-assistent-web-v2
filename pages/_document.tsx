import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="coffee">
    <meta name='description' content='Forskerassistenten gjør din forskning lettere ved å tilby tjenester som hjelper deg å fokusere på de kritiske delene av forskningen din'/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}