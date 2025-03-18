import { useState } from "react";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: ""
    }
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
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    }
  });

  return (
    <section className="py-12 md:py-16 px-4" id="waitlist">
      <div className="container mx-auto max-w-md">
        <Card className="mx-4 md:mx-0">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center">Join the Waitlist</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" className="text-sm md:text-base" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" className="text-sm md:text-base" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full text-sm md:text-base"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}