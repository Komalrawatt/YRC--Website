import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

import { Droplet } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const BloodDropForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: "idle", message: "", visible: false });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setToast({ type: "idle", message: "", visible: false });

    try {
      const payload = {
        fullName: data.name?.trim() || "",
        address: data.address?.trim() || "",
        phoneNo: Number(data.phone) || 0,
        message: data.message?.trim() || "",
      };

      const baseApiUrl = import.meta.env.VITE_API_BASE_URL || "https://backend-yrc.onrender.com/api/v1";
      const response = await fetch(`${baseApiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = null;
      let errorText = null;

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        result = await response.json().catch(() => null);
      } else {
        errorText = await response.text().catch(() => null);
      }

      if (!response.ok) {
        const backendMessage = result?.message || result?.error || errorText;
        throw new Error(backendMessage || "Unable to send your message. Please try again.");
      }

      setToast({
        type: "success",
        message: result?.message || "Your message has been sent successfully.",
        visible: true,
      });
      reset();
    } catch (error) {
      setToast({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
        visible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!toast.visible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [toast.visible]);

  return (
    <div className="relative w-full max-w-md mt-6 bg-red-600 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-6">
          <Droplet size={28} className="text-white mr-2" />
          <h2 className="text-2xl font-bold text-white">Send a Message</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-yellow-200 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Your Address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-yellow-200 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Phone Number"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-yellow-200 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[120px]"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-yellow-200 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-red-600 hover:bg-white/90 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      <div
        className={`fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl border px-4 py-3 shadow-2xl transition-all duration-300 ease-out ${
          toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } ${
          toast.type === "success"
            ? "bg-emerald-500 border-emerald-600 text-white"
            : "bg-red-500 border-red-600 text-white"
        }`}
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <span className="text-lg">{toast.type === "success" ? "✅" : "⚠️"}</span>
          <p className="text-sm font-medium leading-tight">{toast.message}</p>
        </div>
      </div>
    </div>
  );
};

export default BloodDropForm;
