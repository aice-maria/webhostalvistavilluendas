

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}


// Define the language reload anchors
var language = {
    en: {
        desc: "Description",
        serv: "Services",
        rooms: "Rooms",
        rules: "Rules",
        hosts: "Hosts",
        contact: "Contact us",
        hostal: "Rental apartment Villuendas View",
        d1: "Apartment with two independent rooms with their bath. It has common livingroom, two terraces and a balcony. Comfort and hygiene are guaranteed in our premises.",
        d2: "Located close to the center of the city, overlooking the central park and the historical monument.",
        d3: "Visit us and enjoy an unforgettable vacation in Santa Clara city, you will receive the best services.",
        services: "We offer you:",
        exteriors: "Exteriors",
        view: "View of the city horizon",
        backprivateyard: "Back private terrace",
        yardfreeair: "Outdoors terrace",
        balcony: "Balcony.",
        entret: "Entretainment",
        wifi: "Wifi.",
        tv: "TV.",
        desk: "Work desk",
        serv2: "Essential services",
        tow: "Toweling.",
        sheet: "Sheets.",
        hig: "Bath and clean products.",
        sanitary: "Sanitary products.",
        servicesextra: "Other services",
        clima: "Air conditioning.",
        hotwater: "Hot water.",
        bar: " Minibar.",
        features: "Features of our stablishment",
        livingroom: "Livingroom",
        relax: "Space for relaxing",
        privateyard: "Private terrace",
        reunion: "Food and reunion place",
        eachroom: "Each room has:",
        privatebath: "Private bath.",
        beds: "Two beds.",
        kitchen: "Kitchen",
        extyard: "Outsite terrace",
        indispensable: "Essencial tools",
        blue: "Blue room",
        personalbeds: "Two personal beds",
        bluebath: "Blue room bath",
        bluebathdesc: "Hot shower and sanitary products",
        greenbathdesc: "Hot shower and sanitary products",
        green: "Green room",
        kingbed: "King bed and personal bed",
        greenbath: "Green room bath",
        houserules: "Some rules of the house",
        chekin: "Check-in: From 12'o clock. Flexible.",
        checkout: "Salida: Befor 11:30AM. Flexible.",
        notime: "No acces time restrictions.",
        forbiden: "Events or parties forbiden.",
        nopets: "No pets allow.",
        smoke: "Smoking allow only in terrace and balcony",
        health: "Health and security:",
        covid: "This stablishment fallow the hygiene rules to prevent Covid-19.",
        cleaning: "Daily cleaning or at customer's demand.",
        charges: "Extra charges for damage to the stablishment .",
        policy: "Cancellation policy:",
        cancelations: "Cancellations up to two days before the arrival date. Flexible.",
        lan: "Languages",
        lanlist: "English, Spanish, Portuguese",
        hosterstext: " \"In our stablishment you will find the ideal conditions to enjoy a nice vacation in Santa Clara city. We offer you a space for relaxation and rest. In addition, from our location you can get to know the main tourist points of the city; from the best restaurants to the fundamental recreational centers such as El Mejunje, cultural and historical facilities, among others. Visit us!.\" ",
        name1: "Ramón F. Castillo Alvarez",
        name2: "Jorge A. León Llanes",
        fallow: "Follow us",
        visitus: "Visit us",
        address: "Enrique Villuendas street, 205A between San Miguel and Candelaria, Santa Clara, Villa Clara, Cuba"
    },
    es: {
        desc: "Descripción",
        serv: "Servicios",
        rooms: "Habitaciones",
        rules: "Reglas",
        hosts: "Anfitriones",
        contact: "Contáctenos",
        hostal: "Hostal Vista Villuendas",
        d1: "Apartamento con dos habitaciones independientes, cada una con su baño privado. Cuenta con una sala, patio y dos terrazas. Se garantiza confort e higiene en nuestro local.",
        d2: "Ubicado a pocos metros del centro de la ciudad, con vista al parque y al monumento histórico de la ciudad.",
        d3: "Visítenos y difrute de unas vacaciones en Santa Clara inovidables, recibirá las mejores atenciones.",
        services: "Este lugar le ofrece:",
        exteriors: "Exteriores",
        view: "Vista al horizonte de la ciudad.",
        backprivateyard: "Terraza trasera privada.",
        yardfreeair: "Terraza al aire libre.",
        balcony: "Balcón.",
        entret: "Entretenimiento",
        wifi: "Wifi.",
        tv: "TV.",
        desk: "Escritorio para trabajo.",
        serv2: "Servicios imprescindibles",
        tow: "Toallas.",
        sheet: "Sábanas.",
        hig: "Productos para la higiene y baño.",
        sanitary: "Productos sanitarios.",
        servicesextra: "Servicios adicionales",
        clima: "Climatización.",
        hotwater: "Agua caliente.",
        bar: "Minibar.",
        features: "Características de nuestro alojamiento",
        livingroom: "Sala",
        relax: "Espacio para su relajación",
        privateyard: "Terraza privada",
        reunion: "Local para comidas, de runión",
        eachroom: "Cada habitación cuenta con:",
        privatebath: "Baño privado.",
        beds: "Dos camas.",
        kitchen: "Cocina",
        extyard: "Terraza exterior",
        indispensable: "Instrumentos indispensables",
        blue: "Cuarto Azul",
        kingbed: "Una cama matrimonial y otra personal",
        bluebath: "Baño del cuarto azul",
        bluebathdesc: "Ducha de agua caliente y productos sanitarios básicos",
        greenbathdesc: "Ducha de agua caliente y productos sanitarios básicos",
        green: "Cuarto Verde",
        personalbeds: "Dos camas personales",
        greenbath: "Baño del cuarto verde",
        houserules: "Algunas de las reglas de la casa",
        chekin: "Check-in: A partir de 12:00AM. Flexible.",
        checkout: "Salida: 11:30AM. Flexible.",
        notime: "Acceso sin restricciones de horarios.",
        forbiden: "Prohibido fiestas o eventos.",
        nopets: "No se permiten mascotas.",
        smoke: "Apto para fumadores, solo en balcon y terrazas.",
        health: "Salud y seguridad:",
        covid: "El local cumple con las normas de higiene ante el Covid-19.",
        cleaning: "Limpieza diaria o a preferencia del huesped.",
        charges: "Cargos extra por daños al alojamiento.",
        policy: "Política de cancelación:",
        cancelations: "Cancelaciones hasta 2 días antes de la fecha de llegada. Flexible.",
        lan: "Idiomas",
        lanlist: "Español, Inglés, Portugués",
        hosterstext: " \"En nuestro local encontrará las condiciones ideales para disfrutar de unas lindas vacaciones en la ciudad de Santa CLara. Le ofrecemos un espacio para la relajación y el descanso. Además, desde nuestra ubicación puede conocer los principales puntos turísticos de la ciudad; desde los mejores restaurantes, los centros recreativos fundamentales como El Mejunje, instalaciones culturales e históricas, entre otras. Visítenos!.\" ",
        name1: "Ramón F. Castillo Alvarez",
        name2: "Jorge A. León Llanes",
        fallow: "Síguenos en las redes sociales",
        visitus: "Visítenos",
        address: "Enrique Villuendas, 205A entre San Miguel y Candelaria, Santa Clara, Villa Clara, Cuba"
    },

};

