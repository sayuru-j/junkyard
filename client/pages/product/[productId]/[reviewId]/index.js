import {useRouter} from 'next/router'

function Review(){

    const router = useRouter()
    const {productId, reviewId } = router.query        //acces the querty paramaeter objcts  ,query.prodcutId >oroginal name of the file

    return (
    <h1>
        reviewid {reviewId} for product {productId}
    </h1>
    )
}
export default Review