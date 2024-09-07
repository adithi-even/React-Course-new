import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"; //Client, Account, ID: These are classes from the Appwrite SDK.
// Client: Used to interact with the Appwrite server.
// Account: Contains methods to manage user accounts.
// ID: Provides utilities for handling unique IDs.


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
        this.account = new Account (this.client);
    }

    async createAccount({email, password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email, password,name); //here we are creating hte account so inside the braces these are the eleements required for creating th euser account 
            if (userAccount) {
                //call another method
                return this.login({email , password});  // so once the account is created this returning the login will make the user automatically once they create the account or else the user has to again login through their email after creating the account 

            }else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async  login({email , password , name}){
        try {
            return await this.account.createEmailPasswordSession(email , password); //here we are logging in the user so these are the credentials that is required for the user to login 

        } catch (error) {
            return error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();   
        } catch (error) {
            console.log("Appwrite::error::get CurrentUser" , error);
            
        }
        return null
    }

    async logout (){
        try {
           return await this.account.deleteSessions('current')
        } catch (error) {
            console.log("Appwrite::error::get logout" , error);
            
        }

        return null 
    }
}



const authService = new AuthService ()

export default AuthService