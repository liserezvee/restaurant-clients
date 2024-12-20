import React from "react";

import chefService from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div className="mb-10">
      <img src={chefService} alt="" />
      <div className="lg:max-w-5xl p-7 text-center text-black bg-white lg:-mt-40 lg:-translate-y-40  lg:translate-x-0 mx-auto">
        <h2 className="text-4xl uppercase">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto <br /> ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
