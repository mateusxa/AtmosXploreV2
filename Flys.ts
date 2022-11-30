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
        time: 0,
        temperature: 17.766,
        pressure: 948.932,
        height: 0,
        luminosity: 409.5,
        airQuality: 364.14
        },{
        time: 0,
        temperature: 19.7715,
        pressure: 928.449,
        height: 5.987,
        luminosity: 461.58,
        airQuality: 309.4
        },{
        time: 0,
        temperature: 18.3848,
        pressure: 999.789,
        height: 11.25556,
        luminosity: 492.48,
        airQuality: 306.85
        },{
        time: 0,
        temperature: 19.0638,
        pressure: 989.515,
        height: 16.70373,
        luminosity: 570.24,
        airQuality: 281.52
        },{
        time: 0,
        temperature: 17.8752,
        pressure: 1050.635,
        height: 24.42696,
        luminosity: 613.8,
        airQuality: 303.45
        },{
        time: 1,
        temperature: 17.808,
        pressure: 1030.151,
        height: 28.7376,
        luminosity: 726.75,
        airQuality: 277.44
        },{
        time: 1,
        temperature: 17.556,
        pressure: 928.082,
        height: 37.35888,
        luminosity: 873.18,
        airQuality: 232.05
        },{
        time: 1,
        temperature: 18.5941,
        pressure: 928.013,
        height: 38.97537,
        luminosity: 1069.14,
        airQuality: 245.14
        },{
        time: 1,
        temperature: 17.423,
        pressure: 989.125,
        height: 50.2908,
        luminosity: 1193.94,
        airQuality: 216.58
        },{
        time: 1,
        temperature: 16.6257,
        pressure: 938.068,
        height: 53.883,
        luminosity: 1339.2,
        airQuality: 206.04
        },{
        time: 1,
        temperature: 17.836,
        pressure: 1019.553,
        height: 53.883,
        luminosity: 1669.2,
        airQuality: 192.61
        },{
        time: 2,
        temperature: 16.317,
        pressure: 958.307,
        height: 68.49128,
        luminosity: 1872.72,
        airQuality: 176.8
        },{
        time: 2,
        temperature: 18.963,
        pressure: 1029.585,
        height: 71.12556,
        luminosity: 1983.6,
        airQuality: 140.76
        },{
        time: 2,
        temperature: 18.7096,
        pressure: 927.572,
        height: 74.71776,
        luminosity: 2172.12,
        airQuality: 139.23
        },{
        time: 2,
        temperature: 18.2784,
        pressure: 1009.045,
        height: 82.14164,
        luminosity: 2469.15,
        airQuality: 153
        },{
        time: 2,
        temperature: 18.7425,
        pressure: 978.393,
        height: 93.3972,
        luminosity: 2791.8,
        airQuality: 160.65
        },{
        time: 2,
        temperature: 18.3134,
        pressure: 978.308,
        height: 91.0024,
        luminosity: 3107.64,
        airQuality: 139.23
        },{
        time: 3,
        temperature: 17.0016,
        pressure: 998.611,
        height: 98.72563,
        luminosity: 3626.37,
        airQuality: 159.12
        },{
        time: 3,
        temperature: 17.0016,
        pressure: 988.499,
        height: 93.63668,
        luminosity: 3772.89,
        airQuality: 148.41
        },{
        time: 3,
        temperature: 16.5354,
        pressure: 1029.344,
        height: 86.2128,
        luminosity: 3569.16,
        airQuality: 148.41
        },{
        time: 3,
        temperature: 16.9575,
        pressure: 947.886,
        height: 82.6206,
        luminosity: 3672,
        airQuality: 143.82
        },{
        time: 3,
        temperature: 17.024,
        pressure: 968.346,
        height: 82.97982,
        luminosity: 3501.63,
        airQuality: 160.65
        },{
        time: 3,
        temperature: 16.7307,
        pressure: 917.454,
        height: 80.16593,
        luminosity: 3487.53,
        airQuality: 126.48
        },{
        time: 4,
        temperature: 18.7824,
        pressure: 968.505,
        height: 73.99932,
        luminosity: 3113.64,
        airQuality: 108.29
        },{
        time: 4,
        temperature: 16.317,
        pressure: 999.167,
        height: 64.53986,
        luminosity: 3254.22,
        airQuality: 91.8
        },{
        time: 4,
        temperature: 18.382,
        pressure: 948.262,
        height: 55.0804,
        luminosity: 2890.5,
        airQuality: 121.2
        },{
        time: 4,
        temperature: 16.9911,
        pressure: 958.531,
        height: 52.26651,
        luminosity: 2732.58,
        airQuality: 136.62
        },{
        time: 4,
        temperature: 18.7068,
        pressure: 928.013,
        height: 50.2908,
        luminosity: 2609.28,
        airQuality: 149.76
        },{
        time: 4,
        temperature: 19.3305,
        pressure: 1060.673,
        height: 43.58536,
        luminosity: 2282.28,
        airQuality: 180.96
        },{
        time: 5,
        temperature: 16.632,
        pressure: 1040.352,
        height: 33.76668,
        luminosity: 2322.54,
        airQuality: 172.8
        },{
        time: 5,
        temperature: 17.437,
        pressure: 1040.438,
        height: 28.43825,
        luminosity: 1883.25,
        airQuality: 218.4
        },{
        time: 5,
        temperature: 18.62,
        pressure: 1050.722,
        height: 24.18748,
        luminosity: 1681.92,
        airQuality: 225.72
        },{
        time: 5,
        temperature: 19.6245,
        pressure: 979.383,
        height: 18.49983,
        luminosity: 1414.26,
        airQuality: 221.4
        },{
        time: 5,
        temperature: 17.822,
        pressure: 1040.677,
        height: 11.01608,
        luminosity: 1028.7,
        airQuality: 261.36
        },{
        time: 5,
        temperature: 18.6417,
        pressure: 979.538,
        height: 6.04687,
        luminosity: 734.37,
        airQuality: 273.54
        },{
        time: 6,
        temperature: 17.388,
        pressure: 979.616,
        height: 0,
        luminosity: 405,
        airQuality: 349.86
        }
        ],
        data: "2022-10-05" 
    },
    {
        id: 3,
        flyData: [{
            time: 0,
            temperature: 17.955,
            pressure: 979.54272,
            height: 0,
            luminosity: 427.500,
            airQuality: 353.430
            },{
            time: 0,
            temperature: 18.0768,
            pressure: 979.46304,
            height: 6.10674,
            luminosity: 475.710,
            airQuality: 316.200
            },{
            time: 0,
            temperature: 18.1972,
            pressure: 928.37563,
            height: 12.45296,
            luminosity: 471.960,
            airQuality: 306.850
            },{
            time: 0,
            temperature: 17.1948,
            pressure: 958.91186,
            height: 17.78139,
            luminosity: 599.040,
            airQuality: 306.000
            },{
            time: 0,
            temperature: 17.3166,
            pressure: 969.0323,
            height: 24.66644,
            luminosity: 653.400,
            airQuality: 286.110
            },{
            time: 1,
            temperature: 18.55,
            pressure: 928.15541,
            height: 28.1389,
            luminosity: 742.050,
            airQuality: 252.960
            },{
            time: 1,
            temperature: 18.6648,
            pressure: 979.0752,
            height: 35.56278,
            luminosity: 864.270,
            airQuality: 249.900
            },{
            time: 1,
            temperature: 18.7782,
            pressure: 1029.99295,
            height: 38.13719,
            luminosity: 1048.380,
            airQuality: 235.620
            },{
            time: 1,
            temperature: 16.6894,
            pressure: 938.13964,
            height: 49.81184,
            luminosity: 1181.880,
            airQuality: 207.740
            },{
            time: 1,
            temperature: 16.9911,
            pressure: 999.24622,
            height: 48.4947,
            luminosity: 1325.250,
            airQuality: 189.720
            },{
            time: 1,
            temperature: 18.018,
            pressure: 999.16194,
            height: 56.8765,
            luminosity: 1621.050,
            airQuality: 185.130
            },{
            time: 2,
            temperature: 17.2235,
            pressure: 917.5275,
            height: 66.51557,
            luminosity: 1707.480,
            airQuality: 158.100
            },{
            time: 2,
            temperature: 16.6152,
            pressure: 1019.391,
            height: 66.09648,
            luminosity: 1900.080,
            airQuality: 143.820
            },{
            time: 2,
            temperature: 16.9106,
            pressure: 947.9583,
            height: 79.38762,
            luminosity: 2219.340,
            airQuality: 142.290
            },{
            time: 2,
            temperature: 18.0992,
            pressure: 1060.00648,
            height: 83.818,
            luminosity: 2469.150,
            airQuality: 148.410
            },{
            time: 2,
            temperature: 18.0285,
            pressure: 937.62628,
            height: 80.8245,
            luminosity: 2970.000,
            airQuality: 146.880
            },{
            time: 2,
            temperature: 17.6022,
            pressure: 1049.64313,
            height: 89.08656,
            luminosity: 3008.460,
            airQuality: 154.530
            },{
            time: 3,
            temperature: 18.0642,
            pressure: 927.28181,
            height: 95.67226,
            luminosity: 3479.850,
            airQuality: 137.700
            },{
            time: 3,
            temperature: 16.6474,
            pressure: 1039.45242,
            height: 104.83237,
            luminosity: 3589.740,
            airQuality: 154.530
            },{
            time: 3,
            temperature: 17.0688,
            pressure: 958.00288,
            height: 91.0024,
            luminosity: 3678.420,
            airQuality: 157.590
            },{
            time: 3,
            temperature: 17.3145,
            pressure: 978.46272,
            height: 93.3972,
            luminosity: 3708.000,
            airQuality: 137.700
            },{
            time: 3,
            temperature: 18.0992,
            pressure: 958.15328,
            height: 80.46528,
            luminosity: 3430.890,
            airQuality: 148.410
            },{
            time: 3,
            temperature: 17.6302,
            pressure: 1039.78086,
            height: 77.05269,
            luminosity: 3556.590,
            airQuality: 131.920
            },{
            time: 4,
            temperature: 17.6988,
            pressure: 1009.28421,
            height: 67.53336,
            luminosity: 3414.960,
            airQuality: 123.760
            },{
            time: 4,
            temperature: 17.0422,
            pressure: 1070.5359,
            height: 67.83271,
            luminosity: 2964.240,
            airQuality: 102.000
            },{
            time: 4,
            temperature: 16.562,
            pressure: 917.6733,
            height: 61.6661,
            luminosity: 2921.250,
            airQuality: 126.000
            },{
            time: 4,
            temperature: 19.0008,
            pressure: 978.92544,
            height: 56.57715,
            luminosity: 2732.580,
            airQuality: 140.760
            },{
            time: 4,
            temperature: 19.257,
            pressure: 948.40935,
            height: 45.98016,
            luminosity: 2745.180,
            airQuality: 143.520
            },{
            time: 4,
            temperature: 17.8577,
            pressure: 989.28166,
            height: 37.7181,
            luminosity: 2508.000,
            airQuality: 163.560
            },{
            time: 5,
            temperature: 17.1864,
            pressure: 1019.953,
            height: 36.64044,
            luminosity: 2117.610,
            airQuality: 195.840
            },{
            time: 5,
            temperature: 17.6225,
            pressure: 1009.83663,
            height: 28.1389,
            luminosity: 1863.000,
            airQuality: 195.300
            },{
            time: 5,
            temperature: 17.8752,
            pressure: 918.1062,
            height: 24.90592,
            luminosity: 1699.440,
            airQuality: 223.440
            },{
            time: 5,
            temperature: 17.0079,
            pressure: 1040.59482,
            height: 16.70373,
            luminosity: 1501.740,
            airQuality: 250.920
            },{
            time: 5,
            temperature: 17.0716,
            pressure: 959.05568,
            height: 11.73452,
            luminosity: 1074.420,
            airQuality: 240.240
            },{
            time: 5,
            temperature: 19.2066,
            pressure: 948.92736,
            height: 5.44817,
            luminosity: 831.210,
            airQuality: 279.180
            },{
            time: 6,
            temperature: 19.278,
            pressure: 1040.84166,
            height: 0,
            luminosity: 459.000,
            airQuality: 339.150
            }],
        data: "2022-10-05" 
    },
    {
        id: 4,
        flyData: [{
            time: 0,
            temperature: 17.199,
            pressure: 1030.56057,
            height: 0,
            luminosity: 409.500,
            airQuality: 367.710
            },{
            time: 0,
            temperature: 17.7002,
            pressure: 1020.274,
            height: 6.22648,
            luminosity: 461.580,
            airQuality: 319.600
            },{
            time: 0,
            temperature: 18.0096,
            pressure: 928.37563,
            height: 12.5727,
            luminosity: 513.000,
            airQuality: 306.850
            },{
            time: 0,
            temperature: 17.0079,
            pressure: 928.30829,
            height: 17.42217,
            luminosity: 552.960,
            airQuality: 302.940
            },{
            time: 0,
            temperature: 18.9924,
            pressure: 989.43298,
            height: 22.03216,
            luminosity: 660.000,
            airQuality: 291.890
            },{
            time: 1,
            temperature: 17.437,
            pressure: 1009.75149,
            height: 28.1389,
            luminosity: 772.650,
            airQuality: 266.560
            },{
            time: 1,
            temperature: 18.8496,
            pressure: 1060.6648,
            height: 35.922,
            luminosity: 873.180,
            airQuality: 267.750
            },{
            time: 1,
            temperature: 16.7531,
            pressure: 917.8155,
            height: 38.13719,
            luminosity: 1038.000,
            airQuality: 230.860
            },{
            time: 1,
            temperature: 18.1566,
            pressure: 1070.70285,
            height: 44.06432,
            luminosity: 1242.180,
            airQuality: 203.320
            },{
            time: 1,
            temperature: 16.6257,
            pressure: 958.46066,
            height: 53.34417,
            luminosity: 1381.050,
            airQuality: 191.760
            },{
            time: 1,
            temperature: 16.38,
            pressure: 1039.94406,
            height: 53.883,
            luminosity: 1605.000,
            airQuality: 188.870
            },{
            time: 2,
            temperature: 16.6796,
            pressure: 1019.475,
            height: 63.88129,
            luminosity: 1762.560,
            airQuality: 161.500
            },{
            time: 2,
            temperature: 17.5182,
            pressure: 978.61536,
            height: 75.4362,
            luminosity: 2004.480,
            airQuality: 149.940
            },{
            time: 2,
            temperature: 17.8101,
            pressure: 1070.2755,
            height: 70.82621,
            luminosity: 2455.440,
            airQuality: 145.350
            },{
            time: 2,
            temperature: 18.816,
            pressure: 1019.237,
            height: 84.65618,
            luminosity: 2601.900,
            airQuality: 157.590
            },{
            time: 2,
            temperature: 16.2435,
            pressure: 1008.96741,
            height: 94.29525,
            luminosity: 2791.800,
            airQuality: 156.060
            },{
            time: 2,
            temperature: 16.5354,
            pressure: 917.1639,
            height: 100.5816,
            luminosity: 3471.300,
            airQuality: 156.060
            },{
            time: 3,
            temperature: 17.8871,
            pressure: 927.28181,
            height: 95.67226,
            luminosity: 3443.220,
            airQuality: 156.060
            },{
            time: 3,
            temperature: 17.1787,
            pressure: 998.68958,
            height: 103.81458,
            luminosity: 3809.520,
            airQuality: 159.120
            },{
            time: 3,
            temperature: 18.669,
            pressure: 1019.152,
            height: 89.08656,
            luminosity: 3350.640,
            airQuality: 153.000
            },{
            time: 3,
            temperature: 16.422,
            pressure: 978.46272,
            height: 93.3972,
            luminosity: 3600.000,
            airQuality: 159.120
            },{
            time: 3,
            temperature: 17.3824,
            pressure: 937.76704,
            height: 87.17072,
            luminosity: 3466.260,
            airQuality: 142.290
            },{
            time: 3,
            temperature: 18.7096,
            pressure: 1070.36265,
            height: 80.16593,
            luminosity: 3280.350,
            airQuality: 133.280
            },{
            time: 4,
            temperature: 16.6152,
            pressure: 968.50505,
            height: 75.4362,
            luminosity: 3080.160,
            airQuality: 119.000
            },{
            time: 4,
            temperature: 19.0365,
            pressure: 999.16684,
            height: 59.92987,
            luminosity: 2996.460,
            airQuality: 106.080
            },{
            time: 4,
            temperature: 17.654,
            pressure: 1070.61885,
            height: 61.6661,
            luminosity: 3198.000,
            airQuality: 123.600
            },{
            time: 4,
            temperature: 16.443,
            pressure: 1029.91114,
            height: 51.18885,
            luminosity: 2616.300,
            airQuality: 136.620
            },{
            time: 4,
            temperature: 18.1566,
            pressure: 1009.59705,
            height: 45.98016,
            luminosity: 2500.560,
            airQuality: 141.960
            },{
            time: 4,
            temperature: 18.0418,
            pressure: 968.8841,
            height: 41.07082,
            luminosity: 2533.080,
            airQuality: 175.740
            },{
            time: 5,
            temperature: 18.8496,
            pressure: 1070.95065,
            height: 36.99966,
            luminosity: 2117.610,
            airQuality: 180.480
            },{
            time: 5,
            temperature: 18.179,
            pressure: 918.0333,
            height: 30.5337,
            luminosity: 1883.250,
            airQuality: 212.100
            },{
            time: 5,
            temperature: 18.4338,
            pressure: 1050.72154,
            height: 24.90592,
            luminosity: 1699.440,
            airQuality: 216.600
            },{
            time: 5,
            temperature: 19.0638,
            pressure: 1020.191,
            height: 18.32022,
            luminosity: 1399.680,
            airQuality: 248.460
            },{
            time: 5,
            temperature: 17.4468,
            pressure: 1050.88016,
            height: 10.89634,
            luminosity: 1051.560,
            airQuality: 245.520
            },{
            time: 5,
            temperature: 19.5832,
            pressure: 989.74144,
            height: 6.10674,
            luminosity: 742.440,
            airQuality: 273.540
            },{
            time: 6,
            temperature: 19.845,
            pressure: 1051.04599,
            height: 0,
            luminosity: 427.500,
            airQuality: 332.010
            }],
        data: "2022-10-05" 
    },
    {
        id: 5,
        flyData: [{
            time: 0,
            temperature: 18.144,
            pressure: 928.52487,
            height: 0,
            luminosity: 450.000,
            airQuality: 321.300
            },{
            time: 0,
            temperature: 18.6417,
            pressure: 1030.47674,
            height: 6.22648,
            luminosity: 456.870,
            airQuality: 319.600
            },{
            time: 0,
            temperature: 17.0716,
            pressure: 1061.00072,
            height: 12.45296,
            luminosity: 482.220,
            airQuality: 319.770
            },{
            time: 0,
            temperature: 17.1948,
            pressure: 1030.32019,
            height: 18.14061,
            luminosity: 524.160,
            airQuality: 278.460
            },{
            time: 0,
            temperature: 17.689,
            pressure: 1030.23434,
            height: 22.7506,
            luminosity: 594.000,
            airQuality: 260.100
            },{
            time: 1,
            temperature: 16.8805,
            pressure: 948.55443,
            height: 29.3363,
            luminosity: 765.000,
            airQuality: 269.280
            },{
            time: 1,
            temperature: 18.8496,
            pressure: 1040.2674,
            height: 36.64044,
            luminosity: 846.450,
            airQuality: 255.000
            },{
            time: 1,
            temperature: 17.4895,
            pressure: 1009.59705,
            height: 41.909,
            luminosity: 934.200,
            airQuality: 245.140
            },{
            time: 1,
            temperature: 18.7068,
            pressure: 968.73115,
            height: 45.98016,
            luminosity: 1097.460,
            airQuality: 223.210
            },{
            time: 1,
            temperature: 18.27,
            pressure: 948.26427,
            height: 56.03832,
            luminosity: 1269.450,
            airQuality: 214.200
            },{
            time: 1,
            temperature: 18.2,
            pressure: 999.16194,
            height: 62.2648,
            luminosity: 1669.200,
            airQuality: 188.870
            },{
            time: 2,
            temperature: 16.6796,
            pressure: 1039.8645,
            height: 65.19843,
            luminosity: 1707.480,
            airQuality: 171.700
            },{
            time: 2,
            temperature: 16.4346,
            pressure: 1019.391,
            height: 73.28088,
            luminosity: 2192.400,
            airQuality: 139.230
            },{
            time: 2,
            temperature: 16.7307,
            pressure: 1070.2755,
            height: 77.831,
            luminosity: 2361.000,
            airQuality: 160.650
            },{
            time: 2,
            temperature: 17.5616,
            pressure: 958.08278,
            height: 76.27438,
            luminosity: 2601.900,
            airQuality: 145.350
            },{
            time: 2,
            temperature: 18.3855,
            pressure: 1019.159,
            height: 84.4167,
            luminosity: 3088.800,
            airQuality: 159.120
            },{
            time: 2,
            temperature: 17.0688,
            pressure: 1059.83384,
            height: 100.5816,
            luminosity: 3471.300,
            airQuality: 160.650
            },{
            time: 3,
            temperature: 18.5955,
            pressure: 988.42127,
            height: 91.6011,
            luminosity: 3772.890,
            airQuality: 151.470
            },{
            time: 3,
            temperature: 17.8871,
            pressure: 968.11745,
            height: 104.83237,
            luminosity: 3369.960,
            airQuality: 149.940
            },{
            time: 3,
            temperature: 17.0688,
            pressure: 978.38592,
            height: 100.5816,
            luminosity: 3277.800,
            airQuality: 139.230
            },{
            time: 3,
            temperature: 16.2435,
            pressure: 1070.1936,
            height: 80.8245,
            luminosity: 3276.000,
            airQuality: 154.530
            },{
            time: 3,
            temperature: 18.816,
            pressure: 1049.89136,
            height: 80.46528,
            luminosity: 3395.520,
            airQuality: 159.120
            },{
            time: 3,
            temperature: 18.7096,
            pressure: 927.64763,
            height: 80.16593,
            luminosity: 3383.940,
            airQuality: 123.760
            },{
            time: 4,
            temperature: 17.8794,
            pressure: 1019.479,
            height: 73.99932,
            luminosity: 3414.960,
            airQuality: 119.000
            },{
            time: 4,
            temperature: 18.6739,
            pressure: 988.97126,
            height: 64.53986,
            luminosity: 3286.440,
            airQuality: 94.860
            },{
            time: 4,
            temperature: 18.746,
            pressure: 948.26241,
            height: 55.0804,
            luminosity: 2767.500,
            airQuality: 110.400
            },{
            time: 4,
            temperature: 17.9046,
            pressure: 948.33402,
            height: 51.72768,
            luminosity: 2616.300,
            airQuality: 131.100
            },{
            time: 4,
            temperature: 17.9732,
            pressure: 938.2114,
            height: 47.41704,
            luminosity: 2745.180,
            airQuality: 163.800
            },{
            time: 4,
            temperature: 16.9372,
            pressure: 1019.878,
            height: 38.97537,
            luminosity: 2257.200,
            airQuality: 175.740
            },{
            time: 5,
            temperature: 18.48,
            pressure: 968.95535,
            height: 34.1259,
            luminosity: 2390.850,
            airQuality: 184.320
            },{
            time: 5,
            temperature: 18.921,
            pressure: 1030.23737,
            height: 30.23435,
            luminosity: 2126.250,
            airQuality: 218.400
            },{
            time: 5,
            temperature: 17.8752,
            pressure: 979.31328,
            height: 24.90592,
            luminosity: 1629.360,
            airQuality: 209.760
            },{
            time: 5,
            temperature: 18.3162,
            pressure: 1060.99864,
            height: 17.24256,
            luminosity: 1443.420,
            airQuality: 253.380
            },{
            time: 5,
            temperature: 16.884,
            pressure: 1010.06928,
            height: 10.7766,
            luminosity: 1154.430,
            airQuality: 256.080
            },{
            time: 5,
            temperature: 18.6417,
            pressure: 918.3168,
            height: 5.86726,
            luminosity: 774.720,
            airQuality: 296.100
            },{
            time: 6,
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