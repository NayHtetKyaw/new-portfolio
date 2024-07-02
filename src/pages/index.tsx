import NameCard from "@/components/ui/NameCard";
import About from "@/components/ui/About";
import { Container, Separator } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Container>
        <NameCard />
        <Separator my="5" size="4" />
        <About />
      </Container>
    </>
  );
}

