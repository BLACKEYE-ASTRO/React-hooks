import { useState } from "react";

export const UseState = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prev) => prev + 1);
        console.log(count);
    }
    return (
        <div className="">
            <h1 className="bg-blue-300 text-2xl font-semibold text-center py-2">useState hook</h1>
            <div className="flex flex-col justify-center items-center my-4">
                <p className="text-xl p-5">
                    Count:{count}
                </p>
                <button onClick={incrementCount} className="px-4 py-2 rounded-xl bg-red-600 text-white">Increment Count</button>
            </div>
        </div>
    )
};