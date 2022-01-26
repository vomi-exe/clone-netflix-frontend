import { useState } from "react";
import { PlayArrow, AddOutlined, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import "./listItem.scss";

const ListItem = ({ index, setNum, num }) => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5, marginRight: (num === index) && "230px" }}
            onMouseEnter={() => { setIsHovered(true); setNum(index - 1); }}
            onMouseLeave={() => { setIsHovered(false); setNum(-1) }}

        >
            <img
                src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                alt=""
            />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <AddOutlined />
                    <ThumbUpAltOutlined />
                    <ThumbDownOutlined />
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 min</span>
                    <span className="limit">+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Deserunt impedit nam eveniet voluptates est minus.
                </div>
                <div className="genre">Action</div>
            </div>
        </div>
    );
};

export default ListItem;