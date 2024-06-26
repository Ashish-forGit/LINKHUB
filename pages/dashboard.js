import React, { useEffect, useState, useContext } from "react";
import LinkBox from "../components/LinkBox";
import UserHeader from "../components/UserHeader";
import {toast} from 'react-toastify';
import UserContext from "../context/userContext";


const dashboard = () => {

  const [data, setData] = useState({});
   const { setUserData } = useContext(UserContext);

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login");
      fetch("https://linkhub-server-g1sd.onrender.com/data/dashboard", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("LinkTreeToken")
        })
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error happened");
        setData(data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        toast.success(data.message)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="">
        <UserHeader/>
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox lbTitle='Links' lbNumber={data.links} lbSvg='url' lbTheme='red' />
            <LinkBox lbTitle='Growth' lbNumber='30%' lbSvg='growth' lbTheme='blue' />
            <LinkBox lbTitle='Links' lbNumber='12' lbSvg='email' lbTheme='red' />
            <LinkBox lbTitle='Growth' lbNumber='30%' lbSvg='ig' lbTheme='blue' />
          </section>

          <section>
            
          </section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
