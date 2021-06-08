import React, { useState, crceateContext, createContext } from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = props => {

    const [projects, setProjects] = useState([
        {
            id: 0,
            name: 'Google',
            tagname: '#Google',
            category: 1,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.google.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        },
        {
            id: 1,
            name: 'Facebook',
            tagname: '#Facebook',
            category: 2,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.facebook.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        },
        {
            id: 2,
            name: 'Twitter',
            tagname: '#Twitter',
            category: 1,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.twitter.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        },
        {
            id: 3,
            name: 'YouTube',
            tagname: '#Youtube',
            category: 2,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.youtube.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        },
        {
            id: 4,
            name: 'Skype',
            tagname: '#Skype',
            category: 2,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.skype.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        },
        {
            id: 5,
            name: 'Telegram',
            tagname: '#Telegram',
            category: 2,
            description: 'Quisque in tempor sapien, et cursus neque. Nunc pulvinar diam ac dapibus mollis. Etiam id iaculis lorem. Donec bibendum volutpat ante, eu consequat nisi suscipit at. Etiam interdum augue dolor, id auctor felis volutpat sed. Phasellus id ex ultrices, tempus leo eget, volutpat diam. In sit amet magna faucibus, molestie nisi in, hendrerit libero. Morbi auctor velit sagittis, elementum lorem eget, imperdiet nisl.',
            link: 'http://www.telegram.it',
            thumbimage: 'assets/images/portfolio/thumbs/image_1.jpg',
            popupimage: 'assets/images/portfolio/image_1.jpg'
        }
    ])

    return (
        <ProjectsContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectsContext.Provider>
    );
}