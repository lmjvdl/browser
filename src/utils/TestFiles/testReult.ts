// const result = [
//     {result: "دانشگاه یزد", id: 1},
//     {result: "دانشگاه مشهد", id: 2},
//     {result: "دانشگاه بجنورد", id: 3},
//     {result: "دانشگاه بیرجند", id: 4},
//     {result: "دانشگاه سمنان", id: 5},
//     {result: "دانشگاه میبد", id: 6},
//     {result: "دانشگاه اردکان", id: 7},
//     {result: "دانشگاه سمنان", id: 8},
// ]

interface SearchResult {
    title: string;
    description: string;
    url: string;
}

const searchResults: SearchResult[] = [
    { title: 'دانشگاه یزد - دانشگاه یزد', description: 'سایت رسمی دانشگاه یزد. شامل اخبار، رویدادها، دانشکده‌ها، پژوهش‌ها و ... می باشد.', url: "https://yazd.uni.com" },
    { title: 'پذیرش دانشجو در دانشگاه یزد - دانشگاه یزد', description: 'اطلاعات کامل درباره پذیرش دانشجو در مقاطع کارشناسی، کارشناسی ارشد و دکتری در دانشگاه یزد.', url: "https://yazd.uni.com"},
    { title: 'دانشکده مهندسی دانشگاه یزد', description: 'معرفی رشته‌ها، اساتید و امکانات دانشکده مهندسی دانشگاه یزد.', url: "https://yazd.uni.com" },
    { title: 'بورسیه‌های تحصیلی دانشگاه یزد', description: 'اطلاعات درباره انواع بورسیه‌های تحصیلی برای دانشجویان دانشگاه یزد.', url: "https://yazd.uni.com" },
    { title: 'کتابخانه مرکزی دانشگاه یزد', description: 'معرفی کتابخانه مرکزی، منابع و خدمات آن.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد در رتبه‌بندی جهانی', description: 'رتبه دانشگاه یزد در رتبه‌بندی‌های معتبر جهانی.', url: "https://yazd.uni.com" },
    { title: 'رویدادهای علمی دانشگاه یزد', description: 'اخبار و رویدادهای علمی برگزار شده در دانشگاه یزد.', url: "https://yazd.uni.com" },
    { title: 'ثبت‌نام در دوره‌های آموزشی دانشگاه یزد', description: 'اطلاعات درباره دوره‌های آموزشی کوتاه‌مدت و بلندمدت دانشگاه یزد.', url: "https://yazd.uni.com" },
    { title: 'سامانه آموزشی دانشگاه یزد', description: 'دسترسی به سامانه آموزشی برای دانشجویان.', url: "https://yazd.uni.com" },
    { title: 'پورتال کارکنان دانشگاه یزد', description: 'پورتال اختصاصی کارکنان دانشگاه یزد.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد در شبکه‌های اجتماعی', description: 'صفحات رسمی دانشگاه یزد در شبکه‌های اجتماعی مختلف.', url: "https://yazd.uni.com" },
    { title: 'موزه دانشگاه یزد', description: 'معرفی موزه دانشگاه یزد و آثار تاریخی آن.', url: "https://yazd.uni.com" },
    { title: 'مرکز رشد دانشگاه یزد', description: 'معرفی مرکز رشد و حمایت از شرکت‌های دانش‌بنیان.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد و صنعت', description: 'همکاری‌های دانشگاه یزد با صنایع مختلف.', url: "https://yazd.uni.com" },
    { title: 'خوابگاه‌های دانشجویی دانشگاه یزد', description: 'اطلاعات درباره خوابگاه‌های دانشجویی و امکانات آن‌ها.', url: "https://yazd.uni.com" },
    { title: 'ورزش در دانشگاه یزد', description: 'معرفی امکانات ورزشی و تیم‌های ورزشی دانشگاه.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد در شبکه‌های اجتماعی', description: 'صفحات رسمی دانشگاه یزد در شبکه‌های اجتماعی مختلف.', url: "https://yazd.uni.com" },
    { title: 'موزه دانشگاه یزد', description: 'معرفی موزه دانشگاه یزد و آثار تاریخی آن.', url: "https://yazd.uni.com" },
    { title: 'مرکز رشد دانشگاه یزد', description: 'معرفی مرکز رشد و حمایت از شرکت‌های دانش‌بنیان.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد و صنعت', description: 'همکاری‌های دانشگاه یزد با صنایع مختلف.', url: "https://yazd.uni.com" },
    { title: 'خوابگاه‌های دانشجویی دانشگاه یزد', description: 'اطلاعات درباره خوابگاه‌های دانشجویی و امکانات آن‌ها.', url: "https://yazd.uni.com" },
    { title: 'ورزش در دانشگاه یزد', description: 'معرفی امکانات ورزشی و تیم‌های ورزشی دانشگاه.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد در شبکه‌های اجتماعی', description: 'صفحات رسمی دانشگاه یزد در شبکه‌های اجتماعی مختلف.', url: "https://yazd.uni.com" },
    { title: 'موزه دانشگاه یزد', description: 'معرفی موزه دانشگاه یزد و آثار تاریخی آن.', url: "https://yazd.uni.com" },
    { title: 'مرکز رشد دانشگاه یزد', description: 'معرفی مرکز رشد و حمایت از شرکت‌های دانش‌بنیان.', url: "https://yazd.uni.com" },
    { title: 'دانشگاه یزد و صنعت', description: 'همکاری‌های دانشگاه یزد با صنایع مختلف.', url: "https://yazd.uni.com" },
    { title: 'خوابگاه‌های دانشجویی دانشگاه یزد', description: 'اطلاعات درباره خوابگاه‌های دانشجویی و امکانات آن‌ها.', url: "https://yazd.uni.com" },
    { title: 'ورزش در دانشگاه یزد', description: 'معرفی امکانات ورزشی و تیم‌های ورزشی دانشگاه.', url: "https://yazd.uni.com" },
];

export default searchResults;