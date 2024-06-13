"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddMemberMutation } from "@/core/services/bookService";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { useRouter } from "next/navigation";

const MemberForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigator = useRouter();
  const dispatch = useDispatch();
  const [addMember, { isLoading, error, status }] = useAddMemberMutation({
    fixedCacheKey: "add-member",
  });

  useEffect(() => {
    if (status == QueryStatus.fulfilled) {
      navigator.push("/member");
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMember({
      fullname: name,
      is_attend: true,
      is_staff: true,
      order: 1,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-20 mt-20 bg-gray-100 rounded-md shadow-lg w-[800px] mx-auto"
      >
        <div className="mb-5">
          <label
            htmlFor="order"
            className="block text-gray-700 font-semibold mb-2"
          >
            Order:
          </label>
          <input
            id="order"
            type="number"
            name="order"
            value={number}
            className="w-full h-10 rounded-md border border-gray-300 px-3"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full name:
          </label>
          <input
            id="name"
            type="text"
            name="fullname"
            value={name}
            className="w-full h-10 rounded-md border border-gray-300 px-3"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5 flex items-center">
          <input id="isStaff" type="checkbox" className="mr-2" />
          <label htmlFor="isStaff" className="text-gray-700 font-semibold">
            Is staff
          </label>
        </div>
        <div className="mb-5 flex items-center">
          <input id="isAttend" type="checkbox" className="mr-2" />
          <label htmlFor="isAttend" className="text-gray-700 font-semibold">
            Is attend
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          {isLoading ? "Adding..." : "Add Member"}
        </button>
      </form>

      {error && <div>Error: {error as string}</div>}
    </div>
  );
};

export default MemberForm;
