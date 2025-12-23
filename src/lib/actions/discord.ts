"use server";
import { z } from "zod";
import {
  type ContactFormData,
  ContactFormSchema,
  type SubmitResponse,
} from "@/lib/data/contact";

// Discord webhook URL
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK;

export async function submitContactForm(
  formData: ContactFormData,
): Promise<SubmitResponse> {
  try {
    // Validate the form data
    const validatedData = ContactFormSchema.parse(formData);

    // If no Discord webhook URL is set, return a mock success response
    if (!DISCORD_WEBHOOK_URL) {
      console.warn("Discord webhook URL not set. Message not sent.");
      return {
        success: false,
        message: "Discord webhook URL not set. Message not sent.",
      };
    }

    // Create the Discord message payload
    const payload = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0x0099ff,
          fields: [
            {
              name: "Name",
              value: validatedData.fullName,
              inline: true,
            },
            {
              name: "Email",
              value: validatedData.email,
              inline: true,
            },
            {
              name: "Phone",
              value: validatedData.phoneNumber || "Not provided",
              inline: true,
            },
            {
              name: "Service Type",
              value: validatedData.serviceType || "Not specified",
              inline: true,
            },
            {
              name: "Message",
              value: validatedData.message,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // Send the message to Discord
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord API responded with status: ${response.status}`);
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);

    // Check if it's a Zod validation error
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues
        .map((err) => `${err.path}: ${err.message}`)
        .join(", ");
      return {
        success: false,
        message: `Validation error: ${errorMessages}`,
      };
    }

    return {
      success: false,
      message:
        "There was an error sending your message. Please try again later.",
    };
  }
}
