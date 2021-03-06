export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Accueil',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 60
          }
        }
      },
      {
        path: 'events',
        data: {
          menu: {
            title: 'Evenements',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 80
          }
        }
      },
      {
        path: 'clubs',
        data: {
          menu: {
            title: 'Clubs',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'overviewClubs',
            data: {
              menu: {
                title: 'Liste des clubs',
              }
            }
          },
          {
            path: 'soccerClubs',
            data: {
              menu: {
                title: 'Club Soccer'
              }
            }
          },
          {
            path: 'basketClubs',
            data: {
              menu: {
                title: 'Club Basket'
              }
            }
          },
          {
            path: 'handClubs',
            data: {
              menu: {
                title: 'Club Hand'
              }
            }
          },
          {
            path: 'runningClubs',
            data: {
              menu: {
                title: 'Club Running'
              }
            }
          },
          {
            path: 'badmintonClubs',
            data: {
              menu: {
                title: 'Club Badminton'
              }
            }
          },
          {
            path: 'grimpClubs',
            data: {
              menu: {
                title: 'Club Grimp\''
              }
            }
          },
          {
            path: 'tennisClubs',
            data: {
              menu: {
                title: 'Club Tennis'
              }
            }
          },
          {
            path: 'musicClubs',
            data: {
              menu: {
                title: 'Club Music'
              }
            }
          }
        ]
      },
      {
        path: 'advantages',
        data: {
          menu: {
            title: 'Avantages',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'about',
        data: {
          menu: {
            title: 'Le CE Wavestone',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 110
          }
        }
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Déconnexion',
            icon: 'ion-log-out',
            selected: false,
            expanded: false,
            isLogout: "sidebar-logout",
            order: 120
          }
        }
      },      
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 140
          }
        }
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'Modals',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'Smart Tables',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'https://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
