import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import image1 from "@/assets/editing-tools.jpg";


export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={image1}
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
              Sentence Case Converter Online | How It Works?
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
            Transform text to sentence case online with ease. Paste your content, and our tool adjusts capitalization to ensure proper sentence structure.
          </p>

          <h2>What is Sentence Case?</h2>
          <p>
            In sentence case formatting, the first letter of the sentence or a title is capitalized, and the rest of the words are lowercase unless proper nouns are used. For example, “India Gate is situated in New Delhi.”
          </p>
          <p>
            A proper noun specifies a unique name, place, or thing, including organizations, companies, and book titles.
          </p>
          <p>
            When writing an article, research paper, or magazine piece, understanding capitalization rules ensures clarity and professionalism. This guide explains sentence case usage with examples.
          </p>

          <h2>How to Use Sentence Case?</h2>
          <p>
            To use sentence case, capitalize the first letter of the first word in titles, subheadings, and paragraphs. Also, capitalize proper nouns such as names (e.g., “John”), places (e.g., “London”), and things (e.g., “the Taj Mahal”).
          </p>
          <p>Example: The easiest way to create a website</p>

          <h2>Sentence Case vs Title Case</h2>
          <p>
            Sentence case capitalizes only the first word and proper nouns, while title case capitalizes most words in headings. Both formats differ in style, emphasizing readability in sentence case and formality in title case.
          </p>

          <blockquote>
            &quot;In sentence case, proper nouns are capitalized, but the emphasis is on simplicity and readability.&quot;
          </blockquote>

          <h2>When to Use Sentence Case?</h2>
          <p>
            Use sentence case according to specific guidelines or stylistic choices. For personal projects, like blog writing or social media captions, sentence case provides a relaxed tone.
          </p>

          <h2>Sentence Case Examples</h2>
          <ul>
            <li>
              <strong>Regular Sentences:</strong> &quot;The meeting is scheduled for 10 a.m. tomorrow.&quot;
            </li>
            <li>
              <strong>Headings and Subheadings:</strong> &quot;How to create a budget plan.&quot;
            </li>
            <li>
              <strong>Email Subject Lines:</strong> &quot;Update on the project deadline.&quot;
            </li>
            <li>
              <strong>Captions:</strong> &quot;The sunrise over the mountains was breathtaking.&quot;
            </li>
            <li>
              <strong>Informal Notes:</strong> &quot;Don&apos;t forget to call Sarah about the event.&quot;
            </li>
          </ul>

          <h2>Sentence Case Converter - Online Tools</h2>
          <p>
            Various free tools help convert text to sentence case online. You can paste text, apply sentence case formatting, and ensure compliance with your guidelines.
          </p>

          <h2>Advanced Text Editor</h2>
          <p>
            Our advanced converter tool assists in applying sentence case formatting easily. Simply paste text, select sentence case, and copy the adjusted content.
          </p>

          <h2>Additional Tools</h2>
          <ul>
            <li>
              <strong>Case Converter:</strong> Input text, select “Sentence case,” and convert. The tool ignores names and places, and the output can be downloaded or copied.
            </li>
            <li>
              <strong>Title Case Converter:</strong> This tool corrects capitalization in different languages and highlights any changes made.
            </li>
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
