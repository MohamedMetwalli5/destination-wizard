var WhatCity = {}

WhatCity["Egypt"] = ["Alexandria", "Sharm el-Sheikh", "Hurghada", "Cairo", "Aswan"];
WhatCity["Algeria"] = ["Algiers", "Oran", "Constantine", "Batna", "Djelfa"];
WhatCity["Morocco"] = ["Asilah", "Larache", "Tinghir", "El Jadida", "Chefchaouen"];
WhatCity["Bahrain"] = ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali"];
WhatCity["Jordan"] = ["Amman", "Zarqa", "Irbid", "Russeifa", "Sahab"];
WhatCity["Lebanon"] = ["Beirut", "Zahle", "Tripoli", "Sidon", "Tyre"];
WhatCity["Saudi Arabia"] = ["Riyadh ", "Jeddah ", "Makkah", "Madinah", "Dammam"];
WhatCity["United Arab Emirates"] = ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman"];
WhatCity["Kuwait"] = ["Kuwait City", "Hawalli", "Salwa", "Salmiyah", "Al Ahmadi"];
WhatCity["Yemen"] = ["Sana'a", "Ta'izz", "Al Hudaydah", "Aden", "Ibb"];
WhatCity["Oman"] = ["Muscat", "Salalah", "Seeb", "Sohar", "Nizwa"];
WhatCity["Tunisia"] = ["Kairouan", "Hammamet", "Sfax", "Dougga", "Sousse"];
WhatCity["Mauritania"] = ["Nouakchott", "Nouadhibou", "Kiffa"];
WhatCity["Iraq"] = ["Baghdad", "Mosul", "Basra", "Nasiriyah", "Hillah"];
WhatCity["Qatar"] = ["Doha", "Al Rayyan", "Umm Salal Muhammad", "Al Wakrah"];

function RecommendDestination(country, city){
    if(city === undefined && WhatCity[country] !== undefined ){
        var random_index = Math.floor(Math.random() * (WhatCity[country].length -2));
        result = WhatCity[country]
        return result[random_index]
    }else{

    }
}

module.export = RecommendDestination