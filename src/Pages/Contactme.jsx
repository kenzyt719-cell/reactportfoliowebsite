import React , {useState} from "react";
import "./Contactme.css";
import { supabase } from "../Supabase";

import Nav from "../Components/Layout/Nav";
import Footer from "../Components/Layout/Footer";
import FlowingMenu from "../Components/Layout/FlowingMenu";

import bgImg from "../Assets/bgvid.png";
import img1 from "../Assets/bgvid.png";
import img2 from "../Assets/bar.png";
import img3 from "../Assets/WHATDOIDO.png";

const Contactme = () => {
  const[first_name,setfirst_name] = useState("");
  const[email,setemail] = useState("");
  const[last_name,setlast_name] = useState("");
  const[msg,setMsg] = useState("");
  async function sendMsg(){
    const res = await supabase.from("contactus_main").insert({"first_name":first_name,"last_name":last_name,"email":email,"msg":msg,});
                                                           
  }

  return (
    <>
      <Nav />

      <div
        className="contactbg"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="contactustext">Contact us</h1>

        <div className="stylecontactf">
          {/* LEFT SIDE */}
          <div className="stylequestoins1">
            <h1 className="questionstext">HAVE ANY QUESTIONS ?</h1>

            <h1 className="questionstext2">
              If you have questions or anything <br />
              you need to know we would be <br />
              happy to help you as soon as possible.
            </h1>

            <h1 className="questionstext">E-MAIL</h1>
            <h1 className="questionstext2">Kenzyt719@gmail.com</h1>

            <h1 className="questionstext">NUMBER</h1>
            <h1 className="questionstext2">01095006444</h1>
          </div>

    
          <form className="stylenamedivs">
            <h1 className="questionstext">NAME</h1>

            <div className="styledivs">

              <label className="buttoncontact">
                <input onChange={(i)=>{setfirst_name(i.target.value)}}
                  type="text"
                  placeholder="First Name"
                  className="inputcontact"
                />
              </label>

              <label className="buttoncontact">
                <input onChange={(i)=>{setlast_name(i.target.value)}}

                  type="text"
                  placeholder="Last Name"
                  className="inputcontact"
                />
              </label>
            </div>

            <h1 className="questionstext">EMAIL</h1>
            <div className="styledivs">
              <label className="buttoncontact2">
                      <input onChange={(i)=>{setemail(i.target.value)}}


                  type="email"
                  placeholder="Your Email"
                  className="inputcontact"
                />
              </label>
            </div>

            <h1 className="questionstext">MESSAGE</h1>
            <div className="styledivs">
              <label className="buttoncontact2">
                     <input onChange={(i)=>{setMsg(i.target.value)}}

                  type="text"
                  placeholder="Write your message"
                  className="inputcontact"
                />
              </label>
            </div>

           
            <div className="contact-btn-wrapper">

            </div>
            {/* <button onClick={()=>{console.log(title)}}>test value</button> */}
          </form>
              <button onClick={sendMsg} className="hire-btn">Send Message</button>
        </div>
      </div>
      

      <div style={{ height: "100vh", backgroundColor: "#020103" }}>
        <FlowingMenu
          items={[
            { text: "UI / UX", link: "#", image: img1 },
            { text: "Branding", link: "#", image: img2 },
            { text: "Web Development", link: "#", image: img3 },
          ]}
        />
      </div>

      <Footer />
      
    </>
  );
};

export default Contactme;