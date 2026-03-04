import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password }) {
    try {
      const user = await this.account.create({
        userId: ID.unique(),
        email,
        password,
      });

      if (user) {
        this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({ email, password });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return error.message
    }
  }

  async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        throw new Error(error)
    }
  }
}

const authService = new AuthService();

export default authService;
