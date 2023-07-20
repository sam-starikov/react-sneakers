import ContentLoader from 'react-content-loader'

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={200}
		height={187}
		viewBox='0 0 150 187'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'>
		<rect width='150' height='91' rx='10' />
		<rect y='107' width='150' height='15' rx='3' />
		<rect y='126' width='93' height='15' rx='3' />
		<rect y='163' width='80' height='24' rx='8' />
		<rect x='118' y='155' width='32' height='32' rx='8' />
	</ContentLoader>
)

export default Skeleton
