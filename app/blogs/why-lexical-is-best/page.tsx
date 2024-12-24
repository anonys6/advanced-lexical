import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import image4 from "@/assets/man-writing-abc.jpg"; // Replace with your own image if needed

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
                            Lexical: The Next-Generation Text Editor That&apos;s Actually Free
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <span className="flex items-center">
                                <User size={16} className="mr-2" />
                                Admin
                            </span>
                            <span className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                Feb 15, 2025
                            </span>
                            <span className="flex items-center">
                                <Clock size={16} className="mr-2" />
                                8 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose lg:prose-lg mx-auto">
                    <p className="text-xl text-gray-600 mb-8">
                        In the ever-growing world of text editors, Lexical stands out as a
                        completely free and highly customizable solution. It&apos;s a modern,
                        open-source project that goes beyond simple typing and formatting.
                        Lexical brings advanced features to the table without pushing you
                        into monthly subscriptions or surprise fees. Let&apos;s walk through
                        what makes it special.
                    </p>

                    <h2>What Makes Lexical Unique?</h2>
                    <p>
                        Most text editors charge you at some point: maybe it&apos;s an upgrade
                        fee for premium features, or monthly plans that lock out tools you
                        really need. Lexical isn&apos;t like that. It&apos;s designed for
                        developers and writers who want more freedom:
                    </p>
                    <ul>
                        <li>
                            <strong>No Hidden Costs:</strong> You get all core features right
                            away, without worrying about paywalls.
                        </li>
                        <li>
                            <strong>Full Customization:</strong> You decide how the editor
                            looks, behaves, and interacts with other parts of your site or app.
                        </li>
                        <li>
                            <strong>Future-Proof:</strong> Backed by an active open-source
                            community that&apos;s always adding new capabilities.
                        </li>
                    </ul>
                    <p>
                        Think about it like this: you don&apos;t have to compromise. If you
                        want to build a sleek, minimal editor, you can do that. If you want
                        to add advanced formatting, analytics, or collaborative features,
                        you can do that, too. It&apos;s all up to you and your needs.
                    </p>

                    <h2>Key Features of Lexical</h2>
                    <p>
                        Lexical isn&apos;t just another fancy text area. It comes packed
                        with a variety of features that cater to all sorts of use cases.
                        Whether you&apos;re writing a personal blog post or developing a
                        large-scale content platform, Lexical can handle it. Here are a few
                        highlights:
                    </p>
                    <ul>
                        <li>
                            <strong>Time Travel Editing:</strong> Ever wish you could see your
                            document exactly as it was 10 edits ago? Lexical offers a
                            time-travel feature that lets you step back through changes at the
                            click of a button.
                        </li>
                        <li>
                            <strong>Collaboration-Friendly:</strong> While it&apos;s still
                            evolving, Lexical has the foundations for real-time collaboration
                            and shared editing sessions. That means multiple users can jump
                            in, make changes, and keep track of each other&apos;s edits.
                        </li>
                        <li>
                            <strong>Rich Text and Beyond:</strong> Bold, italics, images, and
                            links are just the start. Lexical can be extended to include
                            custom elements like tables, checklists, or special input widgets
                            for your unique application needs.
                        </li>
                        <li>
                            <strong>High Performance:</strong> Speed matters. Nobody wants to
                            type a sentence and see it appear a second later. Lexical aims to
                            be fast and efficient, even on older devices.
                        </li>
                        <li>
                            <strong>Modular Plugin System:</strong> You can pick and choose
                            exactly which features to include. If you need a custom plugin for
                            something unusual—like math equations or code blocks—you can build
                            that without disrupting the rest of your editor.
                        </li>
                    </ul>

                    <h3>Time Travel: The Coolest Feature</h3>
                    <p>
                        Let&apos;s talk about time travel for a moment. We all make mistakes
                        or change our minds when writing. Sometimes you just want to see how
                        your text looked before you deleted that entire paragraph. Time
                        travel lets you move through your edit history effortlessly. It
                        doesn&apos;t just store a simple stack of undo steps—it basically
                        records each version of your document. You can open up a previous
                        state, copy or review it, and then come back to the present.
                    </p>
                    <p>
                        Many paid editors boast about version history or advanced undo
                        features, but often these come with a monthly subscription. Lexical
                        says &quot;no thanks&quot; to that model. You get real versioning
                        without an extra fee.
                    </p>

                    <h2>Why Free Is Actually Better</h2>
                    <p>
                        There&apos;s a common misconception that free tools are either
                        lacking in quality or hiding the best stuff behind a paywall. That&apos;s
                        not the case with Lexical. It&apos;s developed in the open, backed by
                        contributors who believe in accessible software. Here&apos;s how
                        that helps you:
                    </p>
                    <ul>
                        <li>
                            <strong>Complete Control:</strong> You own your editor, so you can
                            tweak it to your exact requirements. No locked settings or forced
                            updates that break your workflow.
                        </li>
                        <li>
                            <strong>Cost-Effective Scaling:</strong> For businesses,
                            especially startups, not having to pay per user or per feature
                            means you can invest resources elsewhere.
                        </li>
                        <li>
                            <strong>Community Support:</strong> If you ever have questions or
                            need help, you&apos;re not dealing with some faceless ticket
                            system. You can jump on GitHub, Discord, or community forums to
                            talk directly with people who care about the project.
                        </li>
                    </ul>

                    <h2>Comparing with Other Paid Editors</h2>
                    <p>
                        Let&apos;s be honest—there are plenty of text editors out there that
                        charge monthly fees or come bundled with expensive software
                        packages. While they might offer decent features, Lexical competes
                        head-to-head without the cost:
                    </p>
                    <ul>
                        <li>
                            <strong>All Features Upfront:</strong> You won&apos;t find a
                            &quot;premium&quot; tier that locks away the good stuff. Lexical is
                            &quot;premium&quot; from the start.
                        </li>
                        <li>
                            <strong>Open-Source Flexibility:</strong> If you want a new button
                            or an extra panel, you can build it. You&apos;re not stuck waiting
                            for the company behind the editor to develop it for you.
                        </li>
                        <li>
                            <strong>Future-Driven Roadmap:</strong> With an open-source
                            roadmap, you can see what&apos;s coming next, propose features,
                            and even implement them yourself if you have the time and skill.
                        </li>
                    </ul>

                    <h2>Final Thoughts</h2>
                    <p>
                        Lexical isn&apos;t just another text editor. It&apos;s a fresh take
                        on how we write and collaborate, mixing powerful features with a
                        no-cost, open-source philosophy. If you&apos;re tired of monthly
                        bills for &quot;premium&quot; features or limited customization,
                        it&apos;s time to explore Lexical.
                    </p>
                    <p>
                        Whether you&apos;re a student looking for a free writing tool, a
                        developer who needs a text editor for your app, or a startup aiming
                        to keep costs low, Lexical fits right in. Give it a try, explore
                        time travel editing, build custom plugins, and see why so many folks
                        are calling it the next big thing in text editing.
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
                                Lexical
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Text Editor
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                Open Source
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
