"use client";
import { redirect } from "next/navigation";

export default function Article({ params }: { params: { id: string } }) {
  console.log(`redirect to https://blog.yuorei.com/entry/${params.id}`);
  redirect(`https://blog.yuorei.com/entry/${params.id}`);
}
