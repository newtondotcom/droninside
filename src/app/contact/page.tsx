"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { submitContactForm } from "@/lib/actions/discord";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { type ContactFormData, ContactFormSchema } from "@/lib/data/contact";
import Title from "@/components/layout/title";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const t = useTranslations("ContactPage");
  const tCommon = useTranslations("Common");
  const tServiceTypes = useTranslations("ServiceTypes");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      serviceType: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(data);
      setFormResponse(response);

      if (response.success) {
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const serviceTypes = [
    { value: "residential", label: tServiceTypes("residential") },
    { value: "local_business", label: tServiceTypes("local_business") },
    { value: "office", label: tServiceTypes("office") },
    { value: "hostel", label: tServiceTypes("hostel") },
    { value: "construction", label: tServiceTypes("construction") },
    { value: "industrial", label: tServiceTypes("industrial") },
    { value: "threed", label: tServiceTypes("threed") },
    { value: "aerial", label: tServiceTypes("aerial") },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 items-center">
      <Title title={t("contact_us")} subtitle={t("contact_page_description")} />
      <div className="max-w-3xl w-full pt-8">
        <AnimatePresence mode="wait">
          {formResponse.success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                {t("form_submitted")}
              </h3>
              <p className="text-green-700 dark:text-green-400">
                {formResponse.message || t("response_message")}
              </p>
              <Button variant="outline" className="mt-6" onClick={() => setFormResponse({})}>
                {t("send_another_message")}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 border border-neutral-200 dark:border-neutral-700"
                >
                  {formResponse.success === false && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 mb-6">
                      <p className="text-red-700 dark:text-red-400">{formResponse.message}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("full_name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("full_name_placeholder")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("email")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t("email_placeholder")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("phone_number")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("phone_number_Placeholder")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{tServiceTypes("choose_service")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("select_placeholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("project")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("project_placeholder")}
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        form.reset();
                        router.back();
                      }}
                      disabled={isSubmitting}
                    >
                      {tCommon("cancel_button") || "Cancel"}
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn("relative", isSubmitting && "text-transparent")}
                    >
                      {tCommon("send_button") || "Send"}
                      {isSubmitting && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Loader2 className="h-5 w-5 animate-spin text-white" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
