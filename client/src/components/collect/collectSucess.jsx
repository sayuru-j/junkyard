import { CheckCircleIcon } from "@heroicons/react/outline";

function collectSuccessful() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <CheckCircleIcon className="w-48 text-green-500" />
      <h1 className="font-bold text-[20px] text-green-700">
        Collection Request Successfully Added!
      </h1>
    </div>
  );
}

export default collectSuccessful;
