import React from "react";
import './listing.css'
import './Listing.scss';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Grocery1 from '../../../assets/grocery-1.png';
import Grocery2 from '../../../assets/grocery-2.png';
import Grocery3 from '../../../assets/grocery-3.png';
import Grocery4 from '../../../assets/grocery-4.png';
import Img1 from '../../../assets/user-1.jpg';
import Img2 from '../../../assets/user-2.png';
import Img3 from '../../../assets/user-3.jpeg';
import Img4 from '../../../assets/user-3.png';




const Listing=()=>{
    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All<BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={Grocery1} alt="" />
                <h3>Fruits</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={Grocery2} alt="" />
                <h3>Cosmetics</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={Grocery3} alt="" />
                <h3>Plant</h3>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={Grocery4} alt="" />
                <h3>Milk</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                        See All<BsArrowRightShort className="icon" />
                       </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={Img1} alt="User Image" />
                            <img src={Img2} alt="User Image" />
                            <img src={Img3} alt="User Image" />
                            <img src={Img4} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Plant solid<br/>
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                        See All<BsArrowRightShort className="icon" />
                       </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={Img1} alt="User Image" />
                            <img src={Img2} alt="User Image" />
                            <img src={Img3} alt="User Image" />
                            <img src={Img4} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                                28,556 Plant solid<br/>
                                <small>
                                    26 Sellers <span className="date">31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Listing