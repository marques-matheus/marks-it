interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, disabled, type }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-marks-100  text-sm lg:text-lg hover:bg-marks-700  text-white px-5 py-2 rounded-full ${className}`}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;