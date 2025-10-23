"use client"
import { useState, FormEvent } from "react";
import { SocialLinks } from "./social-links";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", feedback: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer id="contact" className="min-h-screen flex items-center justify-center bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-8">
            Submit Your Feedback
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-[1.4rem] focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-[1.4rem] focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium mb-2"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-[1.4rem] focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Share your thoughts, suggestions, or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-[1.4rem] font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </button>

            {submitStatus === "success" && (
              <p className="text-center text-green-600 dark:text-green-400 font-medium">
                Thank you for your feedback! I&apos;ll get back to you soon.
              </p>
            )}
          </form>

          <div className="flex justify-center mb-8">
            <div className="[&>div]:!flex-row">
                {/* Social links will be horizontal */}
                <SocialLinks />
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>&copy; {new Date().getFullYear()} Nidhishree Talastha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}