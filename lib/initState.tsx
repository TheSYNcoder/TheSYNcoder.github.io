const initialTerminalDirectoryStructure = {
    'folders': {
        'Applications': [
            'Mail.app',
            'Terminal.app',
            'Finder.app',
        ],
        'Documents': [
            'Welcome.txt'
        ],
        'Desktop': [
            'Machintosh HD',
            'About me'                                                                        
        ]
    },
    'shuvayan/applications': [
        'Mail.app',
        'Terminal.app',
        'Finder.app',
    ],
    'shuvayan/desktop' : [
        'Machintosh HD',
        'About me'
    ],
    'shuvayan/machintosh hd/applications': [
        'Mail.app',
        'Terminal.app',
        'Finder.app',
    ],
    'shuvayan/documents': [
        'Welcome.txt'
    ],
    'shuvayan/machintosh hd': [
        'Applications',
        'shuvayan'
    ]
}

const initialTerminalFileState = {
    'shuvayan/documents/welcome.txt': "Hey welcome to the personal website of Shuvayan Ghosh Dastidar. This is based on the theme of MacOS. All basic features in default MacOS are present. Hope you have a great time."
}

export {
    initialTerminalDirectoryStructure,
    initialTerminalFileState
};