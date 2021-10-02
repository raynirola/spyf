import { FC } from "react";
import Image from "next/image";

import { Member } from "@/models";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/utils/icons";

interface TeamMemberProps{
    member: Member
}

const TeamMember:FC<TeamMemberProps> = ({member}) => {
    return (
        <div className="p-4 bg-white">
            <div className="h-full flex items-start text-left">
                <div className="relative flex-shrink-0 rounded-lg overflow-hidden w-14 h-14 sm:w-16 sm:h-16">
                    <Image src={member.avatar} layout="fill" title={member.name} alt={`Avatar of ${member.name}`}/>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium sm:text-sm md:text-base text-gray-700">{member.name}</h2>
                    <h3 className="text-gray-400 text-xs font-light mb-3 sm:mb-1 md:mb-3">{member.designation}</h3>
                    <p className="mb-4 text-sm sm:text-xs md:text-sm leading-tight text-gray-600 line-clamp-3">
                        {member.bio}
                    </p>
                    <div className="inline-flex space-x-2 text-gray-600 justify-end w-full">
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <FacebookIcon className='w-3 h-3 text-gray-700 group-hover:text-[#1877F2]'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <TwitterIcon className='w-3 h-3 text-gray-700 group-hover:text-[#1DA1F2]'/>
                        </div>
                        <div
                            className='flex items-center justify-center w-6 h-6 transition duration-300 ease-in-out bg-gray-200 rounded-md cursor-pointer group hover:bg-white'>
                            <InstagramIcon className='w-3 h-3 text-gray-700 group-hover:text-[#E4405F]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { TeamMember };