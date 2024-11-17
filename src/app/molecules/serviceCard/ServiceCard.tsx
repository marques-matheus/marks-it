import CardTitle from "@/app/atoms/cardTitle";
import services from "@/app/mocks/services";


const ServiceCard: React.FC = () => {
    return (
        <>
            {services.map((service, index) => (
                <article key={index} className="flex flex-col gap-4 items-start border-b-4 border-marks-300 hover:border-teal-700 bg-grey-200 shadow-lg p-8 text-marks-600 hover:text-white hover:bg-marks-200 hover:rounded-tr-3xl hover:rounded-bl-3xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                    <CardTitle icon={service.icon} title={service.title} />
                    <p>{service.description}</p>
                </article>
            ))
            }
        </>
    )
}

export default ServiceCard