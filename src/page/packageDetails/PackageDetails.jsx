import { useParams } from "react-router-dom"
import Cover from "../../components/cover/Cover"

const PackageDetails = () => {
    const {id} = useParams()


  return (
    <div>
        <Cover />
    </div>
  )
}

export default PackageDetails