import { pgTable, serial, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

export const pages = pgTable('pages', {
    id: serial('id').primaryKey(),
    title: text('title').notNull().unique(),
    path: text('path').notNull().unique(),
    includeInProd: boolean('include_in_prod').notNull().default(false),
    displayOrder: integer('display_order').notNull().default(0),
});

export const contactSubmissions = pgTable('contact_submissions', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});

