/**
 * PAYMENT SERVICE BRIDGE
 * 
 * This service handles communication with payment gateways.
 * To switch providers, just update the logic here or in .env
 */

import { siteConfig } from "@/config/site";

interface PaymentRequest {
  orderId: string;
  grossAmount: number;
  customerDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

export const PaymentService = {
  /**
   * Process payment through the selected provider
   */
  async createTransaction(request: PaymentRequest) {
    const provider = siteConfig.payment.provider;

    console.log(`[PaymentService] Initiating ${provider} transaction for ${request.orderId}`);

    // SIMULATION: In a real template, this would call your backend API
    // which then calls Midtrans/Stripe/etc.
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mocking a successful token/redirect URL generation
        resolve({
          status: "success",
          token: "mock-snap-token-" + Math.random().toString(36).substr(2, 9),
          redirectUrl: "/checkout/success", // Fallback for simulation
          provider: provider
        });
      }, 2000);
    });
  }
};
