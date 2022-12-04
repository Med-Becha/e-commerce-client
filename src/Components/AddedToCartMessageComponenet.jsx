import {Alert, Button} from "react-bootstrap"
import {useState} from "react"
import {Link} from "react-router-dom"

const AddedToCartMessageComponenet = () => {
    const [show, setShow] = useState(true)
    return (
        <Alert show={show} variant='success' onClose={() => setShow(false)} dismissible>
            <Alert.Heading>The product was added to your cart!</Alert.Heading>
            <Button variant="success">Go back</Button>{" "}
            <Link to="/cart"><Button variant="danger">Go to cart</Button></Link>
            
        </Alert>
    )
}

export default AddedToCartMessageComponenet
