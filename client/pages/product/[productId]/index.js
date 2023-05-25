import {useRouter} from 'next/router'

function ProductDetails(){

    const router = useRouter()
    const prodcutId = router.query.productId    //acces the querty paramaeter objcts  ,query.prodcutId >oroginal name of the file

    return <h1>Details about product {prodcutId}</h1>

}
export default ProductDetails