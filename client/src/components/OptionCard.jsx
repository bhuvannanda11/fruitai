import { Link } from "react-router-dom";

const OptionCard = ({ path, className, children }) => {
    return (
        <Link
            to={path}
            className={`font-black drop-shadow-lg text-4xl h-36 rounded-3xl inline-flex justify-center items-center ${className}`}
        >
            {children}
        </Link>
    )
}

export default OptionCard;
