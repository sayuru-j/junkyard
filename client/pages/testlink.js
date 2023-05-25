import Link from 'next/link'
import Layout from "../components/Layout";


const testlink = () => {
    return ( 
        <Layout>
        <div>
           <Link href="/test">test</Link> <br/><br/><br/>
           <Link href="/ninja">ninja</Link><br/><br/><br/>
           <Link href="/ninja/test2">sub folder</Link>
        </div>
        </Layout>
    );
}
 
export default testlink;