import {
  PlusCircleIcon,
  CheckCircleIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/outline";

const services = [
  {
    title: "Waste Collection",
    description:
      "We offer waste collection services throughout Sri Lanka, keeping the environment clean and healthy for 20M+ people.",
    icon: <PlusCircleIcon className="w-5" />,
  },
  {
    title: "Recycling Centers",
    description:
      "Our goal is to establish recycling centers, creating jobs and promoting a cleaner world by conserving resources.",
    icon: <CheckCircleIcon className="w-5" />,
  },
  {
    title: "Recycled Products",
    description:
      "Recycling is a growing trend that conserves resources and helps us stay on this earth longer.",
    icon: <ShoppingBagIcon className="w-5" />,
  },
  {
    title: "Fleet Service",
    description:
      "We provide customized waste collection vehicles for efficient and effective garbage collection.",
    icon: <TruckIcon className="w-5" />,
  },
];

export default services;
