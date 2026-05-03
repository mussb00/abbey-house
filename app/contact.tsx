"use client"

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your inquiry! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.error ||
            "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or call us directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Boiler broken down? Need a service or quote for a new installation? Call us or fill in the form. We cover all of Brent — Kilburn, Wembley, Brondesbury, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
          <div className="md:col-span-2 flex flex-col">
            <Card className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 pb-6">
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4">
                  {submitStatus.type && (
                    <div
                      className={`p-3 rounded-md text-sm ${submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      placeholder="07700 000000"
                    />
                  </div>

                  <div className="flex flex-col flex-1 space-y-2 min-h-0">
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="flex-1 min-h-[120px] resize-none"
                      placeholder="Tell us about your plumbing or heating needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Emergency card */}
            <div className="bg-[#1e3a8a] text-white rounded-xl p-5">
              <p className="text-[11px] font-medium uppercase tracking-widest opacity-70 mb-1">Emergency Line</p>
              <a
                href="tel:07930909496"
                className="text-2xl font-bold text-white block mb-1 hover:opacity-90"
              >
                07930 909496
              </a>
              <p className="text-xs opacity-70 mb-4">Available 7 days · Same-day response</p>
              <Button
                asChild
                className="w-full bg-white text-primary hover:bg-secondary"
              >
                <a href="tel:07930909496" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:07930909496" className="text-primary hover:underline font-medium">
                  07930 909496
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  24/7 Emergency Line
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@abbeyservicesgroup.co.uk"
                  className="text-primary hover:underline text-sm break-all"
                >
                  info@abbeyservicesgroup.co.uk
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <MapPin className="w-4 h-4 text-primary" />
                  Area Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brent, NW &amp; W London<br />
                  Kilburn · Wembley · Brondesbury
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="w-4 h-4 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <p>Mon–Fri: 7am–7pm</p>
                <p>Saturday: 8am–5pm</p>
                <p>Sunday: Emergency only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
