import { useEffect, useMemo, useState } from 'react';

export const useMediaQuery = (query) => {
   const mediaMatch = useMemo(() => window.matchMedia(query), []);

   const [matches, setMatches] = useState(mediaMatch.matches);

   useEffect(() => {
      const handler = (e) => setMatches(e.matches);

      if ('addEventListener' in mediaMatch) {
         mediaMatch.addEventListener('change', handler);
      }
      // polyfill for IOS 13
      if ('addListener' in mediaMatch) {
         mediaMatch.addListener(handler);
      }

      return () => {
         if ('addEventListener' in mediaMatch) {
            mediaMatch.removeEventListener('change', handler);
         }
         // polyfill for IOS 13
         if ('addListener' in mediaMatch) {
            mediaMatch.removeListener(handler);
         }
      };
   }, []);

   return matches;
};