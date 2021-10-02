import { FC, HTMLAttributes } from "react";
import Image from "next/image"
import Link from "next/link"

import logo from "@/public/spyf.png"

const Logo: FC<HTMLAttributes<HTMLAnchorElement>> = (props) => {
    return (
        <Link href='/'>
            <a {...props}>
                <Image
                    src={logo}
                    alt="Sikkim Progressive Youth Forum's Logo"
                    layout='fill'
                    placeholder='blur'
                    title='Sikkim Progressive Youth Forum'
                />
            </a>
        </Link>
    )
}

export { Logo }
