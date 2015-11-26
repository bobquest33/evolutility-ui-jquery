var contact_LOVs = {

    categories: [
        {id: '1', text: 'Work'},
        {id: '2', text: 'Fun'},
        {id: '3', text: 'Travel'},
        {id: '4', text: 'Business'},
        {id: '5', text: 'Cars'},
        {id: '6', text: 'Sport'},
        {id: '7', text: 'Misc.'}
    ],

    states: [
        {id: 'AL', text: 'Alabama'},
        {id: 'AK', text: 'Alaska'},
        {id: 'AZ', text: 'Arizona'},
        {id: 'AR', text: 'Arkansas'},
        {id: 'CA', text: 'California'},
        {id: 'CO', text: 'Colorado'},
        {id: 'CT', text: 'Connecticut'},
        {id: 'DE', text: 'Delaware'},
        {id: 'DC', text: 'District of Columbia'},
        {id: 'FL', text: 'Florida'},
        {id: 'GA', text: 'Georgia'},
        {id: 'HI', text: 'Hawaii'},
        {id: 'ID', text: 'Idaho'},
        {id: 'IL', text: 'Illinois'},
        {id: 'IN', text: 'Indiana'},
        {id: 'IA', text: 'Iowa'},
        {id: 'KS', text: 'Kansas'},
        {id: 'KY', text: 'Kentucky'},
        {id: 'LA', text: 'Louisiana'},
        {id: 'ME', text: 'Maine'},
        {id: 'MD', text: 'Maryland'},
        {id: 'MA', text: 'Massachusetts'},
        {id: 'MI', text: 'Michigan'},
        {id: 'MN', text: 'Minnesota'},
        {id: 'MS', text: 'Mississippi'},
        {id: 'MO', text: 'Missouri'},
        {id: 'MT', text: 'Montana'},
        {id: 'NE', text: 'Nebraska'},
        {id: 'NV', text: 'Nevada'},
        {id: 'NH', text: 'New Hampshire'},
        {id: 'NJ', text: 'New Jersey'},
        {id: 'NM', text: 'New Mexico'},
        {id: 'NY', text: 'New York'},
        {id: 'NC', text: 'North Carolina'},
        {id: 'ND', text: 'North Dakota'},
        {id: 'OH', text: 'Ohio'},
        {id: 'OK', text: 'Oklahoma'},
        {id: 'OR', text: 'Oregon'},
        {id: 'PA', text: 'Pennsylvania'},
        {id: 'RI', text: 'Rhode Island'},
        {id: 'SC', text: 'South Carolina'},
        {id: 'SD', text: 'South Dakota'},
        {id: 'TN', text: 'Tennessee'},
        {id: 'TX', text: 'Texas'},
        {id: 'UT', text: 'Utah'},
        {id: 'VT', text: 'Vermont'},
        {id: 'VA', text: 'Virginia'},
        {id: 'WA', text: 'Washington'},
        {id: 'WV', text: 'West Virginia'},
        {id: 'WI', text: 'Wisconsin'},
        {id: 'WY', text: 'Wyoming'}
    ],

    countries: [
        {text: 'Afghanistan', id: 'AF'},
        {text: 'Åland Islands', id: 'AX'},
        {text: 'Albania', id: 'AL'},
        {text: 'Algeria', id: 'DZ'},
        {text: 'American Samoa', id: 'AS'},
        {text: 'Andorra', id: 'AD'},
        {text: 'Angola', id: 'AO'},
        {text: 'Anguilla', id: 'AI'},
        {text: 'Antarctica', id: 'AQ'},
        {text: 'Antigua and Barbuda', id: 'AG'},
        {text: 'Argentina', id: 'AR'},
        {text: 'Armenia', id: 'AM'},
        {text: 'Aruba', id: 'AW'},
        {text: 'Australia', id: 'AU'},
        {text: 'Austria', id: 'AT'},
        {text: 'Azerbaijan', id: 'AZ'},
        {text: 'Bahamas', id: 'BS'},
        {text: 'Bahrain', id: 'BH'},
        {text: 'Bangladesh', id: 'BD'},
        {text: 'Barbados', id: 'BB'},
        {text: 'Belarus', id: 'BY'},
        {text: 'Belgium', id: 'BE'},
        {text: 'Belize', id: 'BZ'},
        {text: 'Benin', id: 'BJ'},
        {text: 'Bermuda', id: 'BM'},
        {text: 'Bhutan', id: 'BT'},
        {text: 'Bolivia', id: 'BO'},
        {text: 'Bosnia and Herzegovina', id: 'BA'},
        {text: 'Botswana', id: 'BW'},
        {text: 'Bouvet Island', id: 'BV'},
        {text: 'Brazil', id: 'BR'},
        {text: 'British Indian Ocean Territory', id: 'IO'},
        {text: 'Brunei Darussalam', id: 'BN'},
        {text: 'Bulgaria', id: 'BG'},
        {text: 'Burkina Faso', id: 'BF'},
        {text: 'Burundi', id: 'BI'},
        {text: 'Cambodia', id: 'KH'},
        {text: 'Cameroon', id: 'CM'},
        {text: 'Canada', id: 'CA'},
        {text: 'Cape Verde', id: 'CV'},
        {text: 'Cayman Islands', id: 'KY'},
        {text: 'Central African Republic', id: 'CF'},
        {text: 'Chad', id: 'TD'},
        {text: 'Chile', id: 'CL'},
        {text: 'China', id: 'CN'},
        {text: 'Christmas Island', id: 'CX'},
        {text: 'Cocos (Keeling) Islands', id: 'CC'},
        {text: 'Colombia', id: 'CO'},
        {text: 'Comoros', id: 'KM'},
        {text: 'Congo', id: 'CG'},
        {text: 'Congo, The Democratic Republic of the', id: 'CD'},
        {text: 'Cook Islands', id: 'CK'},
        {text: 'Costa Rica', id: 'CR'},
        {text: 'Cote D\'Ivoire', id: 'CI'},
        {text: 'Croatia', id: 'HR'},
        {text: 'Cuba', id: 'CU'},
        {text: 'Cyprus', id: 'CY'},
        {text: 'Czech Republic', id: 'CZ'},
        {text: 'Denmark', id: 'DK'},
        {text: 'Djibouti', id: 'DJ'},
        {text: 'Dominica', id: 'DM'},
        {text: 'Dominican Republic', id: 'DO'},
        {text: 'Ecuador', id: 'EC'},
        {text: 'Egypt', id: 'EG'},
        {text: 'El Salvador', id: 'SV'},
        {text: 'Equatorial Guinea', id: 'GQ'},
        {text: 'Eritrea', id: 'ER'},
        {text: 'Estonia', id: 'EE'},
        {text: 'Ethiopia', id: 'ET'},
        {text: 'Falkland Islands (Malvinas)', id: 'FK'},
        {text: 'Faroe Islands', id: 'FO'},
        {text: 'Fiji', id: 'FJ'},
        {text: 'Finland', id: 'FI'},
        {text: 'France', id: 'FR'},
        {text: 'French Guiana', id: 'GF'},
        {text: 'French Polynesia', id: 'PF'},
        {text: 'French Southern Territories', id: 'TF'},
        {text: 'Gabon', id: 'GA'},
        {text: 'Gambia', id: 'GM'},
        {text: 'Georgia', id: 'GE'},
        {text: 'Germany', id: 'DE'},
        {text: 'Ghana', id: 'GH'},
        {text: 'Gibraltar', id: 'GI'},
        {text: 'Greece', id: 'GR'},
        {text: 'Greenland', id: 'GL'},
        {text: 'Grenada', id: 'GD'},
        {text: 'Guadeloupe', id: 'GP'},
        {text: 'Guam', id: 'GU'},
        {text: 'Guatemala', id: 'GT'},
        {text: 'Guernsey', id: 'GG'},
        {text: 'Guinea', id: 'GN'},
        {text: 'Guinea-Bissau', id: 'GW'},
        {text: 'Guyana', id: 'GY'},
        {text: 'Haiti', id: 'HT'},
        {text: 'Heard Island and Mcdonald Islands', id: 'HM'},
        {text: 'Holy See (Vatican City State)', id: 'VA'},
        {text: 'Honduras', id: 'HN'},
        {text: 'Hong Kong', id: 'HK'},
        {text: 'Hungary', id: 'HU'},
        {text: 'Iceland', id: 'IS'},
        {text: 'India', id: 'IN'},
        {text: 'Indonesia', id: 'ID'},
        {text: 'Iran, Islamic Republic Of', id: 'IR'},
        {text: 'Iraq', id: 'IQ'},
        {text: 'Ireland', id: 'IE'},
        {text: 'Isle of Man', id: 'IM'},
        {text: 'Israel', id: 'IL'},
        {text: 'Italy', id: 'IT'},
        {text: 'Jamaica', id: 'JM'},
        {text: 'Japan', id: 'JP'},
        {text: 'Jersey', id: 'JE'},
        {text: 'Jordan', id: 'JO'},
        {text: 'Kazakhstan', id: 'KZ'},
        {text: 'Kenya', id: 'KE'},
        {text: 'Kiribati', id: 'KI'},
        {text: 'Korea, Democratic People\'S Republic of', id: 'KP'},
        {text: 'Korea, Republic of', id: 'KR'},
        {text: 'Kuwait', id: 'KW'},
        {text: 'Kyrgyzstan', id: 'KG'},
        {text: 'Lao People\'S Democratic Republic', id: 'LA'},
        {text: 'Latvia', id: 'LV'},
        {text: 'Lebanon', id: 'LB'},
        {text: 'Lesotho', id: 'LS'},
        {text: 'Liberia', id: 'LR'},
        {text: 'Libyan Arab Jamahiriya', id: 'LY'},
        {text: 'Liechtenstein', id: 'LI'},
        {text: 'Lithuania', id: 'LT'},
        {text: 'Luxembourg', id: 'LU'},
        {text: 'Macao', id: 'MO'},
        {text: 'Macedonia, The Former Yugoslav Republic of', id: 'MK'},
        {text: 'Madagascar', id: 'MG'},
        {text: 'Malawi', id: 'MW'},
        {text: 'Malaysia', id: 'MY'},
        {text: 'Maldives', id: 'MV'},
        {text: 'Mali', id: 'ML'},
        {text: 'Malta', id: 'MT'},
        {text: 'Marshall Islands', id: 'MH'},
        {text: 'Martinique', id: 'MQ'},
        {text: 'Mauritania', id: 'MR'},
        {text: 'Mauritius', id: 'MU'},
        {text: 'Mayotte', id: 'YT'},
        {text: 'Mexico', id: 'MX'},
        {text: 'Micronesia, Federated States of', id: 'FM'},
        {text: 'Moldova, Republic of', id: 'MD'},
        {text: 'Monaco', id: 'MC'},
        {text: 'Mongolia', id: 'MN'},
        {text: 'Montserrat', id: 'MS'},
        {text: 'Morocco', id: 'MA'},
        {text: 'Mozambique', id: 'MZ'},
        {text: 'Myanmar', id: 'MM'},
        {text: 'Namibia', id: 'NA'},
        {text: 'Nauru', id: 'NR'},
        {text: 'Nepal', id: 'NP'},
        {text: 'Netherlands', id: 'NL'},
        {text: 'Netherlands Antilles', id: 'AN'},
        {text: 'New Caledonia', id: 'NC'},
        {text: 'New Zealand', id: 'NZ'},
        {text: 'Nicaragua', id: 'NI'},
        {text: 'Niger', id: 'NE'},
        {text: 'Nigeria', id: 'NG'},
        {text: 'Niue', id: 'NU'},
        {text: 'Norfolk Island', id: 'NF'},
        {text: 'Northern Mariana Islands', id: 'MP'},
        {text: 'Norway', id: 'NO'},
        {text: 'Oman', id: 'OM'},
        {text: 'Pakistan', id: 'PK'},
        {text: 'Palau', id: 'PW'},
        {text: 'Palestinian Territory, Occupied', id: 'PS'},
        {text: 'Panama', id: 'PA'},
        {text: 'Papua New Guinea', id: 'PG'},
        {text: 'Paraguay', id: 'PY'},
        {text: 'Peru', id: 'PE'},
        {text: 'Philippines', id: 'PH'},
        {text: 'Pitcairn', id: 'PN'},
        {text: 'Poland', id: 'PL'},
        {text: 'Portugal', id: 'PT'},
        {text: 'Puerto Rico', id: 'PR'},
        {text: 'Qatar', id: 'QA'},
        {text: 'Reunion', id: 'RE'},
        {text: 'Romania', id: 'RO'},
        {text: 'Russian Federation', id: 'RU'},
        {text: 'RWANDA', id: 'RW'},
        {text: 'Saint Helena', id: 'SH'},
        {text: 'Saint Kitts and Nevis', id: 'KN'},
        {text: 'Saint Lucia', id: 'LC'},
        {text: 'Saint Pierre and Miquelon', id: 'PM'},
        {text: 'Saint Vincent and the Grenadines', id: 'VC'},
        {text: 'Samoa', id: 'WS'},
        {text: 'San Marino', id: 'SM'},
        {text: 'Sao Tome and Principe', id: 'ST'},
        {text: 'Saudi Arabia', id: 'SA'},
        {text: 'Senegal', id: 'SN'},
        {text: 'Serbia and Montenegro', id: 'CS'},
        {text: 'Seychelles', id: 'SC'},
        {text: 'Sierra Leone', id: 'SL'},
        {text: 'Singapore', id: 'SG'},
        {text: 'Slovakia', id: 'SK'},
        {text: 'Slovenia', id: 'SI'},
        {text: 'Solomon Islands', id: 'SB'},
        {text: 'Somalia', id: 'SO'},
        {text: 'South Africa', id: 'ZA'},
        {text: 'South Georgia and the South Sandwich Islands', id: 'GS'},
        {text: 'Spain', id: 'ES'},
        {text: 'Sri Lanka', id: 'LK'},
        {text: 'Sudan', id: 'SD'},
        {text: 'Suriname', id: 'SR'},
        {text: 'Svalbard and Jan Mayen', id: 'SJ'},
        {text: 'Swaziland', id: 'SZ'},
        {text: 'Sweden', id: 'SE'},
        {text: 'Switzerland', id: 'CH'},
        {text: 'Syrian Arab Republic', id: 'SY'},
        {text: 'Taiwan, Province of China', id: 'TW'},
        {text: 'Tajikistan', id: 'TJ'},
        {text: 'Tanzania, United Republic of', id: 'TZ'},
        {text: 'Thailand', id: 'TH'},
        {text: 'Timor-Leste', id: 'TL'},
        {text: 'Togo', id: 'TG'},
        {text: 'Tokelau', id: 'TK'},
        {text: 'Tonga', id: 'TO'},
        {text: 'Trinidad and Tobago', id: 'TT'},
        {text: 'Tunisia', id: 'TN'},
        {text: 'Turkey', id: 'TR'},
        {text: 'Turkmenistan', id: 'TM'},
        {text: 'Turks and Caicos Islands', id: 'TC'},
        {text: 'Tuvalu', id: 'TV'},
        {text: 'Uganda', id: 'UG'},
        {text: 'Ukraine', id: 'UA'},
        {text: 'United Arab Emirates', id: 'AE'},
        {text: 'United Kingdom', id: 'GB'},
        {text: 'United States', id: 'US'},
        {text: 'United States Minor Outlying Islands', id: 'UM'},
        {text: 'Uruguay', id: 'UY'},
        {text: 'Uzbekistan', id: 'UZ'},
        {text: 'Vanuatu', id: 'VU'},
        {text: 'Venezuela', id: 'VE'},
        {text: 'Viet Nam', id: 'VN'},
        {text: 'Virgin Islands, British', id: 'VG'},
        {text: 'Virgin Islands, U.S.', id: 'VI'},
        {text: 'Wallis and Futuna', id: 'WF'},
        {text: 'Western Sahara', id: 'EH'},
        {text: 'Yemen', id: 'YE'},
        {text: 'Zambia', id: 'ZM'},
        {text: 'Zimbabwe', id: 'ZW'}
    ]
};

