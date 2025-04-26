import conf from '../conf/conf.js';
import { Account, Client, ID } from "appwrite";

if (!import.meta.env.VITE_APPWRITE_URL) {
  console.error("⚠️ Appwrite URL is undefined!");
}

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client 
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({email, password}) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,   
        password
      );


      if(userAccount){
        //call another method taaki direct login hojaye
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}) {
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
}

  

  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession('current'); // explicit
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

}

const authService = new AuthService

export default authService;