import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledFadeInOnSlide = styled.div`
  transition: opacity 0.7s;
`;

export const FadeInOnSlide: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const div = ref.current;
      const { top } = div.getBoundingClientRect();

      if (top < scrollX + innerHeight * 0.6) {
        setOpacity(1);
        window.removeEventListener('scroll', onScroll);
      } else {
        setOpacity(0);
      }
    }

    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledFadeInOnSlide ref={ref} style={{ opacity }}>
      {children}
    </StyledFadeInOnSlide>
  );
};
