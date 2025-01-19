// Motorsport Events 2019-2025
// Author: Rui Pedro Moreira
// github.com/rpdorm/motorsport-events

venues = {
    '0': {
        'name': 'Spa-Francorchamps',
        'location': 'Stavelot, Belgium',
        'flag': 'be',
        'url': 'https://www.racingcircuits.info/europe/belgium/spa-francorchamps.html'
    },
    '1': {
        'name': 'Zandvoort',
        'location': 'Zandvoort, Netherlands',
        'flag': 'nl',
        'url': 'https://www.racingcircuits.info/europe/netherlands/zandvoort.html'
    },
    '2': {
        'name': 'Monza',
        'location': 'Monza, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/monza.html'
    },
    '3': {
        'name': 'Portland International Raceway',
        'location': 'Portland, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/portland-international-raceway.html'
    },
    '4': {
        'name': 'Silverstone',
        'location': 'Silverstone, United Kingdom',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/silverstone.html'
    },
    '5': {
        'name': 'Sochi',
        'location': 'Sochi, Russia',
        'flag': 'ru',
        'url': 'https://www.racingcircuits.info/europe/russia/sochi.html'
    },
    '6': {
        'name': 'Istanbul Park',
        'location': 'Istanbul, Turkey',
        'flag': 'tr',
        'url': 'https://www.racingcircuits.info/asia/turkey/istanbul-park.html'
    },
    '7': {
        'name': 'Suzuka',
        'location': 'Suzuka, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/suzuka.html'
    },
    '8': {
        'name': 'Circuit of the Americas',
        'location': 'Austin, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/circuit-of-the-americas.html'
    },
    '9': {
        'name': 'Autódromo Hermanos Rodríguez',
        'location': 'Mexico City, Mexico',
        'flag': 'mx',
        'url': 'https://www.racingcircuits.info/north-america/mexico/mexico-city.html'
    },
    '10': {
        'name': 'Interlagos',
        'location': 'São Paulo, Brazil',
        'flag': 'br',
        'url': 'https://www.racingcircuits.info/south-america/brazil/interlagos.html'
    },
    '11': {
        'name': 'TBA',
        'location': 'TBA',
        'url': false
    },
    '12': {
        'name': 'Jeddah Street Circuit',
        'location': 'Jeddah, Saudi Arabia',
        'flag': 'sa',
        'url': 'https://www.racingcircuits.info/middle-east/saudi-arabia/jeddah-street-circuit.html'
    },
    '13': {
        'name': 'Yas Marina',
        'location': 'Abu Dhabi, UAE',
        'flag': 'ae',
        'url': 'https://www.racingcircuits.info/middle-east/united-arab-emirates/yas-marina.html'
    },
    '14': {
        'name': 'MotorLand Aragón',
        'location': 'Aragón, Spain',
        'flag': 'es',
        'url': 'https://www.racingcircuits.info/europe/spain/motorland-aragon.html'
    },
    '15': {
        'name': 'Misano World Circuit Marco Simoncelli',
        'location': 'Misano Adriático, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/misano.html'
    },
    '16': {
        'name': 'Autódromo Internacional do Algarve',
        'location': 'Portimão, Portugal',
        'flag': 'pt',
        'url': 'https://www.racingcircuits.info/europe/portugal/algarve-portimao.html'
    },
    '17': {
        'name': 'Circuit Ricardo Tormo',
        'location': 'Cheste, Spain',
        'flag': 'es',
        'url': 'https://www.racingcircuits.info/europe/spain/valencia-ricardo-tormo.html'
    },
    '18': {
        'name': 'Laguna Seca',
        'location': 'Monterey County, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/laguna-seca.html'
    },
    '19': {
        'name': 'Long Beach',
        'location': 'Long Beach, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/long-beach.html'
    },
    '20': {
        'name': 'Bahrain International Circuit',
        'location': 'Sakhir, Bahrain',
        'flag': 'bh',
        'url': 'https://www.racingcircuits.info/middle-east/bahrain/bahrain-international-circuit.html'
    },
    '21': {
        'name': 'Fuji Speedway',
        'location': 'Oyama, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/fuji-speedway.html'
    },
    '22': {
        'name': 'Autodrom Most',
        'location': 'Most, Czech Republic',
        'flag': 'cz',
        'url': 'https://www.racingcircuits.info/europe/czech-republic/most.html'
    },
    '23': {
        'name': 'Pau',
        'location': 'Arnos, France',
        'flag': 'fr',
        'url': 'https://www.racingcircuits.info/europe/france/pau.html'
    },
    '24': {
        'name': 'Adria',
        'location': 'Adria, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/adria.html'
    },
    '25': {
        'name': 'Red Bull Ring',
        'location': 'Spielberg, Austria',
        'flag': 'at',
        'url': 'https://www.racingcircuits.info/europe/austria/red-bull-ring-a-1-ring-osterrichring.html'
    },
    '26': {
        'name': 'TT Circuit Assen',
        'location': 'Assen, Netherlands',
        'flag': 'nl',
        'url': 'https://www.racingcircuits.info/europe/netherlands/tt-circuit-assen.html'
    },
    '27': {
        'name': 'Hockenheimring',
        'location': 'Hockenheim, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/hockenheimring.html'
    },
    '28': {
        'name': 'Norisring',
        'location': 'Nuremberg, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/norisring.html'
    },
    '29': {
        'name': 'Diriyah Street Circuit',
        'location': 'Diriyah, Saudi Arabia',
        'flag': 'sa',
        'url': 'https://www.racingcircuits.info/middle-east/saudi-arabia/ad-diriyah.html'
    },
    '30': {
        'name': 'Saudi Arabia',
        'location': 'Saudi Arabia',
        'flag': 'sa',
        'url': false
    },
    '31': {
        'name': 'Daytona',
        'location': 'Daytona Beach, FL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/daytona.html'
    },
    '32': {
        'name': 'Monte Carlo',
        'location': 'Monaco',
        'flag': 'mc',
        'url': 'https://www.racingcircuits.info/europe/monaco/monte-carlo.html'
    },
    '33': {
        'name': 'Mount Panorama',
        'location': 'Bathurst',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/bathurst-mount-panorama.html'
    },
    '34': {
        'name': 'Sebring',
        'location': 'Sebring, FL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/sebring.html'
    },
    '35': {
        'name': 'Albert Park',
        'location': 'Melbourne, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/albert-park,-melbourne.html'
    },
    '36': {
        'name': 'Imola',
        'location': 'Imola, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/imola.html'
    },
    '37': {
        'name': 'Miami International Autodrome',
        'location': 'Miami, FL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/hard-rock-stadium.html'
    },
    '38': {
        'name': 'Circuit de Barcelona-Catalunya',
        'location': 'Montmeló, Catalonia, Spain',
        'flag': 'es',
        'url': 'https://www.racingcircuits.info/europe/spain/circuit-de-barcelona-catalunya.html'
    },
    '39': {
        'name': 'Baku City Circuit',
        'location': 'Baku, Azerbaijan',
        'flag': 'az',
        'url': 'https://www.racingcircuits.info/asia/azerbaijan/baku.html'
    },
    '40': {
        'name': 'Circuit Gilles Villeneuve',
        'location': 'Montrèal, Canada',
        'flag': 'ca',
        'url': 'https://www.racingcircuits.info/north-america/canada/circuit-gilles-villeneuve,-montreal.html'
    },
    '41': {
        'name': 'Circuit Paul Ricard',
        'location': 'Le Castellet, France',
        'flag': 'fr',
        'url': 'https://www.racingcircuits.info/europe/france/paul-ricard.html'
    },
    '42': {
        'name': 'Hungaroring',
        'location': 'Mogyoród, Hungary',
        'flag': 'hu',
        'url': 'https://www.racingcircuits.info/europe/hungary/hungaroring.html'
    },
    '43': {
        'name': 'Singapore Marina Bay',
        'location': 'Singapore',
        'flag': 'sg',
        'url': 'https://www.racingcircuits.info/asia/singapore/marina-bay-singapore.html'
    },
    '44': {
        'name': 'Circuit de la Sarthe',
        'location': 'Le Mans, France',
        'flag': 'fr',
        'url': 'https://www.racingcircuits.info/europe/france/le-mans.html'
    },
    '45': {
        'name': 'Rome',
        'location': 'Rome, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/rome.html'
    },
    '46': {
        'name': 'Berlin-Tempelhof',
        'location': 'Berlin, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/berlin-tempelhof.html'
    },
    '47': {
        'name': 'Vancouver Street Circuit',
        'location': 'Vancouver, Canada',
        'flag': 'ca',
        'url': false
    },
    '48': {
        'name': 'Brooklyn Street Circuit',
        'location': 'New York, NY, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/brooklyn.html'
    },
    '49': {
        'name': 'Exhibition Centre London',
        'location': 'London, England',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/london-excel.html'
    },
    '50': {
        'name': 'Seoul Street Circuit',
        'location': 'Seoul, South Korea',
        'flag': 'kr',
        'url': 'https://www.racingcircuits.info/asia/south-korea/seoul-street-circuit.html'
    },
    '51': {
        'name': 'Bowman Gray Stadium',
        'location': 'Winston-Salem, NC, USA',
        'flag': 'us',
        'url': false
    },
    '52': {
        'name': 'Beijing Street Circuit',
        'location': 'Beijing, China',
        'flag': 'cn',
        'url': false
    },
    '53': {
        'name': 'Hampton Downs',
        'location': 'Waikato, New Zealand',
        'flag': 'nz',
        'url': 'https://www.racingcircuits.info/australasia/new-zealand/hampton-downs.html'
    },
    '54': {
        'name': 'Sardinia',
        'location': 'Sardinia, Italy',
        'flag': 'it',
        'url': false
    },
    '55': {
        'name': 'Kenya',
        'location': 'Kenya',
        'flag': 'ke',
        'url': false
    },
    '56': {
        'name': 'Estonia',
        'location': 'Estonia',
        'flag': 'ee',
        'url': false
    },
    '57': {
        'name': 'Finland',
        'location': 'Finland',
        'flag': 'fi',
        'url': false
    },
    '58': {
        'name': 'Greece',
        'location': 'Greece',
        'flag': 'gr',
        'url': false
    },
    '59': {
        'name': 'New Zealand',
        'location': 'New Zealand',
        'flag': 'nz',
        'url': false
    },
    '60': {
        'name': 'Catalonia',
        'location': 'Catalonia, Spain',
        'flag': 'es',
        'url': false
    },
    '61': {
        'name': 'Japan',
        'location': 'Japan',
        'flag': 'jp',
        'url': false
    },
    '62': {
        'name': 'Streets of St. Petersburg',
        'location': 'St. Petersburg, FL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/st-petersburg.html'
    },
    '63': {
        'name': 'Texas Motor Speedway',
        'location': 'Fort Worth, TX, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/texas-world-speedway.html'
    },
    '64': {
        'name': 'Barber Motorsports Park',
        'location': 'Birmingham, AL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/barber-motorsports-park.html'
    },
    '65': {
        'name': 'Indianapolis Motor Speedway',
        'location': 'Indianapolis, IN, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/indianapolis-motor-speedway.html'
    },
    '66': {
        'name': 'Detroit Street Circuit',
        'location': 'Detroit, MI, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/detroit.html'
    },
    '67': {
        'name': 'Road America',
        'location': 'Elkhart Lake, WI, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/road-america.html'
    },
    '68': {
        'name': 'Mid-Ohio',
        'location': 'Lexington, OH, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/mid-ohio.html'
    },
    '69': {
        'name': 'Toronto Exhibition Place',
        'location': 'Toronto, Canada',
        'flag': 'ca',
        'url': 'https://www.racingcircuits.info/north-america/canada/toronto-exhibition-place.html'
    },
    '70': {
        'name': 'Iowa Speedway',
        'location': 'Newton, IA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/iowa-speedway.html'
    },
    '71': {
        'name': 'Nashville Street Circuit',
        'location': 'Nashville, TN, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/nashville-street-circuit.html'
    },
    '72': {
        'name': 'World Wide Technology Raceway',
        'location': 'Madison, IL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/gateway-motorsports-park.html'
    },
    '73': {
        'name': 'Los Angeles Memorial Coliseum',
        'location': 'LA, CA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/la-memorial-coliseum.html'
    },
    '74': {
        'name': 'California Speedway',
        'location': 'Fontana, CA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/auto-club-speedway,-fontana.html'
    },
    '75': {
        'name': 'Las Vegas Motor Speedway',
        'location': 'Las Vegas, NV, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/las-vegas-motor-speedway.html'
    },
    '76': {
        'name': 'Sepang',
        'location': 'Sepang, Malaysia',
        'flag': 'my',
        'url': 'https://www.racingcircuits.info/asia/malaysia/sepang.html'
    },
    '77': {
        'name': 'Mandalika Street Circuit',
        'location': 'Central Lombok Regency, West Nusa Tenggara, Indonesia',
        'flag': 'id',
        'url': 'https://www.racingcircuits.info/asia/indonesia/mandalika.html'
    },
    '78': {
        'name': 'Lusail International Circuit',
        'location': 'Lusail, Qatar',
        'flag': 'qa',
        'url': 'https://www.racingcircuits.info/middle-east/qatar/losail-international-circuit.html'
    },
    '79': {
        'name': 'Termas de Río Hondo',
        'location': 'Termas de Río Hondo, Argentina',
        'flag': 'ar',
        'url': 'https://www.racingcircuits.info/south-america/argentina/autodromo-termas-de-rio-hondo.html'
    },
    '80': {
        'name': 'Circuito de Jerez',
        'location': 'Jerez de la Frontera, Spain',
        'flag': 'es',
        'url': 'https://www.racingcircuits.info/europe/spain/jerez.html'
    },
    '81': {
        'name': 'Circuit Bugatti',
        'location': 'Le Mans, France',
        'flag': 'fr',
        'url': 'https://www.racingcircuits.info/europe/france/le-mans.html'
    },
    '82': {
        'name': 'Mugello',
        'location': 'Scarperia e San Piero, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/mugello.html'
    },
    '83': {
        'name': 'Sachsenring',
        'location': 'Hohenstein-Ernstthal, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/sachsenring.html'
    },
    '84': {
        'name': 'KymiRing',
        'location': 'Iitti, Finland',
        'url': 'https://www.racingcircuits.info/europe/finland/kymiring.html'
    },
    '85': {
        'name': 'Twin Ring Motegi',
        'location': 'Motegi, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/motegi.html'
    },
    '86': {
        'name': 'Chang International Circuit',
        'location': 'Buriram, Thailand',
        'flag': 'th',
        'url': 'https://www.racingcircuits.info/asia/thailand/buriram-united-international-circuit.html'
    },
    '87': {
        'name': 'Phillip Island',
        'location': 'Ventnor, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/phillip-island.html'
    },
    '88': {
        'name': 'misc.',
        'location': '',
        'flag': false,
        'url': false
    },
    '89': {
        'name': 'Pikes Peak',
        'location': 'Pikes Peak, CO, USA',
        'flag': 'us',
        'url': false
    },
    '90': {
        'name': 'Phoenix Raceway',
        'location': 'Phoenix, AZ, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/ism-raceway.html'
    },
    '91': {
        'name': 'Atlanta Motor Speedway',
        'location': 'Atlanta, GA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/atlanta-motor-speedway.html'
    },
    '92': {
        'name': 'Richmond Raceway',
        'location': 'Richmond, VA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/richmond.html'
    },
    '93': {
        'name': 'Watkins Glen',
        'location': 'Watkins Glen, NY, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/watkins-glen.html'
    },
    '94': {
        'name': 'Mosport Park',
        'location': 'Ontario, Canada',
        'flag': 'ca',
        'url': 'https://www.racingcircuits.info/north-america/canada/mosport-park.html'
    },
    '95': {
        'name': 'Lime Rock Park',
        'location': 'Lakeville, CT, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/canada/mosport-park.html'
    },
    '96': {
        'name': 'Bristol Motor Speedway',
        'location': 'Bristol, TN, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/bristol-motor-speedway.html'
    },
    '97': {
        'name': 'Donington Park',
        'location': 'Leicestershire, England',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/donington-park.html'
    },
    '98': {
        'name': 'Oschersleben',
        'location': 'Oschersleben, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/oschersleben.html'
    },
    '99': {
        'name': 'Jakarta International e-Prix Circuit',
        'location': 'Jakarta, Indonesia',
        'flag': 'id',
        'url': 'https://www.racingcircuits.info/asia/indonesia/jakarta-international-eprix-circuit.html'
    },
    '100': {
        'name': 'Brands Hatch',
        'location': 'Kent, England',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/brands-hatch.html'
    },
    '101': {
        'name': 'Circuito do Estoril',
        'location': 'Cascais, Portugal',
        'flag': 'pt',
        'url': 'https://www.racingcircuits.info/europe/portugal/estoril.html'
    },
    '102': {
        'name': 'Nürburgring',
        'location': 'Nürburg, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/nurburgring.html'
    },
    '103': {
        'name': 'Thruxton',
        'location': 'Andover, Hampshire, UK',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/thruxton.html'
    },
    '104': {
        'name': 'Circuit de Nevers Magny-Cours',
        'location': 'Magny Cours, France',
        'flag': 'fr',
        'url': 'https://www.racingcircuits.info/europe/france/magny-cours.html'
    },
    '105': {
        'name': 'San Juan Villicum',
        'location': 'San Juan, Argentina',
        'flag': 'ar',
        'url': 'https://www.racingcircuits.info/south-america/argentina/el-villicum.html'
    },
    '106': {
        'name': 'Darlington Raceway',
        'location': 'Darlington, SC, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/darlington-raceway.html'
    },
    '107': {
        'name': 'Kansas Speedway',
        'location': 'Kansas, KS, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/kansas-speedway.html'
    },
    '108': {
        'name': 'Charlotte Motor Speedway',
        'location': 'Concord, NC, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/charlotte-motor-speedway.html'
    },
    '109': {
        'name': 'Sonoma Raceway',
        'location': 'Sonoma, CA, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/sonoma-raceway.html'
    },
    '110': {
        'name': 'Nashville Superspeedway',
        'location': 'Nashville, TN, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/nashville-superspeedway.html'
    },
    '111': {
        'name': 'New Hampshire Motor Speedway',
        'location': 'North Loudon, NH, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/new-hampshire-motor-speedway.html'
    },
    '112': {
        'name': 'Pocono Raceway',
        'location': 'Long Pond, PA, US',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/pocono-raceway.html'
    },
    '113': {
        'name': 'Oulton Park',
        'location': 'Tarporley, Cheshire, England',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/oulton-park.html'
    },
    '114': {
        'name': 'Croft',
        'location': 'Dalton On Tees, North Yorkshire, UK',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/croft.html'
    },
    '115': {
        'name': 'Knockhill',
        'location': 'Fife, Scotland, UK',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/knockhill.html'
    },
    '116': {
        'name': 'Snetterton',
        'location': 'Norwich, UK',
        'flag': 'gb',
        'url': 'https://www.racingcircuits.info/europe/united-kingdom/snetterton.html'
    },
    '117': {
        'name': 'Hyderabad Street Circuit',
        'location': 'Hyderabad, India',
        'flag': 'in',
        'url': 'https://www.racingcircuits.info/asia/india/hyderabad-street-circuit.html'
    },
    '118': {
        'name': 'São Paulo Street Circuit',
        'location': 'São Paulo, Brazil',
        'flag': 'br',
        'url': 'https://www.racingcircuits.info/south-america/brazil/sao-paulo-street-circuit.html'
    },
    '119': {
        'name': 'Tokyo Street Circuit',
        'location': 'Tokyo, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/tokyo-street-circuit.html'
    },
    '120': {
        'name': 'Shanghai International Circuit',
        'location': 'Shanghai, China',
        'flag': 'cn',
        'url': 'https://www.racingcircuits.info/asia/china/shanghai-international-circuit.html'
    },
    '121': {
        'name': 'Las Vegas Strip Street Circuit',
        'location': 'Las Vegas, NV, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/las-vegas-strip-street-circuit.html'
    },
    '122': {
        'name': 'The Thermal Club',
        'location': 'Thermal, CA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/the-thermal-club.html'
    },
    '123': {
        'name': 'Milwaukee Mile',
        'location': 'West Allis, WI, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/milwaukee-mile.html'
    },
    '124': {
        'name': 'Circuito de Vila Real',
        'location': 'Vila Real, Portugal',
        'flag': 'pt',
        'url': 'https://www.racingcircuits.info/europe/portugal/vila-real.html'
    },
    '125': {
        'name': 'Inje Speedium',
        'location': 'Inje, South Korea',
        'flag': 'kr',
        'url': 'https://www.racingcircuits.info/asia/south-korea/inje-speedium.html'
    },
    '126': {
        'name': 'Latvia',
        'location': 'Latvia',
        'flag': 'lv',
        'url': false
    },
    '127': {
        'name': 'Chile',
        'location': 'Chile',
        'flag': 'cl',
        'url': false
    },
    '128': {
        'name': 'Germany',
        'location': 'Germany',
        'flag': 'de',
        'url': false
    },
    '129': {
        'name': 'Abu Dhabi',
        'location': 'Abu Dhabi, UAE',
        'flag': 'ae',
        'url': false
    },
    '130': {
        'name': 'Argentina',
        'location': 'Argentina',
        'flag': 'ar',
        'url': false
    },
    '131': {
        'name': 'Marocco',
        'location': 'Marocco',
        'flag': 'ma',
        'url': false
    },
    '132': {
        'name': 'Virginia International Raceway',
        'location': 'Alton, VA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/virginia-international-raceway.html'
    },
    '133': {
        'name': 'Road Atlanta',
        'location': 'Braselton, GA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/road-atlanta.html'
    },
    '134': {
        'name': 'Martinsville Speedway',
        'location': 'Ridgeway, VA, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/martinsville-speedway.html'
    },
    '135': {
        'name': 'Talladega Superspeedway',
        'location': 'Talladega, AL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/talladega-superspeedway.html'
    },
    '136': {
        'name': 'Dover Motor Speedway',
        'location': 'Dover, DE, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/dover-motor-speedway.html'
    },
    '137': {
        'name': 'North Wilkesboro Speedway',
        'location': 'North Wilkesboro, NC, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/north-wilkesboro-speedway.html'
    },
    '138': {
        'name': 'Chicago Street Course',
        'location': 'Chicago, IL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/chicago-street-circuit.html'
    },
    '139': {
        'name': 'Michigan International Speedway',
        'location': 'Brooklyn, MI, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/michigan-international-speedway.html'
    },
    '140': {
        'name': 'Homestead–Miami Speedway',
        'location': 'Homestead, FL, USA',
        'flag': 'us',
        'url': 'https://www.racingcircuits.info/north-america/usa/homestead-miami-speedway.html'
    },
    '141': {
        'name': 'Taupō International Motorsport Park',
        'location': 'Taupō, New Zealand',
        'flag': 'nz',
        'url': 'https://www.racingcircuits.info/australasia/new-zealand/taupo.html'
    },
    '142': {
        'name': 'Wanneroo Raceway',
        'location': 'Neerabup, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/wanneroo-raceway.html'
    },
    '143': {
        'name': 'Hidden Valley Raceway',
        'location': 'Darwin, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/hidden-valley-raceway.html'
    },
    '144': {
        'name': 'Reid Park Street Circuit',
        'location': 'Townsville, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/townsville.html'
    },
    '145': {
        'name': 'Sydney Motorsport Park',
        'location': 'Sydney, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/sydney-motorsport-park.html'
    },
    '146': {
        'name': 'Symmons Plains Raceway',
        'location': 'Launceston, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/symmons-plains.html'
    },
    '147': {
        'name': 'Sandown Raceway',
        'location': 'Sprinvale, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/sandown-raceway.html'
    },
    '148': {
        'name': 'Surfers Paradise Street Circuit',
        'location': 'Surfers Paradise, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/surfers-paradise.html'
    },
    '149': {
        'name': 'Adelaide Street Circuit',
        'location': 'Adelaide, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/adelaide.html'
    },
    '150': {
        'name': 'Dubai Autodrome',
        'location': 'Dubai, UAE',
        'flag': 'ae',
        'url': 'https://www.racingcircuits.info/middle-east/united-arab-emirates/dubai-autodrome.html'
    },
    '151': {
        'name': 'Sokol',
        'location': 'Almaty, Kazakhstan',
        'flag': 'kz',
        'url': 'https://www.racingcircuits.info/asia/kazakhstan/sokol.html'
    },
    '152': {
        'name': 'Buddh International Circuit',
        'location': 'Dankaur, India',
        'flag': 'in',
        'url': 'https://www.racingcircuits.info/asia/india/buddh-international-circuit.html'
    },
    '153': {
        'name': 'Balaton Park',
        'location': 'Balatonfőkajár, Hungary',
        'flag': 'hu',
        'url': 'https://www.racingcircuits.info/europe/hungary/balaton-park.html'
    },
    '154': {
        'name': 'Cremona Circuit',
        'location': 'San Martino del Lago, Italy',
        'flag': 'it',
        'url': false
    },
    '155': {
        'name': 'Autopolis',
        'location': 'Kamitsue, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/autopolis.html'
    },
    '156': {
        'name': 'Sugo',
        'location': 'Murata, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/sugo.html'
    },
    '157': {
        'name': 'Okayama International Circuit',
        'location': 'Mimasaka, Okayama Prefecture, Japan',
        'flag': 'jp',
        'url': 'https://www.racingcircuits.info/asia/japan/okayama.html'
    },
    '158': {
        'name': 'Motorsport Arena Oschersleben',
        'location': 'Oschersleben, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/oschersleben.html'
    },
    '159': {
        'name': 'Lausitzring',
        'location': 'Klettwitz, Germany',
        'flag': 'de',
        'url': 'https://www.racingcircuits.info/europe/germany/lausitzring.html'
    },
    '160': {
        'name': 'Hungary',
        'location': 'Hungary',
        'flag': 'hu',
        'url': false
    },
    '161': {
        'name': 'Islas Canarias, Spain',
        'location': 'Islas Canarias, Spain',
        'flag': 'es',
        'url': false
    },
    '162': {
        'name': 'Italy',
        'location': 'Italy',
        'flag': 'it',
        'url': false
    },
    '163': {
        'name': 'Czech Republic',
        'location': 'Czech Republic',
        'flag': 'cz',
        'url': false
    },
    '164': {
        'name': 'United Kingdom',
        'location': 'United Kingdom',
        'flag': 'gb',
        'url': false
    },
    '165': {
        'name': 'Vallelunga Circuit',
        'location': 'Campagnano di Roma, Italy',
        'flag': 'it',
        'url': 'https://www.racingcircuits.info/europe/italy/vallelunga.html'
    },
    '166': {
        'name': 'Marrakesh',
        'location': 'Marrakesh, Morocco',
        'flag': 'ma',
        'url': 'https://www.racingcircuits.info/africa/morocco/marrakesh.html'
    },
    '167': {
        'name': 'Autódromo Víctor Borrat Fabini',
        'location': 'El Pinar, Uruguay',
        'flag': 'uy',
        'url': 'https://www.racingcircuits.info/south-america/uruguay/el-pinar.html'
    },
    '168': {
        'name': 'Zhuzhou International Circuit',
        'location': 'Zhuzhou, China',
        'flag': 'cn',
        'url': 'https://www.racingcircuits.info/asia/china/zhuzhou-international-circuit.html'
    },
    '169': {
        'name': 'Circuito da Guia',
        'location': 'Macau',
        'flag': 'mo',
        'url': 'https://www.racingcircuits.info/asia/macau/macau-guia.html'
    },
    '170': {
        'name': 'Brazil',
        'location': 'Brazil',
        'flag': 'br',
        'url': false
    },
    '171': {
        'name': 'Zolder',
        'location': 'Heusden-Zolder, Belgium',
        'flag': 'be',
        'url': 'https://www.racingcircuits.info/europe/belgium/zolder.html'
    },
    '172': {
        'name': 'Salzburgring',
        'location': 'Plainfeld, Austria',
        'flag': 'at',
        'url': 'https://www.racingcircuits.info/europe/austria/salzburgring.html'
    },
    '173': {
        'name': 'Brno',
        'location': 'Brno, Czech Republic',
        'flag': 'cz',
        'url': 'https://www.racingcircuits.info/europe/czech-republic/brno.html'
    },
    '174': {
        'name': 'Automotodróm Slovakia Ring',
        'location': 'Orechová Potôň, Slovakia',
        'flag': 'sk',
        'url': 'https://www.racingcircuits.info/europe/slovakia/slovakiaring.html'
    },
    '175': {
        'name': 'Queensland Raceway',
        'location': 'Ipswich, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/queensland-raceway.html'
    },
    '176': {
        'name': 'The Bend Motorsport Park',
        'location': 'Tailem Bend, Australia',
        'flag': 'au',
        'url': 'https://www.racingcircuits.info/australasia/australia/the-bend-motorsport-park.html'
    }
}