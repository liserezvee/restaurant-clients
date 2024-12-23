import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const { name, category, recipe, price, image, _id } = useLoaderData();

  const onSubmit = async (data) => {
    //image uplaod to imgbb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //send the data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        //show success pop up
        //fetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(menuRes.data);
    }
    console.log("with img url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="update item"
        subHeading="refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="recipe name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-6">
            {/**category */}
            <div className="form-control bg-white w-full my-6">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default" placeholder="Category">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">pizza</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
                <option value="soup">soup</option>
              </select>
            </div>
            {/**price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/**recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control bg-white w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn">Update Menu Item</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
