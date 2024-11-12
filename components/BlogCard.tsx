import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { BlogPost } from "@/app/types/blogPost";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                {post.readTime}
              </span>
            </div>
            <span className="flex items-center text-blue-600 hover:text-blue-700">
              Read more <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
