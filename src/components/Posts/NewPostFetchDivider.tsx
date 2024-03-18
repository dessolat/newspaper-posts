import { useEffect, useRef } from 'react';

type Props = { onIntersect: () => void };

const NewPostFetchDivider = ({ onIntersect }: Props) => {
  const intersectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!intersectionRef.current) return;

    let options = {
      root: null,
      rootMargin: '0px 0px',
      threshold: 0
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          onIntersect();
        }
      });
    }, options);

    observer.observe(intersectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={intersectionRef}></div>;
};
export default NewPostFetchDivider;
