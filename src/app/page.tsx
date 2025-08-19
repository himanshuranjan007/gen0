import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

import { caller ,trpc} from "@/trpc/server"
import {getQueryClient} from "@/trpc/server"
import { Client } from "./client"
import { Suspense } from "react"

export default async function Home() {

  const queryClient=getQueryClient();
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"antonio prefetch"}))  //prefetch query , void cuz it doesnt return anything , it just prefetch the query


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
    <Client/>
    </Suspense>
    </HydrationBoundary>
  );
}
