  const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/",
        cName: "nav-item" ,
        submenu: [],
    },
    {
        id: 2,
        title: "Store",
        // path: "/Store",
        cName: "nav-item",
        submenu:[
            { title: "Shop the Latest" ,path:"/store"},
            { title: "Mac"  ,path:"/mac"},
            { title: "iPad"  ,path:"/ipad"},
            { title: "Apple Watch"  ,path:"/appleWatch"},
            { title: "Accessories"  ,path:"/accessories"},
        ]
    },
    {
        id: 3,
        title: "iPhone",
        // path: "/iPhone",
        cName: "nav-item",
         submenu:[
            { title: "Explore All iPhone" ,path:"/alliphone"},
            { title: "iPhone 14 Pro" ,path:"/iPhone14Pro"},
            { title: "iPhone 14" ,path:"/iPhone14"},
            { title: "iPhone 13" ,path:"/iPhone13"},
            { title: "iPhone SE" ,path:"/iPhonese"},
        ]
    },
    {
        id: 4,
        title: "iPad",
        // path: "/iPad ",
        cName: "nav-item",
        submenu:[
            { title: "Explore All iPad" ,path:"/allipads"},
            { title: "iPad Pro" ,path:"/iPadPro"},
            { title: "iPad Air" ,path:"/iPadAir"},
            { title: "iPad" ,path:"/iPad"},
            { title: "iPad mini" , path:"/iPadmini"},
            { title: "Apple Pencil" ,path:"/ApplePencil"},
        ]
    },
    {
        id: 5,
        title: "Mac",
        // path: "/Mac ",
        cName: "nav-item",
        submenu:[
            { title: "Explore All Mac" ,path:"/allmacs"},
            { title: "MacBook Air" ,path:"/MacBookAir"},
            { title: "MacBook Pro" ,path:"/MacBookPro"},
            { title: "iMac" ,path:"/iMac"},
            { title: "Mac mini" ,path:"/Macmini"},
            { title: "Mac Pro" ,path:"/MacPro"},
        ]
    },
    {
        id: 6,
        title: "Watch",
        // path: "/Watch",
        cName: "nav-item",
        submenu:[
            { title: "Explore All Apple Watch" ,path:"/watches"},
            { title: "Apple Watch Ultra" ,path:"/AppleWatchUltra"},
            { title: "Apple Watch Series 8" ,path:"/AppleWatchSeries8"},
            { title: "Apple Watch SE" ,path:"/AppleWatchSE"},
            { title: "Apple Watch Nike" ,path:"/AppleWatchNike"},
        ]
    },
    {
        id: 7,
        title: "Tv&Home",
        // path: "/Tv&Home",
        cName: "nav-item",
        submenu:[
            { title: "Explore TV & Home" ,path:"/tvs"},
            { title: "Apple TV 4K" ,path:"/AppleTV4K"},
            { title: "Home Pod" ,path:"/HomePod"},
            { title: "Home Pod mini" ,path:"/HomePodmini"},
        ]
    },
    {
        id: 8,
        title: "Accessories",
        // path: "/accessories",
        cName: "nav-item",
        submenu:[
            { title: "Shop All Accessories" ,path:"/accessories"},
            { title: "Mac" ,path:"/mac"},
            { title: "iPad" ,path:"/iPad"},
            { title: "Apple Watch" ,path:"/AppleWatchUltra"},
            { title: "TV & Home" ,path:"/AppleTV4K"},
        ]
    },
];

export default navItems;