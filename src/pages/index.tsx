import NameCard from "@/components/ui/NameCard";
import Navigation from "@/components/core/Navigations";
import { Container } from "@radix-ui/themes";
import { EvervaultCard } from "@components/ui/Background-Card";

export default function Home() {
  return (
    <>
      <Container>
        <Navigation />
        <EvervaultCard text="Hover"/>
        <NameCard />
      </Container>
    </>
  );
}
