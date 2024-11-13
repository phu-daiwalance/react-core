import React, { FC } from 'react';
import "./Dashboard.scss"; 
import { Image } from "../../atoms/Image";
import {Images} from "../../../configs/images";

interface DashboardProps {
    title?: string;
}

const Dashboard: FC<DashboardProps> = ({ title }) => {


    return (
        <div className="dashboard">
            <div>
                <h1 className="question question-2" >1, On the header bar, move the Searchbar to the right and 10px to the right</h1>
                <p>- Actual: </p>
                <Image variant='sidebar-img' srcImg={Images.BugImgOne} />
                <p>- Expected:</p>
                <Image variant='sidebar-img' srcImg={Images.BugImgOneResult} />
            </div>
            <div>
                <h1 className="question question-1">2, Arrange the blocks below in the correct order: 1, 2, 3, 4, 5</h1>
                <ul className="list">
                    <li className="item item-1">1</li>
                    <li className="item item-2">2</li>
                    <li className="item item-5">5</li>
                    <li className="item item-4">4</li>
                    <li className="item item-3">3</li>
                </ul>
            </div>
            <div>
                <h1 className="question question-2" >3, Return the screen to the size of Iphone SE (375x667), fix the layout of sentence 2 as shown below</h1>
                <Image variant='sidebar-img-2' srcImg={Images.BugImgTwoResult} />
            </div>
            
        </div>
    );
};

export default Dashboard;