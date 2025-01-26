const appNames = [
  "Money Manager",
  "Sigma Savings",
  "Peely Payments",
  "Fortnight Funds",
  "Buckaroo Bank",
  "Bankler",
  "Pennywise",
  "Wumbo"
];

export const appName = appNames[5];

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

const guestUser = {
  "email": "guest@gmail.com",
  "userId": "679558680011c5b72977",
  "dwollaCustomerUrl": "https://api-sandbox.dwolla.com/customers/be3ef0c1-d4e9-447e-bad4-0d42756d641a",
  "dwollaCustomerId": "be3ef0c1-d4e9-447e-bad4-0d42756d641a",
  "firstName": "Guest",
  "lastName": "User",
  "address1": "Guest Road",
  "city": "Guest City",
  "postalCode": "11101",
  "dateOfBirth": "2000-01-01",
  "ssn": "1234",
  "state": "NY",
  "$id": "679558690037f8dc31ed",
  "$createdAt": "2025-01-25T21:32:26.475+00:00",
  "$updatedAt": "2025-01-25T21:32:26.475+00:00",
  "$permissions": [],
  "$databaseId": "669f1ba900237986720e",
  "$collectionId": "669f1bbe00229e7c2dea"
};

const guestAccounts = {
  "accounts": [
    {
      "id": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
      "availableBalance": 100,
      "currentBalance": 110,
      "institutionId": "ins_56",
      "name": "Plaid Checking",
      "officialName": "Plaid Gold Standard 0% Interest Checking",
      "mask": "0000",
      "type": "depository",
      "subtype": "checking",
      "appwriteItemId": "679558920006147b9b2a",
      "shareableId": "YVFadjkzZ1plZFN2NmJMUkVneEJDb3JkM3E0azlERlpLcXA1NA==",
      "transactions": [
        {
          "id": "ovz49Lqz5XCrgx3AP7pdSb74NBBexXfoQarXx",
          "name": "Uber 063015 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 5.4,
          "pending": false,
          "category": "Travel",
          "date": "2025-01-19",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        },
        {
          "id": "GJMvok9MQ3t54g7R1pnyI8LNryyB6gc6Kl81m",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2025-01-19",
          "image": null
        },
        {
          "id": "gogKkJngbAie7W9DM6jlSVKlmZZx7AFENbrle",
          "name": "United Airlines",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": -500,
          "pending": false,
          "category": "Travel",
          "date": "2025-01-17",
          "image": "https://plaid-merchant-logos.plaid.com/united_airlines_1065.png"
        },
        {
          "id": "8greqRMrpwsd1gXyk57jud3RvKKLVriW7Azxk",
          "name": "McDonald's",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 12,
          "pending": false,
          "category": "Food and Drink",
          "date": "2025-01-16",
          "image": "https://plaid-merchant-logos.plaid.com/mcdonalds_619.png"
        },
        {
          "id": "EJQGvrmQ9Nt51XPwoMBdIyMKqggRAJf48wVjW",
          "name": "Starbucks",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 4.33,
          "pending": false,
          "category": "Food and Drink",
          "date": "2025-01-16",
          "image": "https://plaid-merchant-logos.plaid.com/starbucks_956.png"
        },
        {
          "id": "W3xvz4jxR8F5VPLKDmZlIBQp1ww9jEF63rvWL",
          "name": "SparkFun",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 89.4,
          "pending": false,
          "category": "Food and Drink",
          "date": "2025-01-15",
          "image": null
        },
        {
          "id": "nvrawJlr5pCKaMkr97LNsGrap77qvmFA9dE6v",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2025-01-14",
          "image": null
        },
        {
          "id": "AJP8p9APnQtZkGdQpMxLs8k1yaanPBc9L7y1g",
          "name": "Uber 072515 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 6.33,
          "pending": false,
          "category": "Travel",
          "date": "2025-01-02",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        },
        {
          "id": "6pqjdBQqgmc3E75Z9zMVHbNA86g1G7c8DL3mD",
          "name": "Uber 063015 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 5.4,
          "pending": false,
          "category": "Travel",
          "date": "2024-12-20",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        },
        {
          "id": "3MR4dvjRKBcRApx6aq5lS3bd7mVXq4UZl3RQG",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2024-12-20",
          "image": null
        },
        {
          "id": "XxdvBw7d81ulD5BEJvaeF6aNByZRbgubKqE9A",
          "name": "United Airlines",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": -500,
          "pending": false,
          "category": "Travel",
          "date": "2024-12-18",
          "image": "https://plaid-merchant-logos.plaid.com/united_airlines_1065.png"
        },
        {
          "id": "DJeAVwbe8Rt5zgNrvMokIvrBNJGkEeu3WxQ75",
          "name": "McDonald's",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 12,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-12-17",
          "image": "https://plaid-merchant-logos.plaid.com/mcdonalds_619.png"
        },
        {
          "id": "VB3vrgP3W1t5VzXopk3JIXrbB1l5Pki9gedoJ",
          "name": "Starbucks",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 4.33,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-12-17",
          "image": "https://plaid-merchant-logos.plaid.com/starbucks_956.png"
        },
        {
          "id": "wvPMJ5aPKACVJ87DMknPCKV6jBgdMbuPZjV37",
          "name": "SparkFun",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 89.4,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-12-16",
          "image": null
        },
        {
          "id": "xvj15X4jrBCP8keBM7b9uMzQAg69N3U64vBk9",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2024-12-15",
          "image": null
        },
        {
          "id": "5klP6VeloxcEDjLWMrBosq8mR7GnvdF5KMdbo",
          "name": "Uber 072515 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 6.33,
          "pending": false,
          "category": "Travel",
          "date": "2024-12-03",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        },
        {
          "id": "JJpv9blpEat5KaZgNA7vIAGBdgpnmjsB6qJ1A",
          "name": "Uber 063015 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 5.4,
          "pending": false,
          "category": "Travel",
          "date": "2024-11-20",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        },
        {
          "id": "d1Lv8JWLwdcWZLr7594mI9maX5o8vMUJEealZ",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2024-11-20",
          "image": null
        },
        {
          "id": "kvl3km9lybC1PjKlkoV5sQPbBjEXWGiL6Kpqj",
          "name": "United Airlines",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": -500,
          "pending": false,
          "category": "Travel",
          "date": "2024-11-18",
          "image": "https://plaid-merchant-logos.plaid.com/united_airlines_1065.png"
        },
        {
          "id": "l6kxd1vkZWflaZvkbVMLFlRrXZMWP5Cpo87nw",
          "name": "McDonald's",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 12,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-11-17",
          "image": "https://plaid-merchant-logos.plaid.com/mcdonalds_619.png"
        },
        {
          "id": "qv3P9jr3RXCn5ld3P7gLFerq4a69DzTgrkMLW",
          "name": "Starbucks",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 4.33,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-11-17",
          "image": "https://plaid-merchant-logos.plaid.com/starbucks_956.png"
        },
        {
          "id": "KJovZVqonat5g9MANor8IyjWKAkgL8CRpbNKq",
          "name": "SparkFun",
          "paymentChannel": "in store",
          "type": "in store",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 89.4,
          "pending": false,
          "category": "Food and Drink",
          "date": "2024-11-16",
          "image": null
        },
        {
          "id": "aQZv93gZedSv6bLREgxBCorbVjDep5cZ5L3oZ",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "41RNGV7RrvcEDmPy6K1BsmxE4lJXPvhJRe8bz",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2024-11-15",
          "image": null
        },
        {
          "id": "rvxk95zxJRC3RWaAP68pHbVqm5zKpec7JgMpz",
          "name": "Uber 072515 SF**POOL**",
          "paymentChannel": "online",
          "type": "online",
          "accountId": "aQZv93gZedSv6bLREgxBCord3q4k9DFZKqp54",
          "amount": 6.33,
          "pending": false,
          "category": "Travel",
          "date": "2024-11-03",
          "image": "https://plaid-merchant-logos.plaid.com/uber_1060.png"
        }
      ]
    },
    {
      "id": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
      "availableBalance": 200,
      "currentBalance": 210,
      "institutionId": "ins_56",
      "name": "Plaid Saving",
      "officialName": "Plaid Silver Standard 0.1% Interest Saving",
      "mask": "1111",
      "type": "depository",
      "subtype": "savings",
      "appwriteItemId": "67955913002f73126ed2",
      "shareableId": "V1YzckFQNG5tblVCV1g2bk1ycUdJUmRHcjdyTUEzaTZRODFBbA==",
      "transactions": [
        {
          "id": "kPvgo8mB7BU9gvMDnrwRHDxEavlJqMCL7W6Me",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2025-01-19",
          "image": null
        },
        {
          "id": "lj68oy13e3T4B8DwrzQyUgpMdyVxA7CpBZoP8",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2025-01-14",
          "image": null
        },
        {
          "id": "lj68oy13e3T4B8DwrzQyUgpW7xgDGDHp34WZe",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2024-12-20",
          "image": null
        },
        {
          "id": "qMvno8jkLkieZvoDpQ8ySPy9LJPGWGtgKEWdk",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2024-12-15",
          "image": null
        },
        {
          "id": "K6JgWlVX1XUaEVqbwPemhpvgXPpedefRXy8VA",
          "name": "CREDIT CARD 3333 PAYMENT *//",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": 25,
          "pending": false,
          "category": "Payment",
          "date": "2024-11-20",
          "image": null
        },
        {
          "id": "r1vbom5PpPiQeVZbJl41TrLKB7r9G9t7RQwlM",
          "name": "INTRST PYMNT",
          "paymentChannel": "other",
          "type": "other",
          "accountId": "WV3rAP4nmnUBWX6nMrqGIRdGr7rMA3i6Q81Al",
          "amount": -4.22,
          "pending": false,
          "category": "Transfer",
          "date": "2024-11-15",
          "image": null
        }
      ]
    }
  ],
  "totalBanks": 2,
  "totalCurrentBalance": 320
};