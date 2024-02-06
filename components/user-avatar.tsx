import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Skeleton } from './ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const avatarSizes = cva('', {
	variants: {
		size: {
			default: 'h-8 w-8',
			large: 'h-14 w-14'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

interface Props extends VariantProps<typeof avatarSizes> {
	imageUrl: string
	userName: string
	isLive?: boolean
	showBadge?: boolean
}

const UserAvatar = ({ imageUrl, userName, isLive, showBadge, size }: Props) => {
	const canShowBadge = showBadge && isLive

	return (
		<div className='relative'>
			<Avatar
				className={cn(
					isLive && 'ring-2 ring-rose-500 border border-background',
					avatarSizes({ size })
				)}
			>
				<AvatarImage src={imageUrl} className='object-cover' />
				<AvatarFallback>
					{userName[0]}
					{userName[userName.length - 1]}
				</AvatarFallback>
			</Avatar>
			{canShowBadge && (
				<div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
					Live
				</div>
			)}
		</div>
	)
}

export default UserAvatar
