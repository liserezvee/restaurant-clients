import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/others/authentication2.png";
import Swal from "sweetalert2";
import "./SignUp.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const logUser = result.user;
      console.log("logged user", logUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          //create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to db");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up</title>
      </Helmet>
      <div className="hero bg-white bgImage">
        <div className="hero-content w-full flex flex-col md:flex-row  shadow-2xl">
          <div className="card text-center w-full md:w-1/2 bgImage shadow-2xl ">
            <h2 className="font-extrabold text-black mt-4">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 ">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-400 ">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400 ">Minimum six Character</span>
                )}
                {/* {errors.password?.type === "pattern" && (
                <span className="text-red-400 ">
                  Password must be one lower case one uppercase, one number &
                  one special character
                </span>pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
              )} */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-orange-500 text-white"
                  type="submit"
                  value="Sign up"
                />
              </div>
            </form>
            <div className="mb-6 text-center">
              <h3 className="text-orange-500">
                Already registered? Go to
                <Link to="/login" className="font-extrabold">
                  {" "}
                  Log in
                </Link>
              </h3>
            </div>
          </div>
          <div className="w-ull md:w-1/2">
            <img src={signUpImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
