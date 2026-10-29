export default function HomeAbout() {
    return (
        <section className="min-h-[80vh] w-full bg-white flex items-center justify-center text-center py-[100px] px-[30px]">
            <div className="w-[1312px] flex flex-row gap-[40px]">
                <div className="w-3/5 flex flex-col gap-2 justify-center ">
                    <h5 className="font-heading text-xs uppercase text-left text-black font-bold">- About Me</h5>
                    <h2 className="font-heading text-left text-5xl text-black font-bold">Get to Know Me</h2>
                    <p className="text-black text-left">
                        I am a Web Developer with over 5 years of experience building, customizing, and maintaining websites. I have experience working with WordPress, WooCommerce, Elementor, Gutenberg, Avada, Divi, and Beaver Builder, and I am also familiar with Squarespace, Shopify, Webflow, and HubSpot. My technical skills include HTML, CSS, JavaScript, jQuery, and PHP, with experience translating designs from Figma and Adobe into responsive, functional websites.
                    </p>
                    <p className="text-black text-left">
                        I enjoy creating responsive, user-friendly, and high-performing websites. I am always eager to learn new techniques and technologies while continuously improving my skills as a developer.
                    </p>
                    <p className="text-black text-left">
                        Technical SEO Experience: I have basic knowledge of technical and on-page SEO, including fixing heading structures, meta titles, meta descriptions, and website performance using Google PageSpeed Insights and Core Web Vitals.
                    </p>
                </div>
                <div className="w-2/5 flex items-center justify-center gap-5">
                    <img src="/images/jayman-wearing-professional-attire.webp" alt="Description" />
                </div>
            </div>
        </section>
    );
}