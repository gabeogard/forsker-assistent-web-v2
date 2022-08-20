import {
	FileText
} from 'react-feather';

interface Props {
	id:  'file-text',
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
	fill?: string;
}

const icons = {
	"file-text": FileText,
};

const Icon = ({
	id,
	color,
	size,
	strokeWidth,
	fill = 'none',
	...delegated
}: Props) => {
	const Component = icons[id];

	if (!Component) {
		throw new Error(`No icon found for ID: ${id}`);
	}

	return (
		<Component
			className="block"
			color={color}
			size={size}
			strokeWidth={strokeWidth}
			fill={fill}
			{...delegated}
		/>
	);
};

export default Icon;