import React from 'react';
import {NavGroupProps} from './NavGroup.props';
import './NavGroup.styles.scss';
import {Brand} from "../../molecules/Brand";
import {SideBar} from "../../molecules/Sidebar";
import {SearchBar} from "../../molecules/SearchBar";
import {Images} from "../../../configs/images";


export const NavGroup: React.FC<NavGroupProps> = ({
    oIsLink= true
}) => {

    const sidebarArr = [
        {
            name: 'I - CSS Test',
            linkIcon: Images.Book || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/dashboard',
        },
        {
            name: 'II - Javascript Test',
            linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.InboxIcon,
            imgVariantPlus: 'img-arrow',
            path: '/inbox',
        },
        {
            name: 'III - ReactJS Test',
            linkIcon: Images.Book || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.RightIcon,
            imgVariantPlus: 'img-arrow',
            path: '/action',
        },
        {
            name: 'IV - React Native Test',
            linkIcon: Images.Grade || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.ReportIcon,
            imgVariantPlus: 'img-arrow',
            path: '/reports',
        },
        {
            name: 'V - Python Test ',
            linkIcon: Images.Settings || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.ReportIcon,
            imgVariantPlus: 'img-arrow',
            path: '/setting',
        },
        {
            name: 'VI - Database Test ',
            linkIcon: Images.Settings || 'https://picsum.photos/19',
            activeObject: false,
            linkIconPlus: Images.ReportIcon,
            imgVariantPlus: 'img-arrow',
            path: '/setting',
        },

    ];

    return (
        <div className="o-nav-group">
            <Brand mVariant='m-brand'/>
            <SideBar mVariant='m-sidebar' sidebarArr={sidebarArr} isLink={oIsLink} />
        </div>
    );
};