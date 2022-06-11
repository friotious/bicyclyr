const userData = [
    {   
        date: '1/11/2022',   
        miles: 6,
        diffMult: 1.5,
        points: 9,
        rideWeather: {
            "LocalObservationDateTime": "2022-06-11T14:19:00-06:00",
            "EpochTime": 1654978740,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 35.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 95.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 37.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 99.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 33.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 92.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 12,
            "IndoorRelativeHumidity": 12,
            "DewPoint": {
                "Metric": {
                    "Value": 1.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 34.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 248,
                    "Localized": "WSW",
                    "English": "WSW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 13.7,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 8.5,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 24.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 15.1,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 8,
            "UVIndexText": "Very High",
            "Visibility": {
                "Metric": {
                    "Value": 19.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 12.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 0,
            "Ceiling": {
                "Metric": {
                    "Value": 12192.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 40000.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1014.9,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.97,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 1.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 31.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 89.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 35.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 95.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 16.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 61.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 21.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 70.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/us/manti-ut/84642/current-weather/336125?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/manti-ut/84642/current-weather/336125?lang=en-us"
        }
    },

    {   
        date: '1/22/2022',   
        miles: 8,
        diffMult: 1.5,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T15:24:00-05:00",
            "EpochTime": 1654979040,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 35.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 96.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 32.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 90.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 59,
            "IndoorRelativeHumidity": 59,
            "DewPoint": {
                "Metric": {
                    "Value": 21.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 71.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 8.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 5.0,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 15.9,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 9.9,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 5,
            "UVIndexText": "Moderate",
            "Visibility": {
                "Metric": {
                    "Value": 22.5,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 14.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 10,
            "Ceiling": {
                "Metric": {
                    "Value": 3932.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 12900.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1005.3,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.69,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 3.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 6.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 33.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 76.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 1.2,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.05,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 2.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.1,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 25.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 78.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 18.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 65.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 18.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 65.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/us/platte-city-mo/64079/current-weather/334125?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/platte-city-mo/64079/current-weather/334125?lang=en-us"
        }
    },
    {   
        date: '3/01/2022',   
        miles: 10,
        diffMult: 1.3,
        points: 13,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T23:27:00+03:00",
            "EpochTime": 1654979220,
            "WeatherText": "Cloudy",
            "WeatherIcon": 7,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 17.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 15.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Cool"
                },
                "Imperial": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Cool"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 15.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Cool"
                },
                "Imperial": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Cool"
                }
            },
            "RelativeHumidity": 67,
            "IndoorRelativeHumidity": 58,
            "DewPoint": {
                "Metric": {
                    "Value": 11.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 53.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 20.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 12.6,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 41.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 25.7,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 11.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 7.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 91,
            "Ceiling": {
                "Metric": {
                    "Value": 1981.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 6500.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1013.0,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.91,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 2.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 4.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 18.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 17.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 14.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 74.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 75.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 7.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 46.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 75.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/fi/vieki/134125/current-weather/134125?lang=en-us",
            "Link": "http://www.accuweather.com/en/fi/vieki/134125/current-weather/134125?lang=en-us"
        }
    },
    {   
        date: '4/15/2022',   
        miles: 11,
        diffMult: 1,
        points: 11,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-12T01:58:00+05:30",
            "EpochTime": 1654979280,
            "WeatherText": "Cloudy",
            "WeatherIcon": 7,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 28.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 84.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 30.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 30.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RelativeHumidity": 66,
            "IndoorRelativeHumidity": 66,
            "DewPoint": {
                "Metric": {
                    "Value": 21.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 71.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 248,
                    "Localized": "WSW",
                    "English": "WSW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 15.6,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 9.7,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 34.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 21.2,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 11.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 7.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 96,
            "Ceiling": {
                "Metric": {
                    "Value": 4389.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 14400.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1000.7,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.55,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Rising",
                "Code": "R"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": -0.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": -1.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 32.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 90.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 28.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 84.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 23.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 75.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 2.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.08,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 28.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 84.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 32.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 91.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 28.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 84.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 38.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 101.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 25.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 79.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 38.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 101.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/in/hatta/194125/current-weather/194125?lang=en-us",
            "Link": "http://www.accuweather.com/en/in/hatta/194125/current-weather/194125?lang=en-us"
        }
    },

    {   
        date: '5/17/2022',   
        miles: 12,
        diffMult: 1,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T21:24:00+01:00",
            "EpochTime": 1654979040,
            "WeatherText": "Mostly cloudy",
            "WeatherIcon": 38,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 34.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 32.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 91.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 32.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 91.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 9,
            "IndoorRelativeHumidity": 9,
            "DewPoint": {
                "Metric": {
                    "Value": -3.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 26.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 113,
                    "Localized": "ESE",
                    "English": "ESE"
                },
                "Speed": {
                    "Metric": {
                        "Value": 6.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 4.0,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 16.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 10.2,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 16.1,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 10.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 84,
            "Ceiling": {
                "Metric": {
                    "Value": 9144.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 30000.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1009.8,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.82,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Steady",
                "Code": "S"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 30.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 33.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 14.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 34.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 93.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 31.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 89.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 22.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 72.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/dz/anay/494125/current-weather/494125?lang=en-us",
            "Link": "http://www.accuweather.com/en/dz/anay/494125/current-weather/494125?lang=en-us"
        }
    },

    {   
        date: '6/1/2022',   
        miles: 8,
        diffMult: 1.5,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-12T03:33:00+07:00",
            "EpochTime": 1654979580,
            "WeatherText": "Mostly cloudy",
            "WeatherIcon": 38,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 28.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 82.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RelativeHumidity": 67,
            "IndoorRelativeHumidity": 67,
            "DewPoint": {
                "Metric": {
                    "Value": 21.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 70.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 315,
                    "Localized": "NW",
                    "English": "NW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 2.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 1.3,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 5.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 3.3,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 24.1,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 15.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 76,
            "Ceiling": {
                "Metric": {
                    "Value": 488.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 1600.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1005.1,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.68,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Rising",
                "Code": "R"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 30.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 27.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 82.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 23.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 74.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.1,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.01,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.02,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 5.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.22,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 7.7,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.3,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 9.6,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.38,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 14.2,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.56,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 82.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 83.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 29.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 85.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/vn/tin-tac/414125/current-weather/414125?lang=en-us",
            "Link": "http://www.accuweather.com/en/vn/tin-tac/414125/current-weather/414125?lang=en-us"
        }
    },

    {   
        date: '1/12/2022',   
        miles: 6,
        diffMult: 1.5,
        points: 9,
        rideWeather: {
            "LocalObservationDateTime": "2022-06-11T14:19:00-06:00",
            "EpochTime": 1654978740,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 35.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 95.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 37.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 99.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 33.4,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 92.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 12,
            "IndoorRelativeHumidity": 12,
            "DewPoint": {
                "Metric": {
                    "Value": 1.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 34.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 248,
                    "Localized": "WSW",
                    "English": "WSW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 13.7,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 8.5,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 24.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 15.1,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 8,
            "UVIndexText": "Very High",
            "Visibility": {
                "Metric": {
                    "Value": 19.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 12.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 0,
            "Ceiling": {
                "Metric": {
                    "Value": 12192.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 40000.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1014.9,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.97,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 1.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 31.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 89.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 35.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 95.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 16.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 61.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 21.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 70.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 35.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 95.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/us/manti-ut/84642/current-weather/336125?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/manti-ut/84642/current-weather/336125?lang=en-us"
        }
    },

    {   
        date: '1/23/2022',   
        miles: 8,
        diffMult: 1.5,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T15:24:00-05:00",
            "EpochTime": 1654979040,
            "WeatherText": "Sunny",
            "WeatherIcon": 1,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 35.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 96.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 32.3,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 90.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 59,
            "IndoorRelativeHumidity": 59,
            "DewPoint": {
                "Metric": {
                    "Value": 21.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 71.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 8.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 5.0,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 15.9,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 9.9,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 5,
            "UVIndexText": "Moderate",
            "Visibility": {
                "Metric": {
                    "Value": 22.5,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 14.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 10,
            "Ceiling": {
                "Metric": {
                    "Value": 3932.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 12900.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1005.3,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.69,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 3.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 6.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 33.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 76.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 1.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.04,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 1.2,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.05,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 2.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.1,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 25.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 78.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 18.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 65.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 18.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 65.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 30.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 87.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/us/platte-city-mo/64079/current-weather/334125?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/platte-city-mo/64079/current-weather/334125?lang=en-us"
        }
    },
    {   
        date: '3/05/2022',   
        miles: 10,
        diffMult: 1.3,
        points: 13,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T23:27:00+03:00",
            "EpochTime": 1654979220,
            "WeatherText": "Cloudy",
            "WeatherIcon": 7,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 17.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 15.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Cool"
                },
                "Imperial": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Cool"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 15.8,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Cool"
                },
                "Imperial": {
                    "Value": 60.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Cool"
                }
            },
            "RelativeHumidity": 67,
            "IndoorRelativeHumidity": 58,
            "DewPoint": {
                "Metric": {
                    "Value": 11.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 53.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 20.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 12.6,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 41.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 25.7,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 11.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 7.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 91,
            "Ceiling": {
                "Metric": {
                    "Value": 1981.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 6500.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1013.0,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.91,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Falling",
                "Code": "F"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 2.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 4.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 18.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 65.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 17.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 64.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 14.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 74.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 17.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 64.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 75.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 7.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 46.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 23.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 75.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/fi/vieki/134125/current-weather/134125?lang=en-us",
            "Link": "http://www.accuweather.com/en/fi/vieki/134125/current-weather/134125?lang=en-us"
        }
    },
    {   
        date: '4/17/2022',   
        miles: 11,
        diffMult: 1,
        points: 11,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-12T01:58:00+05:30",
            "EpochTime": 1654979280,
            "WeatherText": "Cloudy",
            "WeatherIcon": 7,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 28.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 84.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 30.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 30.2,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RelativeHumidity": 66,
            "IndoorRelativeHumidity": 66,
            "DewPoint": {
                "Metric": {
                    "Value": 21.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 71.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 248,
                    "Localized": "WSW",
                    "English": "WSW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 15.6,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 9.7,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 34.2,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 21.2,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 11.3,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 7.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 96,
            "Ceiling": {
                "Metric": {
                    "Value": 4389.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 14400.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1000.7,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.55,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Rising",
                "Code": "R"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": -0.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": -1.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 32.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 90.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 28.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 84.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 23.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 75.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 2.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.08,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 3.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.13,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 28.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 84.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 32.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 91.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 28.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 84.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 38.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 101.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 25.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 79.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 38.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 101.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/in/hatta/194125/current-weather/194125?lang=en-us",
            "Link": "http://www.accuweather.com/en/in/hatta/194125/current-weather/194125?lang=en-us"
        }
    },

    {   
        date: '5/19/2022',   
        miles: 12,
        diffMult: 1,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-11T21:24:00+01:00",
            "EpochTime": 1654979040,
            "WeatherText": "Mostly cloudy",
            "WeatherIcon": 38,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 34.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 32.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 91.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 32.9,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 91.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RelativeHumidity": 9,
            "IndoorRelativeHumidity": 9,
            "DewPoint": {
                "Metric": {
                    "Value": -3.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 26.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 113,
                    "Localized": "ESE",
                    "English": "ESE"
                },
                "Speed": {
                    "Metric": {
                        "Value": 6.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 4.0,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 16.4,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 10.2,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 16.1,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 10.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 84,
            "Ceiling": {
                "Metric": {
                    "Value": 9144.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 30000.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1009.8,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.82,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Steady",
                "Code": "S"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 30.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 33.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 93.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 14.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 58.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 0.0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 34.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 93.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 31.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 89.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 22.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 72.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 42.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 108.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/dz/anay/494125/current-weather/494125?lang=en-us",
            "Link": "http://www.accuweather.com/en/dz/anay/494125/current-weather/494125?lang=en-us"
        }
    },

    {   
        date: '6/8/2022',   
        miles: 8,
        diffMult: 1.5,
        points: 12,
        rideWeather:   {
            "LocalObservationDateTime": "2022-06-12T03:33:00+07:00",
            "EpochTime": 1654979580,
            "WeatherText": "Mostly cloudy",
            "WeatherIcon": 38,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": false,
            "Temperature": {
                "Metric": {
                    "Value": 28.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 82.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 30.6,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 87.0,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RelativeHumidity": 67,
            "IndoorRelativeHumidity": 67,
            "DewPoint": {
                "Metric": {
                    "Value": 21.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 70.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 315,
                    "Localized": "NW",
                    "English": "NW"
                },
                "Speed": {
                    "Metric": {
                        "Value": 2.1,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 1.3,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 5.3,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 3.3,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 0,
            "UVIndexText": "Low",
            "Visibility": {
                "Metric": {
                    "Value": 24.1,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 15.0,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 76,
            "Ceiling": {
                "Metric": {
                    "Value": 488.0,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 1600.0,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1005.1,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.68,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Rising",
                "Code": "R"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": 0.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 30.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 86.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 27.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 82.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 23.4,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 74.0,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0.1,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0.1,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0.3,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.01,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.02,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 5.5,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.22,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 7.7,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.3,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 9.6,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.38,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 14.2,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.56,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.0,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 82.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 83.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 77.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 29.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 85.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/vn/tin-tac/414125/current-weather/414125?lang=en-us",
            "Link": "http://www.accuweather.com/en/vn/tin-tac/414125/current-weather/414125?lang=en-us"
        }
    },

    {
    date: '6/9/2022',   
    miles: 8,
    diffMult: 1.5,
    points: 12,
    rideWeather:   {
        "LocalObservationDateTime": "2022-06-11T15:59:00-06:00",
        "EpochTime": 1654984740,
        "WeatherText": "Light rain",
        "WeatherIcon": 12,
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 14.6,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 58.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "RealFeelTemperature": {
            "Metric": {
                "Value": 10.8,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Cool"
            },
            "Imperial": {
                "Value": 52.0,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Chilly"
            }
        },
        "RealFeelTemperatureShade": {
            "Metric": {
                "Value": 9.9,
                "Unit": "C",
                "UnitType": 17,
                "Phrase": "Chilly"
            },
            "Imperial": {
                "Value": 50.0,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Chilly"
            }
        },
        "RelativeHumidity": 81,
        "IndoorRelativeHumidity": 57,
        "DewPoint": {
            "Metric": {
                "Value": 11.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 53.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Wind": {
            "Direction": {
                "Degrees": 270,
                "Localized": "W",
                "English": "W"
            },
            "Speed": {
                "Metric": {
                    "Value": 25.6,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 15.9,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "WindGust": {
            "Speed": {
                "Metric": {
                    "Value": 32.0,
                    "Unit": "km/h",
                    "UnitType": 7
                },
                "Imperial": {
                    "Value": 19.9,
                    "Unit": "mi/h",
                    "UnitType": 9
                }
            }
        },
        "UVIndex": 2,
        "UVIndexText": "Low",
        "Visibility": {
            "Metric": {
                "Value": 24.1,
                "Unit": "km",
                "UnitType": 6
            },
            "Imperial": {
                "Value": 15.0,
                "Unit": "mi",
                "UnitType": 2
            }
        },
        "ObstructionsToVisibility": "R-",
        "CloudCover": 100,
        "Ceiling": {
            "Metric": {
                "Value": 5121.0,
                "Unit": "m",
                "UnitType": 5
            },
            "Imperial": {
                "Value": 16800.0,
                "Unit": "ft",
                "UnitType": 0
            }
        },
        "Pressure": {
            "Metric": {
                "Value": 1008.3,
                "Unit": "mb",
                "UnitType": 14
            },
            "Imperial": {
                "Value": 29.78,
                "Unit": "inHg",
                "UnitType": 12
            }
        },
        "PressureTendency": {
            "LocalizedText": "Steady",
            "Code": "S"
        },
        "Past24HourTemperatureDeparture": {
            "Metric": {
                "Value": -10.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": -19.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "ApparentTemperature": {
            "Metric": {
                "Value": 17.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 64.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WindChillTemperature": {
            "Metric": {
                "Value": 14.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 58.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "WetBulbTemperature": {
            "Metric": {
                "Value": 12.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 55.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "Precip1hr": {
            "Metric": {
                "Value": 0.5,
                "Unit": "mm",
                "UnitType": 3
            },
            "Imperial": {
                "Value": 0.02,
                "Unit": "in",
                "UnitType": 1
            }
        },
        "PrecipitationSummary": {
            "Precipitation": {
                "Metric": {
                    "Value": 0.2,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.01,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PastHour": {
                "Metric": {
                    "Value": 0.5,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.02,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past3Hours": {
                "Metric": {
                    "Value": 2.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.11,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past6Hours": {
                "Metric": {
                    "Value": 2.7,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.11,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past9Hours": {
                "Metric": {
                    "Value": 4.2,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.17,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past12Hours": {
                "Metric": {
                    "Value": 4.2,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.17,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past18Hours": {
                "Metric": {
                    "Value": 4.3,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.17,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "Past24Hours": {
                "Metric": {
                    "Value": 4.4,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0.17,
                    "Unit": "in",
                    "UnitType": 1
                }
            }
        },
        "TemperatureSummary": {
            "Past6HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 14.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 58.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 21.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past12HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 12.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 54.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 21.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            },
            "Past24HourRange": {
                "Minimum": {
                    "Metric": {
                        "Value": 12.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 54.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "Maximum": {
                    "Metric": {
                        "Value": 26.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 80.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                }
            }
        },
        "MobileLink": "http://www.accuweather.com/en/us/harlowton-mt/59036/current-weather/334202?lang=en-us",
        "Link": "http://www.accuweather.com/en/us/harlowton-mt/59036/current-weather/334202?lang=en-us"
    }
 } 

]
export default userData

