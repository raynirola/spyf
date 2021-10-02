import { NextPage } from "next";
import { AppLayout } from "@/layouts";
import { TeamMember } from "@/components";

const AboutPage: NextPage = () => {
    return (
        <AppLayout>
            <section className="bg-white">
                <div className="py-12 pb-32 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0 prose">
                    <h1>Who are we?</h1>
                    <h2>Sikkim Progressive Youth Forum:</h2>
                    <p>
                        A forum for progressive thinking youth of sikkim. The forum publishes a magazine named
                        "<strong>Nayadrishtikon</strong>".
                    </p>
                </div>
            </section>


            <section className="py-12 bg-gray-100">
                <div className="mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0 prose">
                    <h1>Meet our team.</h1>
                </div>
                <div className='max-w-xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl sm:px-4 xl:px-0'>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-1 md:gap-px mt-12">
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                        <TeamMember member={{name: "Core Member", bio: "Too earthly to be of any heavenly value.", avatar: "/spyf.png", designation: "Author SPYF"}}/>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="py-12 pb-32 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 xl:px-0 prose">
                    <h1>Our past campaigns.</h1>

                    <h2>Sikkim Progressive Youth Forum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus harum hic magnam
                        omnis placeat tempore. Ad earum nam saepe!
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos impedit minima
                        nobis numquam officia saepe. Aperiam distinctio dolores eaque, eligendi error eum, facilis fugit
                        hic natus nihil non officiis pariatur quos sint vel, vitae?
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus et numquam odio, optio
                        perspiciatis quia! Dolores ex provident quam voluptatem? Accusamus accusantium autem deleniti
                        dolor explicabo. Animi, consequuntur culpa cum dolor dolorum eveniet laudantium libero nam, nemo
                        quas rerum vitae voluptatum. Autem commodi cum cumque, dolore eligendi, eos inventore molestiae
                        optio porro quidem quis, quo similique sit tempora unde.
                    </p>
                </div>
            </section>
        </AppLayout>
    );
};

export default AboutPage;