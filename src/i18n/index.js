
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
    en: {
        home: 'Home',
        service: "Service",
        menu: "Menu",
        special: "Special",
        food:"Food",


        about: "About",
        about_us: "About Us",
        the_best: "We are the best",
        the_best_dec: "Phnom Penh's dining scene has blossomed in recent years, offering a vibrant mix of local and international flavors. From budget-friendly street food to upscale fine dining, the city caters to every taste bud and budget. Let's start your culinary adventure with us as we explore the vibrant flavors of Phnom Penh and unveil the best restaurants waiting to be discovered!",

        register: "Register",
        login: "Login",
        lag: "English",
        logo: "J Lin Restuarent",
        s_offer:"Specail Offer",

        fried_food: 'Fried food for testing',
        roasting: 'Roasting',
        soup: 'Soup',
        dec_soup: 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water.',
        dec_roasting: 'Roasting is a slow-cooking process, using indirect, diffused heat to cook its ingredients. It is a dry-heat cooking method where hot air surrounds the food and cooks it evenly on all sides at a temperature of at least 300 °F (or 150 °C). The heat can also be derived from an open flame, an oven, or another heat source.',
        dec_fried: 'the cooking of food in hot fats or oils, usually done with a shallow oil bath in a pan over a fire or as so-called deep fat frying, in which the food is completely immersed in a deeper vessel of hot oil',
        
        //Services
        we_de: 'We do we propose',
        s_title: 'The restaurants make you love. Find the right food and groceries to suit your mood',
        catering_title:'Catering',
        catering_desc:'Elevate your events with our Restuarent with the premier catering services. Whether it’s an intimate business lunch or a grand celebration, we specialize in delivering exceptional, bespoke dining experiences across Phnom Penh.',
        win_title:'Wine collection',
        win_desc:'Wine Connection is the leading chain of wine shops and wine-themed restaurants in South-East Asia. Established in 1998, Wine Connection has been developing expertise in wine for over 20 years.',
        chat_title:'Chatting',
        chat_desc:'An order issued on receiving an order form customers, and refers to the order information received from customers. It is given customer number and the number of the person in charge of receiving the order as well as product number, delivery date, and quantity.',
        delivery_title:'Delivery',
        delivery_desc:'We cooperate with the best devivery partner to list your menu and product lists online, help you process orders, pick them up, and deliver to customers – in a heartbeat!',
        //Special
        read: 'Read More',
        s_desc1: 'Delicious spaghetti marinara, on the table in 20 minutes. By swapping out spaghetti for zucchini noodles you turn this hearty seafood dish into a low carb delight.',
        s_desc3: 'Treat the family to this delicious and healthy spring feta & lamb salad.',
        s_desc2:'These chicken drumsticks are coated in honey and spice and all things nice.',

    },
    khm: {
        home: 'ទំព័រដើម',
        service: 'សេរាកម្ម',
        menu: "មុខម្ហូប",
        special: "ពិសេស",
        food:"អាហារ",
        the_best_dec:'កន្លែងទទួលទានអាហារនៅរាជធានីភ្នំពេញបានរីកដុះដាលក្នុងរយៈពេលប៉ុន្មានឆ្នាំចុងក្រោយនេះ ដោយផ្តល់ជូននូវរសជាតិចម្រុះដ៏រស់រវើកនៃរសជាតិក្នុងស្រុក និងអន្តរជាតិ។ ពីអាហារតាមចិញ្ចើមផ្លូវដែលងាយស្រួលរកថវិការហូតដល់អាហារឆ្ងាញ់ៗ ទីក្រុងនេះផ្គត់ផ្គង់គ្រប់រសជាតិ និងថវិកា។ តោះចាប់ផ្តើមដំណើរផ្សងព្រេងធ្វើម្ហូបរបស់អ្នកជាមួយយើង នៅពេលយើងស្វែងយល់ពីរសជាតិដ៏រស់រវើកនៃទីក្រុងភ្នំពេញ និងបង្ហាញភោជនីយដ្ឋានល្អៗដែលរង់ចាំការរកឃើញ!',

        about: 'អំពីហាង',
        about_us: "អំពីហាង",
        the_best: "ហាងដែលល្អបំផុង",

        register: 'ចុះឈ្មោះ',
        login: 'ចូលប្រើ',
        read: 'អានបន្ថែម',
        s_offer:'កាលផ្តល់ជាពិសេស',


        lag: 'ខ្មែរ',
        logo: "ភោជនីយដ្ឋាន ចែលីន",
        fried_food: 'អាហារ ឆា',
        roasting: 'អាហារ អាំង',
        soup: 'សម្ល',
        dec_soup: 'ស៊ុបគឺជាអាហាររាវជាចម្បង ជាទូទៅបម្រើក្តៅ ឬក្តៅ (ប៉ុន្តែអាចត្រជាក់ ឬត្រជាក់) ដែលត្រូវបានផលិតដោយការផ្សំគ្រឿងផ្សំនៃសាច់ ឬបន្លែជាមួយស្តុក ទឹកដោះគោ ឬទឹក។',
        dec_fried: 'ការចម្អិនអាហារក្នុងខ្លាញ់ក្តៅ ឬប្រេង ជាធម្មតាធ្វើដោយការងូតប្រេងរាក់ក្នុងខ្ទះលើភ្លើង ឬហៅថាការចៀនខ្លាញ់ជ្រៅ ដែលអាហារត្រូវបានជ្រមុជទាំងស្រុងនៅក្នុងធុងជ្រៅនៃប្រេងក្តៅ។',
        dec_roasting: 'ការអាំងគឺជាដំណើរការចម្អិនអាហារយឺត ដោយប្រើកំដៅដោយប្រយោល ដើម្បីចម្អិនគ្រឿងផ្សំរបស់វា។ វាជាវិធីចម្អិនដោយកំដៅស្ងួត ដែលខ្យល់ក្តៅព័ទ្ធជុំវិញអាហារ ហើយចម្អិនវាឱ្យស្មើគ្នានៅគ្រប់ជ្រុងទាំងអស់នៅសីតុណ្ហភាពយ៉ាងហោចណាស់ 300 ° F (ឬ 150 ° C) ។ កំដៅក៏អាចមកពីអណ្តាតភ្លើងចំហ ឡ ឬប្រភពកំដៅផ្សេងទៀត។',

        //Services
        we_de:'តើយើងស្នើអ្វី',
        s_title:'ភោជនីយដ្ឋានធ្វើឱ្យអ្នកស្រលាញ់។ ស្វែងរកអាហារ និងគ្រឿងទេសដែលសមស្របនឹងអារម្មណ៍របស់អ្នក។',
        catering_title:'ការផ្តល់ម្ហូបអាហារ',
        catering_desc:'លើកកំពស់ព្រឹត្តិការណ៍ របស់អ្នកជាមួយហាង របស់យើងជាមួយនឹងសេវាកម្មម្ហូបអាហារលំដាប់កំពូល។ មិនថាវាជាអាហារថ្ងៃត្រង់បែបអាជីវកម្មដ៏ស្និទ្ធស្នាល ឬពិធីជប់លៀងដ៏ធំនោះទេ យើងមានជំនាញក្នុងការផ្តល់ជូននូវបទពិសោធន៍ពិសាអាហារពិសេសៗតាមតម្រូវការនៅទូទាំងរាជធានីភ្នំពេញ។',
        win_title:'ការប្រមូលស្រា',
        win_desc:'គឺជាខ្សែសង្វាក់ឈានមុខគេនៃហាងស្រា និងភោជនីយដ្ឋានដែលមានប្រធានបទស្រានៅអាស៊ីអាគ្នេយ៍។ បង្កើតឡើងក្នុងឆ្នាំ 1998 Wine Connection បាននិងកំពុងអភិវឌ្ឍជំនាញខាងស្រាអស់រយៈពេលជាង 20 ឆ្នាំមកហើយ។',
        chat_title:'ការជជែក',
        chat_desc:'ការបញ្ជាទិញដែលបានចេញនៅលើការទទួលទម្រង់បញ្ជាទិញរបស់អតិថិជន ហើយសំដៅទៅលើព័ត៌មានការបញ្ជាទិញដែលទទួលបានពីអតិថិជន។ វាត្រូវបានផ្តល់លេខអតិថិជន និងចំនួនអ្នកទទួលខុសត្រូវក្នុងការទទួលការបញ្ជាទិញ ព្រមទាំងលេខផលិតផល កាលបរិច្ឆេទដឹកជញ្ជូន និងបរិមាណ។',
        delivery_title:'ការដឹកជញ្ជូន',
        delivery_desc:'យើងសហការជាមួយដៃគូចែកចាយដ៏ល្អបំផុតដើម្បីរាយបញ្ជីមុខម្ហូប និងបញ្ជីផលិតផលរបស់អ្នកតាមអ៊ីនធឺណិត ជួយអ្នកឱ្យដំណើរការការបញ្ជាទិញ យកវា និងចែកចាយដល់អតិថិជន – ដោយបេះដូងលោតញាប់!',
        s_desc1: 'ស្ប៉ាហ្គឺទីម៉ាណារ៉ាឆ្ងាញ់នៅលើតុក្នុងរយៈពេល 20 នាទី។ ដោយការប្តូរ spaghetti សម្រាប់គុយទាវ zucchini អ្នកបង្វែរអាហារសមុទ្រដ៏ឆ្ងាញ់នេះទៅជាអាហារដែលមានកាបូអ៊ីដ្រាតទាប។',
        s_desc2:'ចាត់​ទុក​ក្រុម​គ្រួសារ​ជាមួយ​សាឡាត់ feta និង​សាច់​ចៀម​រដូវ​ផ្ការីក​ដែល​ឆ្ងាញ់ និង​មាន​សុខភាព​ល្អ។',
        s_desc3:'ស្គរមាន់ទាំងនេះត្រូវបានស្រោបដោយទឹកឃ្មុំ និងគ្រឿងទេស ហើយអ្វីៗក៏ស្រស់ស្អាត។',

    }
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n