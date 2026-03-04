import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);

    this.databases = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: slug,
        data: { title, content, featuredImg, status, userId },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.createRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: slug,
        data: { title, content, featuredImg, status },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: slug,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getRow({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        rowId: slug,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listRows({
        databaseId: conf.appwriteDatabaseID,
        tableId: conf.appwriteTableID,
        queries: queries,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async uploadFile(file) {
    try {
      await this.storage.createFile({
        bucketId: conf.appwriteBucketID,
        fileId: ID.unique(),
        file,
      });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile({
        bucketId: conf.appwriteBucketID,
        fileId,
      });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview({
      bucketId: conf.appwriteBucketID,
      fileId,
    });
  }
}

const service = new Service();

export default service;
