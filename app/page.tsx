import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<div className='flex flex-col gap-y-4'>
				<h1>Dashboard</h1>
				<UserButton afterSignOutUrl='/' />
        <ThemeToggle />
			</div>
		</main>
	)
}
