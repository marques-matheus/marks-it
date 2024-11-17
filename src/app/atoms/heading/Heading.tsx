
const Heading = ({ text, w }: { text: string, w?: number }) => {
    return (
        <div className="relative h-10 text-center self-center flex justify-center items-center ">
            <h2 className="inline px-2 text-xl text-marks-700 font-bold uppercase m-auto border-marks-100 heading">{text}</h2>
            <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 ${w ? `w-${w}` : 'w-20'} h-0.5 bg-gradient-to-r from-marks-100 to-teal-600`}></div>
        </div>
    )
}

export default Heading