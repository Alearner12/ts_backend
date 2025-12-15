# Week 13 - Prisma ORM Setup

## What is Prisma?

Prisma is a modern TypeScript-first ORM that provides:
- Type-safe database queries
- Auto-generated types from schema
- Easy migrations
- Visual database browser (Prisma Studio)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Run Migrations (if creating new tables)
```bash
npx prisma migrate dev --name init
```

Or to introspect existing database:
```bash
npx prisma db pull
```

### 4. Open Prisma Studio (Visual Database Browser)
```bash
npx prisma studio
```

### 5. Build and Run
```bash
npm run build
npm start
```

## Key Prisma Commands

- `npx prisma init` - Initialize Prisma in a project
- `npx prisma generate` - Generate Prisma Client
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma db pull` - Introspect existing database
- `npx prisma db push` - Push schema to database (dev only)
- `npx prisma studio` - Open visual database browser

## Schema Location

The database schema is defined in `prisma/schema.prisma`

## Environment Variables

Make sure `.env` file contains your `DATABASE_URL`
