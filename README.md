# Node.js + Prisma + PostgreSQL (Neon)

This project demonstrates how to integrate **Node.js** with **Prisma ORM** and **PostgreSQL** hosted on **Neon**.  
It includes database schema definitions, Prisma migrations, and API routes to fetch data from the database.

---

##  Features
- Node.js backend with Express
- Prisma ORM for database access
- PostgreSQL database hosted on Neon
- User and Todo models defined using Prisma schema
- REST API to fetch user data by ID
- Clean and simple backend architecture

---

## Database Models (Prisma)

prisma
model User {
  id       Int     @id @default(autoincrement())
  username String
  age      Int
  city     String
  todos    Todo[]
}

model Todo {
  id     Int     @id @default(autoincrement())
  title  String
  done   Boolean @default(false)
  userId Int
  user   User    @relation(fields: [userId], references: [id])
}
