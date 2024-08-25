// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Fallback Data
const fallbackData =  [
  {
      "id": 1,
      "user": "Jennifer Riley",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2022-01-16",
      "ipAddress": "65.45.0.143"
  },
  {
      "id": 2,
      "user": "Gregory Ballard",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2022-09-24",
      "ipAddress": "37.238.227.16"
  },
  {
      "id": 3,
      "user": "Nicholas Williams",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-04-19",
      "ipAddress": "212.82.98.173"
  },
  {
      "id": 4,
      "user": "David Lee",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-07-29",
      "ipAddress": "221.215.128.58"
  },
  {
      "id": 5,
      "user": "James Terry",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2023-05-26",
      "ipAddress": "144.92.85.79"
  },
  {
      "id": 6,
      "user": "Nicole Hamilton",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-06-19",
      "ipAddress": "35.252.165.94"
  },
  {
      "id": 7,
      "user": "Linda Skinner",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2024-08-25",
      "ipAddress": "38.205.207.214"
  },
  {
      "id": 8,
      "user": "Craig Duarte",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2021-08-17",
      "ipAddress": "6.161.150.230"
  },
  {
      "id": 9,
      "user": "Carlos Thomas",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2022-04-13",
      "ipAddress": "5.217.233.115"
  },
  {
      "id": 10,
      "user": "Jesus Ferguson",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2023-01-29",
      "ipAddress": "40.245.59.67"
  },
  {
      "id": 11,
      "user": "Richard Porter",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-12-06",
      "ipAddress": "69.59.49.220"
  },
  {
      "id": 12,
      "user": "John Rodriguez",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2020-09-14",
      "ipAddress": "40.42.18.161"
  },
  {
      "id": 13,
      "user": "Jimmy Robinson",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2023-11-05",
      "ipAddress": "101.167.124.14"
  },
  {
      "id": 14,
      "user": "Sean Orr",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2023-01-28",
      "ipAddress": "128.127.74.134"
  },
  {
      "id": 15,
      "user": "Terry Merritt",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2020-10-30",
      "ipAddress": "168.8.171.244"
  },
  {
      "id": 16,
      "user": "Jerry Munoz",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-04-11",
      "ipAddress": "94.57.213.84"
  },
  {
      "id": 17,
      "user": "Donna Chaney",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2023-05-15",
      "ipAddress": "92.174.63.109"
  },
  {
      "id": 18,
      "user": "Michelle Walton",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2022-06-24",
      "ipAddress": "212.101.242.248"
  },
  {
      "id": 19,
      "user": "Perry Davis",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2022-09-11",
      "ipAddress": "120.6.81.187"
  },
  {
      "id": 20,
      "user": "Devin Johnson",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2024-05-12",
      "ipAddress": "120.121.9.166"
  },
  {
      "id": 21,
      "user": "Marissa Charles",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-05-05",
      "ipAddress": "100.9.98.88"
  },
  {
      "id": 22,
      "user": "Vincent Thomas",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2020-12-09",
      "ipAddress": "133.33.229.241"
  },
  {
      "id": 23,
      "user": "Amy Davis",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-11-13",
      "ipAddress": "102.186.210.31"
  },
  {
      "id": 24,
      "user": "Diana Hamilton",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2021-06-29",
      "ipAddress": "185.156.192.172"
  },
  {
      "id": 25,
      "user": "Kaitlyn Gregory",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2021-07-15",
      "ipAddress": "23.108.43.165"
  },
  {
      "id": 26,
      "user": "Daniel Martinez",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2022-05-21",
      "ipAddress": "28.71.142.130"
  },
  {
      "id": 27,
      "user": "John Smith",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-11-30",
      "ipAddress": "115.1.94.165"
  },
  {
      "id": 28,
      "user": "Anna Torres",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-11-11",
      "ipAddress": "189.55.52.212"
  },
  {
      "id": 29,
      "user": "Donald Owens",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2022-09-05",
      "ipAddress": "186.75.184.144"
  },
  {
      "id": 30,
      "user": "Kevin Li",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-08-04",
      "ipAddress": "219.111.202.35"
  },
  {
      "id": 31,
      "user": "Christian Wilcox",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2023-06-29",
      "ipAddress": "126.237.207.10"
  },
  {
      "id": 32,
      "user": "Erica Young",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-12-09",
      "ipAddress": "49.117.226.240"
  },
  {
      "id": 33,
      "user": "Veronica Hernandez",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2023-01-16",
      "ipAddress": "156.4.200.67"
  },
  {
      "id": 34,
      "user": "Amy White",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-11-25",
      "ipAddress": "167.50.241.166"
  },
  {
      "id": 35,
      "user": "Beth Adams",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2024-04-16",
      "ipAddress": "131.50.24.123"
  },
  {
      "id": 36,
      "user": "Joshua Watkins",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2021-12-04",
      "ipAddress": "153.174.114.85"
  },
  {
      "id": 37,
      "user": "Mrs. Wendy Joseph",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-10-28",
      "ipAddress": "178.225.172.129"
  },
  {
      "id": 38,
      "user": "Cheryl Rivera",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-04-04",
      "ipAddress": "128.177.82.173"
  },
  {
      "id": 39,
      "user": "Jeremy Jacobs",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-07-25",
      "ipAddress": "135.99.65.50"
  },
  {
      "id": 40,
      "user": "Dr. Jennifer Miller",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2024-03-08",
      "ipAddress": "55.57.83.166"
  },
  {
      "id": 41,
      "user": "Teresa Wood MD",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2022-05-26",
      "ipAddress": "137.60.34.97"
  },
  {
      "id": 42,
      "user": "Brendan Smith",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2022-12-15",
      "ipAddress": "61.20.246.22"
  },
  {
      "id": 43,
      "user": "Mary Jones",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2024-01-03",
      "ipAddress": "101.81.142.145"
  },
  {
      "id": 44,
      "user": "Scott James",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2022-07-02",
      "ipAddress": "161.93.16.215"
  },
  {
      "id": 45,
      "user": "Gina Byrd",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2021-09-19",
      "ipAddress": "195.26.43.85"
  },
  {
      "id": 46,
      "user": "Justin King",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2022-09-03",
      "ipAddress": "186.110.7.150"
  },
  {
      "id": 47,
      "user": "Matthew Franklin",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-09-26",
      "ipAddress": "99.97.79.251"
  },
  {
      "id": 48,
      "user": "Oscar Ward",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2022-10-06",
      "ipAddress": "65.234.200.32"
  },
  {
      "id": 49,
      "user": "Sarah Martin",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2022-04-27",
      "ipAddress": "209.130.29.190"
  },
  {
      "id": 50,
      "user": "Cynthia Ross",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2023-05-18",
      "ipAddress": "104.91.19.80"
  },
  {
      "id": 51,
      "user": "Amy Richardson",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2024-07-20",
      "ipAddress": "70.96.62.100"
  },
  {
      "id": 52,
      "user": "Andrew Garcia",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2024-06-15",
      "ipAddress": "113.25.94.27"
  },
  {
      "id": 53,
      "user": "Tammy Garcia",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-09-27",
      "ipAddress": "158.220.230.227"
  },
  {
      "id": 54,
      "user": "Kathleen Moore",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-12-08",
      "ipAddress": "122.172.128.150"
  },
  {
      "id": 55,
      "user": "Michelle Smith",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2024-08-17",
      "ipAddress": "118.188.148.72"
  },
  {
      "id": 56,
      "user": "Ernest Warren",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2024-04-22",
      "ipAddress": "82.167.246.150"
  },
  {
      "id": 57,
      "user": "Patricia Tyler",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2020-09-15",
      "ipAddress": "118.59.155.252"
  },
  {
      "id": 58,
      "user": "Joseph Thomas",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2022-08-13",
      "ipAddress": "176.76.228.57"
  },
  {
      "id": 59,
      "user": "Joshua English",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2021-09-17",
      "ipAddress": "11.51.212.142"
  },
  {
      "id": 60,
      "user": "Jasmine Gardner",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2021-11-30",
      "ipAddress": "98.188.233.234"
  },
  {
      "id": 61,
      "user": "Courtney Williamson",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2024-01-27",
      "ipAddress": "130.111.153.116"
  },
  {
      "id": 62,
      "user": "Sarah Baldwin",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-10-20",
      "ipAddress": "49.140.3.28"
  },
  {
      "id": 63,
      "user": "Anne Bray",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2024-03-29",
      "ipAddress": "193.70.57.134"
  },
  {
      "id": 64,
      "user": "Sarah Nash",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2022-07-21",
      "ipAddress": "77.160.205.123"
  },
  {
      "id": 65,
      "user": "Taylor Bradley",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2021-01-02",
      "ipAddress": "171.107.165.252"
  },
  {
      "id": 66,
      "user": "Alexander Reed",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2022-04-16",
      "ipAddress": "131.39.17.13"
  },
  {
      "id": 67,
      "user": "Sarah Brown",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2020-09-21",
      "ipAddress": "93.189.204.75"
  },
  {
      "id": 68,
      "user": "Dana Jones",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2021-08-26",
      "ipAddress": "146.252.231.86"
  },
  {
      "id": 69,
      "user": "James Harris",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-04-27",
      "ipAddress": "99.227.240.80"
  },
  {
      "id": 70,
      "user": "Eileen Torres",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2023-10-03",
      "ipAddress": "140.28.8.213"
  },
  {
      "id": 71,
      "user": "Mary Yates",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2023-02-26",
      "ipAddress": "122.59.16.212"
  },
  {
      "id": 72,
      "user": "Vernon Vargas",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2022-03-24",
      "ipAddress": "80.65.233.84"
  },
  {
      "id": 73,
      "user": "Jennifer Gay",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2020-12-07",
      "ipAddress": "46.29.89.249"
  },
  {
      "id": 74,
      "user": "Peter Meyers",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2021-07-06",
      "ipAddress": "133.47.242.57"
  },
  {
      "id": 75,
      "user": "Melissa Mathis",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2021-10-25",
      "ipAddress": "38.34.85.33"
  },
  {
      "id": 76,
      "user": "Tommy Mccall",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2021-12-24",
      "ipAddress": "2.8.3.113"
  },
  {
      "id": 77,
      "user": "Jacob White",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2020-11-12",
      "ipAddress": "63.156.138.245"
  },
  {
      "id": 78,
      "user": "Jessica Mccoy",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2021-03-09",
      "ipAddress": "130.228.132.187"
  },
  {
      "id": 79,
      "user": "Kimberly Morrison",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-08-20",
      "ipAddress": "40.184.19.138"
  },
  {
      "id": 80,
      "user": "Nicolas Lewis",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2022-10-13",
      "ipAddress": "94.96.13.155"
  },
  {
      "id": 81,
      "user": "Jacob Mata",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-04-15",
      "ipAddress": "19.177.113.145"
  },
  {
      "id": 82,
      "user": "Mark Kelly",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2021-02-17",
      "ipAddress": "144.110.33.7"
  },
  {
      "id": 83,
      "user": "Luis Garza Jr.",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2024-05-10",
      "ipAddress": "40.137.179.228"
  },
  {
      "id": 84,
      "user": "Jocelyn Lee",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2023-11-03",
      "ipAddress": "49.132.249.35"
  },
  {
      "id": 85,
      "user": "Shane Lowe",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-07-05",
      "ipAddress": "211.65.131.46"
  },
  {
      "id": 86,
      "user": "Jasmin Reese",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-06-09",
      "ipAddress": "64.149.158.135"
  },
  {
      "id": 87,
      "user": "Chris Patterson",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-05-22",
      "ipAddress": "14.25.228.97"
  },
  {
      "id": 88,
      "user": "Derek Anderson",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2023-04-21",
      "ipAddress": "174.250.54.0"
  },
  {
      "id": 89,
      "user": "Kelly Hernandez",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2024-04-18",
      "ipAddress": "146.225.157.225"
  },
  {
      "id": 90,
      "user": "Alexander Howell",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2024-07-23",
      "ipAddress": "68.60.8.160"
  },
  {
      "id": 91,
      "user": "Brandon Robinson",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-05-24",
      "ipAddress": "221.14.120.138"
  },
  {
      "id": 92,
      "user": "David Flores",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2020-10-24",
      "ipAddress": "35.174.63.46"
  },
  {
      "id": 93,
      "user": "Yolanda Lee",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2022-01-03",
      "ipAddress": "200.226.169.51"
  },
  {
      "id": 94,
      "user": "Brenda Wagner",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2020-10-02",
      "ipAddress": "190.172.191.196"
  },
  {
      "id": 95,
      "user": "Anna Rodgers",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2022-11-05",
      "ipAddress": "157.66.200.247"
  },
  {
      "id": 96,
      "user": "Michael Franklin",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2022-01-21",
      "ipAddress": "51.171.238.54"
  },
  {
      "id": 97,
      "user": "Michael Turner",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2024-07-08",
      "ipAddress": "122.107.18.178"
  },
  {
      "id": 98,
      "user": "Jennifer Osborne",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-08-12",
      "ipAddress": "53.91.112.113"
  },
  {
      "id": 99,
      "user": "Tiffany Collins",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-08-14",
      "ipAddress": "24.37.39.198"
  },
  {
      "id": 100,
      "user": "Tracy Melendez",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2021-10-24",
      "ipAddress": "140.173.148.19"
  },
  {
      "id": 101,
      "user": "Natalie Garcia",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2024-03-07",
      "ipAddress": "78.213.232.245"
  },
  {
      "id": 102,
      "user": "Teresa Hendricks",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-11-01",
      "ipAddress": "143.12.2.45"
  },
  {
      "id": 103,
      "user": "Brandy Mcbride",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2021-10-14",
      "ipAddress": "171.187.177.127"
  },
  {
      "id": 104,
      "user": "Megan Gonzalez",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2024-04-29",
      "ipAddress": "77.51.56.45"
  },
  {
      "id": 105,
      "user": "Rebecca Ward",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-09-18",
      "ipAddress": "55.91.102.36"
  },
  {
      "id": 106,
      "user": "Grace Franklin",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2024-05-16",
      "ipAddress": "98.231.104.243"
  },
  {
      "id": 107,
      "user": "Patricia Cole",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2020-12-17",
      "ipAddress": "39.15.209.234"
  },
  {
      "id": 108,
      "user": "Stephanie Nelson",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2020-11-11",
      "ipAddress": "212.222.244.218"
  },
  {
      "id": 109,
      "user": "Jamie Mahoney",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2022-04-22",
      "ipAddress": "12.238.84.244"
  },
  {
      "id": 110,
      "user": "Edward Perry",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2024-05-13",
      "ipAddress": "114.165.15.39"
  },
  {
      "id": 111,
      "user": "Mary Porter",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2022-04-02",
      "ipAddress": "177.109.40.15"
  },
  {
      "id": 112,
      "user": "Mark Gonzalez",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2021-09-08",
      "ipAddress": "160.167.91.131"
  },
  {
      "id": 113,
      "user": "Katelyn Lopez",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2024-05-11",
      "ipAddress": "93.155.81.43"
  },
  {
      "id": 114,
      "user": "Tina Vang",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2023-08-03",
      "ipAddress": "62.228.17.223"
  },
  {
      "id": 115,
      "user": "Reginald Tran",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2023-09-26",
      "ipAddress": "177.221.248.143"
  },
  {
      "id": 116,
      "user": "Andrew Baldwin",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2021-11-19",
      "ipAddress": "110.214.228.204"
  },
  {
      "id": 117,
      "user": "Brandon Floyd",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2021-04-25",
      "ipAddress": "17.90.167.61"
  },
  {
      "id": 118,
      "user": "Sophia Schwartz",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2021-09-25",
      "ipAddress": "205.247.178.222"
  },
  {
      "id": 119,
      "user": "Madison Downs",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-12-20",
      "ipAddress": "80.14.200.14"
  },
  {
      "id": 120,
      "user": "Andrew Burns",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2021-05-20",
      "ipAddress": "70.162.94.128"
  },
  {
      "id": 121,
      "user": "Jose Reeves",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2024-03-09",
      "ipAddress": "62.252.213.104"
  },
  {
      "id": 122,
      "user": "Chelsea Kelly",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-11-28",
      "ipAddress": "123.34.95.76"
  },
  {
      "id": 123,
      "user": "Tricia Barber",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2022-01-25",
      "ipAddress": "208.21.33.111"
  },
  {
      "id": 124,
      "user": "Audrey Stevens",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2021-09-01",
      "ipAddress": "109.120.163.173"
  },
  {
      "id": 125,
      "user": "Brittany Ray",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-03-23",
      "ipAddress": "216.137.129.139"
  },
  {
      "id": 126,
      "user": "Dana Atkins",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2024-08-05",
      "ipAddress": "129.36.251.2"
  },
  {
      "id": 127,
      "user": "Alicia Davis",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2021-11-28",
      "ipAddress": "104.191.141.24"
  },
  {
      "id": 128,
      "user": "Kristen Hobbs",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2020-11-21",
      "ipAddress": "11.16.46.211"
  },
  {
      "id": 129,
      "user": "Timothy Oconnor",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2020-11-19",
      "ipAddress": "190.75.111.19"
  },
  {
      "id": 130,
      "user": "Tyler Rios",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2020-10-01",
      "ipAddress": "123.133.57.171"
  },
  {
      "id": 131,
      "user": "Christopher Mckinney",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2021-07-23",
      "ipAddress": "58.207.30.3"
  },
  {
      "id": 132,
      "user": "Timothy Rodriguez",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2024-02-12",
      "ipAddress": "167.53.8.15"
  },
  {
      "id": 133,
      "user": "Walter Thompson",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2024-06-17",
      "ipAddress": "52.218.68.21"
  },
  {
      "id": 134,
      "user": "Sharon Martinez",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2022-07-24",
      "ipAddress": "8.159.157.153"
  },
  {
      "id": 135,
      "user": "Meredith Miller",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2021-07-27",
      "ipAddress": "194.40.212.200"
  },
  {
      "id": 136,
      "user": "Daniel Daniels",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2024-05-05",
      "ipAddress": "9.130.117.182"
  },
  {
      "id": 137,
      "user": "Rebecca Page",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-07-25",
      "ipAddress": "27.42.77.4"
  },
  {
      "id": 138,
      "user": "Dr. Charles Fox",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-09-18",
      "ipAddress": "50.131.121.86"
  },
  {
      "id": 139,
      "user": "Cody Henderson",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-10-28",
      "ipAddress": "137.156.134.212"
  },
  {
      "id": 140,
      "user": "Melissa Williams",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2022-06-28",
      "ipAddress": "9.139.68.50"
  },
  {
      "id": 141,
      "user": "Kimberly Bailey",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-02-10",
      "ipAddress": "11.103.57.66"
  },
  {
      "id": 142,
      "user": "Thomas Mathis",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2020-08-31",
      "ipAddress": "19.203.63.75"
  },
  {
      "id": 143,
      "user": "Jennifer Burns",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2022-09-28",
      "ipAddress": "186.25.1.169"
  },
  {
      "id": 144,
      "user": "Kimberly Guerrero",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-11-09",
      "ipAddress": "131.58.255.179"
  },
  {
      "id": 145,
      "user": "Robert Fuller",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2023-02-27",
      "ipAddress": "53.30.108.0"
  },
  {
      "id": 146,
      "user": "Brittany Shah",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2023-07-16",
      "ipAddress": "82.71.226.193"
  },
  {
      "id": 147,
      "user": "Richard Tate",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2024-03-20",
      "ipAddress": "183.108.24.118"
  },
  {
      "id": 148,
      "user": "Danny Hicks",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2020-11-19",
      "ipAddress": "154.196.85.176"
  },
  {
      "id": 149,
      "user": "Robert Hunt",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2021-01-06",
      "ipAddress": "119.35.204.88"
  },
  {
      "id": 150,
      "user": "Ashley Lewis",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2021-10-06",
      "ipAddress": "42.127.84.70"
  },
  {
      "id": 151,
      "user": "Sean Greer",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2020-09-19",
      "ipAddress": "192.165.150.157"
  },
  {
      "id": 152,
      "user": "Carolyn Reynolds",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2020-09-26",
      "ipAddress": "121.1.29.243"
  },
  {
      "id": 153,
      "user": "Theresa Mills",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2022-12-16",
      "ipAddress": "170.157.39.131"
  },
  {
      "id": 154,
      "user": "Joanna Cohen",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2024-06-12",
      "ipAddress": "217.127.138.249"
  },
  {
      "id": 155,
      "user": "Shane Gutierrez",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2022-05-15",
      "ipAddress": "122.0.185.235"
  },
  {
      "id": 156,
      "user": "Dr. Susan Jackson",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2023-10-07",
      "ipAddress": "106.117.76.252"
  },
  {
      "id": 157,
      "user": "Tony Collins",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2021-08-30",
      "ipAddress": "58.202.188.241"
  },
  {
      "id": 158,
      "user": "Justin Nichols",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-11-10",
      "ipAddress": "154.45.110.10"
  },
  {
      "id": 159,
      "user": "Kathleen Glover",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2021-11-08",
      "ipAddress": "190.188.18.50"
  },
  {
      "id": 160,
      "user": "Christopher Clements",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2024-04-12",
      "ipAddress": "223.78.27.136"
  },
  {
      "id": 161,
      "user": "Dennis May",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2024-03-10",
      "ipAddress": "45.193.112.209"
  },
  {
      "id": 162,
      "user": "Walter Knight",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2022-06-11",
      "ipAddress": "74.108.80.15"
  },
  {
      "id": 163,
      "user": "Sonia Camacho",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-05-06",
      "ipAddress": "162.62.74.112"
  },
  {
      "id": 164,
      "user": "Tammy Mckinney",
      "category": "Phishing",
      "details": "Phishing email targeting financial credentials",
      "timeStamp": "2021-11-26",
      "ipAddress": "169.23.51.27"
  },
  {
      "id": 165,
      "user": "Kenneth Drake",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2024-07-17",
      "ipAddress": "114.187.183.27"
  },
  {
      "id": 166,
      "user": "Patricia Woods",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-05-07",
      "ipAddress": "150.52.180.33"
  },
  {
      "id": 167,
      "user": "Kaitlin Williamson",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2024-04-10",
      "ipAddress": "31.122.51.27"
  },
  {
      "id": 168,
      "user": "Natalie Malone",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2024-06-06",
      "ipAddress": "123.181.203.180"
  },
  {
      "id": 169,
      "user": "Michael Johnson",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2024-04-15",
      "ipAddress": "141.74.2.29"
  },
  {
      "id": 170,
      "user": "Sydney Reeves",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2023-07-16",
      "ipAddress": "144.104.126.31"
  },
  {
      "id": 171,
      "user": "Vernon Webster",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2020-09-10",
      "ipAddress": "181.232.244.227"
  },
  {
      "id": 172,
      "user": "Brandon Collins",
      "category": "Ransomware",
      "details": "Ransomware demanding Bitcoin payment",
      "timeStamp": "2022-10-20",
      "ipAddress": "85.175.4.93"
  },
  {
      "id": 173,
      "user": "Ruth Pruitt",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2022-08-20",
      "ipAddress": "48.83.43.31"
  },
  {
      "id": 174,
      "user": "Kimberly Trevino",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2022-10-20",
      "ipAddress": "209.60.12.245"
  },
  {
      "id": 175,
      "user": "Michael Sanchez",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2023-03-28",
      "ipAddress": "177.244.230.14"
  },
  {
      "id": 176,
      "user": "Patrick Hunter",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2021-10-08",
      "ipAddress": "76.22.11.237"
  },
  {
      "id": 177,
      "user": "Ralph Wheeler",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2021-04-20",
      "ipAddress": "52.9.114.255"
  },
  {
      "id": 178,
      "user": "Cheryl Perez",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2022-10-11",
      "ipAddress": "104.109.230.144"
  },
  {
      "id": 179,
      "user": "Lori Jackson",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2024-05-11",
      "ipAddress": "124.176.96.138"
  },
  {
      "id": 180,
      "user": "Michael Kent",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2022-01-17",
      "ipAddress": "70.109.73.44"
  },
  {
      "id": 181,
      "user": "Jennifer Baker",
      "category": "Ransomware",
      "details": "Files locked with encryption algorithms",
      "timeStamp": "2023-03-02",
      "ipAddress": "172.57.61.19"
  },
  {
      "id": 182,
      "user": "John Wright",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-06-24",
      "ipAddress": "67.27.169.234"
  },
  {
      "id": 183,
      "user": "Joseph Wong",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2024-03-23",
      "ipAddress": "87.150.30.137"
  },
  {
      "id": 184,
      "user": "Michael Coleman",
      "category": "Data Breach",
      "details": "Leak of internal documents",
      "timeStamp": "2022-12-03",
      "ipAddress": "207.168.101.100"
  },
  {
      "id": 185,
      "user": "Haley Guzman",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2022-10-23",
      "ipAddress": "13.117.83.149"
  },
  {
      "id": 186,
      "user": "Melanie Barron",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2022-04-27",
      "ipAddress": "92.50.140.162"
  },
  {
      "id": 187,
      "user": "Mr. Daniel Lopez DDS",
      "category": "Malware",
      "details": "Worm infecting network systems",
      "timeStamp": "2023-11-22",
      "ipAddress": "149.32.179.97"
  },
  {
      "id": 188,
      "user": "Gary Moore",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2021-06-11",
      "ipAddress": "25.81.33.212"
  },
  {
      "id": 189,
      "user": "Bradley White",
      "category": "Data Breach",
      "details": "Unauthorized access to sensitive customer data",
      "timeStamp": "2020-12-29",
      "ipAddress": "119.101.108.112"
  },
  {
      "id": 190,
      "user": "Maria Jones",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2023-03-25",
      "ipAddress": "6.147.62.31"
  },
  {
      "id": 191,
      "user": "Lisa Guzman",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2022-09-08",
      "ipAddress": "91.24.136.64"
  },
  {
      "id": 192,
      "user": "Andrew Hernandez",
      "category": "Phishing",
      "details": "Fake login page for social media",
      "timeStamp": "2023-06-04",
      "ipAddress": "123.68.233.15"
  },
  {
      "id": 193,
      "user": "Carlos Dickerson",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-06-09",
      "ipAddress": "56.92.33.170"
  },
  {
      "id": 194,
      "user": "Jeffrey Smith",
      "category": "Malware",
      "details": "Trojan detected on user workstation",
      "timeStamp": "2022-04-05",
      "ipAddress": "63.35.112.25"
  },
  {
      "id": 195,
      "user": "Michael Martin",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2021-08-04",
      "ipAddress": "71.190.222.231"
  },
  {
      "id": 196,
      "user": "Diana Hernandez",
      "category": "Ransomware",
      "details": "Ransomware encrypting critical business files",
      "timeStamp": "2021-06-18",
      "ipAddress": "94.237.239.189"
  },
  {
      "id": 197,
      "user": "Bryan Martinez",
      "category": "Malware",
      "details": "Virus spreading through email attachments",
      "timeStamp": "2023-12-21",
      "ipAddress": "40.132.51.92"
  },
  {
      "id": 198,
      "user": "Heather Webster",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-07-16",
      "ipAddress": "42.106.208.185"
  },
  {
      "id": 199,
      "user": "Sharon Mitchell",
      "category": "Data Breach",
      "details": "Exposure of employee personal information",
      "timeStamp": "2021-03-08",
      "ipAddress": "166.225.1.185"
  },
  {
      "id": 200,
      "user": "Melissa Williams",
      "category": "Phishing",
      "details": "Email pretending to be from a trusted source",
      "timeStamp": "2023-10-21",
      "ipAddress": "19.222.193.31"
  }
];


// Action Creators
export const fetchDataRequest = () => {
  return async dispatch => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=http://52.168.1.54:8080/api/v1/userActivities');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.error('API fetch failed:', error);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: fallbackData }); // Use fallback data on failure
    }
  };
};

// Other action creators
export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});
