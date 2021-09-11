import fs from "fs"
import path from "path"

export const postPath = path.join(process.cwd(), "posts")

export const postFilePaths = fs.readdirSync(postPath).filter((path) => /\.mdx?$/.test(path))
