import type { BlogPost, BlogCategory, BlogTag } from '../types/blog';

const now = new Date();

export const mockPosts: BlogPost[] = [
  {
    id: 'mock-01',
    slug: 'ai-girl-image-generation-guide',
    title: 'Complete Guide to Creating Stunning AI Girl Images',
    hero_image_url: '/gallery/hero-night-strike.png',
    excerpt:
      'Master the art of AI girl image generation with our comprehensive guide covering prompts, styles, and advanced techniques.',
    content_html: `
      <p>Creating beautiful AI girl images requires understanding the right prompts, styles, and techniques. This guide will teach you everything you need to know to generate professional-quality AI portraits and characters.</p>
      <h2>1. Understanding AI Image Generation</h2>
      <p>AI image generators use advanced neural networks to create images based on text descriptions. The key is crafting detailed, specific prompts that guide the AI to produce exactly what you envision.</p>
      <ul>
        <li><strong>Prompt Structure:</strong> Start with the main subject, add descriptive details, then specify style and quality.</li>
        <li><strong>Negative Prompts:</strong> Use these to exclude unwanted elements like "blurry, low quality, distorted".</li>
        <li><strong>Style Keywords:</strong> Include terms like "photorealistic", "anime", "digital art" to control the aesthetic.</li>
      </ul>
      <h2>2. Essential Prompt Components</h2>
      <p>Every successful AI girl image prompt should include:</p>
      <pre><code>"Beautiful young woman, long flowing hair, elegant dress, soft lighting, photorealistic, high quality, detailed"</code></pre>
      <p>Break down your prompt into clear sections: subject, appearance, setting, style, and quality modifiers.</p>
      <h2>3. Popular AI Girl Styles</h2>
      <p>Different styles create different moods and aesthetics:</p>
      <ul>
        <li><strong>Photorealistic:</strong> For lifelike portraits that look like professional photography</li>
        <li><strong>Anime/Manga:</strong> For stylized characters with large eyes and vibrant colors</li>
        <li><strong>Fantasy:</strong> For magical or otherworldly characters with mystical elements</li>
        <li><strong>Portrait:</strong> For focused head-and-shoulders shots with detailed facial features</li>
      </ul>
      <h2>4. Advanced Techniques</h2>
      <p>Once you master basic prompts, try these advanced techniques:</p>
      <ul>
        <li><strong>Seed Control:</strong> Use the same seed number to generate variations of successful images</li>
        <li><strong>Upscaling:</strong> Enhance low-resolution images to higher quality</li>
        <li><strong>Style Transfer:</strong> Apply artistic styles to your generated images</li>
        <li><strong>Face Swapping:</strong> Combine different facial features for unique results</li>
      </ul>
      <blockquote>"The best AI images come from clear, detailed prompts that paint a vivid picture in words." – VIXLOR Team</blockquote>
      <p>Ready to create your first masterpiece? Try our AI Girl Generator with these techniques and see the amazing results you can achieve!</p>
    `,
    category: 'Tutorial',
    category_slug: 'tutorial',
    tags: ['guide', 'prompts', 'techniques'],
    published_at: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: 'AI Girl Image Generation Guide - VIXLOR',
    seo_description:
      'Learn how to create stunning AI girl images with our comprehensive guide covering prompts, styles, and advanced generation techniques.',
  },
  {
    id: 'mock-02',
    slug: 'best-ai-girl-prompts',
    title: '50 Best AI Girl Generation Prompts That Work',
    hero_image_url: '/gallery/hero-fox-bunny.png',
    excerpt:
      'Discover the most effective prompts for creating beautiful AI girl images across different styles and themes.',
    content_html: `
      <p>Having the right prompts is crucial for generating amazing AI girl images. Here are 50 proven prompts that consistently produce high-quality results.</p>
      <h2>Photorealistic Portraits</h2>
      <ul>
        <li>"Beautiful young woman, natural makeup, soft smile, professional headshot, high resolution"</li>
        <li>"Elegant woman in evening dress, studio lighting, fashion photography style"</li>
        <li>"Casual portrait of smiling girl, natural lighting, warm tones, detailed skin texture"</li>
      </ul>
      <h2>Anime & Manga Style</h2>
      <ul>
        <li>"Anime girl with large eyes, colorful hair, school uniform, manga art style"</li>
        <li>"Kawaii character, pastel colors, cute expression, anime illustration"</li>
        <li>"Fantasy anime girl, magical outfit, sparkling effects, detailed artwork"</li>
      </ul>
      <h2>Fantasy & Character Design</h2>
      <ul>
        <li>"Fantasy princess, elaborate gown, castle background, digital painting"</li>
        <li>"Warrior girl, armor, sword, fantasy art style, detailed character design"</li>
        <li>"Elven maiden, pointed ears, flowing dress, mystical forest setting"</li>
      </ul>
      <h2>Creative & Artistic</h2>
      <ul>
        <li>"Art nouveau portrait, decorative elements, vintage style, artistic illustration"</li>
        <li>"Cyberpunk girl, neon lights, futuristic outfit, sci-fi art style"</li>
        <li>"Steampunk character, Victorian fashion, mechanical elements, detailed design"</li>
      </ul>
      <h2>Pro Tips for Better Results</h2>
      <ol>
        <li><strong>Be Specific:</strong> Include details about hair color, eye color, clothing, and setting</li>
        <li><strong>Add Quality Terms:</strong> Use words like "high quality", "detailed", "professional"</li>
        <li><strong>Specify Style:</strong> Always include the art style you want (photorealistic, anime, etc.)</li>
        <li><strong>Use Negative Prompts:</strong> Exclude unwanted elements like "blurry", "low quality"</li>
      </ol>
      <p>Try these prompts in our AI Girl Generator and experiment with variations to find your perfect style!</p>
    `,
    category: 'Prompts',
    category_slug: 'prompts',
    tags: ['prompts', 'tutorial', 'tips'],
    published_at: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: 'Best AI Girl Generation Prompts - 50 Working Examples',
    seo_description:
      'Discover 50 proven prompts for creating stunning AI girl images. Perfect for beginners and advanced users looking for inspiration.',
  },
  {
    id: 'mock-03',
    slug: 'ai-image-quality-tips',
    title: 'How to Get High-Quality AI Girl Images Every Time',
    hero_image_url: '/gallery/hero-cosmic.png',
    excerpt:
      'Learn the secrets to consistently generating high-quality AI girl images with proper settings and techniques.',
    content_html: `
      <p>Getting consistently high-quality results from AI image generators requires understanding the right settings, techniques, and optimization strategies.</p>
      <h2>1. Optimize Your Prompts</h2>
      <p>The foundation of great AI images starts with well-crafted prompts:</p>
      <ul>
        <li><strong>Length Matters:</strong> Aim for 10-20 descriptive words for best results</li>
        <li><strong>Be Specific:</strong> Include details about lighting, pose, clothing, and style</li>
        <li><strong>Use Quality Keywords:</strong> Add "high quality", "detailed", "professional" to your prompts</li>
        <li><strong>Order Matters:</strong> Put the most important elements first in your prompt</li>
      </ul>
      <h2>2. Choose the Right Settings</h2>
      <p>Generator settings significantly impact image quality:</p>
      <ul>
        <li><strong>Resolution:</strong> Use the highest available resolution for your generator</li>
        <li><strong>Steps:</strong> Higher step counts generally produce better quality (20-50 steps)</li>
        <li><strong>Guidance Scale:</strong> Balance creativity with prompt adherence (7-12 range works well)</li>
        <li><strong>Sampler:</strong> DPM++ 2M Karras or Euler A often produce excellent results</li>
      </ul>
      <h2>3. Use Negative Prompts Effectively</h2>
      <p>Negative prompts help exclude unwanted elements:</p>
      <pre><code>"blurry, low quality, distorted, ugly, deformed, bad anatomy, extra limbs"</code></pre>
      <h2>4. Post-Processing Techniques</h2>
      <p>Enhance your generated images with these techniques:</p>
      <ul>
        <li><strong>Upscaling:</strong> Use AI upscaling tools to increase resolution</li>
        <li><strong>Face Enhancement:</strong> Improve facial details with specialized tools</li>
        <li><strong>Color Correction:</strong> Adjust brightness, contrast, and saturation</li>
        <li><strong>Noise Reduction:</strong> Clean up artifacts and imperfections</li>
      </ul>
      <h2>5. Batch Generation Strategy</h2>
      <p>Generate multiple variations to find the perfect image:</p>
      <ul>
        <li>Create 4-8 variations with the same prompt</li>
        <li>Use different seeds to explore variations</li>
        <li>Save the best results and iterate on successful prompts</li>
        <li>Build a library of working prompts for future use</li>
      </ul>
      <blockquote>"Quality comes from iteration. Generate many variations, learn what works, and refine your approach." – AI Art Expert</blockquote>
      <p>Master these techniques and you'll consistently create stunning AI girl images that exceed your expectations!</p>
    `,
    category: 'Tips',
    category_slug: 'tips',
    tags: ['quality', 'settings', 'optimization'],
    published_at: new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    seo_title: 'High-Quality AI Girl Images - Expert Tips & Techniques',
    seo_description:
      'Learn how to consistently generate high-quality AI girl images with expert tips on prompts, settings, and post-processing techniques.',
  }
];

export const mockCategories: BlogCategory[] = [
  { id: '1', name: 'Tutorial', slug: 'tutorial', description: 'Step-by-step guides and tutorials' },
  { id: '2', name: 'Prompts', slug: 'prompts', description: 'Prompt collections and examples' },
  { id: '3', name: 'Tips', slug: 'tips', description: 'Tips and tricks for better results' },
  { id: '4', name: 'News', slug: 'news', description: 'Latest updates and announcements' }
];

export const mockTags: BlogTag[] = [
  { id: '1', name: 'guide', slug: 'guide', description: 'Comprehensive guides' },
  { id: '2', name: 'prompts', slug: 'prompts', description: 'Prompt-related content' },
  { id: '3', name: 'techniques', slug: 'techniques', description: 'Advanced techniques' },
  { id: '4', name: 'tutorial', slug: 'tutorial', description: 'Tutorial content' },
  { id: '5', name: 'tips', slug: 'tips', description: 'Helpful tips' },
  { id: '6', name: 'quality', slug: 'quality', description: 'Quality improvement' },
  { id: '7', name: 'settings', slug: 'settings', description: 'Generator settings' },
  { id: '8', name: 'optimization', slug: 'optimization', description: 'Performance optimization' }
];