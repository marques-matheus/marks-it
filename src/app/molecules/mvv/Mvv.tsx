const mocks = [
    {
        title: 'Missão',
        description: 'Prover soluções tecnológicas e consultorias com excelência, ética e integridade, superando as expectativas de nossos clientes e promovendo melhorias contínuas em nossos processos para gerar resultados sustentáveis.'
    },
    {
        title: 'Visão',
        description: 'Tornar-se referência no mercado, reconhecida como a principal parceira estratégica em soluções tecnológicas e inovação, destacando-se pela qualidade e impacto positivo nos negócios de nossos clientes.'
    },
    {
        title: 'Valores',
        description: "Ética, Integridade, Comprometimento, Transparência, Foco no Cliente e Inovação"
    }
]
const Mvv = () => {
    return (
        <div className="flex flex-col gap-4">
            {mocks.map((mock) => (
                <article key={mock.title} className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl text-marks-400 border-l-4 pl-2 border-marks-500">{mock.title}</h3>
                    <p className="text-sm text-marks-800">{mock.description}</p>
                </article>
            ))}
        </div>
    )

}

export default Mvv