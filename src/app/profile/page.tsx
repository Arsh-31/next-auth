"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function page() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    const res = await axios.post("/api/users/profile");
    console.log(res.data);

    setData(res.data.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg text-muted-foreground text-center mb-3">
              {data === "nothing" ? (
                "Nothing"
              ) : (
                <Link
                  href={`/profile/${data}`}
                  className="text-primary hover:underline"
                >
                  {data}
                </Link>
              )}
            </h2>

            <hr />

            <div className="flex gap-6 mt-5 justify-center">
              <Button onClick={logout}>Logout</Button>
              <Button onClick={getUserDetails} variant="outline">
                User details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
