# Spark Avenue — Website

A modern and responsive digital marketing agency website built with Next.js and deployed on Vercel.

## Technologies Used

* Next.js
* React.js
* JavaScript
* CSS
* GitHub
* Vercel

---

## Getting Started

Follow the steps below to run the project locally.

### 1. Install Node.js

If Node.js is not already installed on your computer, download and install it from the official website:

https://nodejs.org

### 2. Clone the Repository

Clone the GitHub repository and navigate into the project folder:

```bash
git clone https://github.com/asmanoor-cmd/sparke-avenue.git
cd sparke-avenue
```

### 3. Install Dependencies

Run the following command:

```bash
npm install
```

### 4. Start the Development Server

Run:

```bash
npm run dev
```

### 5. Open the Website

Open the following URL in your browser:

```text
http://localhost:3000
```

The website should now be running locally.

---

## Deployment

The website is deployed using Vercel.

### Deploy with Vercel

1. Push the project to a GitHub repository.
2. Sign in to Vercel using your GitHub account.
3. Select **Add New Project**.
4. Import the `sparke-avenue` GitHub repository.
5. Click **Deploy**.
6. Vercel will build and deploy the website automatically.

After deployment, Vercel will provide a live `.vercel.app` URL.

---

## Custom Domain

The website uses the following custom domain:

```text
https://sparkeavenue.com
```

The domain is registered with Hostinger and the website is deployed on Vercel.

### Connect the Domain to Vercel

1. Open the project in Vercel.
2. Go to **Settings → Domains**.
3. Add:

```text
sparkeavenue.com
```

4. Vercel will display the required DNS records.
5. Open the domain's DNS settings in Hostinger.
6. Add or update the DNS records provided by Vercel.
7. Wait for the DNS changes to propagate.
8. Once the configuration is complete, the custom domain will point to the Vercel deployment.

---

## Website Features

* Responsive design
* Modern user interface
* Home page
* About section
* Services section
* Individual service pages
* Contact / Get in Touch section
* Social media links
* Responsive navigation
* Modern animations
* Mobile-friendly layout

---

## Services

Spark Avenue provides digital marketing and technology services, including:

* Performance Marketing
* Web Development
* Social Media Marketing
* SEO Services
* Branding & Design
* Content Creation

---

## Contact Form

The contact form is currently implemented as a frontend user interface.

### Planned Integration

The following functionality can be added:

* Connect the contact form to the business email
* Send inquiries to `info@sparkeavenue.com`
* Integrate an email or form service
* Add form validation
* Test email delivery and submissions

The same contact form system can also be integrated into individual service pages.

---

## Future Improvements

Future updates may include:

* Contact form email integration
* Official business phone number
* Official social media profile links
* Final company logo
* Portfolio and case studies
* Client testimonials
* Service packages and pricing
* SEO optimization
* Google Analytics integration
* Google Search Console integration
* Performance optimization

---

## Project Structure

The project follows the Next.js application structure:

```text
sparke-avenue/
│
├── app/
│   ├── page.js
│   └── ...
│
├── public/
│   └── ...
│
├── package.json
├── next.config.js
└── README.md
```

---

## Available Scripts

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Production Server

Start the production server:

```bash
npm start
```

---

## Development Workflow

The recommended workflow is:

```text
Local Development
       ↓
GitHub Repository
       ↓
Vercel Deployment
       ↓
Custom Domain
       ↓
Live Website
```

After making changes to the project, push the updated code to GitHub. If the repository is connected to Vercel, the latest changes can be deployed automatically.

---

## Environment Variables

If environment variables are required in the future, store them in a `.env.local` file.

**Do not upload `.env.local`, API keys, passwords, or other private credentials to GitHub.**

---

## Notes

* `node_modules` should not be uploaded to GitHub.
* Keep sensitive credentials and API keys private.
* Make sure all production environment variables are configured in Vercel.
* Test the website locally before deploying major changes.
* Keep the GitHub repository updated with the latest stable version.

---

## License

This project is developed for Spark Avenue.

