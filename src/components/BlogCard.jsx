
export const BlogCard = () => {
  return (
    <article>
        <div className="flex items-center max-w-full flex-1 md:h-[269px] bento-sec border border-slate-600 py-8">
            {/* Image */}
            <div>
                <img src="BlogImage.webp" alt="Blog Image" className="hidden md:block" />
            </div>
            
            {/* Content */}
            <div className="px-8 flex-1">
                <h4 className="mb-6 mt12">The power of essential oils</h4>
                <p className="text-sm text-center md:text-left text-softBlueGray tracking-wider h-auto mb-6">Join us on social media to share, learn and grow together in our quest for ecological and economical recipes.</p>
                
                <div className="w-auto bg-slate-500 h-[2px]"></div>

                {/* Author and Date */}
                <div className="flex items-center gap-3 mt-6 tracking-wide">
                    <div>
                        <img src="Author.webp" alt="Person Selfie" />
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-softBlueGray">Author</h5>
                        <p className="text-[10px] text-softBlueGray">Published on: September 6, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}
