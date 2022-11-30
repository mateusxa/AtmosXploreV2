const Flys: {
    id: number,
    flyData: {
        time: string,
        temperature: number,
        pressure: number,
        height: number,
        luminosity: number,
        airQuality: number
    }[],
    data: string
}[] = [
    {
        id: 1,
        flyData: [
            {
            time: "2022-10-05 11:25:21",
            temperature: 19.467,
            pressure: 938.72844,
            height: 0,
            luminosity: 405,
            airQuality: 364.14
            },{
            time : "2022-10-05 11:25:21",
            temperature: 17.7002,
            pressure: 938.65208,
            height: 5.3883,
            luminosity: 475.71,
            airQuality: 319.6
            },{
            time : "2022-10-05 11:25:21",
            temperature: 17.2592,
            pressure: 969.18335,
            height: 11.974,
            luminosity: 461.7,
            airQuality: 335.92
            },{
            time : "2022-10-05 11:25:21",
            temperature: 17.5686,
            pressure: 979.31424,
            height: 16.34451,
            luminosity: 547.2,
            airQuality: 290.7
            },{
            time : "2022-10-05 11:25:21",
            temperature: 19.1786,
            pressure: 1030.23434,
            height: 23.46904,
            luminosity: 633.6,
            airQuality: 300.56
            },{
            time : "2022-10-05 11:26:21",
            temperature: 17.9935,
            pressure: 999.55198,
            height: 26.9415,
            luminosity: 749.7,
            airQuality: 263.84
            },{
            time : "2022-10-05 11:26:21",
            temperature: 17.3712,
            pressure: 999.4726,
            height: 36.99966,
            luminosity: 891,
            airQuality: 244.8
            },{
            time : "2022-10-05 11:26:21",
            temperature: 18.0418,
            pressure: 1070.78475,
            height: 39.39446,
            luminosity: 996.48,
            airQuality: 242.76
            },{
            time : "2022-10-05 11:26:21",
            temperature: 18.8902,
            pressure: 938.13964,
            height: 46.93808,
            luminosity: 1157.76,
            airQuality: 203.32
            },{
            time : "2022-10-05 11:26:21",
            temperature: 16.8084,
            pressure: 1060.42456,
            height: 54.96066,
            luminosity: 1283.4,
            airQuality: 187.68
            },{
            time : "2022-10-05 11:26:21",
            temperature: 18.564,
            pressure: 1039.94406,
            height: 59.2713,
            luminosity: 1556.85,
            airQuality: 194.48
            },{
            time : "2022-10-05 11:27:21",
            temperature: 18.6739,
            pressure: 937.917,
            height: 59.2713,
            luminosity: 1872.72,
            airQuality: 161.5
            },{
            time : "2022-10-05 11:27:21",
            temperature: 17.157,
            pressure: 1049.97273,
            height: 67.53336,
            luminosity: 2171.52,
            airQuality: 159.12
            },{
            time : "2022-10-05 11:27:21",
            temperature: 18.1699,
            pressure: 1070.2755,
            height: 73.16114,
            luminosity: 2195.73,
            airQuality: 143.82
            },{
            time : "2022-10-05 11:27:21",
            temperature: 16.128,
            pressure: 927.50567,
            height: 77.95074,
            luminosity: 2601.9,
            airQuality: 160.65
            },{
            time : "2022-10-05 11:27:21",
            temperature: 16.779,
            pressure: 1029.35059,
            height: 87.11085,
            luminosity: 0,
            airQuality: 139.23
            },{
            time : "2022-10-05 11:27:21",
            temperature: 16.1798,
            pressure: 957.92674,
            height: 92.91824,
            luminosity: 0,
            airQuality: 151.47
            },{
            time : "2022-10-05 11:28:21",
            temperature: 17.71,
            pressure: 1059.75064,
            height: 93.63668,
            luminosity: 0,
            airQuality: 154.53
            },{
            time : "2022-10-05 11:28:21",
            temperature: 17.3558,
            pressure: 917.1639,
            height: 92.61889,
            luminosity: 0,
            airQuality: 160.65
            },{
            time : "2022-10-05 11:28:21",
            temperature: 16.1798,
            pressure: 968.1944,
            height: 90.04448,
            luminosity: 0,
            airQuality: 160.65
            },{
            time : "2022-10-05 11:28:21",
            temperature: 16.9575,
            pressure: 1019.232,
            height: 88.0089,
            luminosity: 0,
            airQuality: 159.12
            },{
            time : "2022-10-05 11:28:21",
            temperature: 16.6656,
            pressure: 927.57392,
            height: 81.30346,
            luminosity: 0,
            airQuality: 153
            },{
            time : "2022-10-05 11:28:21",
            temperature: 18.8895,
            pressure: 1029.58693,
            height: 80.16593,
            luminosity: 0,
            airQuality: 122.4
            },{
            time : "2022-10-05 11:29:21",
            temperature: 18.06,
            pressure: 958.31026,
            height: 66.09648,
            luminosity: 0,
            airQuality: 114.24
            },{
            time : "2022-10-05 11:29:21",
            temperature: 17.7674,
            pressure: 978.77568,
            height: 65.19843,
            luminosity: 0,
            airQuality: 99.96
            },{
            time : "2022-10-05 11:29:21",
            temperature: 16.562,
            pressure: 958.45878,
            height: 55.6791,
            luminosity: 0,
            airQuality: 116.4
            },{
            time : "2022-10-05 11:29:21",
            temperature: 18.6354,
            pressure: 999.31972,
            height: 53.883,
            luminosity: 0,
            airQuality: 138
            },{
            time : "2022-10-05 11:29:21",
            temperature: 17.2396,
            pressure: 1029.99295,
            height: 44.06432,
            luminosity: 0,
            airQuality: 143.52
            },{
            time : "2022-10-05 11:29:21",
            temperature: 18.2259,
            pressure: 1030.07678,
            height: 42.74718,
            luminosity: 0,
            airQuality: 174
            },{
            time : "2022-10-05 11:30:21",
            temperature: 16.8168,
            pressure: 1050.55159,
            height: 37.35888,
            luminosity: 0,
            airQuality: 186.24
            },{
            time : "2022-10-05 11:30:21",
            temperature: 19.1065,
            pressure: 989.43589,
            height: 28.1389,
            luminosity: 0,
            airQuality: 203.7
            },{
            time : "2022-10-05 11:30:21",
            temperature: 18.2476,
            pressure: 1040.52036,
            height: 22.27164,
            luminosity: 0,
            airQuality: 205.2
            },{
            time : "2022-10-05 11:30:21",
            temperature: 17.3817,
            pressure: 1071.20055,
            height: 16.52412,
            luminosity: 0,
            airQuality: 246
            },{
            time : "2022-10-05 11:30:21",
            temperature: 17.2592,
            pressure: 1010.06928,
            height: 11.61478,
            luminosity: 0,
            airQuality: 274.56
            },{
            time : "2022-10-05 11:30:21",
            temperature: 17.3236,
            pressure: 1020.352,
            height: 5.68765,
            luminosity: 0,
            airQuality: 293.28
            },{
            time : "2022-10-05 11:31:21",
            temperature: 18.333,
            pressure: 969.41135,
            height: 0,
            luminosity: 0,
            airQuality: 371.28
            }
        ],
        data: "2022-10-05" 
    },
    {
        id: 2,
        flyData: [
            {
            time: "2022-10-05 12:13:45",
            temperature: 18.6543,
            pressure: 967.911,
            height: 0.000,
            luminosity: 442.260,
            airQuality: 389.6298
            },{
            time: "2022-10-05 12:13:45",
            temperature: 21.550935,
            pressure: 974.872,
            height: 6.226,
            luminosity: 480.043,
            airQuality: 331.058
            },
            {
            time: "2022-10-05 12:13:45",
            temperature: 19.120192,
            pressure: 1069.774,
            height: 11.368,
            luminosity: 541.728,
            airQuality: 322.1925
            },
            {
            time: "2022-10-05 12:13:45",
            temperature: 20.779542,
            pressure: 1009.306,
            height: 16.871,
            luminosity: 615.859,
            airQuality: 309.672
            },
            {
            time: "2022-10-05 12:13:45",
            temperature: 18.053952,
            pressure: 1082.154,
            height: 25.893,
            luminosity: 619.938,
            airQuality: 333.795
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 18.6984,
            pressure: 1050.754,
            height: 30.462,
            luminosity: 763.088,
            airQuality: 302.4096
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 18.4338,
            pressure: 1002.328,
            height: 39.600,
            luminosity: 951.766,
            airQuality: 245.973
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 19.709746,
            pressure: 955.854,
            height: 42.093,
            luminosity: 1133.288,
            airQuality: 267.2026
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 18.11992,
            pressure: 999.017,
            height: 54.314,
            luminosity: 1241.698,
            airQuality: 233.9064
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 17.789499,
            pressure: 975.591,
            height: 58.194,
            luminosity: 1365.984,
            airQuality: 214.2816
            },
            {
            time: "2022-10-05 12:14:45",
            temperature: 18.54944,
            pressure: 1121.508,
            height: 54.422,
            luminosity: 1802.736,
            airQuality: 206.0927
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 17.78553,
            pressure: 1006.222,
            height: 74.655,
            luminosity: 2003.810,
            airQuality: 178.568
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 19.34226,
            pressure: 1039.881,
            height: 76.104,
            luminosity: 2102.616,
            airQuality: 150.6132
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 20.206368,
            pressure: 983.226,
            height: 76.959,
            luminosity: 2302.447,
            airQuality: 148.9761
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 20.10624,
            pressure: 1109.949,
            height: 87.892,
            luminosity: 2691.374,
            airQuality: 165.24
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 20.2419,
            pressure: 1027.312,
            height: 99.001,
            luminosity: 3070.980,
            airQuality: 163.863
            },
            {
            time: "2022-10-05 12:15:45",
            temperature: 18.862802,
            pressure: 1056.573,
            height: 92.822,
            luminosity: 3200.869,
            airQuality: 142.0146
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 17.341632,
            pressure: 1048.542,
            height: 102.675,
            luminosity: 3880.216,
            airQuality: 163.8936
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 17.85168,
            pressure: 1008.269,
            height: 99.255,
            luminosity: 3961.535,
            airQuality: 158.7987
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 17.692878,
            pressure: 1070.517,
            height: 94.834,
            luminosity: 3890.384,
            airQuality: 149.8941
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 17.127075,
            pressure: 957.365,
            height: 85.925,
            luminosity: 3745.440,
            airQuality: 148.1346
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 18.38592,
            pressure: 1055.498,
            height: 88.788,
            luminosity: 3676.712,
            airQuality: 170.289
            },
            {
            time: "2022-10-05 12:16:45",
            temperature: 18.069156,
            pressure: 1000.025,
            height: 88.183,
            luminosity: 3557.281,
            airQuality: 135.3336
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 20.66064,
            pressure: 1016.930,
            height: 76.959,
            luminosity: 3331.595,
            airQuality: 109.3729
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 17.29602,
            pressure: 1089.092,
            height: 69.058,
            luminosity: 3482.015,
            airQuality: 99.144
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 18.74964,
            pressure: 1033.606,
            height: 59.487,
            luminosity: 3092.835,
            airQuality: 132.108
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 17.161011,
            pressure: 977.702,
            height: 56.970,
            luminosity: 2978.512,
            airQuality: 148.9158
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 19.080936,
            pressure: 955.854,
            height: 52.805,
            luminosity: 2635.373,
            airQuality: 164.736
            },
            {
            time: "2022-10-05 12:17:45",
            temperature: 19.523805,
            pressure: 1124.314,
            height: 44.021,
            luminosity: 2419.217,
            airQuality: 193.6272
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 16.96464,
            pressure: 1092.370,
            height: 36.806,
            luminosity: 2531.569,
            airQuality: 174.528
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 18.48322,
            pressure: 1144.482,
            height: 29.291,
            luminosity: 1996.245,
            airQuality: 238.056
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 19.3648,
            pressure: 1092.750,
            height: 26.122,
            luminosity: 1732.378,
            airQuality: 230.2344
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 20.605725,
            pressure: 1018.559,
            height: 19.610,
            luminosity: 1442.545,
            airQuality: 236.898
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 18.35666,
            pressure: 1134.338,
            height: 11.897,
            luminosity: 1059.561,
            airQuality: 279.6552
            },
            {
            time: "2022-10-05 12:18:45",
            temperature: 19.014534,
            pressure: 1018.719,
            height: 6.410,
            luminosity: 800.463,
            airQuality: 287.217
            },
            {
            time: "2022-10-05 12:19:45",
            temperature: 18.77904,
            pressure: 1077.577,
            height: 0.000,
            luminosity: 421.200,
            airQuality: 363.8544
            }
            ],
        data: "2022-10-05" 
    },
    {
        id: 3,
        flyData: [
            {
            time: "2022-10-05 12:41:02",
            temperature: 17.955,
            pressure: 979.54272,
            height: 0,
            luminosity: 427.500,
            airQuality: 353.430
            },{
            time: "2022-10-05 12:41:02",
            temperature: 18.0768,
            pressure: 979.46304,
            height: 6.10674,
            luminosity: 475.710,
            airQuality: 316.200
            },{
            time: "2022-10-05 12:41:02",
            temperature: 18.1972,
            pressure: 928.37563,
            height: 12.45296,
            luminosity: 471.960,
            airQuality: 306.850
            },{
            time: "2022-10-05 12:41:02",
            temperature: 17.1948,
            pressure: 958.91186,
            height: 17.78139,
            luminosity: 599.040,
            airQuality: 306.000
            },{
            time: "2022-10-05 12:41:02",
            temperature: 17.3166,
            pressure: 969.0323,
            height: 24.66644,
            luminosity: 653.400,
            airQuality: 286.110
            },{
            time: "2022-10-05 12:42:02",
            temperature: 18.55,
            pressure: 928.15541,
            height: 28.1389,
            luminosity: 742.050,
            airQuality: 252.960
            },{
            time: "2022-10-05 12:42:02",
            temperature: 18.6648,
            pressure: 979.0752,
            height: 35.56278,
            luminosity: 864.270,
            airQuality: 249.900
            },{
            time: "2022-10-05 12:42:02",
            temperature: 18.7782,
            pressure: 1029.99295,
            height: 38.13719,
            luminosity: 1048.380,
            airQuality: 235.620
            },{
            time: "2022-10-05 12:42:02",
            temperature: 16.6894,
            pressure: 938.13964,
            height: 49.81184,
            luminosity: 1181.880,
            airQuality: 207.740
            },{
            time: "2022-10-05 12:42:02",
            temperature: 16.9911,
            pressure: 999.24622,
            height: 48.4947,
            luminosity: 1325.250,
            airQuality: 189.720
            },{
            time: "2022-10-05 12:42:02",
            temperature: 18.018,
            pressure: 999.16194,
            height: 56.8765,
            luminosity: 1621.050,
            airQuality: 185.130
            },{
            time: "2022-10-05 12:43:02",
            temperature: 17.2235,
            pressure: 917.5275,
            height: 66.51557,
            luminosity: 1707.480,
            airQuality: 158.100
            },{
            time: "2022-10-05 12:43:02",
            temperature: 16.6152,
            pressure: 1019.391,
            height: 66.09648,
            luminosity: 1900.080,
            airQuality: 143.820
            },{
            time: "2022-10-05 12:43:02",
            temperature: 16.9106,
            pressure: 947.9583,
            height: 79.38762,
            luminosity: 2219.340,
            airQuality: 142.290
            },{
            time: "2022-10-05 12:43:02",
            temperature: 18.0992,
            pressure: 1060.00648,
            height: 83.818,
            luminosity: 2469.150,
            airQuality: 148.410
            },{
            time: "2022-10-05 12:43:02",
            temperature: 18.0285,
            pressure: 937.62628,
            height: 80.8245,
            luminosity: 2970.000,
            airQuality: 146.880
            },{
            time: "2022-10-05 12:43:02",
            temperature: 17.6022,
            pressure: 1049.64313,
            height: 89.08656,
            luminosity: 3008.460,
            airQuality: 154.530
            },{
            time: "2022-10-05 12:44:02",
            temperature: 18.0642,
            pressure: 927.28181,
            height: 95.67226,
            luminosity: 3479.850,
            airQuality: 137.700
            },{
            time: "2022-10-05 12:44:02",
            temperature: 16.6474,
            pressure: 1039.45242,
            height: 104.83237,
            luminosity: 3589.740,
            airQuality: 154.530
            },{
            time: "2022-10-05 12:44:02",
            temperature: 17.0688,
            pressure: 958.00288,
            height: 91.0024,
            luminosity: 3678.420,
            airQuality: 157.590
            },{
            time: "2022-10-05 12:44:02",
            temperature: 0,
            pressure: 978.46272,
            height: 93.3972,
            luminosity: 3708.000,
            airQuality: 137.700
            },{
            time: "2022-10-05 12:44:02",
            temperature: 0,
            pressure: 958.15328,
            height: 80.46528,
            luminosity: 3430.890,
            airQuality: 148.410
            },{
            time: "2022-10-05 12:44:02",
            temperature: 0,
            pressure: 1039.78086,
            height: 77.05269,
            luminosity: 3556.590,
            airQuality: 131.920
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 1009.28421,
            height: 67.53336,
            luminosity: 3414.960,
            airQuality: 123.760
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 1070.5359,
            height: 67.83271,
            luminosity: 2964.240,
            airQuality: 102.000
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 917.6733,
            height: 61.6661,
            luminosity: 2921.250,
            airQuality: 126.000
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 978.92544,
            height: 56.57715,
            luminosity: 2732.580,
            airQuality: 140.760
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 948.40935,
            height: 45.98016,
            luminosity: 2745.180,
            airQuality: 143.520
            },{
            time: "2022-10-05 12:45:02",
            temperature: 0,
            pressure: 989.28166,
            height: 37.7181,
            luminosity: 2508.000,
            airQuality: 163.560
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 1019.953,
            height: 36.64044,
            luminosity: 2117.610,
            airQuality: 195.840
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 1009.83663,
            height: 28.1389,
            luminosity: 1863.000,
            airQuality: 195.300
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 918.1062,
            height: 24.90592,
            luminosity: 1699.440,
            airQuality: 223.440
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 1040.59482,
            height: 16.70373,
            luminosity: 1501.740,
            airQuality: 250.920
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 959.05568,
            height: 11.73452,
            luminosity: 1074.420,
            airQuality: 240.240
            },{
            time: "2022-10-05 12:46:02",
            temperature: 0,
            pressure: 948.92736,
            height: 5.44817,
            luminosity: 831.210,
            airQuality: 279.180
            },{
            time: "2022-10-05 12:47:02",
            temperature: 0,
            pressure: 1040.84166,
            height: 0,
            luminosity: 459.000,
            airQuality: 339.150
            }
            ],
        data: "2022-10-05" 
    },
    {
        id: 4,
        flyData: [
            {
            time: "2022-10-05 13:08:45",
            temperature: 17.37099,
            pressure: 1040.866176,
            height: 0,
            luminosity: 429.975,
            airQuality: 371.3871
            },{
            time: "2022-10-05 13:08:45",
            temperature: 18.408208,
            pressure: 1050.88222,
            height: 6.4755392,
            luminosity: 475.4274,
            airQuality: 332.384
            },{
            time: "2022-10-05 13:08:45",
            temperature: 18.91008,
            pressure: 965.5106552,
            height: 12.698427,
            luminosity: 528.39,
            airQuality: 312.987
            },{
            time: "2022-10-05 13:08:45",
            temperature: 17.688216,
            pressure: 946.8744558,
            height: 18.1190568,
            luminosity: 558.4896,
            airQuality: 315.0576
            },{
            time: "2022-10-05 13:08:45",
            temperature: 19.562172,
            pressure: 1019.115969,
            height: 22.2524816,
            luminosity: 673.2,
            airQuality: 297.7278
            },{
            time: "2022-10-05 13:09:45",
            temperature: 17.96011,
            pressure: 1060.239065,
            height: 28.701678,
            luminosity: 811.2825,
            airQuality: 274.5568
            },{
            time: "2022-10-05 13:09:45",
            temperature: 19.038096,
            pressure: 1071.271448,
            height: 36.64044,
            luminosity: 908.1072,
            airQuality: 281.1375
            },{
            time: "2022-10-05 13:09:45",
            temperature: 17.590755,
            pressure: 936.17181,
            height: 38.8999338,
            luminosity: 1089.9,
            airQuality: 242.403
            },{
            time: "2022-10-05 13:09:45",
            temperature: 18.882864,
            pressure: 1124.237993,
            height: 45.3862496,
            luminosity: 1267.0236,
            airQuality: 205.3532
            },{
            time: "2022-10-05 13:09:45",
            temperature: 16.958214,
            pressure: 996.7990864,
            height: 53.8776117,
            luminosity: 1436.292,
            airQuality: 195.5952
            },{
            time: "2022-10-05 13:09:45",
            temperature: 16.7076,
            pressure: 1060.742941,
            height: 54.42183,
            luminosity: 1685.25,
            airQuality: 192.6474
            },{
            time: "2022-10-05 13:10:45",
            temperature: 17.346784,
            pressure: 1060.254,
            height: 65.1589158,
            luminosity: 1815.4368,
            airQuality: 163.115
            },{
            time: "2022-10-05 13:10:45",
            temperature: 17.868564,
            pressure: 1027.546128,
            height: 77.699286,
            luminosity: 2104.704,
            airQuality: 155.9376
            },{
            time: "2022-10-05 13:10:45",
            temperature: 18.700605,
            pressure: 1123.789275,
            height: 72.9509963,
            luminosity: 2578.212,
            airQuality: 146.8035
            },{
            time: "2022-10-05 13:10:45",
            temperature: 19.7568,
            pressure: 1029.42937,
            height: 87.1958654,
            luminosity: 2705.976,
            airQuality: 159.1659
            },{
            time: "2022-10-05 13:10:45",
            temperature: 17.055675,
            pressure: 1039.236432,
            height: 95.2382025,
            luminosity: 2819.718,
            airQuality: 163.863
            },{
            time: "2022-10-05 13:10:45",
            temperature: 17.36217,
            pressure: 953.850456,
            height: 105.61068,
            luminosity: 3540.726,
            airQuality: 159.1812
            },{
            time: "2022-10-05 13:11:45",
            temperature: 18.602584,
            pressure: 973.6459005,
            height: 96.6289826,
            luminosity: 3546.5166,
            airQuality: 159.1812
            },{
            time: "2022-10-05 13:11:45",
            temperature: 17.350487,
            pressure: 1018.663372,
            height: 104.8527258,
            luminosity: 3885.7104,
            airQuality: 160.7112
            },{
            time: "2022-10-05 13:11:45",
            temperature: 19.04238,
            pressure: 1070.1096,
            height: 92.6500224,
            luminosity: 3451.1592,
            airQuality: 157.59
            },{
            time: "2022-10-05 13:11:45",
            temperature: 16.75044,
            pressure: 1007.816602,
            height: 94.331172,
            luminosity: 3780,
            airQuality: 160.7112
            },{
            time: "2022-10-05 13:11:45",
            temperature: 17.556224,
            pressure: 947.1447104,
            height: 88.9141344,
            luminosity: 3604.9104,
            airQuality: 146.5587
            },{
            time: "2022-10-05 13:11:45",
            temperature: 19.083792,
            pressure: 1081.066277,
            height: 83.3725672,
            luminosity: 3411.564,
            airQuality: 134.6128
            },{
            time: "2022-10-05 13:12:45",
            temperature: 16.947504,
            pressure: 987.875151,
            height: 76.190562,
            luminosity: 3141.7632,
            airQuality: 123.76
            },{
            time: "2022-10-05 13:12:45",
            temperature: 19.607595,
            pressure: 1009.158508,
            height: 62.3270648,
            luminosity: 3116.3184,
            airQuality: 109.2624
            },{
            time: "2022-10-05 13:12:45",
            temperature: 18.18362,
            pressure: 1124.149793,
            height: 63.516083,
            luminosity: 3357.9,
            airQuality: 128.544
            },{
            time: "2022-10-05 13:12:45",
            temperature: 16.93629,
            pressure: 1050.509363,
            height: 52.212627,
            luminosity: 2668.626,
            airQuality: 140.7186
            },{
            time: "2022-10-05 13:12:45",
            temperature: 19.06443,
            pressure: 1029.788991,
            height: 47.3595648,
            luminosity: 2525.5656,
            airQuality: 143.3796
            },{
            time: "2022-10-05 13:12:45",
            temperature: 18.763472,
            pressure: 997.950623,
            height: 42.7136528,
            luminosity: 2583.7416,
            airQuality: 177.4974
            },{
            time: "2022-10-05 13:13:45",
            temperature: 19.603584,
            pressure: 1113.788676,
            height: 38.849643,
            luminosity: 2138.7861,
            airQuality: 184.0896
            },{
            time: "2022-10-05 13:13:45",
            temperature: 18.54258,
            pressure: 927.213633,
            height: 31.449711,
            luminosity: 1920.915,
            airQuality: 214.221
            },{
            time: "2022-10-05 13:13:45",
            temperature: 19.35549,
            pressure: 1071.735971,
            height: 25.6530976,
            luminosity: 1767.4176,
            airQuality: 227.43
            },{
            time: "2022-10-05 13:13:45",
            temperature: 19.635714,
            pressure: 1050.79673,
            height: 18.6866244,
            luminosity: 1427.6736,
            airQuality: 253.4292
            },{
            time: "2022-10-05 13:13:45",
            temperature: 17.970204,
            pressure: 1061.388962,
            height: 11.1142668,
            luminosity: 1083.1068,
            airQuality: 247.9752
            },{
            time: "2022-10-05 13:13:45",
            temperature: 19.974864,
            pressure: 1009.536269,
            height: 6.412077,
            luminosity: 779.562,
            airQuality: 284.4816
            },{
            time: "2022-10-05 13:14:45",
            temperature: 20.83725,
            pressure: 1072.06691,
            height: 0,
            luminosity: 444.6,
            airQuality: 338.6502
            }
            ],
        data: "2022-10-05" 
    },
    {
        id: 5,
        flyData: [{
            time: "2022-11-12 12:27:32",
            temperature: 18.144,
            pressure: 928.52487,
            height: 0,
            luminosity: 450.000,
            airQuality: 321.300
            },{
            time: "2022-11-12 12:27:32",
            temperature: 18.6417,
            pressure: 1030.47674,
            height: 6.22648,
            luminosity: 456.870,
            airQuality: 319.600
            },{
            time: "2022-11-12 12:27:32",
            temperature: 17.0716,
            pressure: 1061.00072,
            height: 12.45296,
            luminosity: 482.220,
            airQuality: 319.770
            },{
            time: "2022-11-12 12:27:32",
            temperature: 17.1948,
            pressure: 1030.32019,
            height: 18.14061,
            luminosity: 524.160,
            airQuality: 278.460
            },{
            time: "2022-11-12 12:27:32",
            temperature: 17.689,
            pressure: 1030.23434,
            height: 22.7506,
            luminosity: 594.000,
            airQuality: 260.100
            },{
            time: "2022-11-12 12:28:32",
            temperature: 16.8805,
            pressure: 948.55443,
            height: 29.3363,
            luminosity: 765.000,
            airQuality: 269.280
            },{
            time: "2022-11-12 12:28:32",
            temperature: 18.8496,
            pressure: 1040.2674,
            height: 36.64044,
            luminosity: 846.450,
            airQuality: 255.000
            },{
            time: "2022-11-12 12:28:32",
            temperature: 17.4895,
            pressure: 1009.59705,
            height: 41.909,
            luminosity: 934.200,
            airQuality: 245.140
            },{
            time: "2022-11-12 12:28:32",
            temperature: 18.7068,
            pressure: 968.73115,
            height: 45.98016,
            luminosity: 1097.460,
            airQuality: 223.210
            },{
            time: "2022-11-12 12:28:32",
            temperature: 18.27,
            pressure: 948.26427,
            height: 56.03832,
            luminosity: 1269.450,
            airQuality: 214.200
            },{
            time: "2022-11-12 12:28:32",
            temperature: 18.2,
            pressure: 999.16194,
            height: 62.2648,
            luminosity: 1669.200,
            airQuality: 188.870
            },{
            time: "2022-11-12 12:29:32",
            temperature: 16.6796,
            pressure: 1039.8645,
            height: 65.19843,
            luminosity: 1707.480,
            airQuality: 171.700
            },{
            time: "2022-11-12 12:29:32",
            temperature: 16.4346,
            pressure: 1019.391,
            height: 73.28088,
            luminosity: 2192.400,
            airQuality: 139.230
            },{
            time: "2022-11-12 12:29:32",
            temperature: 16.7307,
            pressure: 1070.2755,
            height: 77.831,
            luminosity: 2361.000,
            airQuality: 160.650
            },{
            time: "2022-11-12 12:29:32",
            temperature: 17.5616,
            pressure: 958.08278,
            height: 76.27438,
            luminosity: 2601.900,
            airQuality: 145.350
            },{
            time: "2022-11-12 12:29:32",
            temperature: 18.3855,
            pressure: 1019.159,
            height: 84.4167,
            luminosity: 3088.800,
            airQuality: 159.120
            },{
            time: "2022-11-12 12:29:32",
            temperature: 17.0688,
            pressure: 1059.83384,
            height: 100.5816,
            luminosity: 3471.300,
            airQuality: 160.650
            },{
            time: "2022-11-12 12:30:32",
            temperature: 18.5955,
            pressure: 988.42127,
            height: 91.6011,
            luminosity: 3772.890,
            airQuality: 151.470
            },{
            time: "2022-11-12 12:30:32",
            temperature: 17.8871,
            pressure: 968.11745,
            height: 104.83237,
            luminosity: 3369.960,
            airQuality: 149.940
            },{
            time: "2022-11-12 12:30:32",
            temperature: 17.0688,
            pressure: 978.38592,
            height: 100.5816,
            luminosity: 3277.800,
            airQuality: 139.230
            },{
            time: "2022-11-12 12:30:32",
            temperature: 16.2435,
            pressure: 1070.1936,
            height: 80.8245,
            luminosity: 3276.000,
            airQuality: 154.530
            },{
            time: "2022-11-12 12:30:32",
            temperature: 18.816,
            pressure: 1049.89136,
            height: 80.46528,
            luminosity: 3395.520,
            airQuality: 159.120
            },{
            time: "2022-11-12 12:30:32",
            temperature: 18.7096,
            pressure: 927.64763,
            height: 80.16593,
            luminosity: 3383.940,
            airQuality: 123.760
            },{
            time: "2022-11-12 12:31:32",
            temperature: 17.8794,
            pressure: 1019.479,
            height: 73.99932,
            luminosity: 3414.960,
            airQuality: 119.000
            },{
            time: "2022-11-12 12:31:32",
            temperature: 18.6739,
            pressure: 988.97126,
            height: 64.53986,
            luminosity: 3286.440,
            airQuality: 94.860
            },{
            time: "2022-11-12 12:31:32",
            temperature: 18.746,
            pressure: 948.26241,
            height: 55.0804,
            luminosity: 2767.500,
            airQuality: 110.400
            },{
            time: "2022-11-12 12:31:32",
            temperature: 17.9046,
            pressure: 948.33402,
            height: 51.72768,
            luminosity: 2616.300,
            airQuality: 131.100
            },{
            time: "2022-11-12 12:31:32",
            temperature: 17.9732,
            pressure: 938.2114,
            height: 47.41704,
            luminosity: 2745.180,
            airQuality: 163.800
            },{
            time: "2022-11-12 12:31:32",
            temperature: 16.9372,
            pressure: 1019.878,
            height: 38.97537,
            luminosity: 2257.200,
            airQuality: 175.740
            },{
            time: "2022-11-12 12:32:32",
            temperature: 18.48,
            pressure: 968.95535,
            height: 34.1259,
            luminosity: 2390.850,
            airQuality: 184.320
            },{
            time: "2022-11-12 12:32:32",
            temperature: 18.921,
            pressure: 1030.23737,
            height: 30.23435,
            luminosity: 2126.250,
            airQuality: 218.400
            },{
            time: "2022-11-12 12:32:32",
            temperature: 17.8752,
            pressure: 979.31328,
            height: 24.90592,
            luminosity: 1629.360,
            airQuality: 209.760
            },{
            time: "2022-11-12 12:32:32",
            temperature: 18.3162,
            pressure: 1060.99864,
            height: 17.24256,
            luminosity: 1443.420,
            airQuality: 253.380
            },{
            time: "2022-11-12 12:32:32",
            temperature: 16.884,
            pressure: 1010.06928,
            height: 10.7766,
            luminosity: 1154.430,
            airQuality: 256.080
            },{
            time: "2022-11-12 12:32:32",
            temperature: 18.6417,
            pressure: 918.3168,
            height: 5.86726,
            luminosity: 774.720,
            airQuality: 296.100
            },{
            time: "2022-11-12 12:33:32",
            temperature: 17.388,
            pressure: 949.00269,
            height: 0,
            luminosity: 423.000,
            airQuality: 357.000
            }],
        data: "2022-11-12" 
    }
]

export default Flys
