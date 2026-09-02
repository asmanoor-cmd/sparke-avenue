# Sparke Avenue — Website (Next.js)

## Project ko apne computer pe chalane ke liye:

1. Node.js install karo (agar nahi hai): https://nodejs.org
2. Terminal me is folder ke andar jao aur likho:
   ```
   npm install
   npm run dev
   ```
3. Browser me kholo: http://localhost:3000

## Vercel pe deploy karne ke liye (free hosting):

1. Is poore folder ko GitHub pe ek naya repository bana kar upload karo
   (GitHub Desktop app se asaan hoga agar command line comfortable nahi hai)
2. https://vercel.com pe jao, GitHub se sign up/login karo
3. "Add New Project" → apni GitHub repo select karo → "Deploy" pe click karo
4. 1-2 minute me site live ho jayegi (ek vercel.app wala free link milega)

## Namecheap domain ko Vercel se connect karne ke liye:

1. Vercel project ke "Settings" → "Domains" me jao
2. Apna domain likho: `sparkeavenue.com` → Add
3. Vercel aapko kuch DNS records (A record / CNAME) dega
4. Namecheap account me domain ke "Advanced DNS" section me ja kar wahi records add kar do
5. 10-30 minute me domain live ho jayega (kabhi kabhi kuch ghante bhi lag sakte hain)

## Baad me add karna hai:
- Contact form ko Zoho Mail/ZeptoMail se connect karna (abhi sirf UI hai)
- Real phone number daalna (`app/page.js` me `+92 XXX XXXXXXX` dhoondo)
- Real logo image (`/public` folder me daal kar `<img>` se use kar sakte hain)
- Portfolio/case studies section (jab client se data mile)
