import conf from "../conf/conf";
import {  Client, ID, Databases, Storage, Query, Account } from "appwrite";

if (!conf.appwriteProjectId || !conf.appwriteUrl) {
  console.warn("Missing Appwrite config. Check conf.js");
}

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
      this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

      this.account = new Account(this.client);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      if (!userId) {
        console.error("User ID is missing.");
        return;
      }
  
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service :: createPost :: error", error);
      return false;
    }
  }
  
  async updatePost(slug, {title, content, featuredImage, status}) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log("appwrite service :: updatepost :: error", error);
      return false
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )

      return true
    } catch (error) {
      console.log("appwrite service :: deletepost :: error", error);
      return false
    }
  }

  // Example of how getPost might look like
async getPost(slug) {
  try {
      const response = await this.databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug // or your post document ID
      );
      console.log("Fetched Post inside getPost:", response); // Log response here
      return response;
  } catch (error) {
      console.error("Error fetching post:", error);
      return null;
  }
}


  async getPosts() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,     //"<DATABASE_ID>"
        conf.appwriteCollectionId,  //"<COLLECTION_ID>"
        [
          Query.equal('status', 'active')  //query - indexes banane pr hi queries laga sakte ho wrna nahi lagegi
        ]
      )
    } catch (error) {
      console.log("appwrite service :: getpostS :: error", error);
      return false
    }
  }
                                                            //file wali bkchodi//
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId, //'[BUCKET_ID]'
        ID.unique(),
        file
    );
  } catch (error) {
      console.log("appwrite service :: uploadfile :: error", error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true
    } catch (error) {
      console.log("appwrite service :: deletefile :: error", error);
      return false
    }
  }

  getFileView(fileId) {
    try {
      const url = this.bucket.getFileView(conf.appwriteBucketId, fileId);
      console.log("File View URL:", url);
      return url;
    } catch (error) {
      console.log("appwrite service :: getFileView :: error", error);
      return false;
    }
  }
  
}

const service = new Service();

export default service;
