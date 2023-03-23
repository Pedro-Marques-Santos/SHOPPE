import { Line } from "../Line";
import { Menu } from "../Menu";
import { Container, ContainerIcons } from "./styles";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <Container>
      <Line />
      <Menu />
      <ContainerIcons>
        <a href="##">
          <AiFillLinkedin />
        </a>
        <a href="##">
          <AiFillGithub />
        </a>
        <a href="##">
          <AiFillInstagram />
        </a>
      </ContainerIcons>
    </Container>
  );
}
