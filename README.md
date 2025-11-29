# Ask Do Good - Personal Blog & Transparency Site

A personal blog showcasing a journey of health, recovery, and authentic living. Built with React 19, Tailwind CSS 4, and modern web technologies.

## 🌟 Features

- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Modern Stack**: React 19, Tailwind CSS 4, TypeScript

## 📄 Pages

1. **Home** - Hero section with journey overview and featured topics
2. **About** - Personal story and values
3. **Blog** - Article listing with search functionality
4. **Blog Posts** - Individual article pages with rich content
5. **My Journey** - Timeline of transformation milestones
6. **Contact** - Contact form for visitor engagement

## 🎨 Design

- **Color Palette**: Warm earth tones (terracotta, sage green, warm beige)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Style**: Clean, authentic, professional yet approachable

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables

The project uses the following environment variables (automatically injected):
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Website ID for analytics
- `VITE_APP_TITLE` - Site title
- `VITE_APP_LOGO` - Site logo URL

## 📝 Content Management

### Adding Blog Posts

1. Add post data to `/client/src/pages/Blog.tsx` in the `blogPosts` array
2. Add post content to `/client/src/pages/BlogPost.tsx` in the `blogPostsContent` object
3. Update `/client/public/sitemap.xml` with the new post URL

### Updating Images

Images are stored in `/client/public/`. To replace:
1. Add new image to `/client/public/`
2. Update references in page components
3. Ensure images are optimized for web (recommended: < 500KB)

## 🔍 SEO Optimization

### Current SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast loading times
- ✅ Mobile-responsive
- ✅ Accessible (WCAG compliant)

### SEO Best Practices Implemented

1. **Title Tags**: Unique, descriptive titles for each page (50-60 characters)
2. **Meta Descriptions**: Compelling descriptions (150-160 characters)
3. **Header Tags**: Proper H1-H6 hierarchy
4. **Alt Text**: All images have descriptive alt attributes
5. **Internal Linking**: Strategic links between related content
6. **URL Structure**: Clean, descriptive URLs
7. **Page Speed**: Optimized for fast loading
8. **Mobile-First**: Responsive design for all devices

### Improving SEO Rankings

To further improve search rankings:

1. **Content Strategy**
   - Publish regularly (aim for 2-4 posts per month)
   - Focus on long-form content (1500+ words)
   - Use keyword research tools (Google Keyword Planner, Ahrefs)
   - Target long-tail keywords with lower competition

2. **Technical SEO**
   - Submit sitemap to Google Search Console
   - Monitor Core Web Vitals
   - Ensure HTTPS is enabled
   - Implement structured data (JSON-LD)

3. **Off-Page SEO**
   - Build quality backlinks from reputable sites
   - Share content on social media
   - Guest post on related blogs
   - Engage with community forums

4. **Local SEO** (if applicable)
   - Create Google Business Profile
   - Get listed in relevant directories
   - Encourage reviews

## 📊 Analytics

The site includes Umami analytics for privacy-friendly tracking. View metrics in the Management UI Dashboard.

## 🌐 Deployment

### Using Manus Platform

1. Create a checkpoint:
   ```bash
   # Checkpoint is created via Management UI
   ```

2. Click "Publish" in the Management UI header

3. Your site will be deployed to `https://[your-prefix].manus.space`

### Custom Domain

To use `askdogood.com`:

1. Go to Management UI → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Enable SSL (automatic)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Icons**: Lucide React
- **Markdown**: Streamdown
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📄 License

MIT License - feel free to use this as a template for your own personal blog!

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome via the contact form.

## 📞 Contact

Visit the [Contact Page](https://askdogood.com/contact) to get in touch.

---

**Built with ❤️ and transparency**
