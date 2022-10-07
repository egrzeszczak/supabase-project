export const services = ref([
    {
        id: "requests",
        name: "Requests",
        link: "/requests",
        icon: {
            type: 'local',
            icon: 'request.png',
            alt: 'Envelope',
        },
    },
    {
        id: "spam",
        name: "Report spam",
        link: "/spam",
        icon: {
            type: 'local',
            icon: 'spam.png',
            alt: 'Envelope with warning',
        },
    },
])