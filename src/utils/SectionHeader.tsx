
export interface ISectionHeader{
      text:string;
      className?:string;
}
const SectionHeader = ({text,className}:ISectionHeader) => {
  return (
    <div className={`text-4xl font-extrabold text-orange-500 ${className}`}>{text}</div>
  )
}

export default SectionHeader