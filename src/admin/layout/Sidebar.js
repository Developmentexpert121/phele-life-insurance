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
    },
    {
        title: 'Insurance Company',
        path:'/admin/insurance-company',
        icon:<IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'Insurance Library',
        path:'/admin/library',
        icon:<IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'FAQs',
        path:'/admin/faq',
        icon:<IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'Glossary',
        path:'/admin/glossary',
        icon:<IoIcons.IoMdPeople />,
        cname: 'nav-text'
    }

];

export default SidebarData;