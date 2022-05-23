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
WhatCity["Italy"] = ["Rome", "Venice", "Amalfi Coast", "Florence"];
WhatCity["Spain"] = ["Barcelona", "Seville", "Madrid", "Granada"];
WhatCity["Germany"] = ["Berlin", "Munich", "Frankfurt", "Hamburg"];
WhatCity["United Kingdom"] = ["London", "Manchester", "Edinburgh", "Roman-Era Bath", "Royal Windsor", "The Magical Lake District", "Liverpool"];
WhatCity["Greece"] = ["Athens", "Thessaloniki", "Chania", "Rhodes Town", "Patras"];
WhatCity["France"] = ["Paris", "Nice", "Lyon", "Bordeaux", "Marseilles"];
WhatCity["Poland"] = ["Krakow", "Warsaw", "Tatra Mountains", "Wroclaw", "Ojcow"];
WhatCity["Netherlands"] = ["Amsterdam", "Utrecht", "Maastricht", "Delft", "Rotterdam"];
WhatCity["Belgium"] = ["Antwerp", "Brussels", "Ghent", "Namur", "Ypres"];
WhatCity["Portugal"] = ["Lisbon", "Sintra", "Porto", "Évora", "Óbidos"];
WhatCity["Sweden"] = ["Stockholm", "Gothenburg", "Karlskrona", "Malmö", "Linköping"];
WhatCity["Norway"] = ["Oslo", "Bergen", "Trondheim", "Hamar", "Haugesund"];
WhatCity["Ireland"] = ["Dublin", "Galway", "Belfast", "Limerick", "Athlone"];
WhatCity["Sweden"] = ["Monte Carlo", "La Condamine", "La Turbie", "Gorbio", "Saint-Jean-Cap-Ferrat"];
WhatCity["Luxembourg"] = ["Clervaux", "Diekirch", "Larochette", "Remich", "Wiltz"];

function RecommendDestination(country, city){
    if(city === undefined && WhatCity[country] !== undefined ){
        var random_index = Math.floor(Math.random() * (WhatCity[country].length -2));
        result = WhatCity[country]
        return result[random_index]
    }else{

    }
}

module.export = {RecommendDestination}
