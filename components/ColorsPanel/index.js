import ContainerPanel from "../ContainerPanel";
import Circle from "../UI/Circle";

const colors = [
	"#FFFFFF",
	"#F15BB5",
	"#FEE440",
	"#00BBF9",
	"#00F5D4",
	"#FFA69E",
	"#FF7E6B",
];

const ColorsPanel = ({ onBack }) => {
	return (
		<ContainerPanel type='secondary' onEvent={onBack}>
			{colors.map((color, index) => (
				<Circle key={index} color={color} />
			))}
		</ContainerPanel>
	);
};

export default ColorsPanel;
