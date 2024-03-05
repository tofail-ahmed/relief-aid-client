
import { ISectionHeader } from './SectionHeader'

const SectionSubHeader = ({text,className}:ISectionHeader) => {
  return (
    <div className={`text-lg font-semibold ${className}`}>{text}</div>
  )
}

export default SectionSubHeader