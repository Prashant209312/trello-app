"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <div>
      <UserButton afterSignOutUrl="/">A</UserButton>
    </div>
  );
};

export default ProtectedPage;
