const WhatCity = {
    "Egypt": ["Alexandria", "Sharm el-Sheikh", "Hurghada", "Cairo", "Aswan"],
    "Morocco": ["Asilah", "Larache", "Tinghir", "El Jadida", "Chefchaouen"],
    "Algeria": ["Algiers", "Oran", "Constantine", "Batna", "Djelfa"],
    "Saudi Arabia": ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam"],
    "Bahrain": ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali"],
    "Jordan": ["Amman", "Zarqa", "Irbid", "Russeifa", "Sahab"],
    "Lebanon": ["Beirut", "Zahle", "Tripoli", "Sidon", "Tyre"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman"],
    "Kuwait": ["Kuwait City", "Hawalli", "Salwa", "Salmiyah", "Al Ahmadi"],
    "Yemen": ["Sana'a", "Ta'izz", "Al Hudaydah", "Aden", "Ibb"],
    "Oman": ["Muscat", "Salalah", "Seeb", "Sohar", "Nizwa"],
    "Tunisia": ["Kairouan", "Hammamet", "Sfax", "Dougga", "Sousse"],
    "Mauritania": ["Nouakchott", "Nouadhibou", "Kiffa", "Atar", "Rosso"],
    "Iraq": ["Baghdad", "Mosul", "Basra", "Nasiriyah", "Hillah"],
    "Qatar": ["Doha", "Al Rayyan", "Umm Salal Muhammad", "Al Wakrah", "Mesaieed"],
    "Italy": ["Rome", "Venice", "Florence", "Milan", "Naples"],
    "Spain": ["Barcelona", "Seville", "Madrid", "Granada", "Valencia"],
    "Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    "United Kingdom": ["London", "Manchester", "Edinburgh", "Roman-Era Bath", "Liverpool"],
    "Greece": ["Athens", "Thessaloniki", "Chania", "Rhodes Town", "Patras"],
    "France": ["Paris", "Nice", "Lyon", "Bordeaux", "Marseilles"],
    "Poland": ["Krakow", "Warsaw", "Tatra Mountains", "Wroclaw", "Ojcow"],
    "Netherlands": ["Amsterdam", "Utrecht", "Maastricht", "Delft", "Rotterdam"],
    "Belgium": ["Antwerp", "Brussels", "Ghent", "Namur", "Ypres"],
    "Portugal": ["Lisbon", "Sintra", "Porto", "Évora", "Óbidos"],
    "Sweden": ["Stockholm", "Gothenburg", "Karlskrona", "Malmö", "Linköping"],
    "Norway": ["Oslo", "Bergen", "Trondheim", "Hamar", "Haugesund"],
    "Ireland": ["Dublin", "Galway", "Belfast", "Limerick", "Athlone"],
    "Luxembourg": ["Clervaux", "Diekirch", "Larochette", "Remich", "Wiltz"],
    "China": ["Guilin", "Chengdu", "Beijing", "Xi'an", "Shanghai"],
    "India": ["Agra", "Goa", "Manali", "Mumbai", "Jaipur"],
    "Indonesia": ["Yogyakarta", "Ubud", "Kuta", "Jakarta", "Bandung"],
    "Pakistan": ["Islamabad", "Karachi", "Lahore", "Multan", "Peshawar"],
    "Bangladesh": ["Dhaka", "Sylhet", "Chittagong", "Khulna", "Rajshahi"],
    "Japan": ["Tokyo", "Kyoto", "Hiroshima", "Kanazawa", "Fukuoka"],
    "Philippines": ["Boracay", "Dumaguete", "Cebu", "Banaue", "Manila"],
    "Vietnam": ["Hoi An", "Hanoi", "Da Nang", "Hue", "Da Lat"],
    "Turkey": ["Antalya", "Istanbul", "Bursa", "Şanlıurfa", "Fethiye"],
    "Thailand": ["Chiang Mai", "Bangkok", "Ayutthaya", "Chiang Rai", "Kanchanaburi"],
    "South Korea": ["Incheon", "Gangneung", "Seogwipo", "Seoul", "Busan"],
    "Malaysia": ["Kuala Lumpur", "Malacca", "Ipoh", "Kota Kinabalu", "Kuching"],
    "Nepal": ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur", "Bhaktapur"],
    "Sri Lanka": ["Galle", "Kandy", "Batticaloa", "Colombo", "Negombo"],
    "Singapore": ["Yishun", "Butik Batok", "Pulao Ujong", "Tampines", "Jurong East"],
    "Armenia": ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Goris"],
    "Cyprus": ["Famagusta", "Nicosia", "Protaras", "Kyrenia", "Larnaca"],
    "Maldives": ["Male", "Fuvahmulah", "Hulhumale", "Maafushi Island", "Thulusdhoo"],
    "Brunei": ["Gadong", "Luagan Lalak", "Kampong Ayer", "Kota Batu", "Serasa"],
    "Brazil": ["Rio de Janeiro", "São Paulo", "Brasília", "Natal", "Fortaleza"],
    "Colombia": ["Cartagena", "Bogota", "Medellin", "Cali", "Santa Marta"],
    "Argentina": ["Buenos Aires", "Mendoza", "Ushuaia", "Córdoba", "Rosario"],
    "Peru": ["Cuzco", "Lima", "Arequipa", "Ayacucho", "Puno"],
    "Venezuela": ["Caracas", "Porlamar", "Merida", "Barquisimeto", "Carupano"],
    "Chile": ["Santiago", "Valparaíso", "Pucón", "Castro", "San Pedro de Atacama"],
    "Ecuador": ["Quito", "Cuenca", "Guayaquil", "Banos de Agua Santa", "Salinas"],
    "Bolivia": ["La Paz", "Sucre", "Santa Cruz", "Copacabana", "Cochabamba"],
    "Paraguay": ["Asuncion", "Encarnación", "San Lorenzo", "Capiata", "Lambaré"],
    "Uruguay": ["Montevideo", "Colonia del Sacramento", "Salto", "Carmelo", "Laguna Garzon"],
    "Guyana": ["Linden", "Georgetown", "New Amsterdam", "Anna Regina", "Bartica"],
    "Suriname": ["Paramaribo", "Lelydorp", "Brokopondo", "Nieuw Nickerie", "Pokigron"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Gold Coast"],
    "New Zealand": ["Auckland", "Queenstown", "Wellington", "Christchurch", "Rotorua"],
    "Switzerland": ["Zurich", "Geneva", "Lucerne", "Interlaken", "Bern"],
    "Austria": ["Vienna", "Salzburg", "Innsbruck", "Hallstatt", "Graz"],
    "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Skagen"],
    "Finland": ["Helsinki", "Rovaniemi", "Turku", "Oulu", "Tampere"],
    "Iceland": ["Reykjavik", "Akureyri", "Hofn", "Selfoss", "Vik"],
    "Russia": ["Moscow", "Saint Petersburg", "Kazan", "Sochi", "Yekaterinburg"],
    "South Africa": ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth"],
    "Mexico": ["Mexico City", "Cancun", "Guadalajara", "Playa del Carmen", "Tulum"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    "United States": ["New York City", "Los Angeles", "Chicago", "Miami", "San Francisco"],
    "Czech Republic": ["Prague", "Brno", "Český Krumlov", "Karlovy Vary", "Olomouc"],
    "Romania": ["Bucharest", "Brasov", "Cluj-Napoca", "Sibiu", "Timisoara"],
    "Hungary": ["Budapest", "Debrecen", "Szeged", "Pecs", "Miskolc"],
    "Croatia": ["Dubrovnik", "Split", "Zagreb", "Hvar", "Rovinj"]
};

  
const LocalCuisine = {
    Egypt: {
        foods: ["Koshari", "Falafel", "Shawarma", "Mahshi", "Fatta"],
        drinks: ["Karkadeh", "Sahlab", "Qamar al-Din", "Mint tea", "Lemonade"]
    },
    Morocco: {
        foods: ["Tagine", "Couscous", "Harira", "Bastilla", "Zaalouk"],
        drinks: ["Mint tea", "Moroccan coffee", "Lemonade", "Almond milk", "Jus de Grenade"]
    },
    Algeria: {
        foods: ["Couscous", "Chakhchoukha", "Merguez", "Dolma", "Mechoui"],
        drinks: ["Mint tea", "Almond milk", "Jus d'orange", "Café noir", "Lemonade"]
    },
    "Saudi Arabia": {
        foods: ["Kabsa", "Mandi", "Shawarma", "Mutabbaq", "Jareesh"],
        drinks: ["Qamar al-Din", "Lemonade", "Mint tea", "Jus de grenade", "Arabic coffee"]
    },
    Bahrain: {
        foods: ["Machboos", "Muhammar", "Samosa", "Bahraini Chicken Curry", "Khubz"],
        drinks: ["Karak tea", "Jus de mangue", "Mint lemonade", "Coffee", "Jus d'orange"]
    },
    Jordan: {
        foods: ["Mansaf", "Zarb", "Mujadara", "Falafel", "Hummus"],
        drinks: ["Mint tea", "Qamar al-Din", "Pomegranate juice", "Lemonade", "Arabic coffee"]
    },
    Lebanon: {
        foods: ["Hummus", "Tabbouleh", "Shawarma (ensure halal meat)", "Kibbeh", "Fattoush"],
        drinks: ["Ayran", "Lemonade", "Pineapple juice", "Mint tea", "Pomegranate juice"]
    },
    "United Arab Emirates": {
        foods: ["Shawarma (ensure halal meat)", "Machboos", "Falafel", "Luqaimat", "Kousa Mahshi"],
        drinks: ["Karak tea", "Lemonade", "Jus de mangue", "Arabic coffee", "Rose milk"]
    },
    Kuwait: {
        foods: ["Machboos", "Margoog", "Gabout", "Jasheed", "Mofrog"],
        drinks: ["Karak tea", "Jus de grenade", "Mint lemonade", "Lemonade", "Coffee"]
    },
    Yemen: {
        foods: ["Mandi", "Zurbian", "Saliq", "Bint al-Sahn", "Dhuho"],
        drinks: ["Arabic coffee", "Lemonade", "Coffee", "Tea", "Jus d'orange"]
    },
    Oman: {
        foods: ["Shuwa", "Majboos", "Mashuai", "Halwa", "Sakhana"],
        drinks: ["Lemonade", "Karak tea", "Mint tea", "Jus de grenade", "Coffee"]
    },
    Tunisia: {
        foods: ["Couscous", "Brik", "Lablabi", "Harissa", "Mechouia"],
        drinks: ["Mint tea", "Lemonade", "Jus de grenade", "Coffee", "Sahlab"]
    },
    Mauritania: {
        foods: ["Couscous", "Mechouia", "Thieboudienne", "Harcha", "Tigadig"],
        drinks: ["Mint tea", "Lemonade", "Sahlab", "Coffee", "Almond milk"]
    },
    Iraq: {
        foods: ["Masgouf", "Kebabs (ensure halal meat)", "Dolma", "Tashreeb", "Quzi"],
        drinks: ["Lemonade", "Mint tea", "Coffee", "Jus d'orange", "Sahlab"]
    },
    Qatar: {
        foods: ["Machboos", "Shawarma (ensure halal meat)", "Thareed", "Kousa Mahshi", "Jasheed"],
        drinks: ["Karak tea", "Mint lemonade", "Jus de mangue", "Coffee", "Arabic coffee"]
    },
    Italy: {
        foods: ["Pasta Arrabbiata", "Margherita Pizza", "Caprese Salad", "Risotto", "Lasagna (check meat sources)"],
        drinks: ["Espresso", "Limoncello", "Citrus Granita", "Italian Hot Chocolate", "Chinotto"]
    },
    Spain: {
        foods: ["Paella (ensure halal meat)", "Gazpacho", "Tortilla Española", "Pisto", "Churros"],
        drinks: ["Horchata", "Orange juice", "Lemonade", "Agua de Valencia", "Café con leche"]
    },
    Germany: {
        foods: ["Döner Kebab (ensure halal meat)", "Currywurst (can be halal)", "Sauerbraten (can be halal)", "Schnitzel (can be halal)", "Bratwurst (ensure halal)"],
        drinks: ["Apfelschorle", "Spezi", "Fruit juice", "Non-alcoholic beer", "Kaffee"]
    },
    "United Kingdom": {
        foods: ["Chicken Tikka Masala (check for halal meat)", "Kebabs", "Biryani", "Fish and Chips", "Shepherd's Pie"],
        drinks: ["Tea", "Lemonade", "Ginger beer", "Blackcurrant juice", "Apple cider"]
    },
    Greece: {
        foods: ["Souvlaki (ensure halal meat)", "Moussaka (check meat)", "Feta Cheese Salad", "Dolmades", "Tzatziki"],
        drinks: ["Greek coffee", "Frappe", "Orange juice", "Mountain tea", "Lemonade"]
    },
    France: {
        foods: ["Ratatouille", "Baguette Sandwiches (if filled with halal)", "Falafel", "Tajine (Moroccan)", "Crêpes (check fillings)"],
        drinks: ["Orangina", "Mint syrup drinks", "Lemonade", "Café au lait", "Hot chocolate"]
    },
    Poland: {
        foods: ["Pierogi (with halal fillings)", "Kielbasa (ensure halal)", "Bigos (with halal sausage)", "Zrazy (halal)", "Sernik"],
        drinks: ["Apple juice", "Compote", "Herbal tea", "Kefir", "Fruit smoothie"]
    },
    Netherlands: {
        foods: ["Stroopwafels", "Haring (ensure halal)", "Bitterballen (ensure halal)", "Poffertjes", "Patat"],
        drinks: ["Fresh mint tea", "Apple juice", "Karnemelk", "Lemonade", "Orange juice"]
    },
    Belgium: {
        foods: ["Moules-Frites (ensure halal)", "Waffles", "Chocolate (check for halal)", "Carbonnade Flamande (can be halal)", "Speculoos"],
        drinks: ["Hot chocolate", "Lemonade", "Apple juice", "Coffee", "Non-alcoholic beer"]
    },
    Portugal: {
        foods: ["Bacalhau à Brás (check for halal)", "Caldo Verde", "Piri Piri Chicken (check meat)", "Pastel de Nata", "Francesinha (ensure halal)"],
        drinks: ["Sumol", "Lemonade", "Espresso", "Orange juice", "Hot chocolate"]
    },
    Sweden: {
        foods: ["Köttbullar (check meat)", "Gravlax (ensure halal)", "Raggmunk", "Ärtsoppa", "Prinsesstårta"],
        drinks: ["Lingonberry juice", "Swedish coffee", "Sockerdricka", "Milk", "Blueberry soup"]
    },
    Norway: {
        foods: ["Fiskekaker (check meat)", "Lapskaus", "Raspeballer", "Kjøttkaker (check meat)", "Koldtbord"],
        drinks: ["Milk", "Lingonberry juice", "Non-alcoholic beer", "Coffee", "Hot chocolate"]
    },
    Ireland: {
        foods: ["Irish Stew (check meat)", "Boxty", "Colcannon", "Seafood Chowder (ensure halal fish)", "Coddle"],
        drinks: ["Irish breakfast tea", "Apple juice", "Blackcurrant juice", "Lemonade", "Coffee"]
    },
    Luxembourg: {
        foods: ["Gromperekichelcher", "Judd mat Gaardebounen (check meat)", "Kuddelfleck (check meat)", "Mettwurst (check meat)", "Tartes"],
        drinks: ["Mint tea", "Lemonade", "Coffee", "Fruit juice", "Milk"]
    },
    China: {
        foods: ["Dumplings (ensure halal)", "Halal Beef Noodles", "Naan Bread", "Kung Pao Chicken (halal)", "Peking Duck (ensure halal)"],
        drinks: ["Soy milk", "Green tea", "Jasmine tea", "Fruit smoothies", "Bubble tea"]
    },
    India: {
        foods: ["Biryani (ensure halal meat)", "Butter Chicken (halal)", "Paneer Tikka", "Samosas", "Daal"],
        drinks: ["Masala chai", "Lassi", "Coconut water", "Sugarcane juice", "Buttermilk"]
    },
    Indonesia: {
        foods: ["Nasi Goreng", "Rendang (ensure halal)", "Sate (halal)", "Gado-Gado", "Bakso (ensure halal)"],
        drinks: ["Teh botol", "Jus Alpukat", "Es Cendol", "Kopi Luwak", "Coconut water"]
    },
    Pakistan: {
        foods: ["Biryani (ensure halal)", "Nihari", "Karahi", "Seekh Kebabs", "Halwa"],
        drinks: ["Lassi", "Falooda", "Sugarcane juice", "Chai", "Rooh Afza"]
    },
    Bangladesh: {
        foods: ["Biryani (ensure halal)", "Hilsa Fish Curry (ensure halal)", "Panta Ilish", "Chingri Malai", "Bhuna Khichuri"],
        drinks: ["Borhani", "Coconut water", "Lemonade", "Chai", "Green coconut juice"]
    },
    Japan: {
        foods: ["Chicken Teriyaki (ensure halal)", "Ramen (halal)", "Sushi (halal)", "Tempura", "Okonomiyaki (ensure halal)"],
        drinks: ["Matcha tea", "Ramune", "Calpis", "Green tea", "Mugicha"]
    },
    Philippines: {
        foods: ["Adobo (ensure halal)", "Pancit", "Lumpia", "Sinigang", "Halo-Halo"],
        drinks: ["Calamansi juice", "Sago't Gulaman", "Buko juice", "Salabat", "Mango shake"]
    },
    Vietnam: {
        foods: ["Pho (ensure halal meat)", "Banh Mi (ensure halal)", "Goi Cuon", "Com tam", "Cha Gio"],
        drinks: ["Ca phe sua da", "Tra da", "Sinh to", "Nuoc mia", "Lemon tea"]
    },
    Turkey: {
        foods: ["Kebabs (ensure halal)", "Baklava", "Pide", "Dolma", "Manti"],
        drinks: ["Ayran", "Turkish tea", "Salep", "Pomegranate juice", "Turkish coffee"]
    },
    Thailand: {
        foods: ["Pad Thai (ensure halal)", "Green Curry (ensure halal)", "Som Tum", "Tom Yum Goong (ensure halal)", "Massaman Curry (ensure halal)"],
        drinks: ["Cha yen", "Lemongrass tea", "Coconut water", "Nam Matoom", "Roselle juice"]
    },
    "South Korea": {
        foods: ["Bibimbap (ensure halal)", "Kimchi (check ingredients)", "Bulgogi (ensure halal)", "Tteokbokki", "Japchae (ensure halal)"],
        drinks: ["Sikhye", "Yuja tea", "Barley tea", "Omija tea", "Banana milk"]
    },
    Malaysia: {
        foods: ["Nasi Lemak", "Satay", "Roti Canai", "Laksa", "Char Kway Teow"],
        drinks: ["Teh Tarik", "Sirap Bandung", "Coconut water", "Milo", "Lemongrass tea"]
    },
    Nepal: {
        foods: ["Dal Bhat", "Momo", "Sel Roti", "Gundruk", "Thukpa"],
        drinks: ["Chiya", "Lassi", "Butter tea", "Mint tea", "Lemon soda"]
    },
    SriLanka: {
        foods: ["Rice and Curry (ensure halal)", "Kottu Roti", "Hoppers", "Dhal Curry", "String Hoppers"],
        drinks: ["King coconut water", "Falooda", "Ginger tea", "Woodapple juice", "Iced coffee"]
    },
    Singapore: {
        foods: ["Chili Crab (check fish)", "Hainanese Chicken Rice (ensure halal)", "Laksa (ensure halal)", "Char Kway Teow", "Roti Prata"],
        drinks: ["Teh Tarik", "Sugarcane juice", "Bandung", "Lemon tea", "Milo Dinosaur"]
    },
    Armenia: {
        foods: ["Khorovats", "Dolma", "Lavash", "Harissa", "Ghapama"],
        drinks: ["Tan", "Pomegranate juice", "Armenian coffee", "Mint tea", "Apricot juice"]
    },
    Cyprus: {
        foods: ["Souvla (ensure halal)", "Halloumi", "Kleftiko (ensure halal)", "Tava", "Sheftalia (ensure halal)"],
        drinks: ["Ayran", "Pomegranate juice", "Lemonade", "Herbal tea", "Cypriot coffee"]
    },
    Maldives: {
        foods: ["Mas Huni", "Garudhiya", "Fihunu Mas", "Huni Roshi", "Bajiya"],
        drinks: ["Coconut water", "Black tea", "Raa", "Lemonade", "Passionfruit juice"]
    },
    Brunei: {
        foods: ["Nasi Katok", "Ambuyat", "Satay", "Soto", "Kueh"],
        drinks: ["Teh Tarik", "Coconut water", "Bandung", "Lemon tea", "Sugarcane juice"]
    },
    Brazil: {
        foods: ["Feijoada (check meat)", "Pão de Queijo", "Coxinha", "Brigadeiro", "Acarajé (check halal)"],
        drinks: ["Coconut water", "Guaraná", "Caldo de Cana", "Mate tea", "Lemonade"]
    },
    Colombia: {
        foods: ["Bandeja Paisa", "Arepa", "Sancocho", "Ajiaco", "Empanadas"],
        drinks: ["Aguapanela", "Guarapo", "Limonada", "Chicha de Maíz", "Jugos Naturales"]
    },
    Argentina: {
        foods: ["Asado (ensure halal)", "Empanadas (check meat)", "Milanesa (check meat)", "Choripán (check meat)", "Dulce de Leche"],
        drinks: ["Mate", "Limonada", "Jugo de Manzana", "Agua de Coco", "Jugo de Uva"]
    },
    Peru: {
        foods: ["Ceviche", "Lomo Saltado", "Aji de Gallina", "Causa", "Anticuchos (ensure halal)"],
        drinks: ["Chicha Morada", "Emoliente", "Limonada", "Agua de Coco", "Jugos Naturales"]
    },
    Venezuela: {
        foods: ["Arepas", "Pabellón Criollo", "Hallacas", "Tequeños", "Tostones"],
        drinks: ["Papelón con Limón", "Chicha Andina", "Limonada", "Ginger Beer", "Coconut Water"]
    },
    Chile: {
        foods: ["Pastel de Choclo (check meat)", "Empanadas (ensure halal)", "Completo", "Cazuela", "Porotos con Riendas"],
        drinks: ["Mote con Huesillo", "Limonada", "Chicha", "Agua de Hierbas", "Jugos Naturales"]
    },
    Ecuador: {
        foods: ["Ceviche", "Encebollado", "Hornado (ensure halal)", "Seco de Chivo (check meat)", "Fanesca"],
        drinks: ["Agua de Coco", "Chicha de Jora", "Guayusa Tea", "Limonada", "Jugo de Guanábana"]
    },
    Bolivia: {
        foods: ["Salteñas (ensure halal)", "Pique Macho", "Llahka", "Sopa de Maní", "Chicharrón (ensure halal)"],
        drinks: ["Mocochinchi", "Api Morado", "Chicha", "Limonada", "Jugo de Tuna"]
    },
    Paraguay: {
        foods: ["Sopa Paraguaya", "Asado (check meat)", "Chipa", "Mbeju", "Bori-Bori"],
        drinks: ["Tereré", "Cocido", "Mate", "Jugo de Naranja", "Limonada"]
    },
    Uruguay: {
        foods: ["Asado (check meat)", "Chivito", "Milanesa (check meat)", "Dulce de Leche", "Bizcochos"],
        drinks: ["Mate", "Limonada", "Jugo de Manzana", "Agua de Coco", "Jugo de Uva"]
    },
    Guyana: {
        foods: ["Pepperpot", "Metemgee", "Dhal", "Fish Curry (ensure halal)", "Bunjal"],
        drinks: ["Mauby", "Sorrel Drink", "Lemonade", "Ginger Beer", "Coconut Water"]
    },
    Suriname: {
        foods: ["Pom", "Roti", "Saoto Soup", "Kapsalon", "Bami"],
        drinks: ["Da Wet", "Orgeade", "Lemonade", "Ginger Beer", "Tamarind Drink"]
    },
    Australia: {
        foods: ["Vegemite Toast", "Lamingtons", "Pavlova", "Meat Pies (check for halal)", "Anzac Biscuits"],
        drinks: ["Flat White", "Lemon Myrtle Tea", "Bundaberg Ginger Beer", "Sparkling Water", "Freshly Squeezed Juice"]
    },
    "New Zealand": {
        foods: ["Hāngī", "Pavlova", "Fish and Chips (check fish)", "Lamb Chops (ensure halal)", "Kiwifruit"],
        drinks: ["Flat White", "Lemonade", "Apple Cider", "Kiwi Smoothie", "Soda"]
    },
    Switzerland: {
        foods: ["Rösti", "Fondue (check cheese and meat)", "Raclette (check cheese)", "Zopf", "Bircher Müesli"],
        drinks: ["Swiss Hot Chocolate", "Rivella", "Fruit Juices", "Coffee", "Herbal Teas"]
    },
    Austria: {
        foods: ["Wiener Schnitzel (ensure halal)", "Sachertorte", "Apfelstrudel", "Kaiserschmarrn", "Brettljause"],
        drinks: ["Austrian Coffee", "Almdudler", "Lemonade", "Fruit Juices", "Apfelmost"]
    },
    Denmark: {
        foods: ["Smørrebrød (check fillings)", "Frikadeller (ensure halal)", "Wienerbrød", "Rugbrød", "Stegt flæsk (ensure halal)"],
        drinks: ["Elderflower Drink", "Soda", "Lemonade", "Coffee", "Fruit Juices"]
    },
    Finland: {
        foods: ["Karjalanpiirakka", "Ruisleipä", "Lohikeitto (ensure halal)", "Kalakukko", "Poronkäristys (check meat)"],
        drinks: ["Cloudberry Juice", "Coffee", "Lemonade", "Sima", "Berry Juices"]
    },
    Iceland: {
        foods: ["Hákarl (check preparation)", "Skyr", "Lamb Soup (check meat)", "Icelandic Fish", "Bread"],
        drinks: ["Coffee", "Hot Chocolate", "Fruit Juices", "Milk", "Berry Juices"]
    },
    Russia: {
        foods: ["Borscht", "Pelmeni (check meat)", "Blini (check fillings)", "Shchi", "Olivier Salad"],
        drinks: ["Kvas", "Mors", "Tea", "Herbal tea", "Fruit Juices"]
    },
    "South Africa": {
        foods: ["Bobotie", "Bunny Chow", "Braaivleis", "Veldskoen", "Boerewors (check halal)"],
        drinks: ["Rooibos Tea", "Fruit Juices", "Lemonade", "Ice Tea", "Coffee"]
    },
    Mexico: {
        foods: ["Tacos (ensure halal meat)", "Tamales", "Enchiladas", "Guacamole", "Chiles Rellenos (ensure halal)"],
        drinks: ["Horchata", "Agua Fresca", "Mexican Coke", "Lemonade", "Jamaica Drink"]
    },
    Canada: {
        foods: ["Poutine (ensure halal gravy)", "Butter Tarts", "Bannock", "Maple Syrup Treats", "Nanaimo Bars"],
        drinks: ["Maple Latte", "Tim Hortons Coffee", "Fruit Punch", "Iced Tea", "Lemonade"]
    },
    "United States": {
        foods: ["Burger (ensure halal beef)", "Hotdogs (ensure halal)", "Barbecue Ribs (check pork)", "Mac and Cheese", "Buffalo Wings"],
        drinks: ["Soda", "Lemonade", "Iced Coffee", "Milkshakes", "Sweet Tea"]
    },
    "Czech Republic": {
        foods: ["Svíčková", "Trdelník", "Goulash (check meat)", "Koláče", "Bramboráky"],
        drinks: ["Kofola", "Ginger Ale", "Lemonade", "Fruit Juices", "Tea"]
    },
    Romania: {
        foods: ["Sarmale", "Mămăligă", "Ciorbă", "Mititei (ensure halal)", "Papanasi"],
        drinks: ["Fruit Juices", "Teas", "Mineral Water", "Lemonade", "Compote"]
    },
    Hungary: {
        foods: ["Gulyás", "Pörkölt (ensure halal)", "Lángos", "Dobos Cake", "Hortobágyi palacsinta (check meat)"],
        drinks: ["Búza Beer", "Mineral Water", "Fruit Juices", "Lemonade", "Coffee"]
    },
    Croatia: {
        foods: ["Peka", "Sarma", "Veal under the bell (check meat)", "Fritule", "Štrukli"],
        drinks: ["Fruit Juices", "Croatian Coffee", "Mineral Water", "Lemonade", "Herbal Tea"]
    }
};



function normalizeInput(country) {
    return country.trim().toLowerCase(); // Normalizing by trimming and converting to lowercase
}

function RecommendCity(country) {
    const normalizedCountry = normalizeInput(country);
    const matchingKey = Object.keys(WhatCity).find(key => key.toLowerCase() === normalizedCountry);    
    if (matchingKey) {
        var random_index = Math.floor(Math.random() * WhatCity[matchingKey].length);
        return WhatCity[matchingKey][random_index];
    } else {
        return "Country not found in the database.";
    }
}

function RecommendFood(country) {
    const normalizedCountry = normalizeInput(country);
    const matchingKey = Object.keys(LocalCuisine).find(key => key.toLowerCase() === normalizedCountry);
    if (matchingKey && LocalCuisine[matchingKey].foods) {
        var foods = LocalCuisine[matchingKey].foods;
        var randomIndex = Math.floor(Math.random() * foods.length);
        return foods[randomIndex];
    } else {
        return "Country or halal food options not found in the database.";
    }
}

function RecommendHalalDrink(country) {
    const normalizedCountry = normalizeInput(country);
    const matchingKey = Object.keys(LocalCuisine).find(key => key.toLowerCase() === normalizedCountry);  
    if (matchingKey && LocalCuisine[matchingKey].drinks) {
        var drinks = LocalCuisine[matchingKey].drinks;
        var randomIndex = Math.floor(Math.random() * drinks.length);
        return drinks[randomIndex];
    } else {
        return "Country or halal drink options not found in the database.";
    }
}

// console.log(RecommendCity("Egypt"));
// console.log(RecommendFood("Egypt"));
// console.log(RecommendHalalDrink("Egypt"));

module.exports = { RecommendCity, RecommendFood, RecommendHalalDrink };