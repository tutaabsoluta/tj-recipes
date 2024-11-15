
export const BlogCard = () => {
  return (
    <article>
        <div className="flex items-center w-[616px] h-[269px] bento-sec border border-slate-600">
            {/* Image */}
            <div>
                <img src="BlogImage.png" alt="Blog Image" className="w-[197px] h-[269px]" />
            </div>
            
            {/* Content */}
            <div className="px-8">
                <h4 className="mb-6">The power of essential oils</h4>
                <p className="text-sm text-softBlueGray tracking-wider w-[349px] h-[96px] mb-6">Join us on social media to share, learn and grow together in our quest for ecological and economical recipes. Your voice matters, and we look forward to welcoming you to our engaged community!</p>
                
                <div className="w-[350px] bg-slate-500 h-[2px]"></div>

                {/* Author and Date */}
                <div className="flex items-center gap-3 mt-6 tracking-wide">
                    <div>
                        <img src="Author.png" alt="" />
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
