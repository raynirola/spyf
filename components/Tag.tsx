import { FC } from "react";

interface TagProps {
    tag: string
}

const Tag: FC<TagProps> = ({tag}) => {
    return (
        <div className="mr-4 mt-2">
            <span className="text-gray-300">#</span>
            {tag}
        </div>
    )
}

export { Tag }