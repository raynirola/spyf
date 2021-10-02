import { FC } from "react";

import { Footer, Header } from "@/components";

const AppLayout: FC = ({children}) => (
    <div className='transition-all duration-300 ease-in-out bg-gray-100'>
        <Header/>
        {children}
        <Footer/>
    </div>
);

export { AppLayout }