//const arrayOfValues = [desc, serv];
//const arrayOfId = [Desc, Serv];



// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage 
    // depending on the hash value
    if (window.location.hash == "#es") {
        siteContentDesc.textContent = language.es.desc;
        siteContentServ.textContent = language.es.serv;
        siteContentRooms.textContent = language.es.rooms;
        siteContentRules.textContent = language.es.rules;
        siteContentHosts.textContent = language.es.hosts;   
        siteContentContact.textContent = language.es.contact;
        siteContentHostalVV.textContent = language.es.hostal;
        siteContentD1.textContent = language.es.d1;
        siteContentD2.textContent = language.es.d2;
        siteContentD3.textContent = language.es.d3;
        siteContentOffers.textContent = language.es.services;

        siteContentExt.textContent = language.es.exteriors;
        siteContentView.textContent = language.es.view;
        siteContentTerrace.textContent = language.es.backprivateyard
        siteContentTerrace2.textContent = language.es.yardfreeair;

        siteContentBalcony.textContent = language.es.balcony;

        siteContentEntret.textContent = language.es.entret;
        siteContentWifi.textContent = language.es.wifi;
        siteContentTv.textContent = language.es.tv;
        siteContentDesk.textContent = language.es.desk;
        siteContentServ2.textContent = language.es.serv2;

        siteContentTow.textContent = language.es.tow;
        siteContentSheet.textContent = language.es.sheet;
        siteContentHig.textContent = language.es.hig;
        siteContentSanitary.textContent = language.es.sanitary;
        siteContentExtra.textContent = language.es.servicesextra;
        siteContentClima.textContent = language.es.clima;
        siteContentHot.textContent = language.es.hotwater;
        siteContentBar.textContent = language.es.bar;
        siteContentFeat.textContent = language.es.features;
        siteContentLiving.textContent = language.es.livingroom;
        siteContentRelax.textContent = language.es.relax;
        siteContentPrivate.textContent = language.es.privateyard;
        siteContentReunion.textContent = language.es.reunion;
        siteContentEach.textContent = language.es.eachroom;

        siteContentPrivateBath.textContent = language.es.privatebath;
        siteContentBeds.textContent = language.es.beds;
        siteContentKitchen.textContent = language.es.kitchen;
        siteContentExtyard.textContent = language.es.extyard;
        siteContentKitchen2.textContent = language.es.kitchen;
        siteContentIndis.textContent = language.es.indispensable;
        siteContentBlue.textContent = language.es.blue;
        siteContentPersBed.textContent = language.es.personalbeds;
        siteContentBluebath.textContent = language.es.bluebath;
        siteContentBluebathDesc.textContent = language.es.bluebathdesc;

        siteContentGreen.textContent = language.es.green;
        siteContentKingbed.textContent = language.es.kingbed;
        siteContentGreenbath.textContent = language.es.greenbath;

        siteContentGreendesc.textContent = language.es.bluebathdesc;

        siteContentHouse.textContent = language.es.houserules;
        siteContentCheckin.textContent = language.es.chekin;
        siteContentCheckout.textContent = language.es.checkout;
        siteContentNotime.textContent = language.es.notime;
        siteContentForbiden.textContent = language.es.forbiden;
        siteContentPets.textContent = language.es.nopets;

        siteContentSmoke.textContent = language.es.smoke;
        siteContentHealth.textContent = language.es.health;
        siteContentCovid.textContent = language.es.covid;
        siteContentCleaning.textContent = language.es.cleaning;
        siteContentChrges.textContent = language.es.charges;
        siteContentPolicy.textContent = language.es.policy;
        siteContentCancel.textContent = language.es.cancelations;
        siteContentHosts2.textContent = language.es.hosts; 
        siteContentLan.textContent = language.es.lan;

        siteContentLanlist.textContent = language.es.lanlist;
        siteContentHostsdesc.textContent = language.es.hosterstext;
        
        siteContentFallow.textContent = language.es.fallow;
        siteContentContact2.textContent = language.es.contact;
        siteContentVisit.textContent = language.es.visitus;
        siteContentAddress.textContent = language.es.address;

    



    } else if (window.location.hash == "#en") {

        siteContentDesc.textContent = language.en.desc;
        siteContentServ.textContent = language.en.serv;
        siteContentRooms.textContent = language.en.rooms;
        siteContentRules.textContent = language.en.rules;
        siteContentHosts.textContent = language.en.hosts;   

        siteContentContact.textContent = language.en.contact;
        siteContentHostalVV.textContent = language.en.hostal;
        siteContentD1.textContent = language.en.d1;
        siteContentD2.textContent = language.en.d2;
        siteContentD3.textContent = language.en.d3;
        siteContentOffers.textContent = language.en.services;
        siteContentExt.textContent = language.en.exteriors;
        siteContentView.textContent = language.en.view;
        siteContentTerrace.textContent = language.en.backprivateyard;
        siteContentTerrace2.textContent = language.en.yardfreeair;

        siteContentBalcony.textContent = language.en.balcony;
        siteContentEntret.textContent = language.en.entret;
        siteContentWifi.textContent = language.en.wifi;
        siteContentTv.textContent = language.en.tv;

        siteContentDesk.textContent = language.en.desk;
        siteContentServ2.textContent = language.en.serv2;

        siteContentTow.textContent = language.en.tow;
        siteContentSheet.textContent = language.en.sheet;
        siteContentHig.textContent = language.en.hig;
        siteContentSanitary.textContent = language.en.sanitary;
        siteContentExtra.textContent = language.en.servicesextra;
        siteContentClima.textContent = language.en.clima;
        siteContentHot.textContent = language.en.hotwater;
        siteContentBar.textContent = language.en.bar;
        siteContentFeat.textContent = language.en.features;
        siteContentLiving.textContent = language.en.livingroom;
        siteContentRelax.textContent = language.en.relax;
        siteContentPrivate.textContent = language.en.privateyard;
        siteContentReunion.textContent = language.en.reunion;
        siteContentEach.textContent = language.en.eachroom;

        siteContentPrivateBath.textContent = language.en.privatebath;
        siteContentBeds.textContent = language.en.beds;
        siteContentKitchen.textContent = language.en.kitchen;
        siteContentExtyard.textContent = language.en.extyard;
        siteContentKitchen2.textContent = language.en.kitchen;
        siteContentIndis.textContent = language.en.indispensable;
        siteContentBlue.textContent = language.en.blue;
        siteContentPersBed.textContent = language.en.personalbeds;
        siteContentBluebath.textContent = language.en.bluebath;
        siteContentBluebathDesc.textContent = language.en.bluebathdesc;



       

        siteContentGreen.textContent = language.en.green;
        siteContentKingbed.textContent = language.en.kingbed;
        siteContentGreenbath.textContent = language.en.greenbath;

        siteContentGreendesc.textContent = language.en.bluebathdesc;
        siteContentHouse.textContent = language.en.houserules;
        siteContentCheckin.textContent = language.en.chekin;
        siteContentCheckout.textContent = language.en.checkout;
        siteContentNotime.textContent = language.en.notime;
        siteContentForbiden.textContent = language.en.forbiden;
        siteContentPets.textContent = language.en.nopets;

        siteContentSmoke.textContent = language.en.smoke;
        siteContentHealth.textContent = language.en.health;
        siteContentCovid.textContent = language.en.covid;
        siteContentCleaning.textContent = language.en.cleaning;
        siteContentChrges.textContent = language.en.charges;
        siteContentPolicy.textContent = language.en.policy;
        siteContentCancel.textContent = language.en.cancelations;
        siteContentHosts2.textContent = language.en.hosts; 
        siteContentLan.textContent = language.en.lan;

        siteContentLanlist.textContent = language.en.lanlist;
        siteContentHostsdesc.textContent = language.en.hosterstext;
       
        siteContentFallow.textContent = language.en.fallow;
        siteContentContact2.textContent = language.en.contact;
        siteContentVisit.textContent = language.en.visitus;
        siteContentAddress.textContent = language.en.address;
       
    }

}



