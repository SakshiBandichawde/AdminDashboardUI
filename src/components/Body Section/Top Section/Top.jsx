import React from "react";
import './top.css'
import './top.scss';
import { BsSearch } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import User1 from '../../../assets/user-1.jpg'
import PlantImg from '../../../assets/PlantImg.png';
import Video from '../../../assets/natureVideo.mp4';
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";






const Top=()=>{
    return(
        <div className="topSection">
         <div className="headerSection flex">
            <div className="title">
                <h1>Welcome to FreshMart</h1>
                <p>Hello IndiaTech, Welcome back!</p>
            </div>

            <div className="searchBar flex">
                <input type="text" placeholder="Search Dashboard" />
                <BsSearch className="icon" />
            </div>

            <div className="adminDiv flex">
            <TbMessageCircle2Filled className="icon" />
            <IoMdNotificationsOutline className="icon" />
            <div className="adminImage">
                <img src={User1} alt="Admin Image" />
            </div>
            </div>
         </div>

         <div className="cardSection flex">
            <div className="rightCard flex">
                <h1>Create and sell Extraordinary products</h1>
                <p>The world's fast growing industry today are natural made products!</p>

                <div className="button flex">
                    <button className="btn">Explore More</button>
                    <button className="btn transparent">Top Sellers</button>
                </div>

                <div className="videoDiv">
                    <video src={Video} autoPlay loop muted></video>
                </div>
            </div>

            <div className="leftCard flex">
                <div className="main flex">
                    <div className="textDiv">
                        <h1>My Start</h1>

                        <div className="flex">
                            <span>
                                Today <br/><small>4 Orders</small>
                            </span>
                            <span>
                                This Month <br/><small>175 Orders</small>
                            </span>
                        </div>
                        <span className="flex link">
                            Go to my Orders <BsArrowRightShort className="icon" />

                        </span>
                    </div>

                    <div className="imgDiv">
                        <img src={PlantImg} alt="Image Name" />
                    </div>

                    <div className="sideBarCard">
                           <BsQuestionCircle className="icon" />
                           <div className="cardContent">
                           <div className="circle1"></div>
                           <div className="circle2"></div>

                           <h3>Help Center</h3>
                           <p>Having trouble in Planti, please contact us from for more questions.</p>
                           <button className="btn">Go to Help Center</button>
                          </div>
                 </div>

                   
                </div>
            </div>
         </div>
        </div>
    )
}
export default Top