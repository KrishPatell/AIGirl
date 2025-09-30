import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is an AI Girl Generator and how does it work?',
    answer:
      'An AI girl generator is an advanced artificial intelligence tool that creates realistic female portraits and characters using deep learning algorithms. Our AI girl generator analyzes your text prompts and generates high-quality images of women in various styles, poses, and settings. The technology uses neural networks trained on millions of images to understand facial features, body proportions, clothing, and artistic styles, allowing you to create unique AI-generated female characters instantly.',
  },
  {
    question: 'Is the AI Girl Generator completely free to use?',
    answer:
      'Yes! Our AI girl generator offers a generous free tier that includes 10 free credits to get started immediately. No credit card required, no hidden fees. Simply sign up and start creating AI girl images right away. For users who need more credits and advanced features, we offer affordable Pro plans starting at just $9/month with 500 credits and priority processing.',
  },
  {
    question: 'Can I create realistic AI girl images for commercial use?',
    answer:
      'Absolutely! Our AI girl generator grants full commercial rights to all generated images. You can use your AI-generated girl images for marketing campaigns, social media content, website designs, product presentations, and client work. Pro users get additional commercial benefits including higher resolution exports and batch generation capabilities.',
  },
  {
    question: 'What types of AI girl images can I generate?',
    answer:
      'Our AI girl generator supports a wide variety of styles and types: realistic portraits, anime characters, fantasy art, professional headshots, casual lifestyle photos, artistic illustrations, and more. You can specify age ranges, ethnicities, clothing styles, poses, backgrounds, and artistic mediums. The AI understands complex prompts and can create everything from corporate professional images to creative fantasy characters.',
  },
  {
    question: 'How accurate and realistic are the generated AI girl images?',
    answer:
      'Our AI girl generator produces incredibly realistic images with high attention to detail. The AI understands facial features, skin textures, hair styles, lighting, and proportions to create lifelike portraits. However, as with all AI-generated content, the images are synthetic creations and should not be used to impersonate real people or for deceptive purposes.',
  },
  {
    question: 'What makes this AI girl generator better than others?',
    answer:
      'Our AI girl generator stands out with its combination of speed, quality, and user-friendly interface. We offer instant generation (under 10 seconds), high-resolution outputs up to 4K, diverse style options, and a clean, intuitive design. Unlike many competitors, we provide detailed customization options, batch processing, and excellent customer support. Our AI is continuously updated to improve quality and add new features.',
  },
  {
    question: 'Can I customize the AI girl images after generation?',
    answer:
      'Yes! Our AI girl generator includes advanced customization features. You can adjust lighting, change backgrounds, modify clothing colors, adjust facial features, and apply various artistic filters. Pro users get access to advanced editing tools including pose adjustment, facial expression changes, and style transfer capabilities.',
  },
  {
    question: 'Is my data and generated content private and secure?',
    answer:
      'Privacy and security are our top priorities. All your prompts, generated images, and personal data are encrypted and stored securely. We never share your content with third parties without explicit permission. Your generated AI girl images are private to you unless you choose to share them publicly. We comply with international data protection regulations including GDPR.',
  },
  {
    question: 'What file formats are available for download?',
    answer:
      'Our AI girl generator supports multiple high-quality formats: PNG (with transparency), JPEG (optimized for web), and WebP (modern web format). Free users can download images up to 1024x1024 pixels, while Pro users get access to 4K resolution (4096x4096 pixels) and additional export options including RAW formats for professional use.',
  },
  {
    question: 'Can I use the AI girl generator on mobile devices?',
    answer:
      'Absolutely! Our AI girl generator is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. The mobile interface is optimized for touch interactions, making it easy to create AI girl images on the go. All features are available across all devices with no functionality limitations.',
  },
  {
    question: 'How do I write effective prompts for the AI girl generator?',
    answer:
      'Effective prompts should be specific and descriptive. Include details about appearance (age, hair color, eye color), clothing style, pose, background, lighting, and artistic style. For example: "Beautiful 25-year-old woman with long blonde hair, wearing elegant black dress, standing in modern office, professional lighting, photorealistic style." The more specific your prompt, the better the AI can understand and create your desired image.',
  },
  {
    question: 'Are there any content restrictions or guidelines?',
    answer:
      'Yes, we have content guidelines to ensure responsible use of our AI girl generator. We prohibit creating images of minors, explicit adult content, violent imagery, or content that could be used for harassment or impersonation. Our AI includes built-in safety filters, and all content is reviewed by our moderation system. We encourage creative, artistic, and professional use of the platform.',
  },
  {
    question: 'Can I integrate the AI girl generator into my website or application?',
    answer:
      'Yes! We offer API access for Pro users who want to integrate our AI girl generator into their own applications, websites, or services. Our REST API is well-documented and supports batch processing, custom styling, and automated workflows. Contact our support team to discuss integration options and custom solutions for your specific needs.',
  },
  {
    question: 'What kind of customer support do you provide?',
    answer:
      'We provide comprehensive customer support including email support, live chat during business hours, detailed documentation, video tutorials, and a community forum. Pro users get priority support with faster response times and dedicated account management. Our support team is knowledgeable about AI image generation and can help with technical issues, creative guidance, and account management.',
  },
  {
    question: 'How often is the AI girl generator updated with new features?',
    answer:
      'We continuously improve our AI girl generator with regular updates including new artistic styles, improved image quality, additional customization options, and performance enhancements. Major feature updates are released monthly, with smaller improvements and bug fixes delivered weekly. All users benefit from these updates automatically at no additional cost.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#050505] py-24">
      <div className="mx-auto max-w-[960px] px-5 sm:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Frequently Asked Questions About AI Girl Generator</h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            Get answers to common questions about our AI girl generator, pricing, features, and how to create stunning AI-generated images.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-white/70"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between text-left text-white"
                >
                  <span className="text-base font-semibold">{faq.question}</span>
                  <span className="text-lg">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="mt-4 text-sm leading-relaxed text-white/60">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
