import ThemeProvider from '@/providers/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
	title: 'Twitch Clone',
	description: 'A simple twitch clone'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang='en' suppressHydrationWarning>
				<body className={poppins.className}>
					<ThemeProvider>
						<Toaster theme={'light'} position='bottom-center' />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
