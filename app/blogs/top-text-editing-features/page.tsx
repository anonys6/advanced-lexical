import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import image4 from "@/assets/man-writing-abc.jpg";


export default function BlogPost() {
    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh]">
                <Image
                    src={image4}
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
                            Top 5 Online Text Editing Features in Advanced Text Editor
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
                        Use our free online text editing features and edit your content like never before. Discover and make your editing task fast using Advanced Text Editor.
                    </p>

                    <h2>Top 5 Features of Advanced Text Editor</h2>
                    <p>
                        Advanced Text Editor offers over 10+ online text editing features like case conversion, character count, word count, bold &amp; italic, and more. With the Find and Replace tool, editors can complete tasks in one go, saving valuable time.
                    </p>

                    <h2>What is Advanced Text Editor?</h2>
                    <p>
                        It&apos;s a free online tool for editing both long and short-form content quickly. Perfect for tasks like on-page SEO, adding headings, formatting, applying bullet points, and inserting links.
                    </p>

                    <h2>How is Advanced Text Editor Unique?</h2>
                    <p>
                        First, it&apos;s completely free and built on React JS, making it search engine-friendly, fast, and highly performant. You can use it an unlimited number of times without cost.
                    </p>
                    <p>
                        Second, all editing and formatting tools are in one place. Third, you can save your edited content as a .txt file with one click. Lastly, if you accidentally close the browser, your content will still be available when you reopen the editor from the same browser.
                    </p>

                    <h2>Top 5 Features of Advanced Text Editor</h2>
                    <h3>1. Sentence Case</h3>
                    <p>
                        This feature converts text to Sentence Case with one click, perfect for correcting capitalization in a large block of text.
                    </p>
                    <p><strong>Example:</strong></p>
                    <ol>
                        <li>Select and copy the text you want to convert to Sentence Case.</li>
                        <li>Paste the text in the editor and select it again.</li>
                        <li>Click the &quot;Sentence Case&quot; button.</li>
                    </ol>

                    <h3>2. Lower Case</h3>
                    <p>
                        Change text to lowercase effortlessly, ideal for SEO tasks such as creating lists of lowercase keywords for meta tags.
                    </p>
                    <p><strong>Example:</strong> Use the Lower Case option to format a list of keywords in lowercase for SEO purposes.</p>

                    <h3>3. Upper Case</h3>
                    <p>
                        Convert text to uppercase for headlines in social media posts or important headings to make them stand out and attract attention.
                    </p>
                    <p><strong>Example:</strong> Use UPPER CASE to make bold headlines for social media designs.</p>

                    <h3>4. Capitalise Case</h3>
                    <p>
                        This option formats text to capitalize the first letter of each word, useful for headings or titles.
                    </p>
                    <p><strong>Example:</strong> &quot;Google Is The Best Search Engine Tool&quot; demonstrates how each word is capitalized.</p>

                    <h3>5. Kebab Case</h3>
                    <p>
                        Perfect for creating SEO-friendly URLs, this feature transforms text to kebab-case, connecting words with hyphens.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                        With the features of Advanced Text Editor, you can streamline your daily text editing tasks. Try out these features to see how they improve your workflow. If you have suggestions or feedback, please send it here.
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
                                Text Editing
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Tools
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Productivity
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
