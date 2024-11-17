import {FaTools, FaShieldAlt, FaRegClock, FaProjectDiagram, FaToolbox, FaUserCog} from 'react-icons/fa'
import {MdBackup, MdComputer, MdSupportAgent} from 'react-icons/md'

const services = [
    {
        title: "Assistência Técnica",
        description: "Assistência técnica e consultoria em tecnologias de ponta, com foco na qualidade e na inovação.",
        icon: <FaTools size={30}/>
    },
    {
        title: "Segurança",
        description: "Proteção empresarial através de antivírus gerenciável e ferramentas profissionais.",
        icon: <FaShieldAlt size={30}/>
    },{
        title: "Backup",
        description: "Backup de dados em nuvem com criptografia de ponta a ponta.",
        icon: <MdBackup size={30}/>
    },{
        title: "Consultoria e Gestão de TI",
        description: "Consultoria e Gestão em TI para empresas de pequeno e médio porte.",
        icon: <MdComputer size={30}/>
    },{
        title: "Plantão Técnico",
        description: "Suporte Técnico 24 x 7 x 365. 24 Horas por dia, 7 Dias por semana, durante 365 dias do ano.",
        icon: <FaRegClock size={30}/>
    },{
        title: "Project Monitoring",
        description: "Monitoramento e gerenciamento de projetos.",
        icon: <FaProjectDiagram size={30}/>
    },{
        title: "Fornecedores e Prestadores de serviços",
        description: "Acompanhamento de serviços e produtos oferecidos por terceiros.",
        icon: <FaToolbox size={30}/>
    },{
        title: "Service Desk / Help Desk",
        description: "Central de serviços focada no suporte técnico, resolução de problemas e melhoria contínua, garantindo eficiência e satisfação.",
        icon: <MdSupportAgent size={30}/>
    },{
        title: "Consultoria em ERP",
        description: "Análise estratégica do ERP para otimizar recursos, corrigir falhas e maximizar a eficiência dos processos da empresa.",
        icon: <FaUserCog size={30}/>
    }
]

export default services