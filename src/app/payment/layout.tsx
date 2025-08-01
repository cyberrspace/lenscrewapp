// This overrides root layout ONLY for /payment page

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // No layout elements included
}
