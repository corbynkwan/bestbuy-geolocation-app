module.exports = (workLocation) => {
    let safetyStars = 0;
    switch(workLocation.toLowerCase()) { 
        case "arbutus ridge": //21 cases total
            safetyStars = 5; 
            break; 
        case "downtown"://804 cases total 
            safetyStars = 0;
            break; 
        case "dunbar - southlands": //29
            safetyStars = 5;
            break; 
        case "fairview": //187
            safetyStars = 2; 
            break; 
        case "grandview - woodland": //157
            safetyStars = 2;
            break; 
        case "hastings - sunrise": //101
            safetyStars = 3;
            break; 
        case "kensington - cedar cottage": // 118
            safetyStars = 3;
            break; 
        case "kerrisdale": //24
            safetyStars = 5;
            break; 
        case "killarney": // 37
            safetyStars = 4;
            break; 
        case "kitsilano": // 125
            safetyStars = 3;
            break; 
        case "marpole": // 64
            safetyStars = 4;
            break; 
        case "mount pleasant": // 162
            safetyStars = 2;
            break; 
        case "musqueam": //  5
            safetyStars = 5;
            break; 
        case "oakridge": // 37
            safetyStars = 4;
            break; 
        case "renfrew - collingwood": //190
            safetyStars = 5;
            break; 
        case "riley park": //53
            safetyStars = 4;
            break; 
        case "shaughnessy": // 33
            safetyStars = 4;
            break; 
        case "south cambie":  // 53  
            safetyStars = 4;
            break; 
        case "stanley park": //6
            safetyStars = 5;
            break; 
        case "strathcona": //226
            safetyStars = 1;
            break; 
        case "sunset": // 78
            safetyStars = 4;
            break; 
        case "victoria - fraserview": // 53
            safetyStars = 4;
            break; 
        case "west end": //192
            safetyStars = 1;
            break; 
        case "west point grey": // 41
            safetyStars = 4;
            break; 
        default: 
            safetyStars = 0; 
            break;
    }
    return safetyStars

};
