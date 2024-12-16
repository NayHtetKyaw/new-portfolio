import Image from "next/image"
import { Center } from "@mantine/core"

export default function NotFound() {
  return (
    <Center>
      <Image className="rounded" src="/media/lain404.png" alt="404 lain" width={700} height={700} />
    </Center>
  )
}

