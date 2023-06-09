import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;
    const fileUpload = await storage.createFile(
        "647fac40614cccd395c5",
        ID.unique(),
        file
    );

    return fileUpload;
};

export default uploadImage;
