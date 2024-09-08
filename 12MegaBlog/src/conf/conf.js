const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), //we are converting , whatever the type of the value of we are getting from'import.meta.env.VITE_APPWRITE_URL' into string thats for sure it'll be a string might be an empty string but string.
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf

