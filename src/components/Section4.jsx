// const skills = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "Tailwind",
//   "Node",
//   "Git",
//   "TS",
//   "GITHUB",
// ];

// export default function Section4Marquee() {
//   return (
//     <section className="sec4 w-full py-[2%] flex justify-center items-center">
//       <div className="sc4Div w-[80%] sm:w-[65%] py-[4%] flex flex-col items-center gap-y-9">
//         <div className="w-full flex justify-center">
//           <h2 className="text-4xl font-bold text-white">My Skills</h2>
//         </div>

//         {/* MARQUEE WRAPPER */}
//         <div className="carousel w-[90%] sm:w-[25em] relative overflow-hidden">
//           {/* LEFT FADE */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

//           {/* RIGHT FADE */}
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

//           {/* TRACK */}
//           <div className="track flex will-change-transform">
//             {/** First copy */}
//             <div className="group flex items-center gap-x-4 pr-9">
//               {skills.map((s, i) => (
//                 <div
//                   key={`a-${i}`}
//                   className="skill flex-none w-[5.5rem] h-12 rounded-lg flex items-center justify-center bg-blue-500/20 text-white"
//                 >
//                   {s}
//                 </div>
//               ))}
//             </div>

//             {/** Second copy (duplicate) */}
//             <div
//               aria-hidden="true"
//               className="group flex items-center gap-x-4 pr-6"
//             >
//               {skills.map((s, i) => (
//                 <div
//                   key={`b-${i}`}
//                   className="skill flex-none w-[5.5rem] h-12 rounded-lg flex items-center justify-center bg-blue-500/20 text-white"
//                 >
//                   {s}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

const skills = ["HTML", "CSS", "JS", "React", "Tailwind", "Node", "Git", "TS"];

export default function Section4Marquee() {
  return (
    <section className="sec4 w-full py-[2%] flex justify-center items-center">
      <div className="sc4Div w-[90%] rounded sm:w-[65%] py-[4%] flex flex-col items-center gap-y-9">
        <div className="w-full flex justify-center">
          <h2 className="text-4xl font-bold text-white">My Skills</h2>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="w-full">
          <div className="flex w-full">
            <div className="group px-3 grid grid-cols-2 sm:grid-cols-4 w-[100%] items-center gap-4">
              {skills.map((s, i) => (
                <div
                  key={`a-${i}`}
                  className="skill flex-none w-full h-12 rounded-lg flex items-center justify-center bg-blue-500/20 text-white"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
