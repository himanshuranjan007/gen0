"use client"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"




export default function Home() {
  const trpc =useTRPC();
  
  const {data} = useQuery(trpc.hello.queryOptions({text:"antonio"}))


  // console.log(data)

  


  return (
    <div>
      {JSON.stringify(data)}
      {/* <div>hello world</div> */}

    </div>  
  );
}
