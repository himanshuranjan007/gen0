import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
import { useTRPC } from "@/trpc/client"
export default async function Home() {

  const users = await prisma.post.findUnique({
    where: {
      id: 1
    }
  })

  return (
    <div>
      <Button variant="link">Click me</Button>
      <div>{JSON.stringify(users)} </div>
    </div>
  );
}
