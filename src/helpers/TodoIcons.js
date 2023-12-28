import { ReactComponent as CheckSVG } from "../check.svg";
import { ReactComponent as DeleteSVG } from "../delete.svg";
import '../styles/item.css'


const iconsType = {
    'check': (color) => <CheckSVG className="Icon-svg" fill={color} />,
    'delete': (color) => <DeleteSVG className="Icon-svg-delete Icon-svg " fill={color} />
}

const TodoIcon = ({ type, color, action }) => (
    <span className={`Icon Icon-${type}`} onClick={action}>
        {iconsType[type](color)}
    </span>
);

export { TodoIcon }