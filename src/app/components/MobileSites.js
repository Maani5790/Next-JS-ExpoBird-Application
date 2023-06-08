import React from 'react'

const MobileSites = ({head,title}) => {
  return (
    <>
      <div className="bg-[#00A256]">
    <div className="px-24 flex items-center justify-center">
        <div className="xl:max-w-[1440px] w-full">
            <section className="py-24 w-full">
                <div className="text-center">
                    <h6 className="text-white text-[60px] font-bold leading-tight">{head}</h6>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div className="text-center">
                        <p className="text-[24px] text-white max-w-[764px] mx-auto">{title}</p>
                        <button className="my-10 bg-white text-[#00A256] px-[60px] py-[20px] rounded-[70px] font-bold">Get Free Audit Report</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
    </>
  )
}

export default MobileSites