import { CheckCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import useTimeout from "./CustomHooks/useTimeout";

function Success({ message }) {
  const [isDisplaying, setDisplaying] = useState(true);

  useTimeout(() => {
    setDisplaying(false);
  }, 3000);

  return (
    <>
      {isDisplaying && (
        <div className="fixed left-2 bottom-2 z-20 w-full">
          <div className="flex py-2 px-2 bg-green-50 max-w-sm rounded-md border-[1.5px] border-green-600 gap-2 items-center">
            <CheckCircleIcon className="w-5 text-green-600" />
            <h1 className="text-green-600 font-medium text-sm">{message}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Success;
