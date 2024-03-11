import Link from 'next/link';
import React from 'react'
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

export default function Navbar() {

    const socialMedia = [
        {
            Link: '#',
            Label: 'Instagram',
            Icon: SiInstagram,
        },
        {
            Link: '#',
            Label: 'Github',
            Icon: SiGithub,
        },
        {
            Link: '#',
            Label: 'Discord',
            Icon: SiDiscord,
        },
    ];

  return (
    <div class="navbar bg-base-100 flex justify-between items-center px-10">
        <a className='text-2xl font-bold cursor-pointer'>Avrilio</a>
        <div class="flex items-center">
            <ul class="menu menu-horizontal px-1 gap-1">
                {socialMedia.map((socialMedia, index) => {
                    const Icon = socialMedia.Icon;

                    return (
                        <li key={index}> 
                            <Link
                                href={socialMedia.Link}
                                aria-label={socialMedia.Label}
                            >
                                <Icon />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
  )
}
