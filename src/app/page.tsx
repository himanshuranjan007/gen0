
import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
import { useTRPC } from "@/trpc/client"
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query"


import { caller ,trpc} from "@/trpc/server"
import {getQueryClient} from "@/trpc/server"
import { Client } from "./client"
import { Suspense } from "react"

export default async function Home() {

  const queryClient=getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"antonio prefetch"}))  //prefetch query

  const data= await caller.hello({text:"antonio"})
 



  


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading...</div>}>
    <Client/>
    </Suspense>
    </HydrationBoundary>
  );
}