/*
function esFunction(value, index, array){
    value.textContent = language.es.arrayOfValues[index];
}
function enFunction(value, index, array){
    value.textContent = language.en.arrayOfValues[index];
}*/
/*
if (window.location.hash == "#es") {
    siteContentDesc.textContent = language.es.desc;
    siteContentServ.textContent = language.es.serv;
    siteContentRooms.textContent = language.es.rooms;
    siteContentRules.textContent = language.es.rules;
    siteContentHosts.textContent = language.es.hosts;
    siteContentContact.textContent = language.es.contact;
    siteContent.textContent = language.es.d1;
    siteContent.textContent = language.es.d2;
    siteContent.textContent = language.es.d3;
    siteContent.textContent = language.es.services;
    siteContent.textContent = language.es.exteriors;
    siteContent.textContent = language.es.view;
    siteContent.textContent = language.es.backprivateyard;
    siteContent.textContent = language.es.yardfreeair;
    siteContent.textContent = language.es.balcony;
    siteContent.textContent = language.es.entret;
    siteContent.textContent = language.es.wifi;
    siteContent.textContent = language.es.tv;
    siteContent.textContent = language.es.desk;
    siteContent.textContent = language.es.serv2;
    siteContent.textContent = language.es.tow;
    siteContent.textContent = language.es.sheet;
    siteContent.textContent = language.es.hig;
    siteContent.textContent = language.es.sanitary;
    siteContent.textContent = language.es.servicesextra;
    siteContent.textContent = language.es.clima;
    siteContent.textContent = language.es.hotwater;
    siteContent.textContent = language.es.bar;
    siteContent.textContent = language.es.features;
    siteContent.textContent = language.es.livingroom;
    siteContent.textContent = language.es.relax;
    siteContent.textContent = language.es.privateyard;
    siteContent.textContent = language.es.reunion;
    siteContent.textContent = language.es.eachroom;
    siteContent.textContent = language.es.privatebath;
    siteContent.textContent = language.es.beds;
    siteContent.textContent = language.es.kitchen;
    siteContent.textContent = language.es.extyard;
    siteContent.textContent = language.es.indispensable;
    siteContent.textContent = language.es.blue;
    siteContent.textContent = language.es.personalbeds;
    siteContent.textContent = language.es.bluebath;
    siteContent.textContent = language.es.bluebathdesc;
    siteContent.textContent = language.es.green;
    siteContent.textContent = language.es.kingbed;
    siteContent.textContent = language.es.greenbath;
    siteContent.textContent = language.es.houserules;
    siteContent.textContent = language.es.chekin;
    siteContent.textContent = language.es.checkout;
    siteContent.textContent = language.es.notime;
    siteContent.textContent = language.es.forbiden;
    siteContent.textContent = language.es.nopets;
    siteContent.textContent = language.es.smoke;
    siteContent.textContent = language.es.health;
    siteContent.textContent = language.es.covid;
    siteContent.textContent = language.es.cleaning;
    siteContent.textContent = language.es.charges;
    siteContent.textContent = language.es.policy;
    siteContent.textContent = language.es.cancelations;
    siteContent.textContent = language.es.lan;
    siteContent.textContent = language.es.lanlist;
    siteContent.textContent = language.es.hosterstext;
    siteContent.textContent = language.es.name1;
    siteContent.textContent = language.es.name2;
    siteContent.textContent = language.es.fallow;
    siteContent.textContent = language.es.visitus;
    siteContent.textContent = language.es.address;
} else if (window.location.hash == "#en") {
    siteContentDesc.textContent = language.en.desc;
    siteContentServ.textContent = language.en.serv;
    siteContentRooms.textContent = language.en.rooms;
    siteContentRules.textContent = language.en.rules;
    siteContentHosts.textContent = language.en.hosts;
    siteContentContact.textContent = language.en.contact;
    siteContent.textContent = language.en.d1;
    siteContent.textContent = language.en.d2;
    siteContent.textContent = language.en.d3;
    siteContent.textContent = language.en.services;
    siteContent.textContent = language.en.exteriors;
    siteContent.textContent = language.en.view;
    siteContent.textContent = language.en.backprivateyard;
    siteContent.textContent = language.en.yardfreeair;
    siteContent.textContent = language.en.balcony;
    siteContent.textContent = language.en.entret;
    siteContent.textContent = language.en.wifi;
    siteContent.textContent = language.en.tv;
    siteContent.textContent = language.en.desk;
    siteContent.textContent = language.en.serv2;
    siteContent.textContent = language.en.tow;
    siteContent.textContent = language.en.sheet;
    siteContent.textContent = language.en.hig;
    siteContent.textContent = language.en.sanitary;
    siteContent.textContent = language.en.servicesextra;
    siteContent.textContent = language.en.clima;
    siteContent.textContent = language.en.hotwater;
    siteContent.textContent = language.en.bar;
    siteContent.textContent = language.en.features;
    siteContent.textContent = language.en.livingroom;
    siteContent.textContent = language.en.relax;
    siteContent.textContent = language.en.privateyard;
    siteContent.textContent = language.en.reunion;
    siteContent.textContent = language.en.eachroom;
    siteContent.textContent = language.en.privatebath;
    siteContent.textContent = language.en.beds;
    siteContent.textContent = language.en.kitchen;
    siteContent.textContent = language.en.extyard;
    siteContent.textContent = language.en.indispensable;
    siteContent.textContent = language.en.blue;
    siteContent.textContent = language.en.personalbeds;
    siteContent.textContent = language.en.bluebath;
    siteContent.textContent = language.en.bluebathdesc;
    siteContent.textContent = language.en.green;
    siteContent.textContent = language.en.kingbed;
    siteContent.textContent = language.en.greenbath;
    siteContent.textContent = language.en.houserules;
    siteContent.textContent = language.en.chekin;
    siteContent.textContent = language.en.checkout;
    siteContent.textContent = language.en.notime;
    siteContent.textContent = language.en.forbiden;
    siteContent.textContent = language.en.nopets;
    siteContent.textContent = language.en.smoke;
    siteContent.textContent = language.en.health;
    siteContent.textContent = language.en.covid;
    siteContent.textContent = language.en.cleaning;
    siteContent.textContent = language.en.charges;
    siteContent.textContent = language.en.policy;
    siteContent.textContent = language.en.cancelations;
    siteContent.textContent = language.en.lan;
    siteContent.textContent = language.en.lanlist;
    siteContent.textContent = language.en.hosterstext;
    siteContent.textContent = language.en.name1;
    siteContent.textContent = language.en.name2;
    siteContent.textContent = language.en.fallow;
    siteContent.textContent = language.en.visitus;
    siteContent.textContent = language.en.address;
}

}*/

