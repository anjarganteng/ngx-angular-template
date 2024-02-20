import { NbMenuItem } from '@nebular/theme';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';



export const MENU_ITEMS2: NbMenuItem[] = 	
[
  {
      "title": "Parameter",
      "icon": {
          "icon": "settings-2-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Product",
              "children": [
                  {
                      "title": "List",
                      "link": "/settings/product/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/settings/product/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/settings/product/approval"
                  }
              ]
          },
          {
              "title": "IE Material",
              "children": [
                  {
                      "title": "List",
                      "link": "/settings/ie-material/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/settings/ie-material/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/settings/ie-material/approval"
                  }
              ]
          }
      ]
  },
  {
      "title": "PD",
      "icon": {
          "icon": "file-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Segment",
              "children": [
                  {
                      "title": "List",
                      "link": "/pd/segment/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/pd/segment/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/pd/segment/approval"
                  }
              ]
          },
          {
              "title": "Bucket",
              "children": [
                  {
                      "title": "List",
                      "link": "/pd/bucket/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/pd/bucket/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/pd/bucket/approval"
                  }
              ]
          },
          {
              "title": "Simulation",
              "children": [
                  {
                      "title": "List",
                      "link": "/pd/simulation/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/pd/simulation/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/pd/simulation/approval"
                  }
              ]
          }
      ]
  },
  {
      "title": "LGD",
      "icon": {
          "icon": "file-remove-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Simulation",
              "children": [
                  {
                      "title": "List",
                      "link": "/lgd/simulation/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/lgd/simulation/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/lgd/simulation/approval"
                  }
              ]
          }
      ]
  },
  {
      "title": "ECL",
      "icon": {
          "icon": "file-text-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Simulation",
              "children": [
                  {
                      "title": "List",
                      "link": "/ecl/simulation/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/ecl/simulation/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/ecl/simulation/approval"
                  }
              ]
          }
      ]
  },
  {
      "title": "Transaction",
      "icon": {
          "icon": "options-2-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Individual Impairment",
              "children": [
                  {
                      "title": "List",
                      "link": "/transaction/individual-impairment/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/transaction/individual-impairment/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/transaction/individual-impairment/approval"
                  }
              ]
          },
          {
              "title": "Exclusion ECL",
              "children": [
                  {
                      "title": "List",
                      "link": "/transaction/exclusion-ecl/list"
                  },
                  {
                      "title": "Draft List",
                      "link": "/transaction/exclusion-ecl/draft"
                  },
                  {
                      "title": "Approval List",
                      "link": "/transaction/exclusion-ecl/approval"
                  }
              ]
          }
      ]
  },
  {
      "title": "Inquiry",
      "icon": {
          "icon": "book-outline",
          "options": {
              "animation": {
                  "type": "shake"
              }
          }
      },
      "children": [
          {
              "title": "Account Inquiry",
              "link": "/inquiry/account-inquiry"
          },
          {
              "title": "Journal Inquiry",
              "link": "/inquiry/journal-inquiry"
          },
          {
              "title": "Download Report",
              "link": "/inquiry/download-report"
          }
      ]
  }
];

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: {icon:'home-outline',options: {animation:{ type: 'shake' }}},
    link: '/home'
  },
  {
    title: 'Parameter',
    icon: {icon:'settings-2-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Product',
        children: [
          {
            title: 'List',
            link: '/settings/product/list',
          },
          {
            title: 'Draft List',
            link: '/settings/product/draft',
          },
          {
            title:  'Approval List',
            link: '/settings/product/approval',
          }  
        ]
      },
      {
        title: 'IE Material',
        children: [
          {
            title: 'List',
            link: '/settings/ie-material/list',
          },
          {
            title: 'Draft List',
            link: '/settings/ie-material/draft',
          },
          {
            title:  'Approval List',
            link: '/settings/ie-material/approval',
          }  
        ]
      }
    ],
  },
  {
    title: 'PD',
    icon: {icon:'file-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Segment',
        children: [
          {
            title: 'List',
            link: '/pd/segment/list',
          },
          {
            title: 'Draft List',
            link: '/pd/segment/draft',
          },
          {
            title:  'Approval List',
            link: '/pd/segment/approval',
          }  
        ]
      },
      {
        title: 'Bucket',
        children: [
          {
            title: 'List',
            link: '/pd/bucket/list',
          },
          {
            title: 'Draft List',
            link: '/pd/bucket/draft',
          },
          {
            title:  'Approval List',
            link: '/pd/bucket/approval',
          }  
        ]
      },
      {
        title: 'Simulation',
        children: [
          {
            title: 'List',
            link: '/pd/simulation/list',
          },
          {
            title: 'Draft List',
            link: '/pd/simulation/draft',
          },
          {
            title:  'Approval List',
            link: '/pd/simulation/approval',
          }  
        ]
      }
    ],
  },
  {
    title: 'LGD',
    icon: {icon:'file-remove-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Simulation',
        children: [
          {
            title: 'List',
            link: '/lgd/simulation/list',
          },
          {
            title: 'Draft List',
            link: '/lgd/simulation/draft',
          },
          {
            title:  'Approval List',
            link: '/lgd/simulation/approval',
          }  
        ]
      }
    ],
  },
  {
    title: 'ECL',
    icon: {icon:'file-text-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Simulation',
        children: [
          {
            title: 'List',
            link: '/ecl/simulation/list',
          },
          {
            title: 'Draft List',
            link: '/ecl/simulation/draft',
          },
          {
            title:  'Approval List',
            link: '/ecl/simulation/approval',
          }  
        ]
      }
    ],
  },
  {
    title: 'Transaction',
    icon: {icon:'options-2-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Individual Impairment',
        children: [
          {
            title: 'List',
            link: '/transaction/individual-impairment/list',
          },
          {
            title: 'Draft List',
            link: '/transaction/individual-impairment/draft',
          },
          {
            title:  'Approval List',
            link: '/transaction/individual-impairment/approval',
          }  
        ]
      },
      {
        title: 'Exclusion ECL',
        children: [
          {
            title: 'List',
            link: '/transaction/exclusion-ecl/list',
          },
          {
            title: 'Draft List',
            link: '/transaction/exclusion-ecl/draft',
          },
          {
            title:  'Approval List',
            link: '/transaction/exclusion-ecl/approval',
          }  
        ]
      }
    ],
  },
  {
    title: 'EOD',
    icon: {icon:'activity-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Manual',
        link: '/eod/manual',
      },
      {
        title: 'Scheduler',
        link: '/eod/scheduler',
      },
      {
        title: 'Reprocess',
        link: '/eod/reprocess',
      }
    ],
  },
  {
    title: 'Inquiry',
    icon: {icon:'book-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Account Inquiry',
        link: '/inquiry/account-inquiry',
      },
      {
        title: 'Journal Inquiry',
        link: '/inquiry/journal-inquiry',
      },
      {
        title: 'Download Report',
        link: '/inquiry/download-report',
      }
    ],
  },{
    title: 'SAMPLE PAGE FEATURES :',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: {icon:'shopping-cart-outline',options: {animation:{ type: 'shake' }}},
    link: '/dashboard'
  },
  {
    title: 'IoT Dashboard',
    icon: {icon:'home-outline',options: {animation:{ type: 'shake' }}},
    link: '/iot-dashboard',
  },
  {
    title: 'Layout',
    icon: {icon:'layout-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Stepper',
        link: '/layout/stepper',
      },
      {
        title: 'List',
        link: '/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: {icon:'edit-2-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Form Inputs',
        link: '/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: {icon:'keypad-outline',options: {animation:{ type: 'shake' }}},
    link: '/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',    
    icon: {icon:'browser-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Dialog',
        link: '/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: {icon:'message-circle-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Calendar',
        link: '/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: {icon:'map-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Google Maps',
        link: '/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: {icon:'pie-chart-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Echarts',
        link: '/charts/echarts',
        home: true,
      },
      {
        title: 'Charts.js',
        link: '/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: {icon:'text-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'TinyMCE',
        link: '/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: {icon:'grid-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Smart Table',
        link: '/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: {icon:'shuffle-2-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: '404',
        link: '/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: {icon:'lock-outline',options: {animation:{ type: 'shake' }}},
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

// export const MENU_ITEMS3: NbMenuItem[] = 
// [
//   {
//       "title": "Parameter",
//       "icon": "options-2-outline",
//       // "icon": "{icon:home-outline,options: {animation:{ type: \"shake\" }}}",
//       "children": [
//           {
//               "title": "Product",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/settings/product/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/settings/product/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/settings/product/approval"
//                   }
//               ]
//           },
//           {
//               "title": "IE Material",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/settings/ie-material/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/settings/ie-material/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/settings/ie-material/approval"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "title": "PD",
//       "children": [
//           {
//               "title": "Segment",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/pd/segment-list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/pd/segment-draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/pd/segment-approval"
//                   }
//               ]
//           },
//           {
//               "title": "Bucket",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/pd/bucket/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/pd/bucket/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/pd/bucket/approval"
//                   }
//               ]
//           },
//           {
//               "title": "Simulation",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/pd/simulation/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/pd/simulation/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/pd/simulation/approval"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "title": "LGD",
//       "children": [
//           {
//               "title": "Simulation",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/lgd/simulation/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/lgd/simulation/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/lgd/simulation/approval"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "title": "ECL",
//       "children": [
//           {
//               "title": "Simulation",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/ecl/simulation/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/ecl/simulation/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/ecl/simulation/approval"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "title": "Transaction",
//       "icon": "options-2-outline",
//       "children": [
//           {
//               "title": "Individual Impairment",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/transaction/individual-impairment/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/transaction/individual-impairment/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/transaction/individual-impairment/approval"
//                   }
//               ]
//           },
//           {
//               "title": "Exclusion ECL",
//               "children": [
//                   {
//                       "title": "List",
//                       "link": "/transaction/exclusion-ecl/list"
//                   },
//                   {
//                       "title": "Draft List",
//                       "link": "/transaction/exclusion-ecl/draft"
//                   },
//                   {
//                       "title": "Approval List",
//                       "link": "/transaction/exclusion-ecl/approval"
//                   }
//               ]
//           }
//       ]
//   },
//   {
//       "title": "Inquiry",
//       "children": [
//           {
//               "title": "Account Inquiry",
//               "link": "/inquiry/account-inquiry"
//           },
//           {
//               "title": "Journal Inquiry",
//               "link": "/inquiry/journal-inquiry"
//           },
//           {
//               "title": "Download Report",
//               "link": "/inquiry/download-report"
//           }
//       ]
//   }
// ];