import conf from "../conf/conf";
import { Client, ID ,Databases ,Storage ,Query } from "appwrite"; 

//CONFIGURATION OF 

export class Service{
    client = new Client ();
    databases;
    bucket;

    constructor() {  //The constructor is called automatically when an instance of the Service class is created. It’s the place to set up the initial state of an object.
        this.client
            .setEndpoint(conf.appwriteUrl) // sets the API endpoint URL, and
            .setEndpoint(conf.appwriteProjectId);  //associates the client with a specific Appwrite project.
        this.databases = new Databases (this.client);
        this.bucket = new Storage (this.client);
    }
//here we are creating the post
    async createPost ({title, slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug,
                {
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId
            }) //we are taking all these values from the appwrite docs and the video is number 21
        } catch (error) {
            console.log("Appwrite : error :createPost" , error);
            
        }
    }
    
    //here we are updating the post
    async updatePost ({slug ,title, content , featuredImage , status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug, 
                {
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite : error :updatePost" , error);
            
        }
    }
    
    async deletePost ({slug}){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug, 
                {
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId
                }
            )
            return true
        } catch (error) {
            console.log("Appwrite : error :deletePost" , error);
            return false
        }
    }
    
    async getPost ({slug}){        //here we are getting any particular post from the use of slug .
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug
            )
        } catch (error) {
            console.log("Appwrite : error :getPost" , error);
            return false
        }


    }  

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}


const service = new Service();

export default service 