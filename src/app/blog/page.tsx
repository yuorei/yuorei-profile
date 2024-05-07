"use client";
import { redirect } from "next/navigation";

export default function Blog() {
  console.log("redirect to https://blog.yuorei.com/");
  redirect(`https://blog.yuorei.com/`);
}
