const confirmStatus = "C"
const pendingStatus = "P"
const categoriesDados = [
    {
        id: 1,
        name: "Education",
        color: '#FFD573',
        expenses: [
            {
                id: 1,
                title: "Tuition Fee",
                description: "Tuition fee",
                location: "ByProgrammers' tuition center",
                total: 100.00,
                status: pendingStatus
            },
            {
                id: 2,
                title: "Arduino",
                description: "Hardward",
                location: "ByProgrammers' tuition center",
                total: 30.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Javascript Books",
                description: "Javascript books",
                location: "ByProgrammers' Book Store",
                total: 20.00,
                status: confirmStatus
            },
            {
                id: 4,
                title: "PHP Books",
                description: "PHP books",
                location: "ByProgrammers' Book Store",
                total: 20.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Nutrition",
        color: '#95A9B8',
        expenses: [
            {
                id: 5,
                title: "Vitamins",
                description: "Vitamin",
                location: "ByProgrammers' Pharmacy",
                total: 25.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Protein powder",
                description: "Protein",
                location: "ByProgrammers' Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Child",
        color: '#008159',
        expenses: [
            {
                id: 7,
                title: "Toys",
                description: "toys",
                location: "ByProgrammers' Toy Store",
                total: 25.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Baby Car Seat",
                description: "Baby Car Seat",
                location: "ByProgrammers' Baby Care Store",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 9,
                title: "Pampers",
                description: "Pampers",
                location: "ByProgrammers' Supermarket",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 10,
                title: "Baby T-Shirt",
                description: "T-Shirt",
                location: "ByProgrammers' Fashion Store",
                total: 20.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Beauty & Care",
        color: '#FF615F',
        expenses: [
            {
                id: 11,
                title: "Skin Care product",
                description: "skin care",
                location: "ByProgrammers' Pharmacy",
                total: 10.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Lotion",
                description: "Lotion",
                location: "ByProgrammers' Pharmacy",
                total: 50.00,
                status: confirmStatus,
            },
            {
                id: 13,
                title: "Face Mask",
                description: "Face Mask",
                location: "ByProgrammers' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
            {
                id: 14,
                title: "Sunscreen cream",
                description: "Sunscreen cream",
                location: "ByProgrammers' Pharmacy",
                total: 50.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Sports",
        color: '#8e44ad',
        expenses: [
            {
                id: 15,
                title: "Gym Membership",
                description: "Monthly Fee",
                location: "ByProgrammers' Gym",
                total: 45.00,
                status: pendingStatus,
            },
            {
                id: 16,
                title: "Gloves",
                description: "Gym Equipment",
                location: "ByProgrammers' Gym",
                total: 15.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 6,
        name: "Clothing",
        color: '#FF0000',
        expenses: [
            {
                id: 17,
                title: "T-Shirt",
                description: "Plain Color T-Shirt",
                location: "ByProgrammers' Mall",
                total: 20.00,
                status: pendingStatus,
            },
            {
                id: 18,
                title: "Jeans",
                description: "Blue Jeans",
                location: "ByProgrammers' Mall",
                total: 50.00,
                status: confirmStatus,
            },
        ],
    }
]

export default categoriesDados;