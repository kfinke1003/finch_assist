import React, { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";

const CenteredCarousel = ({
  children,
  width = 500,
  height = 400,
  autoplay = true,
  autoplayDelay = 5000,
  pauseOnHover = true,
}) => {
  const [current, setCurrent] = useState(0);
  const childArr = useMemo(() => React.Children.toArray(children), [children]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % childArr.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + childArr.length) % childArr.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay]);

  const prevIndex = (current - 1 + childArr.length) % childArr.length;
  const nextIndex = (current + 1) % childArr.length;

  return (
    <Box
      className="carousel-wrapper"
      sx={{
        position: 'relative',
        width: '100%',
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* <button className="nav-button left" onClick={prevSlide}>‹</button> */}

      <Box
        className="carousel-container"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          width: '100%',
          height: '100%',
          py: '60px'
        }}
      >
        {childArr.map((child, index) => {
        //   let scale = 0.8;
          let opacity = 0;
          let display = 'none';
          let zIndex = 1;

          if (index === current) {
            // scale = 1;
            // opacity = 1;
            display = 'flex';
            zIndex = 3;
          } else if (index === prevIndex || index === nextIndex) {
            // scale = 0.95;
            // opacity = 0.6;
            display = { xs: 'none', lg: 'flex' };
            zIndex = 2;
          }

          return (
            <Box
              key={index}
              sx={{
                width: width * 0.8,
                height: '100%',
                transition: 'all 0.5s ease',
                // transform: `scale(${scale})`,
                // opacity,
                zIndex,
                display,
                flexShrink: 0,
              }}
            >
              {child}
            </Box>
          );
        })}
      </Box>

      {/* <button className="nav-button right" onClick={nextSlide}>›</button> */}
    </Box>
  );
};

export default CenteredCarousel;
