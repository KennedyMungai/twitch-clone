'use client'

import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { useSideBar } from '@/store/use-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'

const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSideBar((state) => state)

	const label = collapsed ? 'Expand' : 'Collapse'

	return (
		<>
			{collapsed && (
				<div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant={'ghost'}
									onClick={onExpand}
									className='h-auto p-2'
									size='icon'
								>
									<ArrowRightFromLine />
								</Button>
							</TooltipTrigger>
							<TooltipContent>{label}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			)}
			{!collapsed && (
				<div className='p-3 pl-6 mb-2 flex items-center w-full'>
					<p className='font-semibold text-primary'>For You</p>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									className='h-auto p-2 ml-auto'
									variant={'ghost'}
									onClick={onCollapse}
								>
									<ArrowLeftFromLine className='h-4 w-4' />
								</Button>
							</TooltipTrigger>
							<TooltipContent>{label}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			)}
		</>
	)
}

export default Toggle
