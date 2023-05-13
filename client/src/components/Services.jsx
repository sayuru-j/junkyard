import services from "../constants/services";

function Services() {
  return (
    <div className="lg:py-40 py-10 lg:h-screen">
      <h1 className="py-5 font-bold text-primary text-[35px]">Services</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/50 p-4 hover:bg-primary hover:text-white lg:h-auto h-48 shadow-sm rounded text-primary transition-all duration-200 ease-out hover:translate-y-1 cursor-pointer"
          >
            {service.icon}
            <h1 className="font-bold">{service.title}</h1>
            <p className="font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
