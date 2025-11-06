export function Rating() {
    const data = [
        {
            subtitle: 'rated 4.6 out of 5',
            title: 'QuickBooks Marketplace',
        },
        {
            subtitle: 'rated 4.8 out of 5',
            title: 'Capterra',
        },
        {
            subtitle: 'rated 4.8 out of 5',
            title: 'Xero App Store',
        },
    ]

    return (
        <section className="relative z-10 container mx-auto grid gap-6 py-8 lg:grid-cols-3">
            {data.map((item) => (
                <div className="flex flex-col items-center justify-center gap-2 py-6 text-center" key={item.title}>
                    <div className="flex items-center gap-3.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                                fill="none"
                                height="18"
                                key={index}
                                viewBox="0 0 18 18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m9 0 3.174 4.631L17.56 6.22l-3.424 4.45.154 5.612L9 14.4l-5.29 1.881.154-5.612L.44 6.219 5.826 4.63 9 0Z"
                                    fill="#FFA412"
                                />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xl leading-[140%] font-semibold text-dark-green">{item.title}</span>
                    <span className="leading-[140%] text-text">{item.subtitle}</span>
                </div>
            ))}
        </section>
    )
}
