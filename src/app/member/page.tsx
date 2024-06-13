"use client";

import { useParams } from "next/navigation";
import { useAddMemberMutation } from "@/core/services/bookService";

const MemberPage = () => {
  const params = useParams<{ id: string }>();
  const [addMember, { isLoading, error, status, data }] = useAddMemberMutation({
    fixedCacheKey: "add-member",
  });

  return (
    <div>
      <h1>Members Data</h1>
      <p>{data?.fullname}</p>
      <p>{data?.order}</p>
      <p>{data?.is_staff}</p>
      <p>{data?. is_attend}</p>
    </div>
  );
};



export default MemberPage;
