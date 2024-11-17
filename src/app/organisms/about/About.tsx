import { useMyContext } from "@/app/context/Context";
import Heading from "@/app/atoms/heading";
import Section from "@/app/templates/section/Section";

const About = () => {
    return (
        <Section id="about" bg="bg-zinc-400">
            <Heading text="Quem somos" />
        </Section>
    );
};

export default About