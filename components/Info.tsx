import React from 'react';
import RatingRadio from './RatingRadio';

const Info = () => {
    return (
        <div className="flex h-[400px] overflow-y-scroll bg-white w-[1010px] rounded-b-lg flex-col gap-2 p-8">
            <h2 className="text-2xl font-bold mb-4">Advanced Text Editor: Edit Your Plain Text Online for FREE</h2>
            <p>In today&apos;s digital landscape, having a reliable and versatile text editor is essential. Whether you&apos;re writing an essay, coding, or drafting a blog post, the Advanced Text Editor is your free online solution for all your text editing needs.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Why Choose the Advanced Text Editor?</h3>
            <p>Our editor isn&apos;t just any plain text tool—it&apos;s packed with features designed to make your writing process smoother and more efficient.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">How It Works</h3>
            <ol className="list-decimal ml-6 mb-4">
                <li>Enter Your Text: Start by typing or pasting your content into the editor.</li>
                <li>Select Specific Text: Highlight any word, sentence, or paragraph you want to modify.</li>
                <li>Apply Formatting: Click on the desired function to instantly apply changes to the selected text.</li>
            </ol>
            <p>Tip: This flexibility allows you to customize different sections without affecting the rest of your content.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Versatile Case Conversions with Real-Life Applications</h3>
            <p>Tired of manually changing text cases? Our editor offers several case conversion options to save you time and ensure consistency.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Types of Case Conversions</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Sentence Case</strong>: Capitalizes the first letter of each sentence. Example: &quot;this is a test. it works well.&quot; becomes &quot;This is a test. It works well.&quot;</li>
                <li><strong>Lowercase</strong>: Converts all letters to lowercase. Example: &quot;HELLO WORLD!&quot; becomes &quot;hello world!&quot;</li>
                <li><strong>UPPERCASE</strong>: Converts all letters to uppercase. Example: &quot;Hello World!&quot; becomes &quot;HELLO WORLD!&quot;</li>
                <li><strong>Capitalize Case</strong>: Capitalizes the first letter of each word. Example: &quot;advanced text editor&quot; becomes &quot;Advanced Text Editor&quot;</li>
                <li><strong>Alternating Case</strong>: Alternates between uppercase and lowercase letters. Example: &quot;hello world&quot; becomes &quot;HeLlO WoRlD&quot;</li>
                <li><strong>Title Case</strong>: Capitalizes principal words, leaving minor words in lowercase. Example: &quot;the lord of the rings&quot; becomes &quot;The Lord of the Rings&quot;</li>
                <li><strong>CamelCase</strong>: Joins words without spaces, capitalizing each word except the first. Example: &quot;user login status&quot; becomes &quot;userLoginStatus&quot;</li>
                <li><strong>snake_case</strong>: Joins words with underscores, all in lowercase. Example: &quot;database connection string&quot; becomes &quot;database_connection_string&quot;</li>
                <li><strong>kebab-case</strong>: Joins words with hyphens, all in lowercase. Example: &quot;main navigation menu&quot; becomes &quot;main-navigation-menu&quot;</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Benefits of Case Conversions</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Efficiency: Quickly change text cases without manual retyping.</li>
                <li>Consistency: Maintain uniform formatting throughout your document.</li>
                <li>Readability: Improve the clarity and professional look of your content.</li>
                <li>SEO Optimization: Proper case usage can enhance search engine visibility.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Powerful Text Editing Features</h3>
            <p>Enhance your writing with tools designed to refine your text.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Formatting Tools</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Bold, Italic, Underline</strong>: Emphasize important points in your text to draw the reader&apos;s attention.</li>
                <li><strong>Headings (H1-H5)</strong>: Organize your content with clear hierarchical structures, making it easier to navigate.</li>
                <li><strong>Quotes and Code Format</strong>: Properly display quotations or code snippets to enhance clarity and understanding.</li>
                <li><strong>Bullets and Numbering</strong>: Break down information into lists for better readability and organization.</li>
                <li><strong>Color and Font Changes</strong>: Customize the appearance of your text to match your style or brand, adding visual interest.</li>
                <li><strong>Link Insertion</strong>: Embed hyperlinks directly into your text, making your content interactive and connected to additional resources.</li>
                <li><strong>Clear Formatting</strong>: Remove all styles to start fresh, ensuring your text maintains a consistent look.</li>
                <li><strong>Font Size and Paragraph Styles</strong>: Adjust text size and alignment to suit your needs, improving the overall layout and readability.</li>
            </ul>
            <p>Note: Applying these formats can make your content more engaging and easier to navigate, enhancing the overall presentation of your work.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Real-Time Counters</h3>
            <p>Stay informed about your text&apos;s metrics as you write.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Counters Available</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Character Counter</strong>: Ideal for social media posts with character limits. Example: Keeping a tweet under 280 characters.</li>
                <li><strong>Word Counter</strong>: Helps meet word count requirements for essays or articles. Example: Ensuring your blog post meets the minimum word count.</li>
                <li><strong>Sentence and Paragraph Counters</strong>: Assists in assessing the structure and flow of your writing. Example: Checking the average sentence length for readability.</li>
            </ul>
            <p>Benefit: Ensures you meet specific guidelines without manual counting.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Convenient Editing Tools</h3>
            <p>Streamline your workflow with features designed for ease of use.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Essential Tools</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Undo and Redo</strong>: Quickly reverse or reapply recent changes. Benefit: Encourages experimentation with edits, knowing you can always step back.</li>
                <li><strong>Copy and Delete</strong>: Manage your text efficiently with simple clicks. Benefit: Facilitates quick duplication or removal of content.</li>
                <li><strong>Save Text</strong>: Keep your current work safe. Benefit: Prevents data loss and allows you to revisit your work later.</li>
                <li><strong>Full-Screen Mode</strong>: Eliminate distractions by expanding the editor to fill your screen. Benefit: Enhances focus and immersion while writing.</li>
            </ul>
            <p>Tip: These functions help you focus on writing rather than dealing with complicated software.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Save and Access Your History Securely</h3>
            <p>One of our standout features is the ability to save your editing history directly in your browser&apos;s local storage.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">How It Works</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>No Account Needed</strong>: Save your work without signing up or logging in.</li>
                <li><strong>Easy Access</strong>: View your history from the left-hand side panel anytime you return to the editor.</li>
                <li><strong>Privacy Ensured</strong>: Your data stays on your device; we don&apos;t have access to it.</li>
            </ul>
            <p>Important: The history is only available on the same browser where you saved it. Benefit: You can confidently work on sensitive documents, knowing your data is secure.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Day and Night Mode for Comfortable Editing</h3>
            <p>Adjust the editor&apos;s appearance based on your preference or environment.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Modes Available</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Day Mode</strong>: Ideal for well-lit settings.</li>
                <li><strong>Night Mode</strong>: Reduces eye strain in low-light conditions.</li>
            </ul>
            <p>Tip: A simple toggle lets you switch between modes, enhancing your editing experience.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">The Benefits of Using Advanced Text Editor</h3>
            <p>Choosing our editor brings several advantages:</p>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Accessibility</strong>: It&apos;s online and free, requiring no downloads or installations.</li>
                <li><strong>User-Friendly Interface</strong>: Designed to be intuitive, so you can focus on your writing.</li>
                <li><strong>Versatility</strong>: Suitable for writers, students, developers, and anyone needing text editing tools.</li>
                <li><strong>Efficiency</strong>: Streamlines tasks that would otherwise take up valuable time.</li>
                <li><strong>Customization</strong>: Tailor the editor to fit your specific needs and preferences.</li>
            </ul>
            <p>Quote: &quot;The Advanced Text Editor has transformed how I work with text online. It&apos;s a game-changer!&quot; — Satisfied User</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Get Started Today</h3>
            <p>Why settle for less when you can have a full suite of text editing features at your fingertips? The Advanced Text Editor is ready to enhance your writing process.</p>
            <p>Try the Advanced Text Editor now and experience the difference!</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Explore More Features</h3>
            <p>Our commitment to continuous improvement means that the Advanced Text Editor will keep evolving with new features to meet your growing needs. Stay tuned for updates that will further enhance your text editing experience.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Frequently Asked Questions</h3>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Is the Advanced Text Editor free to use?</strong> Yes, our editor is completely free and available online without any hidden charges.</li>
                <li><strong>Do I need to create an account to save my work?</strong> No, you can save your editing history directly in your browser&apos;s local storage without needing to sign up or log in.</li>
                <li><strong>Can I access my saved history on different devices?</strong> Currently, the saved history is only accessible on the same browser where you saved it.</li>
                <li><strong>Is my data secure?</strong> Absolutely. Your data is stored locally on your device, ensuring that we have no access to your information.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
            <p>The Advanced Text Editor is more than just a tool—it&apos;s a comprehensive platform designed to meet all your text editing needs with ease and efficiency. From versatile case conversions and rich formatting options to real-time counters and secure history storage, our editor empowers you to create polished and professional content effortlessly.</p>
            <p>Start using the Advanced Text Editor today and take your writing to the next level!</p>
            <div className='flex items-center flex-col'>
                <RatingRadio />
            </div>
        </div>
    );
}

export default Info;
