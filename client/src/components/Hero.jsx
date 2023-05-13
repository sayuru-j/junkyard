import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="flex items-start md:justify-between mx-auto py-40 w-full">
      <div className="flex w-full flex-col space-y-4">
        <h1 className="font-bold text-[50px] text-primary">
          Reduce, Reuse, Recycle
          <span className="text-accent animate-pulse">.</span>
        </h1>

        <p className="font-medium text-primary text-xl leading-[30px] max-w-xl">
          We are dedicated to providing efficient, eco-friendly solutions for
          all your waste disposal needs. Our team of experienced professionals
          is committed to ensuring that your waste is handled in the most
          responsible manner possible.
          <span className="hidden md:block">
            We understand the importance of protecting our environment, and
            that&apos;s why we offer a wide range of services to help you manage
            your waste in a sustainable way. From recycling to hazardous waste
            disposal, we have the expertise and resources to handle all types of
            waste.
          </span>
        </p>
        <button
          className="font-medium text-md w-64 p-4 mt-5 bg-accent  rounded-full text-white hover:scale-110 transition-all duration-200 ease-out"
          type="button"
        >
          Get Rid Of Your Garbage
        </button>
      </div>
      <div className="hidden lg:flex w-full items-center justify-center">
        <img className="max-w-2xl" src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
