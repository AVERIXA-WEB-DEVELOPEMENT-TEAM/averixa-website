import { Link } from "react-router";
const Colours = {
    primary: "#2c5ce0",
    green: "#3fb45f",
    white: "#ffffff",
    navy950: "#081333",
    navy800: "#0f1f4d",
    navy700: "#17306e",
    line: "#1f3270",
    lineStrong: "#33467f",
    muted: "#a9b4d6",
};
const bars = [
    { height: "24%", background: Colours.primary },
    { height: "39%", background: Colours.primary },
    { height: "54%", background: Colours.primary },
    { height: "69%", dashed: true },
    { height: "84%", background: Colours.navy700 },
    { height: "100%", background: Colours.green },
];
export default function NotFound() {
   return (

<section className="mx-auto max-w-site px-6 py-24">
 <div className="grid items-center gap-16 md:grid-cols-2">
                <div>
     <p className="text-sm font-semi-bold tracking-widest"
     style={{ color: Colours.green}}
     >
        ERROR 404
     </p>
    <h1 className="text-display mt-4" style={{ color: Colours.white }} 
    >Looks like this step is {""}
     <em className="font-serif font-normal italic" 
     style={{ color: Colours.green}}
     >missing
     </em>.
     </h1>
     <p className="mt-6 text-lg" style={{ color: Colours.muted }} >The page you're looking for doesn't exist or has moved. Let's get you back on the path to growth</p>
 <div className="mt-10 flex flex-col gap-3 sm:flex-row">
   <Link to="/" className="rounded-lg px-6 py-4 text-center font-semibold transition-transform duration-200 hover:-translate-y-px"
   style={{ background: Colours.primary, color: Colours.white }}
   >Back to Home</Link>
   <Link to="/portfolio" className="rounded-lg border px-6 py-4 text-center font-semibold transition-transform duration-200 hover:-translate-y-px"
   style={{ borderColor: Colours.lineStrong, color:Colours.white, }}
   >See our work"</Link>
         </div>

         <p className="mt-8 text-sm" style={{ color: Colours.muted }}
         >Still stuck?{""}
            <a href="https://wa.me/" className="font-semibold text-white underline"
            style={{ color: Colours.white }}
            >  Message us on whatsapp</a>
         </p>
        </div>

    <div aria-hidden="true" className="rounded-2xl border p-8"
    style={{ background: Colours.navy800, borderColor: Colours.line, }}
        >
     <div className="flex h-52 items-end justify-between gap-3">
      {bars.map((bar, index) => ( 
       <div key={index}
     className="flex flex-1 items-center justify-center rounded-lg font-bold"
     style={{height: bar.height, background: bar.dashed ? "transparent" : bar. background, border: bar.dashed ? `2px dashed ${Colours.lineStrong}` : "none", color: Colours.white, }}
             >
         {bar.dashed ? "?" : null}
         </div>
          ))} 
          </div>
                        
         <div className="mt-4 flex justify-between border-t pt-3 text-sm"
         style={{ borderColor: Colours.line, color: Colours.muted,
             }}
    >
        <span>Visitors</span>
        <span>Customers</span>
      </div>
      </div>
      </div>
      </section>
    );
}
