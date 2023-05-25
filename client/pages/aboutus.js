import Layout from "../components/Layout";


const AboutUsPage = () => {

    return <Layout>
        <div className="container vh aboutus-os">
            <div className="row">
                <div className="col-sm">
                    <h5>About Us</h5>
            <p className="text-os">JUNKYARD is a leading environmental services company in Sri Lanka, offering a wide range of services in solid waste management, liquid waste management, and soil remediation. </p>

            <p>With strategically located operations throughout Sri Lanka, JUNKYARD is uniquely equipped to tackle any environmental challenge with unparalleled commitment to safety and customer service.</p>

            <p>Our distinctive fleet of trucks and equipment is a recognizable sight across the country, as we provide a comprehensive range of environmental and industrial services to businesses, communities, and households alike. Our consolidated and sophisticated approach ensures that our customers' needs are always met.</p>

            <p>At JUNKYARD, we pride ourselves on our ability to deliver robust, integrated solutions that are traditionally provided by multiple third parties. Our success lies in the diversity of our services, and our commitment to providing a single efficient company for all of our customers' environmental needs.</p>

            <p>We believe in encouraging greater environmental responsibility by providing safe, accessible, and cost-effective solutions to our customers and the communities we serve. JUNKYARD is committed to ensuring that Sri Lanka remains a green and sustainable country for generations to come.</p>
            </div>
            <div className="col-sm">
                <div className="img-pad">
                    <img className="img-fluid text-center" alt="about-us" src="/static/images/about-us.png"/>
                </div>
            </div>
            </div>
        </div>

        
    </Layout>
}

export default AboutUsPage;