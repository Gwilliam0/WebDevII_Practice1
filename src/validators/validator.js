// src/schemas/cursos.schema.js
import { z } from 'zod';

/*
export const createUserSchema = z.object({
  body: z.object({
    email: z.string().unique().email("Invalid email format").toLowerCase(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(1, "Name is required").trim(),
    lastName: z.string().min(1, "Last name is required").trim(),
    nif: z.string().regex(/^[0-9]{8}[A-Z]$/, "Invalid NIF format"),
    role: z.enum(["admin", "guest"]).default("admin"),
    status: z.enum(["pending", "verified"]).default("pending"),
    verificationCode: z.string().regex(/^\d{6}$/, "Verification code must be 6 digits"),
    verificationAttempts: z.number().int().min(0).max(3).default(3),
    company: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId").optional(),
    address: z.object({
      street: z.string().min(1, "Street is required"),
      number: z.string().min(1, "Number is required"),
      postal: z.string().min(3, "Postal code is required"),
      city: z.string().min(1, "City is required"),
      province: z.string().min(1, "Province is required"),
    }),
    deleted: z.boolean().default(false),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  })
});
*/

export const validatorRegister = z.object({
  body: z.object({
    name: z.string()
      .min(1, 'Mínimo 1 caracteres')
      .max(99, 'Máximo 99 caracteres')
      .trim(),
    email: z.string()
      .email('Email no válido')
      .toLowerCase()
      .trim(),
    password: z.string()
      .min(6, 'Mínimo 6 caracteres')
      .max(16, 'Máximo 16 caracteres')
  })
});

export const validatorLogin = z.object({
  body: z.object({
    email: z.string()
      .email('Email no válido')
      .toLowerCase()
      .trim(),
    password: z.string()
      .min(6, 'Mínimo 6 caracteres')
      .max(16, 'Máximo 16 caracteres')
  })
});