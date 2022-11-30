const Flys: {
    id: number,
    flyData: {
        time: number,
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
            time: 0,
            temperature: 19.467,
            pressure: 938.72844,
            height: 0,
            luminosity: 405,
            airQuality: 364.14
            },{
            time : 0,
            temperature: 17.7002,
            pressure: 938.65208,
            height: 5.3883,
            luminosity: 475.71,
            airQuality: 319.6
            },{
            time : 0,
            temperature: 17.2592,
            pressure: 969.18335,
            height: 11.974,
            luminosity: 461.7,
            airQuality: 335.92
            },{
            time : 0,
            temperature: 17.5686,
            pressure: 979.31424,
            height: 16.34451,
            luminosity: 547.2,
            airQuality: 290.7
            },{
            time : 0,
            temperature: 19.1786,
            pressure: 1030.23434,
            height: 23.46904,
            luminosity: 633.6,
            airQuality: 300.56
            },{
            time : 1,
            temperature: 17.9935,
            pressure: 999.55198,
            height: 26.9415,
            luminosity: 749.7,
            airQuality: 263.84
            },{
            time : 1,
            temperature: 17.3712,
            pressure: 999.4726,
            height: 36.99966,
            luminosity: 891,
            airQuality: 244.8
            },{
            time : 1,
            temperature: 18.0418,
            pressure: 1070.78475,
            height: 39.39446,
            luminosity: 996.48,
            airQuality: 242.76
            },{
            time : 1,
            temperature: 18.8902,
            pressure: 938.13964,
            height: 46.93808,
            luminosity: 1157.76,
            airQuality: 203.32
            },{
            time : 1,
            temperature: 16.8084,
            pressure: 1060.42456,
            height: 54.96066,
            luminosity: 1283.4,
            airQuality: 187.68
            },{
            time : 1,
            temperature: 18.564,
            pressure: 1039.94406,
            height: 59.2713,
            luminosity: 1556.85,
            airQuality: 194.48
            },{
            time : 2,
            temperature: 18.6739,
            pressure: 937.917,
            height: 59.2713,
            luminosity: 1872.72,
            airQuality: 161.5
            },{
            time : 2,
            temperature: 17.157,
            pressure: 1049.97273,
            height: 67.53336,
            luminosity: 2171.52,
            airQuality: 159.12
            },{
            time : 2,
            temperature: 18.1699,
            pressure: 1070.2755,
            height: 73.16114,
            luminosity: 2195.73,
            airQuality: 143.82
            },{
            time : 2,
            temperature: 16.128,
            pressure: 927.50567,
            height: 77.95074,
            luminosity: 2601.9,
            airQuality: 160.65
            },{
            time : 2,
            temperature: 16.779,
            pressure: 1029.35059,
            height: 87.11085,
            luminosity: 0,
            airQuality: 139.23
            },{
            time : 2,
            temperature: 16.1798,
            pressure: 957.92674,
            height: 92.91824,
            luminosity: 0,
            airQuality: 151.47
            },{
            time : 3,
            temperature: 17.71,
            pressure: 1059.75064,
            height: 93.63668,
            luminosity: 0,
            airQuality: 154.53
            },{
            time : 3,
            temperature: 17.3558,
            pressure: 917.1639,
            height: 92.61889,
            luminosity: 0,
            airQuality: 160.65
            },{
            time : 3,
            temperature: 16.1798,
            pressure: 968.1944,
            height: 90.04448,
            luminosity: 0,
            airQuality: 160.65
            },{
            time : 3,
            temperature: 16.9575,
            pressure: 1019.232,
            height: 88.0089,
            luminosity: 0,
            airQuality: 159.12
            },{
            time : 3,
            temperature: 16.6656,
            pressure: 927.57392,
            height: 81.30346,
            luminosity: 0,
            airQuality: 153
            },{
            time : 3,
            temperature: 18.8895,
            pressure: 1029.58693,
            height: 80.16593,
            luminosity: 0,
            airQuality: 122.4
            },{
            time : 4,
            temperature: 18.06,
            pressure: 958.31026,
            height: 66.09648,
            luminosity: 0,
            airQuality: 114.24
            },{
            time : 4,
            temperature: 17.7674,
            pressure: 978.77568,
            height: 65.19843,
            luminosity: 0,
            airQuality: 99.96
            },{
            time : 4,
            temperature: 16.562,
            pressure: 958.45878,
            height: 55.6791,
            luminosity: 0,
            airQuality: 116.4
            },{
            time : 4,
            temperature: 18.6354,
            pressure: 999.31972,
            height: 53.883,
            luminosity: 0,
            airQuality: 138
            },{
            time : 4,
            temperature: 17.2396,
            pressure: 1029.99295,
            height: 44.06432,
            luminosity: 0,
            airQuality: 143.52
            },{
            time : 4,
            temperature: 18.2259,
            pressure: 1030.07678,
            height: 42.74718,
            luminosity: 0,
            airQuality: 174
            },{
            time : 5,
            temperature: 16.8168,
            pressure: 1050.55159,
            height: 37.35888,
            luminosity: 0,
            airQuality: 186.24
            },{
            time : 5,
            temperature: 19.1065,
            pressure: 989.43589,
            height: 28.1389,
            luminosity: 0,
            airQuality: 203.7
            },{
            time : 5,
            temperature: 18.2476,
            pressure: 1040.52036,
            height: 22.27164,
            luminosity: 0,
            airQuality: 205.2
            },{
            time : 5,
            temperature: 17.3817,
            pressure: 1071.20055,
            height: 16.52412,
            luminosity: 0,
            airQuality: 246
            },{
            time : 5,
            temperature: 17.2592,
            pressure: 1010.06928,
            height: 11.61478,
            luminosity: 0,
            airQuality: 274.56
            },{
            time : 5,
            temperature: 17.3236,
            pressure: 1020.352,
            height: 5.68765,
            luminosity: 0,
            airQuality: 293.28
            },{
            time : 6,
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
            time: 1,
            temperature: 18.6543,
            pressure: 967.911,
            height: 0.000,
            luminosity: 442.260,
            airQuality: 389.6298
            },{
            time: 1,
            temperature: 21.550935,
            pressure: 974.872,
            height: 6.226,
            luminosity: 480.043,
            airQuality: 331.058
            },
            {
            time: 1,
            temperature: 19.120192,
            pressure: 1069.774,
            height: 11.368,
            luminosity: 541.728,
            airQuality: 322.1925
            },
            {
            time: 1,
            temperature: 20.779542,
            pressure: 1009.306,
            height: 16.871,
            luminosity: 615.859,
            airQuality: 309.672
            },
            {
            time: 1,
            temperature: 18.053952,
            pressure: 1082.154,
            height: 25.893,
            luminosity: 619.938,
            airQuality: 333.795
            },
            {
            time: 2,
            temperature: 18.6984,
            pressure: 1050.754,
            height: 30.462,
            luminosity: 763.088,
            airQuality: 302.4096
            },
            {
            time: 2,
            temperature: 18.4338,
            pressure: 1002.328,
            height: 39.600,
            luminosity: 951.766,
            airQuality: 245.973
            },
            {
            time: 2,
            temperature: 19.709746,
            pressure: 955.854,
            height: 42.093,
            luminosity: 1133.288,
            airQuality: 267.2026
            },
            {
            time: 2,
            temperature: 18.11992,
            pressure: 999.017,
            height: 54.314,
            luminosity: 1241.698,
            airQuality: 233.9064
            },
            {
            time: 2,
            temperature: 17.789499,
            pressure: 975.591,
            height: 58.194,
            luminosity: 1365.984,
            airQuality: 214.2816
            },
            {
            time: 2,
            temperature: 18.54944,
            pressure: 1121.508,
            height: 54.422,
            luminosity: 1802.736,
            airQuality: 206.0927
            },
            {
            time: 3,
            temperature: 17.78553,
            pressure: 1006.222,
            height: 74.655,
            luminosity: 2003.810,
            airQuality: 178.568
            },
            {
            time: 3,
            temperature: 19.34226,
            pressure: 1039.881,
            height: 76.104,
            luminosity: 2102.616,
            airQuality: 150.6132
            },
            {
            time: 3,
            temperature: 20.206368,
            pressure: 983.226,
            height: 76.959,
            luminosity: 2302.447,
            airQuality: 148.9761
            },
            {
            time: 3,
            temperature: 20.10624,
            pressure: 1109.949,
            height: 87.892,
            luminosity: 2691.374,
            airQuality: 165.24
            },
            {
            time: 3,
            temperature: 20.2419,
            pressure: 1027.312,
            height: 99.001,
            luminosity: 3070.980,
            airQuality: 163.863
            },
            {
            time: 3,
            temperature: 18.862802,
            pressure: 1056.573,
            height: 92.822,
            luminosity: 3200.869,
            airQuality: 142.0146
            },
            {
            time: 4,
            temperature: 17.341632,
            pressure: 1048.542,
            height: 102.675,
            luminosity: 3880.216,
            airQuality: 163.8936
            },
            {
            time: 4,
            temperature: 17.85168,
            pressure: 1008.269,
            height: 99.255,
            luminosity: 3961.535,
            airQuality: 158.7987
            },
            {
            time: 4,
            temperature: 17.692878,
            pressure: 1070.517,
            height: 94.834,
            luminosity: 3890.384,
            airQuality: 149.8941
            },
            {
            time: 4,
            temperature: 17.127075,
            pressure: 957.365,
            height: 85.925,
            luminosity: 3745.440,
            airQuality: 148.1346
            },
            {
            time: 4,
            temperature: 18.38592,
            pressure: 1055.498,
            height: 88.788,
            luminosity: 3676.712,
            airQuality: 170.289
            },
            {
            time: 4,
            temperature: 18.069156,
            pressure: 1000.025,
            height: 88.183,
            luminosity: 3557.281,
            airQuality: 135.3336
            },
            {
            time: 5,
            temperature: 20.66064,
            pressure: 1016.930,
            height: 76.959,
            luminosity: 3331.595,
            airQuality: 109.3729
            },
            {
            time: 5,
            temperature: 17.29602,
            pressure: 1089.092,
            height: 69.058,
            luminosity: 3482.015,
            airQuality: 99.144
            },
            {
            time: 5,
            temperature: 18.74964,
            pressure: 1033.606,
            height: 59.487,
            luminosity: 3092.835,
            airQuality: 132.108
            },
            {
            time: 5,
            temperature: 17.161011,
            pressure: 977.702,
            height: 56.970,
            luminosity: 2978.512,
            airQuality: 148.9158
            },
            {
            time: 5,
            temperature: 19.080936,
            pressure: 955.854,
            height: 52.805,
            luminosity: 2635.373,
            airQuality: 164.736
            },
            {
            time: 5,
            temperature: 19.523805,
            pressure: 1124.314,
            height: 44.021,
            luminosity: 2419.217,
            airQuality: 193.6272
            },
            {
            time: 6,
            temperature: 16.96464,
            pressure: 1092.370,
            height: 36.806,
            luminosity: 2531.569,
            airQuality: 174.528
            },
            {
            time: 6,
            temperature: 18.48322,
            pressure: 1144.482,
            height: 29.291,
            luminosity: 1996.245,
            airQuality: 238.056
            },
            {
            time: 6,
            temperature: 19.3648,
            pressure: 1092.750,
            height: 26.122,
            luminosity: 1732.378,
            airQuality: 230.2344
            },
            {
            time: 6,
            temperature: 20.605725,
            pressure: 1018.559,
            height: 19.610,
            luminosity: 1442.545,
            airQuality: 236.898
            },
            {
            time: 6,
            temperature: 18.35666,
            pressure: 1134.338,
            height: 11.897,
            luminosity: 1059.561,
            airQuality: 279.6552
            },
            {
            time: 6,
            temperature: 19.014534,
            pressure: 1018.719,
            height: 6.410,
            luminosity: 800.463,
            airQuality: 287.217
            },
            {
            time: 7,
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
            time: 1,
            temperature: 17.955,
            pressure: 979.54272,
            height: 0,
            luminosity: 427.500,
            airQuality: 353.430
            },{
            time: 1,
            temperature: 18.0768,
            pressure: 979.46304,
            height: 6.10674,
            luminosity: 475.710,
            airQuality: 316.200
            },{
            time: 1,
            temperature: 18.1972,
            pressure: 928.37563,
            height: 12.45296,
            luminosity: 471.960,
            airQuality: 306.850
            },{
            time: 1,
            temperature: 17.1948,
            pressure: 958.91186,
            height: 17.78139,
            luminosity: 599.040,
            airQuality: 306.000
            },{
            time: 1,
            temperature: 17.3166,
            pressure: 969.0323,
            height: 24.66644,
            luminosity: 653.400,
            airQuality: 286.110
            },{
            time: 2,
            temperature: 18.55,
            pressure: 928.15541,
            height: 28.1389,
            luminosity: 742.050,
            airQuality: 252.960
            },{
            time: 2,
            temperature: 18.6648,
            pressure: 979.0752,
            height: 35.56278,
            luminosity: 864.270,
            airQuality: 249.900
            },{
            time: 2,
            temperature: 18.7782,
            pressure: 1029.99295,
            height: 38.13719,
            luminosity: 1048.380,
            airQuality: 235.620
            },{
            time: 2,
            temperature: 16.6894,
            pressure: 938.13964,
            height: 49.81184,
            luminosity: 1181.880,
            airQuality: 207.740
            },{
            time: 2,
            temperature: 16.9911,
            pressure: 999.24622,
            height: 48.4947,
            luminosity: 1325.250,
            airQuality: 189.720
            },{
            time: 2,
            temperature: 18.018,
            pressure: 999.16194,
            height: 56.8765,
            luminosity: 1621.050,
            airQuality: 185.130
            },{
            time: 3,
            temperature: 17.2235,
            pressure: 917.5275,
            height: 66.51557,
            luminosity: 1707.480,
            airQuality: 158.100
            },{
            time: 3,
            temperature: 16.6152,
            pressure: 1019.391,
            height: 66.09648,
            luminosity: 1900.080,
            airQuality: 143.820
            },{
            time: 3,
            temperature: 16.9106,
            pressure: 947.9583,
            height: 79.38762,
            luminosity: 2219.340,
            airQuality: 142.290
            },{
            time: 3,
            temperature: 18.0992,
            pressure: 1060.00648,
            height: 83.818,
            luminosity: 2469.150,
            airQuality: 148.410
            },{
            time: 3,
            temperature: 18.0285,
            pressure: 937.62628,
            height: 80.8245,
            luminosity: 2970.000,
            airQuality: 146.880
            },{
            time: 3,
            temperature: 17.6022,
            pressure: 1049.64313,
            height: 89.08656,
            luminosity: 3008.460,
            airQuality: 154.530
            },{
            time: 4,
            temperature: 18.0642,
            pressure: 927.28181,
            height: 95.67226,
            luminosity: 3479.850,
            airQuality: 137.700
            },{
            time: 4,
            temperature: 16.6474,
            pressure: 1039.45242,
            height: 104.83237,
            luminosity: 3589.740,
            airQuality: 154.530
            },{
            time: 4,
            temperature: 17.0688,
            pressure: 958.00288,
            height: 91.0024,
            luminosity: 3678.420,
            airQuality: 157.590
            },{
            time: 4,
            temperature: 0,
            pressure: 978.46272,
            height: 93.3972,
            luminosity: 3708.000,
            airQuality: 137.700
            },{
            time: 4,
            temperature: 0,
            pressure: 958.15328,
            height: 80.46528,
            luminosity: 3430.890,
            airQuality: 148.410
            },{
            time: 4,
            temperature: 0,
            pressure: 1039.78086,
            height: 77.05269,
            luminosity: 3556.590,
            airQuality: 131.920
            },{
            time: 5,
            temperature: 0,
            pressure: 1009.28421,
            height: 67.53336,
            luminosity: 3414.960,
            airQuality: 123.760
            },{
            time: 5,
            temperature: 0,
            pressure: 1070.5359,
            height: 67.83271,
            luminosity: 2964.240,
            airQuality: 102.000
            },{
            time: 5,
            temperature: 0,
            pressure: 917.6733,
            height: 61.6661,
            luminosity: 2921.250,
            airQuality: 126.000
            },{
            time: 5,
            temperature: 0,
            pressure: 978.92544,
            height: 56.57715,
            luminosity: 2732.580,
            airQuality: 140.760
            },{
            time: 5,
            temperature: 0,
            pressure: 948.40935,
            height: 45.98016,
            luminosity: 2745.180,
            airQuality: 143.520
            },{
            time: 5,
            temperature: 0,
            pressure: 989.28166,
            height: 37.7181,
            luminosity: 2508.000,
            airQuality: 163.560
            },{
            time: 6,
            temperature: 0,
            pressure: 1019.953,
            height: 36.64044,
            luminosity: 2117.610,
            airQuality: 195.840
            },{
            time: 6,
            temperature: 0,
            pressure: 1009.83663,
            height: 28.1389,
            luminosity: 1863.000,
            airQuality: 195.300
            },{
            time: 6,
            temperature: 0,
            pressure: 918.1062,
            height: 24.90592,
            luminosity: 1699.440,
            airQuality: 223.440
            },{
            time: 6,
            temperature: 0,
            pressure: 1040.59482,
            height: 16.70373,
            luminosity: 1501.740,
            airQuality: 250.920
            },{
            time: 6,
            temperature: 0,
            pressure: 959.05568,
            height: 11.73452,
            luminosity: 1074.420,
            airQuality: 240.240
            },{
            time: 6,
            temperature: 0,
            pressure: 948.92736,
            height: 5.44817,
            luminosity: 831.210,
            airQuality: 279.180
            },{
            time: 7,
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
            time: 1,
            temperature: 17.37099,
            pressure: 1040.866176,
            height: 0,
            luminosity: 429.975,
            airQuality: 371.3871
            },{
            time: 1,
            temperature: 18.408208,
            pressure: 1050.88222,
            height: 6.4755392,
            luminosity: 475.4274,
            airQuality: 332.384
            },{
            time: 1,
            temperature: 18.91008,
            pressure: 965.5106552,
            height: 12.698427,
            luminosity: 528.39,
            airQuality: 312.987
            },{
            time: 1,
            temperature: 17.688216,
            pressure: 946.8744558,
            height: 18.1190568,
            luminosity: 558.4896,
            airQuality: 315.0576
            },{
            time: 1,
            temperature: 19.562172,
            pressure: 1019.115969,
            height: 22.2524816,
            luminosity: 673.2,
            airQuality: 297.7278
            },{
            time: 2,
            temperature: 17.96011,
            pressure: 1060.239065,
            height: 28.701678,
            luminosity: 811.2825,
            airQuality: 274.5568
            },{
            time: 2,
            temperature: 19.038096,
            pressure: 1071.271448,
            height: 36.64044,
            luminosity: 908.1072,
            airQuality: 281.1375
            },{
            time: 2,
            temperature: 17.590755,
            pressure: 936.17181,
            height: 38.8999338,
            luminosity: 1089.9,
            airQuality: 242.403
            },{
            time: 2,
            temperature: 18.882864,
            pressure: 1124.237993,
            height: 45.3862496,
            luminosity: 1267.0236,
            airQuality: 205.3532
            },{
            time: 2,
            temperature: 16.958214,
            pressure: 996.7990864,
            height: 53.8776117,
            luminosity: 1436.292,
            airQuality: 195.5952
            },{
            time: 2,
            temperature: 16.7076,
            pressure: 1060.742941,
            height: 54.42183,
            luminosity: 1685.25,
            airQuality: 192.6474
            },{
            time: 3,
            temperature: 17.346784,
            pressure: 1060.254,
            height: 65.1589158,
            luminosity: 1815.4368,
            airQuality: 163.115
            },{
            time: 3,
            temperature: 17.868564,
            pressure: 1027.546128,
            height: 77.699286,
            luminosity: 2104.704,
            airQuality: 155.9376
            },{
            time: 3,
            temperature: 18.700605,
            pressure: 1123.789275,
            height: 72.9509963,
            luminosity: 2578.212,
            airQuality: 146.8035
            },{
            time: 3,
            temperature: 19.7568,
            pressure: 1029.42937,
            height: 87.1958654,
            luminosity: 2705.976,
            airQuality: 159.1659
            },{
            time: 3,
            temperature: 17.055675,
            pressure: 1039.236432,
            height: 95.2382025,
            luminosity: 2819.718,
            airQuality: 163.863
            },{
            time: 3,
            temperature: 17.36217,
            pressure: 953.850456,
            height: 105.61068,
            luminosity: 3540.726,
            airQuality: 159.1812
            },{
            time: 4,
            temperature: 18.602584,
            pressure: 973.6459005,
            height: 96.6289826,
            luminosity: 3546.5166,
            airQuality: 159.1812
            },{
            time: 4,
            temperature: 17.350487,
            pressure: 1018.663372,
            height: 104.8527258,
            luminosity: 3885.7104,
            airQuality: 160.7112
            },{
            time: 4,
            temperature: 19.04238,
            pressure: 1070.1096,
            height: 92.6500224,
            luminosity: 3451.1592,
            airQuality: 157.59
            },{
            time: 4,
            temperature: 16.75044,
            pressure: 1007.816602,
            height: 94.331172,
            luminosity: 3780,
            airQuality: 160.7112
            },{
            time: 4,
            temperature: 17.556224,
            pressure: 947.1447104,
            height: 88.9141344,
            luminosity: 3604.9104,
            airQuality: 146.5587
            },{
            time: 4,
            temperature: 19.083792,
            pressure: 1081.066277,
            height: 83.3725672,
            luminosity: 3411.564,
            airQuality: 134.6128
            },{
            time: 5,
            temperature: 16.947504,
            pressure: 987.875151,
            height: 76.190562,
            luminosity: 3141.7632,
            airQuality: 123.76
            },{
            time: 5,
            temperature: 19.607595,
            pressure: 1009.158508,
            height: 62.3270648,
            luminosity: 3116.3184,
            airQuality: 109.2624
            },{
            time: 5,
            temperature: 18.18362,
            pressure: 1124.149793,
            height: 63.516083,
            luminosity: 3357.9,
            airQuality: 128.544
            },{
            time: 5,
            temperature: 16.93629,
            pressure: 1050.509363,
            height: 52.212627,
            luminosity: 2668.626,
            airQuality: 140.7186
            },{
            time: 5,
            temperature: 19.06443,
            pressure: 1029.788991,
            height: 47.3595648,
            luminosity: 2525.5656,
            airQuality: 143.3796
            },{
            time: 5,
            temperature: 18.763472,
            pressure: 997.950623,
            height: 42.7136528,
            luminosity: 2583.7416,
            airQuality: 177.4974
            },{
            time: 6,
            temperature: 19.603584,
            pressure: 1113.788676,
            height: 38.849643,
            luminosity: 2138.7861,
            airQuality: 184.0896
            },{
            time: 6,
            temperature: 18.54258,
            pressure: 927.213633,
            height: 31.449711,
            luminosity: 1920.915,
            airQuality: 214.221
            },{
            time: 6,
            temperature: 19.35549,
            pressure: 1071.735971,
            height: 25.6530976,
            luminosity: 1767.4176,
            airQuality: 227.43
            },{
            time: 6,
            temperature: 19.635714,
            pressure: 1050.79673,
            height: 18.6866244,
            luminosity: 1427.6736,
            airQuality: 253.4292
            },{
            time: 6,
            temperature: 17.970204,
            pressure: 1061.388962,
            height: 11.1142668,
            luminosity: 1083.1068,
            airQuality: 247.9752
            },{
            time: 6,
            temperature: 19.974864,
            pressure: 1009.536269,
            height: 6.412077,
            luminosity: 779.562,
            airQuality: 284.4816
            },{
            time: 7,
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
        flyData: [
            {
            time: 1,
            temperature: 1669.248,
            pressure: 83567.2383,
            height: 0,
            luminosity: 40500,
            airQuality: 28274.4
            },{
            time: 1,
            temperature: 1677.753,
            pressure: 91712.42986,
            height: 541.70376,
            luminosity: 36549.6,
            airQuality: 28124.8
            },{
            time: 1,
            temperature: 1468.1576,
            pressure: 95490.0648,
            height: 996.2368,
            luminosity: 39059.82,
            airQuality: 29738.61
            },{
            time: 1,
            temperature: 1581.9216,
            pressure: 89637.85653,
            height: 1687.07673,
            luminosity: 41932.8,
            airQuality: 26453.7
            },{
            time: 1,
            temperature: 1662.766,
            pressure: 89630.38758,
            height: 1911.0504,
            luminosity: 49896,
            airQuality: 21588.3
            },{
            time: 2,
            temperature: 1485.484,
            pressure: 84421.34427,
            height: 2610.9307,
            luminosity: 67320,
            airQuality: 22888.8
            },{
            time: 2,
            temperature: 1790.712,
            pressure: 87382.4616,
            height: 3407.56092,
            luminosity: 73641.15,
            airQuality: 21930
            },{
            time: 2,
            temperature: 1399.16,
            pressure: 91873.33155,
            height: 3771.81,
            luminosity: 85946.4,
            airQuality: 23043.16
            },{
            time: 2,
            temperature: 1571.3712,
            pressure: 80404.68545,
            height: 4184.19456,
            luminosity: 96576.48,
            airQuality: 20535.32
            },{
            time: 2,
            temperature: 1479.87,
            pressure: 88188.57711,
            height: 4987.41048,
            luminosity: 101556,
            airQuality: 20349
            },{
            time: 2,
            temperature: 1547,
            pressure: 87926.25072,
            height: 5790.6264,
            luminosity: 146889.6,
            airQuality: 17564.91
            },{
            time: 3,
            temperature: 1484.4844,
            pressure: 87348.618,
            height: 5933.05713,
            luminosity: 138305.88,
            airQuality: 14937.9
            },{
            time: 3,
            temperature: 1511.9832,
            pressure: 87667.626,
            height: 5862.4704,
            luminosity: 199508.4,
            airQuality: 11695.32
            },{
            time: 3,
            temperature: 1388.6481,
            pressure: 86692.3155,
            height: 7393.945,
            luminosity: 200685,
            airQuality: 12852
            },{
            time: 3,
            temperature: 1650.7904,
            pressure: 76646.6224,
            height: 6712.14544,
            luminosity: 223763.4,
            airQuality: 12064.05
            },{
            time: 3,
            temperature: 1599.5385,
            pressure: 91724.31,
            height: 7175.4195,
            luminosity: 250192.8,
            airQuality: 13206.96
            },{
            time: 3,
            temperature: 1536.192,
            pressure: 90085.8764,
            height: 8247.6912,
            luminosity: 298531.8,
            airQuality: 14619.15
            },{
            time: 4,
            temperature: 1747.977,
            pressure: 84015.80795,
            height: 8702.1045,
            luminosity: 320695.65,
            airQuality: 13935.24
            },{
            time: 4,
            temperature: 1609.839,
            pressure: 80353.74835,
            height: 9644.57804,
            luminosity: 306666.36,
            airQuality: 12295.08
            },{
            time: 4,
            temperature: 1570.3296,
            pressure: 80227.64544,
            height: 9354.0888,
            luminosity: 308113.2,
            airQuality: 11973.78
            },{
            time: 4,
            temperature: 1364.454,
            pressure: 88826.0688,
            height: 7516.6785,
            luminosity: 275184,
            airQuality: 12671.46
            },{
            time: 4,
            temperature: 1768.704,
            pressure: 95540.11376,
            height: 7080.94464,
            luminosity: 298805.76,
            airQuality: 13366.08
            },{
            time: 4,
            temperature: 1777.412,
            pressure: 83488.2867,
            height: 6894.26998,
            luminosity: 297786.72,
            airQuality: 11262.16
            },{
            time: 5,
            temperature: 1448.2314,
            pressure: 85636.236,
            height: 7029.9354,
            luminosity: 310761.36,
            airQuality: 9520
            },{
            time: 5,
            temperature: 1531.2598,
            pressure: 91974.32718,
            height: 5808.5874,
            luminosity: 276060.96,
            airQuality: 8252.82
            },{
            time: 5,
            temperature: 1687.14,
            pressure: 90084.92895,
            height: 5122.4772,
            luminosity: 262912.5,
            airQuality: 10156.8
            },{
            time: 5,
            temperature: 1450.2726,
            pressure: 77763.38964,
            height: 4293.39744,
            luminosity: 217152.9,
            airQuality: 11799
            },{
            time: 5,
            temperature: 1689.4808,
            pressure: 76933.3348,
            height: 4504.6188,
            luminosity: 260792.1,
            airQuality: 14578.2
            },{
            time: 5,
            temperature: 1524.348,
            pressure: 90769.142,
            height: 3351.88182,
            luminosity: 205405.2,
            airQuality: 14586.42
            },{
            time: 6,
            temperature: 1737.12,
            pressure: 77516.428,
            height: 2900.7015,
            luminosity: 224739.9,
            airQuality: 17510.4
            },{
            time: 6,
            temperature: 1740.732,
            pressure: 91691.12593,
            height: 2479.2167,
            luminosity: 182857.5,
            airQuality: 18564
            },{
            time: 6,
            temperature: 1608.768,
            pressure: 82262.31552,
            height: 2291.34464,
            luminosity: 133607.52,
            airQuality: 19507.68
            },{
            time: 6,
            temperature: 1483.6122,
            pressure: 89123.88576,
            height: 1638.0432,
            luminosity: 135681.48,
            airQuality: 22297.44
            },{
            time: 6,
            temperature: 1570.212,
            pressure: 80805.5424,
            height: 1013.0004,
            luminosity: 98126.55,
            airQuality: 21766.8
            },{
            time: 6,
            temperature: 1603.1862,
            pressure: 76220.2944,
            height: 504.58436,
            luminosity: 73598.4,
            airQuality: 27833.4
            },{
            time: 7,
            temperature: 1512.756,
            pressure: 75920.2152,
            height: 0,
            luminosity: 35955,
            airQuality: 32844
            }
            ],
        data: "2022-11-12" 
    }
]

export default Flys
