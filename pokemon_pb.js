module.exports = require("protobufjs").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "RequestEnvelop",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "unknown1",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "rpc_id",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "Requests",
                    "name": "requests",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "Unknown6",
                    "name": "unknown6",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "fixed64",
                    "name": "latitude",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "fixed64",
                    "name": "longitude",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "fixed64",
                    "name": "altitude",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "AuthInfo",
                    "name": "auth",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "UnknownAuth",
                    "name": "unknown11",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "unknown12",
                    "id": 12
                }
            ],
            "messages": [
                {
                    "name": "Requests",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "message",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MessageSingleString",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "bytes",
                            "name": "bytes",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MessageSingleInt",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "f1",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MessageTwoInts",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "f1",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "f5",
                            "id": 5
                        }
                    ]
                },
                {
                    "name": "MessageQuad",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "bytes",
                            "name": "f1",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "bytes",
                            "name": "f2",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "fixed64",
                            "name": "lat",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "fixed64",
                            "name": "long",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "Wat",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "int64",
                            "name": "lols",
                            "id": 134217728
                        }
                    ]
                },
                {
                    "name": "Unknown3",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "bytes",
                            "name": "unknown4",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "unknown2",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "fixed64",
                            "name": "lat",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "fixed64",
                            "name": "long",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "Unknown6",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "unknown1",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "Unknown2",
                            "name": "unknown2",
                            "id": 2
                        }
                    ],
                    "messages": [
                        {
                            "name": "Unknown2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "bytes",
                                    "name": "unknown1",
                                    "id": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "AuthInfo",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "provider",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "JWT",
                            "name": "token",
                            "id": 2
                        }
                    ],
                    "messages": [
                        {
                            "name": "JWT",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "contents",
                                    "id": 1
                                },
                                {
                                    "rule": "required",
                                    "type": "int32",
                                    "name": "unknown13",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "UnknownAuth",
            "fields": [
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "unknown71",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "unknown72",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "unknown73",
                    "id": 3
                }
            ]
        },
        {
            "name": "ResponseEnvelop",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "unknown1",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "unknown2",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "api_url",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "Unknown6",
                    "name": "unknown6",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "UnknownAuth",
                    "name": "unknown7",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "payload",
                    "id": 100
                }
            ],
            "messages": [
                {
                    "name": "Unknown6",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "unknown1",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "Unknown2",
                            "name": "unknown2",
                            "id": 2
                        }
                    ],
                    "messages": [
                        {
                            "name": "Unknown2",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "bytes",
                                    "name": "unknown1",
                                    "id": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "HeartbeatPayload",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "ClientMapCell",
                            "name": "cells",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "ClientMapCell",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "uint64",
                            "name": "S2CellId",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "AsOfTimeMs",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "ClientSpawnPointProto",
                            "name": "SpawnPoint",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "WildPokemonProto",
                            "name": "WildPokemon",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "IsTruncatedList",
                            "id": 7
                        },
                        {
                            "rule": "repeated",
                            "type": "PokemonSummaryFortProto",
                            "name": "FortSummary",
                            "id": 8
                        },
                        {
                            "rule": "repeated",
                            "type": "ClientSpawnPointProto",
                            "name": "DecimatedSpawnPoint",
                            "id": 9
                        },
                        {
                            "rule": "repeated",
                            "type": "MapPokemonProto",
                            "name": "MapPokemon",
                            "id": 10
                        },
                        {
                            "rule": "repeated",
                            "type": "NearbyPokemonProto",
                            "name": "NearbyPokemon",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "WildPokemon",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "UniqueId",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "PokemonId",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "NearbyPokemonProto",
                            "name": "pokemon",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "MapPokemonProto",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "SpawnpointId",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "fixed64",
                            "name": "EncounterId",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "PokedexTypeId",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "ExpirationTimeMs",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Latitude",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Longitude",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "PokemonFortProto",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "FortId",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "LastModifiedMs",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Latitude",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Longitude",
                            "id": 4
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "Team",
                            "id": 5
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "GuardPokemonId",
                            "id": 6
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "GuardPokemonLevel",
                            "id": 7
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "Enabled",
                            "id": 8
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "FortType",
                            "id": 9
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "GymPoints",
                            "id": 10
                        },
                        {
                            "rule": "required",
                            "type": "bool",
                            "name": "IsInBattle",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "MapPokemonProto",
                            "name": "ActivePokemon",
                            "id": 13
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "CooldownCompleteMs",
                            "id": 14
                        },
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "Sponsor",
                            "id": 15
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "RenderingType",
                            "id": 16
                        }
                    ]
                },
                {
                    "name": "PokemonSummaryFortProto",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "FortSummaryId",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "LastModifiedMs",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Latitude",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Longitude",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "ClientSpawnPointProto",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Latitude",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "type": "double",
                            "name": "Longitude",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "WildPokemonProto",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "fixed64",
                            "name": "EncounterId",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "LastModifiedMs",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "Latitude",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "double",
                            "name": "Longitude",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "SpawnPointId",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "Pokemon",
                            "name": "pokemon",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "TimeTillHiddenMs",
                            "id": 11
                        }
                    ],
                    "messages": [
                        {
                            "name": "Pokemon",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "uint64",
                                    "name": "Id",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "PokemonId",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NearbyPokemonProto",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "PokedexNumber",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "float",
                            "name": "DistanceMeters",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "fixed64",
                            "name": "EncounterId",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "ProfilePayload",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "unknown1",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "Profile",
                            "name": "profile",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "Profile",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int64",
                            "name": "creation_time",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "username",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "team",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "tutorial",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "AvatarDetails",
                            "name": "avatar",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "poke_storage",
                            "id": 9
                        },
                        {
                            "rule": "optional",
                            "type": "int32",
                            "name": "item_storage",
                            "id": 10
                        },
                        {
                            "rule": "optional",
                            "type": "DailyBonus",
                            "name": "daily_bonus",
                            "id": 11
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "unknown12",
                            "id": 12
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "unknown13",
                            "id": 13
                        },
                        {
                            "rule": "repeated",
                            "type": "Currency",
                            "name": "currency",
                            "id": 14
                        }
                    ],
                    "messages": [
                        {
                            "name": "AvatarDetails",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown2",
                                    "id": 2
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown3",
                                    "id": 3
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown9",
                                    "id": 9
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "unknown10",
                                    "id": 10
                                }
                            ]
                        },
                        {
                            "name": "DailyBonus",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "NextCollectTimestampMs",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int64",
                                    "name": "NextDefenderBonusCollectTimestampMs",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "Currency",
                            "fields": [
                                {
                                    "rule": "required",
                                    "type": "string",
                                    "name": "type",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "int32",
                                    "name": "amount",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}).build();