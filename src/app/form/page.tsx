"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Enter a valid email"),
  company: z.string().max(120).optional(),
  role: z.string().max(60).optional(),
  question: z
    .string()
    .max(600, "Keep your question under 600 characters")
    .optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must accept the policy" }),
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema), mode: "onBlur" });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 400));
    alert(`Thanks, ${values.fullName}! We received your registration.`);
    reset();
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-neutral-100" />
      <div className="container-safe py-16 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-semibold text-neutral-900">Workshop Registration</h1>
          <p className="mt-2 text-neutral-600">
            Share a few details and optionally submit a question for the speakers.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 card p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="label" htmlFor="fullName">Full name</label>
              <input id="fullName" className="input" placeholder="Alex Johnson" {...register("fullName")} />
              {errors.fullName && <p className="error-text">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input id="email" type="email" className="input" placeholder="alex@example.com" {...register("email")} />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>
            <div>
              <label className="label" htmlFor="company">Company</label>
              <input id="company" className="input" placeholder="Behland" {...register("company")} />
            </div>
            <div>
              <label className="label" htmlFor="role">Role</label>
              <input id="role" className="input" placeholder="Product Manager" {...register("role")} />
            </div>
            <div className="sm:col-span-2">
              <label className="label" htmlFor="question">Question for speakers</label>
              <textarea id="question" rows={5} className="input resize-y" placeholder="Your question (optional)" {...register("question")} />
              {errors.question && <p className="error-text">{errors.question.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-neutral-700">
                <input type="checkbox" className="mt-1" {...register("agree")} />
                <span>
                  I agree to the processing of my information according to the Behland privacy policy.
                </span>
              </label>
              {errors.agree && <p className="error-text">{errors.agree.message}</p>}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit registration"}
            </button>
            <a href="/" className="text-sm text-neutral-700 hover:text-black">Back to landing</a>
          </div>
        </form>
      </div>
    </main>
  );
}


