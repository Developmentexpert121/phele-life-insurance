import React from 'react'
import * as IoIcons from "react-icons/io";

const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <IoIcons.IoIosPaper />,
        cname: 'nav-text'
    },
    {
        title: 'FAQs',
        path: '/admin/faq',
        icon: <IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'Glossary',
        path: '/admin/glossary',
        icon: <IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'News & Media',
        path: '/admin/news-media',
        icon: <IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'Insurance Company',
        path: '/admin/insurance-company',
        icon: <IoIcons.IoMdPeople />,
        cname: 'nav-text'
    },
    {
        title: 'Insurance Library',
        path: '/admin/library',
        icon: <IoIcons.IoMdPeople />,
        cname: 'nav-text'
    }

];

export default SidebarData;