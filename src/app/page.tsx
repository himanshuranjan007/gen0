import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"
export default async function Home() {

  const users = await prisma.post.findMany()

  return (
    <div>
      <Button variant="link">Click me</Button>
      <div>{JSON.stringify(users)} </div>
    </div>
  );
}

