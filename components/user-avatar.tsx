import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import LiveBadge from './live-badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Skeleton } from './ui/skeleton'

const AvatarSizes = cva('', {
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

interface Props extends VariantProps<typeof AvatarSizes> {
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
					AvatarSizes({ size })
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
					<LiveBadge />
				</div>
			)}
		</div>
	)
}

export default UserAvatar

interface userAvatarSkeletonProps extends VariantProps<typeof AvatarSizes> {}

export const UserAvatarSkeleton = ({ size }: userAvatarSkeletonProps) => {
	return (
		<Skeleton
			className={cn('rounded-full', AvatarSizes({ size }))}
		></Skeleton>
	)
}
