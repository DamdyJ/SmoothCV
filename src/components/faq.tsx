interface FAQEntry {
    title: string;
    answer: string;
}

const faqEntries: FAQEntry[] = [
    {
        title: "How do I create a resume?",
        answer: "To create a resume, simply sign up for SmoothCV and follow the guided steps to enter your information. Our intuitive interface will help you build a professional resume in minutes.",
    },
    {
        title: "Can I customize my resume template?",
        answer: "Yes, you can choose from a variety of professionally designed templates and customize them to fit your style and industry. Our editor allows you to tweak fonts, colors, and layouts to create a unique resume.",
    },
    {
        title: "Is my data secure with SmoothCV?",
        answer: "Absolutely. We take data security seriously and use encryption to protect your personal information. Your data is stored securely and will never be shared with third parties without your consent.",
    },
    {
        title: "Can I download my resume in different formats?",
        answer: "Yes, once you've finished creating your resume, you can download it in various formats such as PDF, Word, or plain text. Choose the format that best suits your needs and preferences.",
    },
    {
        title: "How can I get help if I have questions?",
        answer: "If you have any questions or need assistance, our support team is here to help. You can reach out to us through email or live chat, and we'll be happy to assist you with any inquiries or concerns you may have.",
    },
];

export default function FAQ() {
    return (
        <>
            <section className="w-full px-4 lg:px-6" id="faq">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex flex-col md:grid md:grid-cols-2">
                        <h2 className="text-3xl py-4 font-extrabold">
                            Frequently Asked Questions
                        </h2>
                        <div>
                            {faqEntries.map((entry, index) => (
                                <div
                                    className="collapse collapse-plus hover:text-primary"
                                    key={index}
                                >
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-semibold">
                                        {entry.title}
                                    </div>
                                    <div className="border-content mx-auto my-4 w-full border-b"></div>
                                    <div className="collapse-content">
                                        <p>{entry.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
