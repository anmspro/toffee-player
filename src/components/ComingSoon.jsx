function ComingSoon({ selectedNavigation }) {
    return (
        <>
            <p className="py-2 text-xl text-[#E6EEF9]">
                {selectedNavigation === 'live_tv' ? 'Live TV' : 'Info'}
            </p>
            <div className="pt-14">
                <div className="flex items-center justify-center">
                    <div className="mr-3 pb-10">
                        <div className="w-14 h-14 border-t-4 border-[#c44168] rounded-full animate-spin"></div>
                    </div>
                </div>
                <div className="mb-5 flex items-center justify-center text-xl text-[#c44168]">{selectedNavigation === 'live_tv' ? 'Live TV' : 'Info'} is coming soon..</div>
            </div>
        </>
    )
}

export default ComingSoon