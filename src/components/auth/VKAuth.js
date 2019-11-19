import React from 'react';
import './Auth.css';
import VkAuth from 'react-vk-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faVk} from "@fortawesome/free-brands-svg-icons"
let Vkauth = () => {
    const handleVkResponse = (data) => {
        console.warn(data)
    }
    return (
        <VkAuth className="vk-auth fa" apiId="#######" callback={handleVkResponse}>Auth with VK<FontAwesomeIcon icon={faVk}/></VkAuth>
    );
}

export default Vkauth;
