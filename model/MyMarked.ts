import { marked } from 'marked'

marked.setOptions({ mangle: false, headerIds: false })


export const myMarked = {
    marked
}