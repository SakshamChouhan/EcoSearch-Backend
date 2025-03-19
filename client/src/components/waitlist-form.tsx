import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for confirmation.",
      });
      form.reset({ name: "", email: "" });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section className="py-12 md:py-16 px-4" id="waitlist">
      <div className="container mx-auto flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
            className="flex w-full max-w-2xl gap-3"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="text-base w-full h-14 rounded-lg px-4 bg-[#ebebeb] text-gray-800 placeholder-[#a4a4a4] focus:outline-none focus:ring-2 focus:ring-[#8eb486]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@email.com"
                      className="text-base w-full h-14 rounded-lg px-4 bg-[#ebebeb] text-gray-800 placeholder-[#a4a4a4] focus:outline-none focus:ring-2 focus:ring-[#8eb486]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button
              type="submit"
              className="h-14 px-8 text-base rounded-lg bg-[#8eb486] text-white hover:bg-[#7ca572] transition-all duration-200"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
