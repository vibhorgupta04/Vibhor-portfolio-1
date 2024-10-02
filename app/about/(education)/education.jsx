import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Me4 from "@/public/img/me.jpg";

export default function Education() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Education
        </h1>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Get to know more about my educational background.
        </p>
      </div>
      <div className="grid gap-8 md:gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-5">
            <div className="font-medium text-lg">2017 - 2019</div>
            <div>
              <h2 className="font-semibold text-xl">
                Asian Academy of Film and Television
              </h2>
              <h3 className="text-md font-normal mb-3">
                Master&apos;s in Science
              </h3>
              <div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
                <Image
                  src={Me4}
                  width={400}
                  height={225}
                  alt="University"
                  className="rounded-lg"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              {/* add gpa in a style */}
              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                  GPA: 7.5 out of 10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
