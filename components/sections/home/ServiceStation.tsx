const ServiceStation = () => {
  return (
    <>
    <section className="w-full min-h-screen flex flex-col px-4 md:px-16 pt-5 md:py-28 text-white">
        <h2 className="text-xl sm:text-3xl md:text-7xl lg:text-8xl font-bold sm:mb-3 md:mb-4 lg:mb-5">The Service Station</h2>
        <h3 className="text-[8px] sm:text-xl md:text-2xl lg:text-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] sm:leading-8 md:leading-9 lg:leading-10 font-light">We provide you with our services to ensure your brand&apos;s communication meets your bussiness goals</h3>

        <div className="flex flex-col justify-center gap-3 sm:gap-10 md:gap-20 lg:gap-52 px-2 w-full mt-6 sm:mt-14 md:mt-[60px] lg:mt-[67px]">
          {/* card 1 */}
          <div className="border-[2.5px] text-[#9A1B24] border-white shadow-xl pt-8 pb-2 px-4 rounded-2xl bg-[#ffffffa8]  w-[850px] h-[200px] flex justify-center text-center">
            <div className="w-1/3 px-5">
              <h4 className="font-bold text-xl mb-2">Digital Maintenance</h4>
              <p className="text-lg">Social content, responses, and full website support botch creative and technical</p>
            </div>
            <div className="w-1/3  px-3">
              <h4 className="font-bold text-xl mb-2">Activation</h4>
              <p className="text-lg">Full scale campaigns with KOLs, buzzers, ambassadors, and O2O execution</p>
            </div>
            <div className="w-1/3  px-3">
              <h4 className="font-bold text-xl mb-2">Production</h4>
              <p className="text-lg">Content shoots, hero videos, IG filters, music, and talent ideas, brought to life</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="md:self-end border-[2.5px] text-white border-white shadow-xl rounded-2xl bg-[#ffffff00] backdrop-blur-sm  w-[850px] h-[200px] flex justify-center text-center pt-8 pb-2 px-4 ">
            <div className="w-1/3 px-5">
              <h4 className="font-bold text-xl mb-2">Digital Development</h4>
              <p className="text-lg font-light">Websites, apps, SEO, and brand assets that power your digital presence</p>
            </div>
            <div className="w-1/3  px-4">
              <h4 className="font-bold text-xl mb-2">Digital Placement</h4>
              <p className="text-lg font-light">Strategic media buying social, Google, programmatic, and more</p>
            </div>
            <div className="w-1/3  px-5">
              <h4 className="font-bold text-xl mb-2">Digital Analytics</h4>
              <p className="text-lg font-light">Insigthful reporting on performance, sentiment, and share of voice</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default ServiceStation