/**
 * Contact API
 * Handles contact form submissions
 * 
 * USAGE: Uncomment the API call when backend is ready
 * Currently shows an alert on submission
 */

import { api } from "./client";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

// API Endpoint
const ENDPOINT = "/contact";

/**
 * Submit contact form
 * @param data - Contact form data
 * @returns Promise<ContactResponse>
 * 
 * IMPLEMENTATION GUIDE:
 * 1. Uncomment the API call below when backend is ready
 * 2. Remove the mock response
 * 3. The backend should:
 *    - Validate the data server-side
 *    - Store the submission in the database
 *    - Send email notification to admin
 *    - Return a ticket ID for reference
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  // TODO: Uncomment when backend is ready
  // const response = await api.post<ContactResponse>(ENDPOINT, data);
  // return response.data;
  
  // Mock response for now
  console.log("Contact form submission (API not connected):", data);
  return {
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
    ticketId: `TICKET-${Date.now()}`,
  };
}

/**
 * Validate contact form data (client-side)
 * Use this before submitting to ensure data quality
 */
export function validateContactForm(data: ContactFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (data.name && data.name.length > 100) {
    errors.name = "Name must be less than 100 characters";
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (data.email && data.email.length > 255) {
    errors.email = "Email must be less than 255 characters";
  }
  
  // Phone validation (optional but if provided, must be valid)
  if (data.phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
  }
  
  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  if (data.message && data.message.length > 2000) {
    errors.message = "Message must be less than 2000 characters";
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
