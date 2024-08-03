import { Listing, Reservation, User } from "@prisma/client"

export type SafeListing = Omit<
    Listing,
    "createAt"
> & {
    createAt: string;
}

export type SafeReservation = Omit<
    Reservation,
    "createAt" | "startDate" | "endDate" | "listing"
> & {
    createAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing
}

export type SafeUser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}

// types.ts
export interface Message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    createdAt: string;
    sender: {
        name: string;
    };
    receiver: {
        name: string;
    };
}


// types.ts
export interface Order {
    id: string;
    totalPrice: number;
    createdAt: string;
    travelerName: String
    status: string;
  }
  