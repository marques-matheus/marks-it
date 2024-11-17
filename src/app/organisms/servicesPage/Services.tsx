import Section from "@/app/templates/section/Section";
import Heading from "@/app/atoms/heading";
import ServiceCard from "@/app/molecules/serviceCard";




const Services = () => {
    return (
        <Section id="services" bg="bg-gray-300" classes="flex flex-col gap-4">
            <Heading text="Serviços" w={20} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ServiceCard />
            </div>
        </Section>
    );
};

export default Services;
