import NameCard from "@/components/ui/NameCard";
import Navigation from "@/components/core/Navigations";
import { Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Container>
        {/* <Navigation /> */}
        <NameCard />
      </Container>
    </>
  );
}
