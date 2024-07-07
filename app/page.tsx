import { Main } from "@/app/components/main";
import { Container } from "@/components/container";
import { DataService } from "@/services";
import { Card } from "@/components/card";

export default function Home() {
  const cards = DataService.getStubData();
  const projectCard = DataService.getProjectStubData();
  return (
    <Main>
      <Container>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              styles={card.styles}
            />
          );
        })}
      </Container>
      <Container height="50%">
        <Card
          key={projectCard.id}
          id={projectCard.id}
          title={projectCard.title}
          description={projectCard.description}
          styles={projectCard.styles}
        />
      </Container>
    </Main>
  );
}
