import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
          alt="Blog Post Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-gray-200 mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Articles
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Future of Web Development: What&apos;s Next After React?
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                Sarah Chen
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                Mar 28, 2024
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />6 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      1{/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            As we move into 2024 and beyond, the landscape of web development
            continues to evolve at a rapid pace. While React has dominated the
            frontend ecosystem for years, new technologies and approaches are
            emerging that could shape the future of how we build web
            applications.
          </p>

          <h2>The Rise of Meta-Frameworks</h2>
          <p>
            Meta-frameworks like Next.js and Remix have revolutionized how we
            approach React development, but the future might hold even more
            sophisticated solutions. These frameworks are increasingly focusing
            on:
          </p>
          <ul>
            <li>Enhanced build-time optimizations</li>
            <li>Improved developer experience</li>
            <li>Better integration with backend services</li>
            <li>Advanced caching strategies</li>
          </ul>

          <h2>Web Components and the Shadow DOM</h2>
          <p>
            While React components have been the go-to solution for building
            user interfaces, native web components are gaining traction. The
            Shadow DOM provides true encapsulation and better performance
            characteristics in certain scenarios.
          </p>

          <blockquote>
            &quot;The web platform is evolving to provide native solutions for
            problems we&apos;ve been solving with JavaScript frameworks.&quot;
          </blockquote>

          <h2>The Impact of AI on Development</h2>
          <p>
            Artificial Intelligence is not just changing how we write code, but
            also how we think about application architecture. AI-powered
            development tools are becoming increasingly sophisticated, offering:
          </p>
          <ul>
            <li>Automated code generation</li>
            <li>Intelligent debugging assistance</li>
            <li>Performance optimization suggestions</li>
            <li>Automated testing and quality assurance</li>
          </ul>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Share this article:</span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Tags:</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                Technology
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                Web Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
