
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
        register: "Register",
        login: "Login",
        lag: "English",
        logo: "J Lin Restuarent",
        fried_food: 'Fried food',
        roasting: 'Roasting',
        soup: 'Soup',
        dec_soup: 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water.',
        dec_roasting: 'Roasting is a slow-cooking process, using indirect, diffused heat to cook its ingredients. It is a dry-heat cooking method where hot air surrounds the food and cooks it evenly on all sides at a temperature of at least 300 °F (or 150 °C). The heat can also be derived from an open flame, an oven, or another heat source.',
        dec_fried: 'the cooking of food in hot fats or oils, usually done with a shallow oil bath in a pan over a fire or as so-called deep fat frying, in which the food is completely immersed in a deeper vessel of hot oil',

    },
    khm: {
        home: 'ទំព័រដើម',
        service: 'សេរាកម្ម',
        menu: "មុខម្ហូប",
        special: "ពិសេស",
        food:"អាហារ",

        about: 'អំពី',
        register: 'ចុះឈ្មោះ',
        login: 'ចូលប្រើ',
        lag: 'ខ្មែរ',
        logo: "ភោជនីយដ្ឋាន ចែលីន",
        fried_food: 'អាហារ ឆា',
        roasting: 'អាហារ អាំង',
        soup: 'សម្ល',
        dec_soup: 'ស៊ុបគឺជាអាហាររាវជាចម្បង ជាទូទៅបម្រើក្តៅ ឬក្តៅ (ប៉ុន្តែអាចត្រជាក់ ឬត្រជាក់) ដែលត្រូវបានផលិតដោយការផ្សំគ្រឿងផ្សំនៃសាច់ ឬបន្លែជាមួយស្តុក ទឹកដោះគោ ឬទឹក។',
        dec_fried: 'ការចម្អិនអាហារក្នុងខ្លាញ់ក្តៅ ឬប្រេង ជាធម្មតាធ្វើដោយការងូតប្រេងរាក់ក្នុងខ្ទះលើភ្លើង ឬហៅថាការចៀនខ្លាញ់ជ្រៅ ដែលអាហារត្រូវបានជ្រមុជទាំងស្រុងនៅក្នុងធុងជ្រៅនៃប្រេងក្តៅ។',
        dec_roasting: 'ការអាំងគឺជាដំណើរការចម្អិនអាហារយឺត ដោយប្រើកំដៅដោយប្រយោល ដើម្បីចម្អិនគ្រឿងផ្សំរបស់វា។ វាជាវិធីចម្អិនដោយកំដៅស្ងួត ដែលខ្យល់ក្តៅព័ទ្ធជុំវិញអាហារ ហើយចម្អិនវាឱ្យស្មើគ្នានៅគ្រប់ជ្រុងទាំងអស់នៅសីតុណ្ហភាពយ៉ាងហោចណាស់ 300 ° F (ឬ 150 ° C) ។ កំដៅក៏អាចមកពីអណ្តាតភ្លើងចំហ ឡ ឬប្រភពកំដៅផ្សេងទៀត។',

    }
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n