import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Div, InnerDiv, DivCard } from "./style";

interface Projeto {
  nameCard: string;
  descriptionCard: string;
  svg: string;
  link: string;
}

interface CardsConquistaProps {
  data: Projeto[];
}

export function Card_projetos({ data }: CardsConquistaProps) {
  console.log(data);
  return (
    <Div>
      <InnerDiv>
        {data.map((projeto: Projeto, index: number) => {
          const IconComponent = projeto.svg;
          return (
            <DivCard key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={IconComponent}
                    alt="Imagem de projeto"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {projeto.nameCard}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {projeto.descriptionCard}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={projeto.link}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </DivCard>
          );
        })}
      </InnerDiv>
    </Div>
  );
}
