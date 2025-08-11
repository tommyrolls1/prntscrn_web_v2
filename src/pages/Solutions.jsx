import { useParams } from 'react-router-dom'
import SolutionsIndex from './solutions/index'

const Solutions = () => {
  const { id } = useParams()
  return <SolutionsIndex initialId={id} />
}

export default Solutions
