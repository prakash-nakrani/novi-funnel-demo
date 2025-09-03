import { useEffect } from 'react';

export const useGraphAnimation = (
  withNoviPathRef: React.RefObject<SVGPathElement | null>,
  withoutNoviPathRef: React.RefObject<SVGPathElement | null>,
  withNoviDotRef: React.RefObject<SVGCircleElement | null>,
  withoutNoviDotRef: React.RefObject<SVGCircleElement | null>,
  currentWeightDotRef: React.RefObject<SVGCircleElement | null>,
  withNoviTextRef: React.RefObject<SVGTextElement | null>,
  withoutNoviTextRef: React.RefObject<SVGTextElement | null>,
  currentWeightTextRef: React.RefObject<SVGTextElement | null>,
  options: {
    withNoviSvgPath: string;
    withoutNoviSvgPath: string;
    speed: number;
    shorteningFactor: number;
  }
) => {
  const { withNoviSvgPath, withoutNoviSvgPath, speed, shorteningFactor } = options;

  useEffect(() => {
    const withNoviPath = withNoviPathRef.current;
    const withoutNoviPath = withoutNoviPathRef.current;
    const withNoviDot = withNoviDotRef.current;
    const withoutNoviDot = withoutNoviDotRef.current;
    const currentWeightDot = currentWeightDotRef.current;
    const withNoviText = withNoviTextRef.current;
    const withoutNoviText = withoutNoviTextRef.current;
    const currentWeightText = currentWeightTextRef.current;

    if (withNoviPath && withoutNoviPath && withNoviDot && withoutNoviDot && currentWeightDot && withNoviText && withoutNoviText && currentWeightText) {
      const lengthWithNovi = withNoviPath.getTotalLength();
      const lengthWithoutNovi = withoutNoviPath.getTotalLength();
      const maxLength = Math.max(lengthWithNovi, lengthWithoutNovi);

      withNoviPath.style.strokeDasharray = `${lengthWithNovi} ${lengthWithNovi}`;
      withoutNoviPath.style.strokeDasharray = `${lengthWithoutNovi} ${lengthWithoutNovi}`;
      
      withNoviText.style.opacity = '0';
      withoutNoviText.style.opacity = '0';
      withNoviDot.style.opacity = '0';
      withoutNoviDot.style.opacity = '0';
      currentWeightDot.style.opacity = '1';
      currentWeightText.style.opacity = '1';

      const start_time = performance.now();

      const animateDots = (time: number) => {
        const elapsed = time - start_time;
        const distance = (elapsed / 1000) * speed;

        if (isNaN(parseFloat(withoutNoviPath.style.strokeDashoffset)) || parseFloat(withoutNoviPath.style.strokeDashoffset) > 0) {
          withNoviPath.style.strokeDashoffset = `${lengthWithNovi - distance}`;
          withoutNoviPath.style.strokeDashoffset = `${lengthWithoutNovi - distance}`;
        }

        if (distance > 20) {
          withNoviDot.style.opacity = '1';
          withoutNoviDot.style.opacity = '0.5';
        }

        const finalLengthWithNovi = lengthWithNovi * shorteningFactor;
        if (distance <= finalLengthWithNovi) {
          const withNoviPoint = withNoviPath.getPointAtLength(distance);
          withNoviDot.setAttribute('cx', withNoviPoint.x.toString());
          withNoviDot.setAttribute('cy', withNoviPoint.y.toString());
        } else {
          const withNoviPoint = withNoviPath.getPointAtLength(finalLengthWithNovi);
          withNoviDot.setAttribute('cx', withNoviPoint.x.toString());
          withNoviDot.setAttribute('cy', withNoviPoint.y.toString());
          withNoviText.style.opacity = '1';
          withNoviText.setAttribute('x', withNoviPoint.x.toString());
          withNoviText.setAttribute('y', (withNoviPoint.y + 15).toString());
        }

        const finalLengthWithoutNovi = lengthWithoutNovi * shorteningFactor;
        if (distance <= finalLengthWithoutNovi) {
          const withoutNoviPoint = withoutNoviPath.getPointAtLength(distance);
          withoutNoviDot.setAttribute('cx', withoutNoviPoint.x.toString());
          withoutNoviDot.setAttribute('cy', withoutNoviPoint.y.toString());
        } else {
          const withoutNoviPoint = withoutNoviPath.getPointAtLength(finalLengthWithoutNovi);
          withoutNoviDot.setAttribute('cx', withoutNoviPoint.x.toString());
          withoutNoviDot.setAttribute('cy', withoutNoviPoint.y.toString());
          withoutNoviText.style.opacity = '0.5';
          withoutNoviText.setAttribute('x', withoutNoviPoint.x.toString());
          withoutNoviText.setAttribute('y', (withoutNoviPoint.y + 15).toString());
        }

        if (distance < maxLength) {
          requestAnimationFrame(animateDots);
        }
      };

      requestAnimationFrame(animateDots);
    }
  }, [withNoviPathRef, withoutNoviPathRef, withNoviDotRef, withoutNoviDotRef, currentWeightDotRef, withNoviTextRef, withoutNoviTextRef, currentWeightTextRef, speed, shorteningFactor]);

  return { withNoviSvgPath, withoutNoviSvgPath };
};
