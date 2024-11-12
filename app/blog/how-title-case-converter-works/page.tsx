import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import image2 from "@/assets/editor.jpg";


export default function BlogPost() {
    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <Image
                    src={image2}
                    alt="Blog Post Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-6"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Articles
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Title Case Converter Online | How It Works?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <span className="flex items-center">
                                <User size={16} className="mr-2" />
                                Admin
                            </span>
                            <span className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                Nov 10, 2024
                            </span>
                            <span className="flex items-center">
                                <Clock size={16} className="mr-2" />7 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose lg:prose-lg mx-auto">
                    <p className="text-xl text-gray-600 mb-8">
                        Convert text to title case online effortlessly. Simply paste your text, and our tool automatically capitalizes titles for a polished, professional look.
                    </p>

                    <h2>What is Title Case?</h2>
                    <p>
                        In title case formatting, major words like nouns, verbs, adjectives, and adverbs are capitalized, while minor words are lowercase. For example, nouns represent people, places, and things, while verbs indicate actions.
                    </p>
                    <p>
                        Note: Not all short words are minor. Words like &quot;Is,&quot; &quot;It,&quot; and &quot;Be&quot; are capitalized in title case.
                    </p>
                    <p>
                        Title case is often used in headlines and titles to emphasize content.
                    </p>

                    <h2>Why It&apos;s Important to Use Title Case in Headings</h2>
                    <p>
                        Using all capital letters in headings can look inconsistent and lacks professionalism. Many believe title case is outdated, but it still creates a professional impression and attracts attention. Title case also improves readability for people with low vision.
                    </p>

                    <h2>Common Mistakes in Title Case and How to Avoid Them</h2>
                    <h3>Mistake #1: Capitalizing Every Word</h3>
                    <p>
                        Many assume title case means capitalizing every word. However, title case distinguishes between major and minor words.
                    </p>
                    <ul>
                        <li>
                            <strong>Example (Book Title):</strong> &quot;A Tale of Two Cities&quot; (Correct) instead of &quot;A Tale Of Two Cities.&quot;
                        </li>
                        <li>
                            <strong>Example (Article Headline):</strong> &quot;How to Master the Art of Effective Communication&quot; (Correct).
                        </li>
                    </ul>

                    <h3>Mistake #2: Lowering Every Short Word</h3>
                    <p>
                        Another common mistake is lowering all short words. Words like &quot;Do,&quot; &quot;Not,&quot; &quot;Has,&quot; and &quot;It&quot; should be capitalized in title case.
                    </p>
                    <ul>
                        <li>
                            <strong>Example (Blog Title):</strong> &quot;How to Be Successful in Your Career and Achieve Your Goals.&quot;
                        </li>
                        <li>
                            <strong>Example (Research Paper Title):</strong> &quot;The Effects of Digital Media on Children&apos;s Development.&quot;
                        </li>
                    </ul>

                    <h2>DIY Tips for Using Title Case Converter in Advanced Text Editor</h2>
                    <p>Follow these steps to use the title case converter:</p>
                    <ol>
                        <li>Go to Advanced Text Editor.</li>
                        <li>Add your original text to the editor.</li>
                        <li>Select the text and click on the Title Case button.</li>
                        <li>Your text will appear in title case.</li>
                    </ol>

                    <h2>Conclusion</h2>
                    <p>
                        Converting text to title case is simple with this tool. We hope you find it useful. Explore more conversion options in the Advanced Text Editor.
                    </p>
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
                                Writing
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Case Conversion
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Tools
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
