import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

interface UniqueOverlayProps {
  children?: ReactNode;
}

export default function UniqueOverlay({ children }: UniqueOverlayProps) {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="https://youtu.be/Mf4Se4ZGcG8" target="_blank">aprendi na rocketseat</a>
          </li>
          <li>
            <a href="https://github.com/helioLJ" target="_blank">por HélioJ</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
