import { NextPage } from "next";
import { AppLayout } from "@/layouts";
import { ContactForm } from "@/components";

const Index: NextPage = () => {
    return (
        <AppLayout>
            <section className="bg-white">
                <div className="py-12 prose mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0">
                    <h1>Want to reach us?</h1>
                    <h3>We are just a click away.</h3>
                    <p>
                        Fill up the form and hit send, we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            <section className="bg-white md:pb-10 lg:pb-12">
                <div className="mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl sm:rounded-md lg:px-4 xl:px-0 lg:flex lg:justify-between">

                    <div className="w-full max-w-xl relative pb-12 bg-white mx-auto px-4 md:max-w-3xl md:mb-10 lg:mb-0 lg:max-w-lg lg:px-0">
                        <ContactForm/>
                    </div>

                    <div className="relative lg:ml-8 flex-1">
                        <iframe
                            className="absolute inset-0 lg:rounded-md"
                            style={{filter: "grayscale(1) contrast(1) opacity(0.9)"}}
                            title="map" marginHeight={0} marginWidth={0} scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            width="100%" height="100%" frameBorder="0"
                        />
                        <div
                            className="bg-black/30 relative p-8 sm:p-10 md:p-12 h-full lg:rounded-md grid lg:place-items-end">
                            <div className="bg-white p-6 rounded shadow-md">
                                <h2 className="text-gray-400 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1 text-gray-800 text-sm">
                                    Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                                </p>
                                <h2 className="text-gray-400 tracking-widest text-xs mt-4">EMAIL</h2>
                                <a className="text-yellow-600 leading-relaxed">example@email.com</a>
                                <h2 className="text-gray-400 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed text-gray-800 tabular-nums">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default Index;