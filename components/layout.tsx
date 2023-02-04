import '../styles/globals.css'
import GoButton from './go_button'
import Header from './Header'
import Teams from './teams'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className='bg-league_blue_header'>
        <Header/>
        <Teams/>
        {children}
        <GoButton/>
      </body>

    </html>
  )
}
