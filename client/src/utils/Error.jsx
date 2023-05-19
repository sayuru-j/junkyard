import { PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import useTimeout from "./CustomHooks/useTimeout";

function Error({ message }) {
  const [isDisplaying, setDisplaying] = useState(true);

  // useTimeout(() => {
  //   setDisplaying(false);
  // }, 3000);

  return (
    <>
      {isDisplaying && (
        <div className="fixed left-2 bottom-2 z-20 w-full">
          <div className="flex py-2 px-2 bg-red-50 max-w-sm rounded-md border-[1.5px] border-red-600 gap-2 items-center">
            <PlusCircleIcon className="w-5 rotate-45 text-red-600" />
            <h1 className="text-red-600 font-medium text-sm">{message}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Error;
