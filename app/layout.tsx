import Modal from '@/Components/Modal'
import './globals.css'

export const metadata = {
  title: 'Trello clone AI',
  description: 'Made by Kat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>{children} <Modal /> </body>
    </html>
  )
}
