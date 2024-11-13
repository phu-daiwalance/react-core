import React, { FC } from 'react';

interface SettingProps {
    title?: string;
}

const Inbox: FC<SettingProps> = ({ title }) => {
    return (
        <>
            <h1 className="question question-2" >1, Cho mảng <b style={mystyle}>candidates= {"[{age:10}, {age:20}, {age:10}]"}</b>. Viết script tính tổng <b style={mystyle}>age</b> có trong candidates.</h1>
            <iframe className="doc" src="https://www.programiz.com/javascript/online-compiler/" height="1000px" width="100%"/>
        </>
    );
};

export default Inbox;

const mystyle = {
    color: "black",
    fontFamily: "Arial",
    fontWeight: 700,
  }; 