import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdOutlineDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();

  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} is deleted`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subHeading="hurry up"
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-black font-extrabold">
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th> Price</th>
              <th> Update</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody className="text-black font-bold">
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-error bg-orange-400 btn-m text-xl">
                      <TiEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-red-600 btn-m text-4xl"
                  >
                    <MdOutlineDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
