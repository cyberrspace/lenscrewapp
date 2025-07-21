// /*
// Project: LensCrew Academy Website
// Tech: Next.js (App Router) + Tailwind CSS + shadcn/ui
// */

// // 1. Folder Structure (App Router)

// /app
//   / about
// page.tsx
//   / contact
// page.tsx
//   / courses
// page.tsx
//   / instructors
// page.tsx
//   / registration
// page.tsx
// layout.tsx
// page.tsx
//   / components
// Navbar.tsx
// Footer.tsx
// Hero.tsx
// CourseCard.tsx
// CourseSection.tsx
// InstructorCard.tsx
// RegistrationForm.tsx
//   / lib
// utils.ts
//   / public
// hero - bg.jpg
// team.jpg
//   / styles
// globals.css

// // 2. app/layout.tsx
// "use client";

// import "@/styles/globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-gray-900">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// // 3. app/page.tsx (Home)
// import Hero from "@/components/Hero";
// import CourseSection from "@/components/CourseSection";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <CourseSection />
//     </main>
//   );
// }

// // 4. app/courses/page.tsx
// import CourseSection from "@/components/CourseSection";

// export default function CoursesPage() {
//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
//       <CourseSection />
//     </main>
//   );
// }

// // 5. app/registration/page.tsx
// import RegistrationForm from "@/components/RegistrationForm";

// export default function RegistrationPage() {
//   return (
//     <main className="p-8 max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Enrollment Form</h1>
//       <RegistrationForm />
//     </main>
//   );
// }

// // 6. app/instructors/page.tsx
// import InstructorCard from "@/components/InstructorCard";

// const instructors = [
//   { name: "John Doe", role: "Acting Coach", image: "/instructor1.jpg" },
//   { name: "Jane Smith", role: "Cinematographer", image: "/instructor2.jpg" },
// ];

// export default function InstructorsPage() {
//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Meet Our Instructors</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {instructors.map((ins, idx) => (
//           <InstructorCard key={idx} {...ins} />
//         ))}
//       </div>
//     </main>
//   );
// }

// // 7. app/about/page.tsx
// export default function AboutPage() {
//   return (
//     <main className="p-8 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">About Us</h1>
//       <p>
//         LensCrew Academy is dedicated to training the next generation of filmmakers,
//         screenwriters, and actors. Our mission is to empower creativity and professionalism
//         in the creative arts industry.
//       </p>
//     </main>
//   );
// }

// // 8. app/contact/page.tsx
// export default function ContactPage() {
//   return (
//     <main className="p-8 max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
//       <form className="space-y-4">
//         <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
//         <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
//         <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" />
//         <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
//       </form>
//     </main>
//   );
// }

// // 9. components/Navbar.tsx
// export default function Navbar() {
//   return (
//     <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//       <h1 className="text-xl font-bold text-primary">LensCrew Academy</h1>
//       <nav className="space-x-4 text-sm">
//         <a href="/" className="hover:underline">Home</a>
//         <a href="/courses" className="hover:underline">Courses</a>
//         <a href="/instructors" className="hover:underline">Instructors</a>
//         <a href="/about" className="hover:underline">About</a>
//         <a href="/contact" className="hover:underline">Contact</a>
//         <a href="/registration" className="text-white bg-primary px-3 py-1 rounded">Enroll</a>
//       </nav>
//     </header>
//   );
// }

// // 10. components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="bg-dark text-white text-center py-8 mt-10">
//       <p>&copy; {new Date().getFullYear()} LensCrew Academy. All rights reserved.</p>
//     </footer>
//   );
// }

// // 11. components/Hero.tsx
// export default function Hero() {
//   return (
//     <section className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
//       <div className="text-center max-w-2xl px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">LensCrew Academy</h1>
//         <p className="text-lg md:text-xl">Unlock Your Creative Potential with Industry Experts</p>
//       </div>
//     </section>
//   );
// }

// // 12. components/CourseCard.tsx
// import { Card, CardContent } from "@/components/ui/card";

// export default function CourseCard({ title, description }: { title: string; description: string }) {
//   return (
//     <Card className="bg-primary text-white">
//       <CardContent className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-sm">{description}</p>
//       </CardContent>
//     </Card>
//   );
// }

// // 13. components/CourseSection.tsx
// import CourseCard from "./CourseCard";

// const courses = [
//   { title: "Acting for Screen", description: "Learn performance techniques for film & TV." },
//   { title: "Cinematography", description: "Master the art of visual storytelling." },
//   { title: "Script Writing", description: "Write powerful scripts that sell." },
// ];

// export default function CourseSection() {
//   return (
//     <section className="py-12 px-4 md:px-20 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course, i) => (
//           <CourseCard key={i} title={course.title} description={course.description} />
//         ))}
//       </div>
//     </section>
//   );
// }

// // 14. components/InstructorCard.tsx
// export default function InstructorCard({ name, role, image }: { name: string; role: string; image: string }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={image} alt={name} className="w-full h-56 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold">{name}</h3>
//         <p className="text-sm text-gray-600">{role}</p>
//       </div>
//     </div>
//   );
// }

// // 15. components/RegistrationForm.tsx
// export default function RegistrationForm() {
//   return (
//     <form className="space-y-4">
//       <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
//       <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
//       <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded" />
//       <select className="w-full p-2 border rounded">
//         <option>Select Course</option>
//         <option>Acting</option>
//         <option>Cinematography</option>
//         <option>Script Writing</option>
//       </select>
//       <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit</button>
//     </form>
//   );
// }



