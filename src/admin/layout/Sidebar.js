import  React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cname : 'nav-text'
    },
    {
        title: 'Report',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cname : 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cname : 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cname : 'nav-text'
    }

];

export default SidebarData;