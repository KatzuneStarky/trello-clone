import { storage } from "@/appwrite";

const getUrl = async(image: Image) => {
    const url = storage.getFilePreview(image.bucketId, image.fileID)
    return url
}

export default getUrl