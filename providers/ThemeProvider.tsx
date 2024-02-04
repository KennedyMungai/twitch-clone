'use client'

import { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type Props = {
	children: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			storageKey='twitch-clone'
		>
			{children}
		</NextThemesProvider>
	)
}

export default ThemeProvider
