import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        role: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
    }
}

import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: string;
            email?: string | null;
            name?: string | null;
            image?: string | null;
        };
    }
}