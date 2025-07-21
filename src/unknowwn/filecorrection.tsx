// // pages/index.tsx (Home Page)
// import Hero from "@/components/Hero";
// import CourseSection from "@/components/CourseSection";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <CourseSection />

//       {/* About Preview */}
//       <section className="py-12 px-4 md:px-20 text-center bg-white">
//         <h2 className="text-3xl font-bold mb-4">About LensCrew Academy</h2>
//         <p className="text-gray-700 max-w-3xl mx-auto mb-6">
//           We are committed to nurturing talented creatives in film, acting, and screenwriting. Our mission is to    provide world-class training led by seasoned professionals.
//         </p>
//         <Link href="/about" className="text-primary underline">
//           Learn More →
//         </Link>
//       </section>

//       {/* Instructors Preview */}
//       <section className="py-12 px-4 md:px-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-8">Meet the Mentors</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src="/instructor1.jpg" className="w-full h-56 object-cover" alt="John Doe" />
//             <div className="p-4">
//               <h3 className="text-lg font-bold">John Doe</h3>
//               <p className="text-sm text-gray-600">Acting Coach</p>
//             </div>
//           </div>
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src="/instructor2.jpg" className="w-full h-56 object-cover" alt="Jane Smith" />
//             <div className="p-4">
//               <h3 className="text-lg font-bold">Jane Smith</h3>
//               <p className="text-sm text-gray-600">Cinematographer</p>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-6">
//           <Link href="/instructors" className="text-primary underline">
//             View All Instructors →
//           </Link>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary text-white py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Join LensCrew Academy Today</h2>
//         <p className="mb-6">Get the best creative arts education from experienced professionals.</p>
//         <Link href="/registration" className="bg-white text-primary px-6 py-2 font-semibold rounded">
//           Enroll Now
//         </Link>
//       </section>
//     </main>
//   );
// }
