# OptiMind

<img src="public/logo.png" alt="OptiMind" width="100" height="100">

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748)

OptiMind is an all-in-one AI SaaS platform that combines multiple AI tools for content generation, built with Next.js 15, React, Prisma, and Tailwind.

## ✨ Features

- 💬 **AI Conversation** - AI chat
- 🎨 **Image Generation** - Create images from text
- 🎥 **Video Generation** - Video content production
- 🎵 **Music Generation** - AI music composition
- 💻 **Code Generation** - Programming assistance
- 💳 **Pro subscription system**
- 🔐 **Secure authentication with Clerk**
- 📱 **Responsive design**
- ♾️ **Unlimited generations** (Pro version)

## 🚀 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma
- **Authentication**: Clerk
- **State Management**: Zustand
- **UI Components**: shadcn/ui
- **Payments**: Stripe
- **AI**: OpenAI, Replicate

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/SHOOTSTV/optimind.git
cd optimind
```

2. Install dependencies

```bash
pnpm install
```

3. Configure environment variables .env

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=XXXXXXXXXXXXX

OPENAI_API_KEY=XXXXXXXXXXXXX
REPLICATE_API_TOKEN=XXXXXXXXXXXXX

STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=XXXXXXXXXX

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Setup Database

```bash
# Generate Prisma Client
npx prisma generate

# Push the database schema
npx prisma db push

# If you want to see the database in Prisma Studio
npx prisma studio
```

5. Start the development server

```bash
pnpm dev
```

The app should now be running on [http://localhost:3000](http://localhost:3000)

## 🌐 Project Structure

    optimind/
    ├── app/     # Next.js routes and components
    ├── components/    # Reusable components
    ├── lib/     # Utilities and configurations
    ├── prisma/  # Schema and migrations
    └── public/  # Static assets

## 🤝 Acknowledgements

CodeWithAntonio: https://codewithantonio.com/
