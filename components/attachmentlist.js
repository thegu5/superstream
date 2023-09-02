import Attachment from './attachment.js'
export default function AttachmentList ({materials}) {
    return (
        materials?.map((material) => {
        <Attachment material={material} />
    }))
}