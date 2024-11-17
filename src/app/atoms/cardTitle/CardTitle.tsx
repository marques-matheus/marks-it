interface CardTitleProps {
    icon: React.ReactNode;
    title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ icon, title }) => {
    return (
        <div className="flex gap-2 flex-col items-start">
            {icon}
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default CardTitle;