import React from "react";

function contact() {
  return (
    <div className="">
      <form action="">
        <label className="block"> Your Name</label>
        <input
          className="border border-black m-1  rounded-lg px-2  "
          type="text"
          placeholder="Name"
        />
        <label className="block"> Your city</label>

        <input
          className=" border border-black m-1  rounded-lg px-2 "
          placeholder="City"
        />

        <label className="block">Your massage</label>
        <textarea
          className="border border-black"
          type="text"
          placeholder="massage "
        />
        <div className="flex justify-center">
          <button
            className=" block
         bg-blue-500 border rounded-full p-0.5 m-2 "
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default contact;
