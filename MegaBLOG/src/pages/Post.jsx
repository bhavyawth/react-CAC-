import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState("");

    const userData = useSelector((state) => state.auth.userData.userData);
    console.log(userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then(async (post) => {
                if (post) {
                    setPost(post);
                    const preview = appwriteService.getFileView(post.featuredImage);
                    console.log("preview in post:", preview)
                    if (preview) {
                        setImageUrl(preview); // or preview if it's already a URL
                    }
                } else {
                    navigate("/");
                }
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };



    return post ? (
        <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
            <Container>
                <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 transition-all">
                    {/* Image section */}
                    <div className="relative rounded-xl overflow-hidden mb-8 group">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={post.title}
                                className="w-full max-h-[500px] object-cover rounded-xl shadow-md transform transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                        {/* Author controls */}
                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex gap-3 z-10">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600 hover:bg-green-700 transition duration-200">
                                        ✏️ Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-600 hover:bg-red-700 transition duration-200"
                                    onClick={deletePost}
                                >
                                    🗑️ Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                            {post.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-gray-800">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>

    ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      );
}
