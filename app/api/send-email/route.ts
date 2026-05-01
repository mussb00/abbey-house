import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Validation function
function validateContactData(data: unknown): data is ContactFormData {
    if (typeof data !== "object" || data === null) {
        return false;
    }

    const obj = data as Record<string, unknown>;
    return (
        typeof obj.name === "string" &&
        typeof obj.email === "string" &&
        typeof obj.phone === "string" &&
        typeof obj.message === "string" &&
        obj.name.trim().length > 0 &&
        obj.email.trim().length > 0 &&
        obj.message.trim().length > 0
    );
}

export async function POST(request: NextRequest) {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is not configured");
        return NextResponse.json(
            { error: "Email service is not configured" },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();

        // Validate the request data
        if (!validateContactData(body)) {
            return NextResponse.json(
                { error: "Invalid form data" },
                { status: 400 }
            );
        }

        const { name, email, phone, message } = body;

        // Send email to Abbey House (internal notification)
        const internalEmailResult = await resend.emails.send({
            from: "Abbey House Contact Form <updates@abbeyservicesgroup.co.uk>",
            to: process.env.CONTACT_EMAIL || "info@abbeyservicesgroup.co.uk",
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
            replyTo: email,
        });

        if (internalEmailResult.error) {
            console.error("Failed to send internal email:", internalEmailResult.error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        // Send confirmation email to user
        const confirmationEmailResult = await resend.emails.send({
            from: "Abbey House <updates@abbeyservicesgroup.co.uk>",
            to: email,
            subject: "We've received your inquiry - Abbey House Plumbing & Heating",
            html: `
        <h2>Thank you for contacting Abbey House</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We've received your inquiry and appreciate you getting in touch. Our team will review your message and get back to you as soon as possible.</p>
        <p>We pride ourselves on quick response times, and you can expect to hear from us within 24 hours.</p>
        <p>Best regards,<br />Abbey House Plumbing & Heating</p>
      `,
        });

        if (confirmationEmailResult.error) {
            console.error("Failed to send confirmation email:", confirmationEmailResult.error);
            // Don't fail the request - internal email was sent successfully
        }

        return NextResponse.json(
            {
                success: true,
                message: "Email sent successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
