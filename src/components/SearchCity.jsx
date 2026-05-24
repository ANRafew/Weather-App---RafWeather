import { useState } from "react";

function SearchCity({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text); // pass value to App
  };

  return (
    <div className="text-center">
        <p className="py-10 text-xl font-bold">OR</p>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="italic text-white px-5 bg-gray-900/70 w-80 h-10 rounded-l-4xl border-0 focus:outline-none"
                placeholder="eg: Dhaka,BD"
            />
            <button type="submit" className="bg-gray-900/70 w-9 h-10 rounded-r-4xl"><i className="fa-solid fa-magnifying-glass text-blue-500"></i></button>
        </form>
    </div>
  );
}

export default SearchCity;
