import { Header } from "../../components/header-components/Header";
import {
  Container,
  ContainerFooter,
  ContentContainer,
  ListPost,
  TextPost,
  Title,
} from "./styles";

import img1 from "../../assets/ourstory/Img01.svg";
import img2 from "../../assets/ourstory/Img02.svg";
import { Footer } from "../../components/footer-components/Footer";

export function OurStory() {
  return (
    <ContentContainer>
      <Header />
      <Container>
        <h1>About</h1>
        <h2>Who we are and why we do what we do!</h2>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.{" "}
        </p>
        <Title>Top trends</Title>
        <img src={img1} alt="img" />
        <TextPost>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </TextPost>
        <ul>
          <ListPost>● consectetur adipiscing elit. Aliquam placerat</ListPost>
          <ListPost>● Lorem ipsum dolor sit amet consectetur </ListPost>
        </ul>
        <Title>Produced with care</Title>
        <img src={img2} alt="img" />
        <TextPost>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </TextPost>
      </Container>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </ContentContainer>
  );
}
