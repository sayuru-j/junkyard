import { useEffect } from "react";

const Others = () => {
    useEffect(()=>{
            const showOnPx = 100;
            const backToTopButton = document.querySelector(".back-to-top");
            const pageProgressBar = document.querySelector(".progress-bar");

            const scrollContainer = () => {
            return document.documentElement || document.body;
            };

            const goToTop = () => {
            document.body.scrollIntoView({
                behavior: "smooth"
            });
            };

            document.addEventListener("scroll", () => {
            //console.log("Scroll Height: ", scrollContainer().scrollHeight);
            //console.log("Client Height: ", scrollContainer().clientHeight);

            const scrolledPercentage =
                (scrollContainer().scrollTop /
                (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
                100;

            pageProgressBar.style.width = `${scrolledPercentage}%`;

            if (scrollContainer().scrollTop > showOnPx) {
                backToTopButton.classList.remove("hidden");
            } else {
                backToTopButton.classList.add("hidden");
            }
            });

            backToTopButton.addEventListener("click", goToTop);
    },[])

    const backToTop = () => (
        <div>
        <div className="progress-bar" />
        <button className="back-to-top hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="back-to-top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </button>
        <div className="progress-bar"/>
        </div>
      )

    return <div>{backToTop()}</div>
}

export default Others;