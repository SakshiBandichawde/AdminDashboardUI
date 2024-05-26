import React from "react";
import './activity.css'
import { BsArrowRightShort } from "react-icons/bs";
import '../Activity Section/activity.scss';
import Img1 from '../../../assets/user-1.jpg';
import Img2 from '../../../assets/user-2.png';
import Img3 from '../../../assets/user-3.jpeg';
import Img4 from '../../../assets/user-3.png';


const Activity=()=>{
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className="btn flex">
                    See All<BsArrowRightShort className="icon" />
                </button>
            </div>

             <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={Img1} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={Img1} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={Img4} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={Img2} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={Img3} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={Img4} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Orderd Some Fruits</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
             </div>
        

        </div>
    )
}
export default Activity