var uiModels = uiModels || {};

uiModels.contact = {
    id: 'contact',
    label: 'Address book',
    icon: 'contact.gif',
    name: 'contact', namePlural: 'contacts',
    fnTitle: function(model){
        return model.get('firstname')+' '+model.get('lastname');
    },
    elements: [
        {
            type: 'panel', label: 'Identity', width: 62,
            elements: [
                {
                    type: 'text', id: 'lastname', attribute: 'lastname', 
                    label: 'Lastname', maxLength: 50,
                    required: true, width: 62, inMany: true
                },
                {
                    type: 'text', id: 'firstname', attribute: 'firstname', 
                     label: 'Firstname', maxLength: 50,
                    required: true, width: 38, inMany: true
                },
                {
                    type: 'text', id: 'jobtitle', attribute: 'jobtitle', 
                     label: 'Title', maxLength: 50,
                    width: 62
                },
                {
                    type: 'text', id: 'company', attribute: 'company', 
                     label: 'Company', maxLength: 50,
                    width: 38, inMany: true
                },
                {
                    type: 'email', id: 'email', attribute: 'email', 
                     label: 'email', maxLength: 255,
                    width: 100, inMany: true
                },
                {
                    type: 'url', id: 'web', attribute: 'web', 
                     label: 'web', maxLength: 255, width: 100
                }
            ]
        },
        {
            type: 'panel', label: 'Contact Info', width: 38,
            elements: [
                {
                    type: 'text', id: 'phone', attribute: 'phone', 
                     label: 'Work Phone', maxLength: 20, width: 100, mini:'1'
                },
                {
                    type: 'text', id: 'phonehome', attribute: 'phonehome', 
                     label: 'Home Phone', maxLength: 20, width: 100
                },
                {
                    type: 'text', id: 'phonecell', attribute: 'phonecell', 
                     label: 'Cell.', maxLength: 20, width: 100, mini:'1'
                },
                {
                    type: 'text', id: 'fax', attribute: 'fax', 
                     label: 'Fax', maxLength: 20, width: 100
                }
            ]
        },
        {
            type: 'panel', label: 'Address', width: 62,
            elements: [
                {
                    type: 'text', id: 'address1', attribute: 'address1', 
                     label: 'Address', maxLength: 150, width: 100
                },
                {
                    type: 'text', id: 'address2', attribute: 'address2', 
                     label: '', labelMany: 'Address 2', maxLength: 150, width: 100
                },
                {
                    type: 'text', id: 'city', attribute: 'city', 
                     label: 'City', maxLength: 100, width: 62
                },
                {
                    type: 'lov', id: 'state', attribute: 'state', 
                     label: 'State', width: 23,
                    list: contact_LOVs.states
                },
                {
                    type: 'text', id: 'zip', attribute: 'zip', 
                     label: 'Zip', maxLength: 12, width: 15
                },
                {
                    type: 'lov', id: 'country', attribute: 'country', 
                     label: 'Country', maxLength: 60, width: 100,
                    list: contact_LOVs.countries
                }
            ]
        },
        {
            type: 'panel', label: 'Misc.', width: 38,
            elements: [
                {
                    type: 'lov', id: 'category', attribute: 'category', 
                     label: 'Category', width: 100,
                    inMany: true,
                    list: contact_LOVs.categories
                },
                {
                    type: 'text', id: 'custom1', attribute: 'custom1', 
                     label: 'Custom 1', maxLength: 250,
                    width: 100
                },
                {
                    type: 'text', id: 'custom2', attribute: 'custom2', 
                     label: 'Custom 2', maxLength: 250,
                    width: 100
                },
                {
                    type: 'text', id: 'custom3', attribute: 'custom3', 
                     label: 'Custom 3', maxLength: 250,
                    width: 100
                }
            ]
        }
    ]
};

if(typeof module === "object" && typeof module.exports === "object"){
    module.exports = uiModels.contact;
}