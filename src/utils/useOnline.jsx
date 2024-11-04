import React, { useEffect } from "react";

const useOnline = () => {
  const [online, setOnline] = React.useState(true);
    console.log("Calling useOnline Render phase")
  useEffect(() => {
    window.addEventListener("online", onlineF);
    window.addEventListener("offline", offlineF);

    return () => {
      window.removeEventListener("online", onlineF);
      window.removeEventListener("offline", offlineF);
      //to cleanUP the function
    };
  }, []);

  function onlineF() {
    setOnline(true);
    console.log("called online");
  }

  function offlineF() {
    setOnline(false);
    console.log("called offline");
  }

  return online;
};

export default useOnline;
