import {useRouter} from 'next/router'

function Doc (){

    const router = useRouter()
    const {params1 = []}= router.query           //params> folder name, multiple routes can gets
    console.log(params1)

    return (

      <h1>param 1 {params1[0]} param 2 {params1[1]} {params1[2]}</h1>
      


      )
}
 
export default Doc 
