export const revalidate = 1000;

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article>{children}</article>;
}
