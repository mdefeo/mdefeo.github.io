import { Metadata } from "next";
import { generateMetadata as aboutGenerateMetadata } from "./about/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return aboutGenerateMetadata();
}