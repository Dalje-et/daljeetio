import React, { useState, useEffect } from "react";

export default function ArticleProgressBar() {

    const [scroll, setScroll] = useState(0);

    function updateScroll() {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;
      setScroll(Math.round(scrollPercent));
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", updateScroll);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    });
    
    const progressBarHeight = scroll != 100 ? `h-[${scroll}%]` : "h-full";

    return (
        <div className="w-2 h-48 border-2 border-black rounded-md">
            <div className={`w-full ${progressBarHeight} bg-black`} />
        </div>
    );
}