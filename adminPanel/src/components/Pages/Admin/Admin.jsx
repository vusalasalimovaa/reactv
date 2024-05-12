import React, { useEffect } from "react";
import { getAllDatas } from "../../../services";
import { BASE_URL } from "../../../services/api";
import reducer from "../../Reducers/reducer";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Admin = ({ state, dispatch }) => {
  useEffect(() => {
    getAllDatas(BASE_URL).then((data) => {
      console.log(
        data.map((elem) => {
          console.log(elem);
        })
      );

      dispatch({
        type: "SET_PRODUCTS",
        products: data,
      });
    });
  }, []);
  const { products } = state;
  return (
    <>
      <>
        {/* component */}
        <div style={{ margin: "auto" }} className="container">
          <h1 className="mb-8"></h1>
          <table className="text-left w-full">
            <thead className="bg-black flex text-white w-full">
              <tr className="flex w-full mb-4">
                <th className="p-4 w-1/4">Company Name</th>
                <th className="p-4 w-1/4">Contact Name</th>
                <th className="p-4 w-1/4">City</th>
                <th className="p-4 w-1/4">Region</th>
                <th className="p-4 w-1/4">Delete</th>
                <th className="p-4 w-1/4">Edit</th>
              </tr>
            </thead>
            {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
            <tbody
              className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
              style={{ height: "50vh" }}
            >
              {products?.map((elem) => {
                return (
                  <tr className="flex w-full mb-4">
                    <td className="p-4 w-1/4">{elem.id}</td>
                    <td className="p-4 w-1/4">{elem.title}</td>
                    <td className="p-4 w-1/4">{elem.price}</td>
                    <td className="p-4 w-1/4">{elem.address.region}</td>
                    <td className="p-4 w-1/4">
                      <button
                        onClick={() => {
                          let arr = state.products.filter(
                            (el) => el.id != elem.id
                          );

                          dispatch({ type: "SET_PRODUCTS", products: arr });
                          axios.delete(
                            `https://northwind.vercel.app/api/suppliers/${elem.id}`
                          );
                        }}
                        className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="p-4 w-1/4">
                      <button className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default Admin;
