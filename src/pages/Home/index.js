import { useEffect, useMemo, useState} from "react";

import Video from "./components/Video";

function Home() {
  useEffect(() => {
    document.getElementById("focus").focus()
    window.scrollTo(0,0) 
  }, []);
  return (
    <div
      id="focus"
      tabIndex="1"
      className="flex flex-col items-center  "
    > 
    <Video />
    <Video />
    <Video />
    <Video />
    <Video />
    <Video />
    <Video />
    </div>
    )
    }
    export const useElementOnScreen = (options, targetRef) => {
        const [isVisibile, setIsVisible] = useState();
        const callbackFunction = (entries) => {
          const [entry] = entries; //const entry = entries[0]
          setIsVisible(entry.isIntersecting);
        };
        const optionsMemo = useMemo(() => {
          return options;
        }, [options]);
        useEffect(() => {
          const observer = new IntersectionObserver(callbackFunction, optionsMemo);
          const currentTarget = targetRef.current;
          if (currentTarget) observer.observe(currentTarget);
      
          return () => {
            if (currentTarget) observer.unobserve(currentTarget);
          };
        }, [targetRef, optionsMemo]);
        return isVisibile;
      };
      
export default Home;
